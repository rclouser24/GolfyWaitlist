"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface FeatureSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export default function FeatureSection({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
}: FeatureSectionProps) {
  return (
    <motion.div
      className="mb-16 md:mb-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
    >
      {/* Single Unified Card */}
      <div className="bg-card/70 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-border overflow-hidden">
        <div
          className={`flex flex-col ${
            reverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-stretch`}
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/3] md:aspect-auto md:h-full w-full">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              {title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
