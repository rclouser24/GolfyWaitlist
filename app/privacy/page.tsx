import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Golfy",
  description: "Golfy Privacy Policy — how we collect, use, and protect your data.",
};

type Section = {
  title: string;
  content?: string;
  bullets?: string[];
  subsections?: { title: string; text: string }[];
  contact?: string;
};

const sections: Section[] = [
  {
    title: "Introduction",
    content:
      'Golfy ("we", "our", "us") is operated by Ryan Clouser. This policy explains what data we collect, how we use it, and your rights.',
  },
  {
    title: "Data We Collect",
    bullets: [
      "Account information: email address, display name, username",
      "Golf activity: courses checked in, dates played, states visited",
      "App usage: XP earned, level, badges unlocked, streak data",
      "Social: friends list, leaderboard rankings, activity feed posts",
      "Device: push notification token (if permission granted)",
      "Subscription status: active/expired plan type (payment is handled entirely by Apple — we never see card details)",
    ],
  },
  {
    title: "How We Use Your Data",
    bullets: [
      "To operate your account and sync your golf collection",
      "To calculate XP, levels, badges, and leaderboard rankings",
      "To send push notifications (only if you grant permission)",
      "To enforce community standards and moderation",
    ],
  },
  {
    title: "Third-Party Services",
    subsections: [
      {
        title: "Supabase",
        text: "Database and authentication — data stored in US-based servers.",
      },
      {
        title: "Apple StoreKit",
        text: "Subscription billing — we receive only transaction status, no payment details.",
      },
      {
        title: "Apple Push Notification Service (APNs)",
        text: "Used to deliver push notifications to your device when permission is granted.",
      },
    ],
  },
  {
    title: "Data Sharing",
    content:
      "We do not sell your data. We do not share your data with third parties except the services listed above required to operate the app.",
  },
  {
    title: "Data Retention",
    content:
      "Your data is retained as long as your account is active. You can delete your account at any time from the app's Profile → Settings → Delete Account. Deletion removes all personal data within 30 days.",
  },
  {
    title: "Children's Privacy",
    content:
      "Golfy is not directed at children under 13. We do not knowingly collect data from children under 13.",
  },
  {
    title: "Your Rights",
    bullets: [
      "Access the data we hold about you",
      "Request deletion of your account and data",
      "Opt out of push notifications at any time in iOS Settings",
    ],
  },
  {
    title: "Contact",
    content:
      "For privacy questions or data requests, contact:",
    contact: "clouser24ryan@gmail.com",
  },
  {
    title: "Changes to This Policy",
    content:
      'We will update the "Last Updated" date at the top of this page when changes are made. Continued use of the app after changes constitutes acceptance.',
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
            Last Updated: May 2026
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
                <p className="text-[16px] leading-[26px] text-[#282828] tracking-[-0.3125px] mb-3 last:mb-0">
                  {section.content}
                </p>
              )}

              {section.bullets && (
                <ul className="space-y-2 mt-1">
                  {section.bullets.map((item, j) => (
                    <li key={j} className="flex gap-3 text-[16px] leading-[26px] text-[#282828] tracking-[-0.3125px]">
                      <span className="mt-[9px] w-[6px] h-[6px] shrink-0 rounded-full bg-[#798d40]" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.contact && (
                <a
                  href={`mailto:${section.contact}`}
                  className="text-[#798d40] font-semibold hover:underline text-[16px]"
                >
                  {section.contact}
                </a>
              )}

              {section.subsections && section.subsections.length > 0 && (
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
            href="/terms"
            className="text-[14px] text-[#798d40] font-semibold hover:underline tracking-[-0.3125px]"
          >
            Terms of Use
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
              href="/terms"
              className="text-[14px] text-[#798d40] font-semibold hover:underline tracking-[-0.3125px]"
            >
              Terms of Use
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
