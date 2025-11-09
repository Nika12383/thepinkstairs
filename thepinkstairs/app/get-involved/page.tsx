"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Opportunity = {
  title: string;
  description: string;
  href?: string;
  tag?: string;
};

const opportunities: Opportunity[] = [
  {
    title: "Heart-to-Heart Letters",
    tag: "Program",
    description:
      "Write uplifting letters to women and girls in shelters and partner organizations, spreading encouragement and hope.",
    href: "#",
  },
  {
    title: "Start a Chapter",
    tag: "Leadership",
    description:
      "Bring The Pink Stairs to your school or community and lead local events, workshops, and initiatives.",
    href: "#",
  },
  {
    title: "Volunteer With Us",
    tag: "Volunteer",
    description:
      "Support events, workshops, and operations behind the scenes. Perfect for students seeking impact and experience.",
    href: "#",
  },
  {
    title: "Women on the Rise Podcast",
    tag: "Storytelling",
    description:
      "Share your journey as a guest or help with production and outreach to amplify diverse voices.",
    href: "#",
  },
  {
    title: "Cherry Venus Magazine",
    tag: "Creative",
    description:
      "Submit writing, art, or reviews and see your work featured in our online magazine for young feminists.",
    href: "#",
  },
  {
    title: "Join Our Executive Board",
    tag: "Executive",
    description:
      "Help shape the future of The Pink Stairs, guide major initiatives, and develop your leadership skills.",
    href: "#",
  },
];

function OpportunityCard({ title, description, href, tag }: Opportunity) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}           // ⬅️ changed
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      whileHover={{ scale: 1.04, y: -4 }}
      className="flex h-48 flex-col justify-between rounded-2xl border border-pink-100 bg-white px-6 py-5 shadow-sm"
    >
      <div>
        {tag && (
          <span className="inline-flex items-center rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-pink-600">
            {tag}
          </span>
        )}
        <h3 className="mt-2 text-lg font-semibold text-gray-900">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-700">{description}</p>
      </div>
      {href && (
        <span className="mt-3 text-xs font-semibold text-pink-600">
          Learn more →
        </span>
      )}
    </motion.div>
  );

  if (href) {
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-2xl"
      >
        {content}
      </Link>
    );
  }

  return content;
}

export default function GetInvolvedPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* HERO / INTRO */}
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Get Involved
            </h1>
            <p className="mt-4 text-gray-700">
              Whether you love writing, organizing, storytelling, or leading,
              there’s a place for you here. Explore the opportunities below and
              find the way that fits you best.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GRID OF OPPORTUNITIES */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {opportunities.map((item) => (
              <OpportunityCard key={item.title} {...item} />
            ))}
          </div>

          <div className="mt-10 text-center text-sm text-gray-600">
            <p>
              Don’t see the exact role you&apos;re looking for?{" "}
              <Link
                href="/contact"
                className="font-semibold text-pink-600 hover:text-pink-800"
              >
                Contact us
              </Link>{" "}
              and we&apos;ll help you find a way to get involved.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
