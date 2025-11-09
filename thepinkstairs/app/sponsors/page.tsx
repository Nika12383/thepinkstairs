"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Sponsor = {
  name: string;
  logoSrc: string;
  url?: string;
};

const sponsors: Sponsor[] = [
  { name: "10X Hub", logoSrc: "/sponsorsIcons/10xHub.png", url: "https://10xhub.org/" },
  { name: "360 Kids", logoSrc: "/sponsorsIcons/360Kids.png", url: "https://www.360kids.ca/" },
  { name: "Ignite Fair", logoSrc: "/sponsorsIcons/igniteFair.png", url: "https://www.ignitefair.com/" },
  { name: "City of Markham", logoSrc: "/sponsorsIcons/markham.png", url: "https://www.markham.ca/" },
  { name: "Markham Library", logoSrc: "/sponsorsIcons/markhamLibrary.png", url: "https://markhampubliclibrary.ca/" },
  { name: "Microsoft", logoSrc: "/sponsorsIcons/microsoft.png", url: "https://www.microsoft.com/en-ca/" },
  { name: "remCloud", logoSrc: "/sponsorsIcons/remCloud.png", url: "https://www.remandcompany.com/" },
  { name: "The Salvation Army", logoSrc: "/sponsorsIcons/salvationArmy.png", url: "https://salvationarmy.ca/" },
  { name: "Street Haven", logoSrc: "/sponsorsIcons/streetHaven.png", url: "https://streethaven.org/" },
  { name: "Twilight Café", logoSrc: "/sponsorsIcons/twilightCafe.png", url: "https://www.twilightcafe.ca/" },
  { name: "Vanderbilt University", logoSrc: "/sponsorsIcons/vanderbiltUni.png", url: "https://www.vanderbilt.edu/" },
  { name: "University of Waterloo", logoSrc: "/sponsorsIcons/waterlooUni.png", url: "https://uwaterloo.ca/" },
  { name: "Women in Engineering (Waterloo)", logoSrc: "/sponsorsIcons/wie.png", url: "https://uwaterloo.ca/engineering-outreach/programs/women-in-engineering" },
  { name: "Daan Go Cake Lab", logoSrc: "/sponsorsIcons/daanGo.png", url: "https://daango.com/?srsltid=AfmBOorSXHrbgTZ--XFe4gY1XLLWSC9EJC5W-fi2oDJP3ssILKyyd5Lu" },
];

export default function SponsorsPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* INTRO */}
      <section className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Sponsors &amp; Partners
            </h1>
            <p className="mt-4 text-gray-700">
              We’re incredibly grateful for the organizations and institutions
              that make <span className="text-pink-600 font-semibold">The Pink Stairs</span> possible. 
              Their support fuels our mission to empower young women through creativity, 
              education, and mentorship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* LOGOS FLEX GRID */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 text-center text-2xl font-semibold text-pink-600"
          >
            Thank You to Our Supporters
          </motion.h2>

          {/* FLEX WRAP CENTERED */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-10"
          >
            {sponsors.map((sponsor) => {
              const card = (
                <motion.div
                  whileHover={{ scale: 1.06, y: -4 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="flex h-40 w-64 items-center justify-center rounded-2xl border border-pink-100 bg-white shadow-sm hover:shadow-md"
                >
                  <Image
                    src={sponsor.logoSrc}
                    alt={sponsor.name}
                    width={240}
                    height={140}
                    className="max-h-28 w-auto object-contain"
                  />
                </motion.div>
              );

              return sponsor.url ? (
                <Link
                  key={sponsor.name}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center"
                >
                  {card}
                </Link>
              ) : (
                <div key={sponsor.name} className="flex justify-center">
                  {card}
                </div>
              );
            })}
          </motion.div>

          <p className="mt-12 text-center text-sm text-gray-600">
            Interested in becoming a sponsor or partner?{" "}
            <Link
              href="/contact"
              className="font-semibold text-pink-600 hover:text-pink-800"
            >
              Get in touch
            </Link>{" "}
            to learn more about supporting our mission.
          </p>
        </div>
      </section>
    </main>
  );
}
