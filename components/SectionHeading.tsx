import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`max-w-3xl ${isCenter ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 ${
            isDark
              ? "bg-white/10 text-blue-200 border border-white/10"
              : "bg-primary-subtle text-primary border border-primary/20"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
          {eyebrow}
        </div>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${
          isDark ? "text-white" : "text-heading"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-gray-300" : "text-body"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

