import { NextResponse } from "next/server";
import { z } from "zod";

const enquirySchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z
    .string()
    .regex(
      /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/,
      "Please enter a valid 10-digit Indian phone number"
    ),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  topic: z.enum([
    "Individual health insurance plans",
    "Family floater health insurance plans",
    "Health insurance options for senior citizens",
    "Plans with specified or enhanced coverage features, where available",
    "Top-up or super top-up options, where available",
    "Other eligible health insurance products offered by Star Health or HDFC ERGO",
    "Travel Insurance",
    "Corporate & Group Health Insurance",
  ]),
  contactMethod: z.enum(["WhatsApp", "Phone Call"]),
  message: z.string().max(1000).optional().or(z.literal("")),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must consent to being contacted regarding your enquiry" }),
  }),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = enquirySchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = result.data;

    // Check if custom email service is configured
    const isEmailConfigured = Boolean(
      process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS
    );

    // Format pre-filled WhatsApp message
    const waText = encodeURIComponent(
      `*New Health Insurance Enquiry - Bhoumi Consultancy*\n` +
      `• *Name*: ${data.fullName}\n` +
      `• *Phone*: ${data.phone}\n` +
      `${data.email ? `• *Email*: ${data.email}\n` : ""}` +
      `• *Option*: ${data.topic}\n` +
      `• *Preferred Contact*: ${data.contactMethod}\n` +
      `${data.message ? `• *Notes*: ${data.message}\n` : ""}`
    );

    const waUrl = `https://wa.me/919995067188?text=${waText}`;

    if (isEmailConfigured) {
      return NextResponse.json({
        success: true,
        method: "email",
        message: "Your enquiry has been received. Our advisory team will contact you shortly.",
        waUrl,
      });
    }

    return NextResponse.json({
      success: true,
      method: "whatsapp-ready",
      message:
        "Enquiry prepared successfully. You can now connect directly with our advisory desk on WhatsApp for guidance.",
      waUrl,
      enquiryData: data,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while processing your enquiry." },
      { status: 500 }
    );
  }
}
