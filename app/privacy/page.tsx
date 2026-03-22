import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Golfy",
  description: "Golfy Privacy Policy — how we collect, use, and protect your data.",
};

const sections = [
  {
    title: "Information We Collect",
    content: null,
    subsections: [
      {
        title: "Account Information",
        text: "When you create a Golfy account, we collect your name, email address, username, and profile photo. This information is used solely for authentication and displaying your profile within the app.",
      },
      {
        title: "Usage Data",
        text: "We collect data about your activity in the app, including golf courses played, check-ins, badges earned, XP, and leaderboard statistics. This data is stored securely in our backend database (Supabase) and is used to power your personal collection and the social features of the app.",
      },
      {
        title: "Location",
        text: "Golfy requests access to your precise location only to help you find and check in to nearby golf courses. We do not store your location data on our servers — it is used in the moment and never persisted.",
      },
      {
        title: "Payment Information",
        text: "Subscriptions are managed entirely through Apple's App Store using StoreKit. We do not collect, store, or have access to your payment details, credit card numbers, or billing information.",
      },
    ],
  },
  {
    title: "How We Use Your Information",
    content:
      "We use the information we collect to operate and improve the Golfy app, authenticate your account, display your profile and stats to other users, enable social features like the leaderboard and activity feed, and communicate with you about app updates or support requests.",
    subsections: [],
  },
  {
    title: "Data Storage & Security",
    content:
      "Your account and usage data is stored using Supabase, a secure cloud database platform. We take reasonable technical and organizational measures to protect your data from unauthorized access, loss, or misuse.",
    subsections: [],
  },
  {
    title: "Third-Party Services",
    content: null,
    subsections: [
      {
        title: "Supabase",
        text: "We use Supabase as our backend database and authentication provider. Your account and usage data is stored on Supabase infrastructure.",
      },
      {
        title: "Apple App Store & StoreKit",
        text: "Subscription purchases are processed through Apple's App Store. Apple's privacy policy governs any data collected during the payment process. We do not receive or store your payment details.",
      },
    ],
  },
  {
    title: "Data We Do NOT Collect or Share",
    content:
      "We do not sell your personal data to third parties. We do not use your data for advertising or share it with advertising networks. We do not track your location in the background or store location history.",
    subsections: [],
  },
  {
    title: "Your Rights & Account Deletion",
    content:
      "You may request deletion of your account and all associated data at any time by contacting us at the email address below. Upon request, we will permanently remove your account information and usage data from our systems.",
    subsections: [],
  },
  {
    title: "Children's Privacy",
    content:
      "Golfy is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us and we will delete it promptly.",
    subsections: [],
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. When we do, we will update the effective date at the top of this page. Continued use of Golfy after changes are posted constitutes your acceptance of the revised policy.",
    subsections: [],
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions or concerns about this Privacy Policy or how your data is handled, please contact us at:",
    subsections: [],
    contact: "privacy@golfyapp.com",
  },
];

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-[16px] text-[#6b6b6b] tracking-[-0.3125px]">
            Effective date: March 2026
          </p>
          <p className="text-[16px] leading-[26px] text-[#282828] tracking-[-0.3125px] mt-4">
            Golfy is a golf course collection and tracking app for iOS. This Privacy Policy explains what information we collect, how we use it, and your rights with respect to that data. By using Golfy, you agree to the practices described in this policy.
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
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[#b2b2b2] bg-white">
        <div className="max-w-[1496px] mx-auto px-6 md:px-[108px] py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[14px] text-[#6b6b6b] tracking-[-0.3125px]">
            © {new Date().getFullYear()} Golfy. All rights reserved.
          </p>
          <Link
            href="/"
            className="text-[14px] text-[#798d40] font-semibold hover:underline tracking-[-0.3125px]"
          >
            Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
