"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";


type StatCardProps = {
  label: string;
  target: number;
  prefix?: string;
  suffix?: string;
};

function StatCard({ label, target, prefix = "", suffix = "+" }: StatCardProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  // 👀 only true when the card is actually in view
  const isInView = useInView(ref, {
    once: true,        // animate only the first time it appears
    margin: "-50px",   // start a bit before it's fully centered
  });

  useEffect(() => {
    if (!isInView) return; // don't animate until visible

    let frame: number;
    const duration = 1500;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(progress * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target]);

  const formatted = new Intl.NumberFormat("en-US").format(value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="flex flex-col items-center justify-center rounded-2xl border border-pink-100 bg-white px-6 py-7 shadow-sm text-center cursor-default min-w-[170px] min-h-[140px]"
    >
      <div className="font-extrabold text-pink-500 leading-tight break-words text-2xl sm:text-3xl md:text-3xl lg:text-[1.9rem]">
        {prefix}
        {formatted}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-gray-600">{label}</p>
    </motion.div>
  );
}





export default function HomePage() {
  return (
    <main className="bg-white text-gray-800">
      {/* HERO */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Left text */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-extrabold leading-tight"
            >
              Empowering young women{" "}
              <span className="text-pink-600">one step at a time</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-gray-700 max-w-md"
            >
              The Pink Stairs helps girls and young women build confidence,
              find community, and lead with purpose through mentorship and
              creative education.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex gap-4"
            >
              <Link
                href="/get-involved"
                className="rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-pink-600 transition-colors"
              >
                Get Involved
              </Link>
              <Link
                href="#about"
                className="rounded-full border border-pink-300 px-6 py-3 text-sm font-semibold text-pink-600 hover:bg-pink-50 transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center"
          >
            <Image
              src="/logo.png"
              alt="The Pink Stairs Logo"
              width={320}
              height={320}
              className="drop-shadow-xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 bg-white">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-pink-600">
              About The Pink Stairs
            </h2>
            <p>
              We believe every girl deserves to be heard, supported, and
              inspired. Through workshops and mentorship, we challenge stigma,
              celebrate diversity, and create spaces where young women can
              thrive.
            </p>
            <Link
              href="/about"
              className="inline-flex text-sm font-semibold text-pink-600 hover:text-pink-800"
            >
              Read our story →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-pink-100 bg-pink-50 p-8 text-gray-700 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-pink-600 mb-3">
              What We Do
            </h3>
            <ul className="space-y-2">
              <li>🌸 Leadership & confidence-building workshops</li>
              <li>🎨 Creative expression through art and storytelling</li>
              <li>💬 Community circles & mentorship</li>
              <li>🤝 Partnerships for gender equity education</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
    <h2 className="text-3xl font-bold text-pink-600 mb-10">Our Impact</h2>

    {/* This is where your new grid line goes */}
    <div className="grid gap-10 sm:gap-12 md:gap-14 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-items-center">
      <div className="lg:mr-10">
        <StatCard target={8400000} label="girls reached" />
      </div>
      <StatCard target={250} label="volunteers" />
      <StatCard target={15000} label="volunteer hours" />
      <StatCard target={821} label="donations" />
      <StatCard target={24} label="countries" />
      <StatCard target={400} label="raised" prefix="$" />
    </div>
  </div>
</section>


      {/* CTA */}
      <section className="text-center py-20 bg-white">
        <h2 className="text-3xl font-bold text-gray-900">
          Ready to make a difference?
        </h2>
        <p className="mt-3 text-gray-700 max-w-xl mx-auto">
          Join us in building spaces that uplift and inspire the next
          generation of women leaders.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/get-involved"
            className="rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-pink-600 transition-colors"
          >
            Get Involved
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-pink-300 px-6 py-3 text-sm font-semibold text-pink-600 hover:bg-pink-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
