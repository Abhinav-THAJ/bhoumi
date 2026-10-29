"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, MessageCircle, Phone, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const formSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .min(10, "Phone number must have at least 10 digits")
    .regex(
      /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/,
      "Please enter a valid Indian mobile number"
    ),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
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

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    method?: string;
    message?: string;
    waUrl?: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      topic: "Family floater health insurance plans",
      contactMethod: "WhatsApp",
      message: "",
      consent: false as unknown as true,
    },
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setSubmissionResult(null);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setSubmissionResult({
          success: true,
          method: resData.method,
          message: resData.message,
          waUrl: resData.waUrl,
        });
      } else {
        setSubmissionResult({
          success: false,
          message: resData.error || "Unable to submit enquiry. Please call or WhatsApp us directly.",
        });
      }
    } catch (err) {
      const waText = encodeURIComponent(
        `*New Health Insurance Enquiry - Bhoumi Consultancy*\n` +
        `• Name: ${data.fullName}\n` +
        `• Phone: ${data.phone}\n` +
        `• Option: ${data.topic}\n` +
        `• Preferred Contact: ${data.contactMethod}\n` +
        `${data.message ? `• Note: ${data.message}` : ""}`
      );
      setSubmissionResult({
        success: true,
        method: "whatsapp-ready",
        message: "Enquiry details prepared. Click below to connect on WhatsApp immediately.",
        waUrl: `https://wa.me/919995067188?text=${waText}`,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-card-lg border border-neutral-border p-6 sm:p-8 lg:p-10 shadow-card">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-heading">
          Let’s Find the Right Health Insurance Option for You
        </h3>
        <p className="mt-2 text-sm text-body">
          Bhoumi Consultancy helps individuals and families explore health insurance plans offered by Star Health and HDFC ERGO.
        </p>
      </div>

      {submissionResult && submissionResult.success ? (
        <div className="bg-primary-subtle border border-primary/30 rounded-2xl p-6 sm:p-8 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-heading">
            Enquiry Prepared
          </h4>
          <p className="text-sm text-body max-w-md mx-auto leading-relaxed">
            {submissionResult.message}
          </p>

          {submissionResult.waUrl && (
            <div className="pt-2">
              <a
                href={submissionResult.waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-button transition-colors w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                <span>Open in WhatsApp &amp; Send</span>
              </a>
            </div>
          )}

          <div className="pt-4 border-t border-primary/20 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setSubmissionResult(null);
                reset();
              }}
              className="text-xs font-bold text-primary hover:underline"
            >
              Submit Another Enquiry
            </button>
            <span className="hidden sm:inline text-gray-300">&bull;</span>
            <a
              href={`tel:${SITE_CONFIG.phones[0].raw}`}
              className="text-xs font-bold text-heading flex items-center gap-1 hover:text-primary"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>CALL: {SITE_CONFIG.phones[0].display}</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
          {submissionResult && !submissionResult.success && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-4 rounded-xl flex items-center gap-2">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{submissionResult.message}</span>
            </div>
          )}

          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-heading mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Your Full Name"
              {...register("fullName")}
              aria-invalid={Boolean(errors.fullName)}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-heading placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.fullName ? "border-red-500 bg-red-50/30" : "border-neutral-border bg-white"
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-600 font-medium">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Phone & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-heading mb-1.5">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="e.g. 99950 67188"
                {...register("phone")}
                aria-invalid={Boolean(errors.phone)}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-heading placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.phone ? "border-red-500 bg-red-50/30" : "border-neutral-border bg-white"
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-600 font-medium">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-heading mb-1.5">
                Email <span className="text-gray-400 text-[11px] font-normal">(Optional)</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="e.g. name@example.com"
                {...register("email")}
                aria-invalid={Boolean(errors.email)}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-heading placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.email ? "border-red-500 bg-red-50/30" : "border-neutral-border bg-white"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600 font-medium">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Health Insurance Option & Contact Method */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="topic" className="block text-xs font-bold uppercase tracking-wider text-heading mb-1.5">
                Health Insurance Option
              </label>
              <select
                id="topic"
                {...register("topic")}
                className="w-full px-4 py-3 rounded-xl border border-neutral-border bg-white text-sm text-heading focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="Individual health insurance plans">Individual health insurance plans</option>
                <option value="Family floater health insurance plans">Family floater health insurance plans</option>
                <option value="Health insurance options for senior citizens">Health insurance options for senior citizens</option>
                <option value="Plans with specified or enhanced coverage features, where available">Plans with specified or enhanced coverage features, where available</option>
                <option value="Top-up or super top-up options, where available">Top-up or super top-up options, where available</option>
                <option value="Other eligible health insurance products offered by Star Health or HDFC ERGO">Other eligible health insurance products offered by Star Health or HDFC ERGO</option>
                <option value="Travel Insurance">Travel Insurance</option>
                <option value="Corporate & Group Health Insurance">Corporate &amp; Group Health Insurance</option>
              </select>
            </div>

            <div>
              <label htmlFor="contactMethod" className="block text-xs font-bold uppercase tracking-wider text-heading mb-1.5">
                Preferred Contact Method
              </label>
              <select
                id="contactMethod"
                {...register("contactMethod")}
                className="w-full px-4 py-3 rounded-xl border border-neutral-border bg-white text-sm text-heading focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="WhatsApp">WhatsApp</option>
                <option value="Phone Call">Phone Call</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-heading mb-1.5">
              Message <span className="text-gray-400 text-[11px] font-normal">(Optional)</span>
            </label>
            <textarea
              id="message"
              rows={3}
              placeholder="Your requirements or questions regarding Star Health or HDFC ERGO..."
              {...register("message")}
              className="w-full px-4 py-3 rounded-xl border border-neutral-border bg-white text-sm text-heading placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="pt-1">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                {...register("consent")}
                className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary border-gray-300"
              />
              <span className="text-xs text-body leading-relaxed">
                I acknowledge that this information will be used by Bhoumi Consultancy to respond to my health insurance advisory enquiry.
              </span>
            </label>
            {errors.consent && (
              <p className="mt-1 text-xs text-red-600 font-medium">
                {errors.consent.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-base bg-primary hover:bg-primary-hover text-white shadow-button transition-all duration-200 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Preparing Enquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Health Insurance Enquiry</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
