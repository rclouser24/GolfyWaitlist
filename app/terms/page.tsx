import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — Golfy",
  description: "Golfy Terms of Use (EULA) — the rules and conditions for using the Golfy app.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    content:
      "By downloading, installing, or using the Golfy app, you agree to be bound by these Terms of Use. If you do not agree, do not use the app. These Terms constitute a legally binding agreement between you and Golfy.",
    subsections: [],
  },
  {
    title: "Subscription Plans & Pricing",
    content: null,
    subsections: [
      {
        title: "Golfy Monthly",
        text: "Auto-renewable subscription. Billed monthly. Includes a 2-week free trial for new subscribers. Price is displayed in the app at the time of purchase and may vary by region.",
      },
      {
        title: "Golfy Yearly",
        text: "Auto-renewable subscription. Billed annually. Includes 2 months free compared to the monthly plan. Price is displayed in the app at the time of purchase and may vary by region.",
      },
      {
        title: "Golfy Lifetime",
        text: "One-time non-recurring purchase. Grants permanent access to all premium features with no ongoing charges.",
      },
    ],
  },
  {
    title: "Free Trial",
    content:
      "Monthly and Yearly subscriptions may include a free trial period as described in the app at the time of purchase. Your free trial begins when you confirm your subscription and ends after the stated trial period. If you do not cancel before the trial ends, you will be charged the subscription price.",
    subsections: [],
  },
  {
    title: "Billing & Renewal",
    content:
      "Auto-renewable subscriptions are charged to your Apple ID account at confirmation of purchase. Subscriptions automatically renew at the end of each billing period unless cancelled at least 24 hours before the renewal date. Your account will be charged for renewal within 24 hours prior to the end of the current period. You can manage and cancel your subscription at any time in your iPhone Settings under your Apple ID > Subscriptions.",
    subsections: [],
  },
  {
    title: "Cancellation",
    content:
      "You may cancel your subscription at any time through your Apple ID subscription settings. Cancellation takes effect at the end of the current billing period — you retain access to premium features until that date. Golfy does not offer refunds for partial billing periods, but refund requests may be submitted directly to Apple.",
    subsections: [],
  },
  {
    title: "License to Use the App",
    content:
      "Golfy grants you a limited, non-exclusive, non-transferable, revocable license to use the app for personal, non-commercial purposes. You may not copy, modify, distribute, sell, or reverse-engineer any part of the app. All rights not expressly granted are reserved by Golfy.",
    subsections: [],
  },
  {
    title: "User-Generated Content",
    content:
      "You may post content within Golfy including check-in photos, captions, and comments. You retain ownership of content you create, but grant Golfy a license to display it within the app. You are solely responsible for the content you post. You agree not to post content that is offensive, abusive, illegal, or otherwise violates these Terms. Golfy reserves the right to remove content that violates these Terms and to suspend or terminate accounts that do so repeatedly.",
    subsections: [],
  },
  {
    title: "Reporting & Blocking",
    content:
      "Golfy provides in-app tools to report objectionable content and block other users. Reports are reviewed by the Golfy team within 24 hours. Repeated violations of these Terms may result in account suspension or permanent removal.",
    subsections: [],
  },
  {
    title: "Prohibited Conduct",
    content:
      "You agree not to use Golfy to: impersonate another person or entity; harass, threaten, or harm others; post false, misleading, or fraudulent content; attempt to gain unauthorized access to any part of the app or its backend systems; or use the app in any way that violates applicable law.",
    subsections: [],
  },
  {
    title: "Disclaimers",
    content:
      "Golfy is provided on an \"as is\" and \"as available\" basis without warranties of any kind, express or implied. We do not guarantee that the app will be error-free, uninterrupted, or free of viruses or other harmful components. Golf course data is provided for informational purposes and may not always be accurate or up to date.",
    subsections: [],
  },
  {
    title: "Limitation of Liability",
    content:
      "To the maximum extent permitted by law, Golfy and its owners, employees, and affiliates are not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the app, including but not limited to loss of data, loss of revenue, or personal injury.",
    subsections: [],
  },
  {
    title: "Termination",
    content:
      "We reserve the right to suspend or terminate your account at any time, with or without notice, for conduct that we determine violates these Terms or is harmful to other users, Golfy, or third parties. Upon termination, your right to use the app ceases immediately.",
    subsections: [],
  },
  {
    title: "Changes to These Terms",
    content:
      "We may update these Terms from time to time. When we do, we will update the effective date below. Continued use of Golfy after changes are posted constitutes your acceptance of the revised Terms.",
    subsections: [],
  },
  {
    title: "Governing Law",
    content:
      "These Terms are governed by the laws of the State of Tennessee, United States, without regard to its conflict of law provisions.",
    subsections: [],
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions about these Terms of Use, please contact us at:",
    subsections: [],
    contact: "support@golfy.app",
  },
];

export default function TermsPage() {
  return (
    <div className="bg-[#f5f3ef] min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="bg-white border-b-2 border-neutral-300 w-full">
        <div className="max-w-[1496px] mx-auto px-6 md:px-[108px] py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-xl overflow-hidden">
              <Image
                src="/logo.png"
                alt="Golfy Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-semibold text-[16px] md:text-[20px] text-[#282828] tracking-[-0.3125px]">
              Golfy
            </span>
          </Link>
          <Link
            href="/#waitlist-form"
            className="bg-[#798d40] text-white font-semibold text-[14px] md:text-[16px] px-6 md:px-[32px] py-2 md:py-[12px] rounded-[40px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:bg-[#6a7a37] transition-colors tracking-[-0.4395px]"
          >
            Join Waitlist
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="w-full max-w-[800px] px-6 md:px-8 mt-16 mb-24">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-semibold text-[36px] md:text-[48px] text-[#282828] tracking-[-2px] leading-[1.2] mb-4">
            Terms of Use
          </h1>
          <p className="text-[16px] text-[#6b6b6b] tracking-[-0.3125px]">
            Effective date: May 2026
          </p>
          <p className="text-[16px] leading-[26px] text-[#282828] tracking-[-0.3125px] mt-4">
            These Terms of Use ("Terms") govern your access to and use of the Golfy iOS application and any related services. Please read them carefully before using the app.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, i) => (
            <div key={i} className="bg-white border border-[#b2b2b2] rounded-xl p-6 md:p-8">
              <h2 className="font-semibold text-[20px] leading-[28px] text-[#282828] tracking-[-0.3125px] mb-4">
                {i + 1}. {section.title}
              </h2>

              {section.content && (
                <p className="text-[16px] leading-[26px] text-[#282828] tracking-[-0.3125px] mb-4 last:mb-0">
                  {section.content}
                </p>
              )}

              {"contact" in section && section.contact && (
                <a
                  href={`mailto:${section.contact}`}
                  className="text-[#798d40] font-semibold hover:underline text-[16px]"
                >
                  {section.contact}
                </a>
              )}

              {section.subsections.length > 0 && (
                <div className="space-y-4 mt-2">
                  {section.subsections.map((sub, j) => (
                    <div key={j}>
                      <h3 className="font-semibold text-[16px] text-[#282828] tracking-[-0.3125px] mb-1">
                        {sub.title}
                      </h3>
                      <p className="text-[16px] leading-[26px] text-[#282828] tracking-[-0.3125px]">
                        {sub.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Legal links */}
        <div className="mt-12 flex gap-6">
          <Link
            href="/privacy"
            className="text-[14px] text-[#798d40] font-semibold hover:underline tracking-[-0.3125px]"
          >
            Privacy Policy
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[#b2b2b2] bg-white">
        <div className="max-w-[1496px] mx-auto px-6 md:px-[108px] py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[14px] text-[#6b6b6b] tracking-[-0.3125px]">
            © {new Date().getFullYear()} Golfy. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-[14px] text-[#798d40] font-semibold hover:underline tracking-[-0.3125px]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-[14px] text-[#798d40] font-semibold hover:underline tracking-[-0.3125px]"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
