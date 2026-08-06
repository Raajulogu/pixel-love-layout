import { ArrowRight, Linkedin, Instagram, Youtube, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { fade } from "@/lib/motion";

const columns: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Home", to: "/" },
      { label: "About Lumiwaves", to: "/about" },
      { label: "Zenith Products", to: "/" },
      { label: "Smart Ecosystem", to: "/" },
      { label: "Experience Center", to: "/contact" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Zenith",
    links: [
      { label: "Smart Switches", to: "/" },
      { label: "Touch Panels", to: "/" },
      { label: "Smart Locks", to: "/" },
      { label: "Smart Lighting", to: "/" },
      { label: "Automation Hub", to: "/" },
      { label: "All Products", to: "/" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Installation Process", to: "/about" },
      { label: "User Guides", to: "/contact" },
      { label: "Warranty", to: "/contact" },
      { label: "Service & Support", to: "/contact" },
      { label: "FAQs", to: "/contact" },
    ],
  },
];


const socials = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Instagram, label: "Instagram" },
  { icon: Youtube, label: "YouTube" },
  { icon: MessageCircle, label: "WhatsApp" },
];

export function SiteFooter() {
  return (
    <motion.footer
      {...fade()}
      className="border-t border-foreground/10 bg-hero-base px-6 pt-16 pb-8 text-center sm:px-12 sm:text-left lg:px-20 2xl:px-30"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)_1.2fr] lg:gap-10">
        <div className="min-w-0">
          <div className="flex items-center justify-center gap-4 sm:justify-start">
            <svg viewBox="0 0 60 16" className="h-5 w-14 shrink-0 text-gold" aria-hidden="true">
              <path d="M2 10c6-9 12 5 18-3s12 5 18-3 12 5 18-3" fill="none" stroke="currentColor" strokeWidth="1.4" />
            </svg>
            <div className="min-w-0">
              <p className="truncate font-display text-3xl font-medium text-foreground">Lumiwaves</p>
              <p className="text-sm text-muted-foreground">Living, Smarter.</p>
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-sm text-[0.95rem] sm:mx-0 leading-relaxed text-muted-foreground">
            We create intelligent living experiences that blend technology, design and comfort — for
            homes that deserve more.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 sm:justify-start">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid h-12 w-12 place-items-center rounded-full border border-foreground/15 text-foreground/80 transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <nav key={col.title} className="min-w-0 lg:border-l lg:border-foreground/10 lg:pl-8">
            <h3 className="font-display text-lg font-medium text-foreground">{col.title}</h3>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="inline-flex min-h-11 items-center text-[0.95rem] text-muted-foreground transition-colors duration-300 hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}

            </ul>
          </nav>
        ))}

        <div className="min-w-0">
          <h3 className="font-display text-lg font-medium text-foreground">Get in Touch</h3>
          <ul className="mt-5 space-y-4 text-[0.95rem] text-muted-foreground">
            <li className="flex items-start justify-center gap-3 sm:justify-start">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              Pondicherry, India
            </li>
            <li className="flex items-start justify-center gap-3 sm:justify-start">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              +91 98765 43210
            </li>
            <li className="flex items-start justify-center gap-3 sm:justify-start">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              hello@lumiwaves.in
            </li>
          </ul>
          <Link
            to="/contact"
            className="btn-lift group mt-7 inline-flex items-center gap-3 rounded-full border border-gold/60 px-7 py-3.5 text-[0.95rem] text-gold hover:bg-gold hover:text-hero-base"
          >
            Book a Free Consultation
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-foreground/10 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© 2024 Lumiwaves. All rights reserved.</p>
        <div className="flex items-center justify-center gap-4 sm:justify-start">
          <a href="#" className="transition-colors duration-300 hover:text-gold">Privacy Policy</a>
          <span className="text-foreground/20">|</span>
          <a href="#" className="transition-colors duration-300 hover:text-gold">Terms of Service</a>
        </div>
      </div>
    </motion.footer>
  );
}
