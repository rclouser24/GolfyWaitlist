"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#f5f3ef] min-h-screen flex flex-col items-center">
      {/* Header */}
      <motion.header
        className="bg-white border-b-2 border-neutral-300 w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-[1496px] mx-auto px-6 md:px-[108px] py-4 flex items-center">
          <div className="flex items-center gap-3">
            <div className="relative w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-xl overflow-hidden">
              <Image
                src="/logo.png"
                alt="Golfy Logo"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="font-semibold text-[16px] md:text-[20px] text-[#282828] tracking-[-0.3125px]">
              Golfy
            </h1>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="w-full max-w-[1280px] px-4 md:px-8 mt-16 md:mt-24 mb-24 space-y-24 md:space-y-24">
        {/* Hero Section */}
        <motion.section
          className="flex flex-col items-center gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="font-semibold text-[36px] md:text-[64px] leading-[1.3] text-[#282828] tracking-[-3px] max-w-[1100px]">
            Track Your Golf Journey: Collect Every Course & Beat your Friends by Playing the Best Courses
          </h2>
          <p className="font-normal text-[18px] md:text-[24px] leading-[28px] text-[#282828] tracking-[-0.3125px] max-w-[919px]">
            Every time you play a new course you collect its XP based on its rarity. Track your progress as you play new courses and keep up with your friends as they level up.
          </p>
        </motion.section>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Collect Courses & Badges Row */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Collect Courses Section */}
            <div className="bg-white border border-[#b2b2b2] rounded-xl p-6 md:p-8 flex flex-col gap-6">
              <div>
                <h3 className="font-semibold text-[20px] leading-[28px] text-[#282828] tracking-[-0.3125px] mb-1">
                  Collect Courses
                </h3>
                <p className="font-normal text-[16px] leading-[23px] text-[#282828] tracking-[-0.3125px]">
                  Build your personal collection of golf courses, earn badges, and discover new places to play across the country. And share everywhere you play with your friends!
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                <div className="relative w-full max-w-[298px] h-[500px] rounded-[16px] overflow-hidden">
                  <Image
                    src="/addnewcourse.png"
                    alt="New Course Collected"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full max-w-[363px] h-[429px] rounded-[16px] overflow-hidden bg-white/70">
                  <Image
                    src="/feed.png"
                    alt="Activity Feed"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Badges Section */}
            <div className="bg-white border border-[#b2b2b2] rounded-xl p-6 md:p-8 flex flex-col gap-6">
              <div>
                <h3 className="font-semibold text-[20px] leading-[28px] text-[#282828] tracking-[-0.3125px] mb-1">
                  Badges
                </h3>
                <p className="font-normal text-[16px] leading-[23px] text-[#282828] tracking-[-0.3125px]">
                  As you collect different courses you will start to earn badges as achievements for collecting related courses or completing challenges. Earning badges helps boost your XP making you level up faster.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[440px] rounded-[12px] overflow-hidden">
                  <Image
                    src="/Badge Cards.png"
                    alt="Badge Cards"
                    width={908}
                    height={902}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Curated Courses & Leaderboard Row */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Curated Courses Section */}
            <div className="bg-white border border-[#b2b2b2] rounded-xl p-6 md:p-8 flex flex-col gap-6">
              <div>
                <h3 className="font-semibold text-[20px] leading-[28px] text-[#282828] tracking-[-0.3125px] mb-1">
                  Curated Courses
                </h3>
                <p className="font-normal text-[16px] leading-[23px] text-[#282828] tracking-[-0.3125px]">
                  Explore curated collections from coastal gems to championship courses, earn XP for each course you play. The more rare the course the more XP you earn.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-[90%]">
                  <Image
                    src="/curatedcourses3.png"
                    alt="Curated Courses"
                    width={1634}
                    height={1000}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Leaderboard Section */}
            <div className="bg-white border border-[#b2b2b2] rounded-xl p-6 md:p-8 flex flex-col gap-6">
              <div>
                <h3 className="font-semibold text-[20px] leading-[28px] text-[#282828] tracking-[-0.3125px] mb-1">
                  Leaderboard
                </h3>
                <p className="font-normal text-[16px] leading-[23px] text-[#282828] tracking-[-0.3125px]">
                  As you and your friends play different courses you collect XP for each new course you play. The XP helps you level up, track your progress and your friends as you compete to see who can get the highest level.
                </p>
              </div>
              <div className="flex items-center justify-center flex-1">
                <div className="relative w-full max-w-[307px] h-[402px] rounded-[8px] overflow-hidden">
                  <Image
                    src="/leaderboard.png"
                    alt="Leaderboard"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

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
              href="/terms"
              className="text-[14px] text-[#798d40] font-semibold hover:underline tracking-[-0.3125px]"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
