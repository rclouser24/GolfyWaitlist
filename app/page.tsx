"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Sparkles, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);

  // Fetch waitlist count on mount
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch("/api/waitlist");
        const data = await response.json();
        setWaitlistCount(data.count);
      } catch (error) {
        console.error("Error fetching waitlist count:", error);
      }
    };
    fetchCount();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        toast.success("You're on the list! Check your email for updates.");
        setEmail("");
        // Update the waitlist count
        if (data.count) {
          setWaitlistCount(data.count);
        }
      } else {
        toast.error(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to join waitlist. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/golfybackground.png)' }}
      />

      {/* Main Content */}
      <motion.div
        className="w-full max-w-md relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 15 }}
      >
        {/* Card */}
        <div className="bg-card backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-border">
          {/* Logo/Header */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-success rounded-full mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-semibold text-foreground mb-3">
              Your Golf Journey
              <br />
              <span className="text-primary">Starts Here</span>
            </h1>
          </motion.div>

          {/* Subcopy */}
          <motion.p
            className="text-center text-muted-foreground text-base mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Join the waitlist for <span className="font-semibold text-foreground">Golfy</span> - Track courses, earn badges, and level up your golf game. Be first to tee off when we launch.
          </motion.p>

          {/* Success State */}
          {isSubmitted && (
            <motion.div
              className="mb-6 p-4 bg-white rounded-xl flex items-center gap-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <CheckCircle2 className="w-5 h-5 text-lime flex-shrink-0" />
              <p className="text-sm text-lime-foreground font-medium">
                You're on the list! We'll notify you when we launch.
              </p>
            </motion.div>
          )}

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full h-12 pl-12 pr-4 bg-white border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent transition-all"
                disabled={isLoading}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-lime hover:bg-lime/90 text-lime-foreground font-semibold rounded-xl transition-all shadow-lg shadow-lime/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-lime-foreground/30 border-t-lime-foreground rounded-full animate-spin" />
                  <span>Joining...</span>
                </div>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>Join the Waitlist</span>
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Footer Text */}
          <motion.p
            className="text-center text-xs text-muted-foreground mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            No spam, ever. We'll only notify you when we launch.
          </motion.p>
        </div>

        {/* Stats Badge */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-border">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Join {waitlistCount !== null && waitlistCount >= 50 ? (
                <span className="font-semibold text-foreground">{waitlistCount} golfers</span>
              ) : (
                <span className="font-semibold text-foreground">golfers</span>
              )} on the waitlist
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
