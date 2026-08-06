import {
  ArrowRight,
  Headset,
  Home,
  Sparkles,
  User,
  Phone,
  Mail,
  MessageSquare,
  BadgeCheck,
  Clock4,
  Heart,
} from "lucide-react";
import { motion } from "motion/react";
import { reveal, fade, staggerParent, staggerChild, viewportOnce } from "@/lib/motion";
import roomImg from "@/assets/zenith-room.jpg";

const helpItems = [
  {
    icon: Headset,
    title: "Talk to Our Experts",
    body: "Get personalized guidance for your dream smart home.",
  },
  {
    icon: Home,
    title: "Experience in Person",
    body: "Visit our experience center and see Zenith in action.",
  },
  {
    icon: Sparkles,
    title: "Start Your Smart Living",
    body: "From consultation to installation, we make it effortless.",
  },
];

const assurances = [
  { icon: Home, title: "Experience Center", body: "Visit & feel the difference" },
  { icon: BadgeCheck, title: "10 Year Warranty", body: "Long-term peace of mind" },
  { icon: Clock4, title: "Dedicated Support", body: "Always here when you need us" },
  { icon: Heart, title: "Smarter, Greener Tomorrow", body: "For a better living experience" },
];

const fieldBase =
  "h-14 w-full rounded-xl border border-foreground/12 bg-foreground/[0.03] pl-12 pr-4 text-[0.95rem] text-foreground placeholder:text-muted-foreground/80 outline-hidden focus-glow focus:border-gold/60 focus:bg-foreground/[0.05]";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-backdrop pt-16 sm:pt-24">
      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerParent}
        className="mx-auto max-w-3xl px-6 text-center sm:px-12"
      >
        <motion.div variants={staggerChild} className="flex items-center justify-center gap-4">
          <span className="hidden h-px w-16 bg-linear-to-r from-transparent to-gold/50 sm:block" />
          <p className="font-display text-sm tracking-[0.18em] text-gold sm:text-base">
            Let&apos;s Build Your Smarter Home
          </p>
          <span className="hidden h-px w-16 bg-linear-to-l from-transparent to-gold/50 sm:block" />
        </motion.div>
        <motion.h2 variants={staggerChild} className="mt-4 font-display text-[clamp(1.9rem,8vw,4rem)] sm:text-[clamp(2.6rem,6vw,4rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-foreground">
          Ready to Experience <span className="text-gold">Zenith?</span>
        </motion.h2>
        <motion.p variants={staggerChild} className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
          Take the first step towards a smarter, safer and more beautiful home.
          <br className="hidden sm:block" /> Our team is here to help you, from planning to
          installation and beyond.
        </motion.p>
      </motion.div>

      {/* Image + content band */}
      <div className="relative mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[44%] overflow-hidden lg:block">
          <img
            src={roomImg}
            alt="Warmly lit modern living room with a Zenith control panel"
            width={912}
            height={1200}
            loading="lazy"
            className="h-full w-full animate-slow-zoom object-cover"
          />
          <div className="absolute inset-y-0 right-0 w-2/5 bg-linear-to-l from-backdrop to-transparent" />
        </div>

        <div className="relative mx-auto grid max-w-[95rem] grid-cols-1 items-center gap-10 px-6 pt-12 pb-14 sm:px-12 lg:px-20 2xl:px-30 lg:grid-cols-[42%_minmax(0,1fr)] lg:gap-0 lg:pt-24 lg:pb-24">
          <motion.div {...fade()} className="overflow-hidden rounded-2xl ring-1 ring-foreground/10 lg:hidden">
            <img
              src={roomImg}
              alt="Warmly lit modern living room with a Zenith control panel"
              width={912}
              height={640}
              loading="lazy"
              className="aspect-4/3 w-full object-cover"
            />
          </motion.div>
          <div aria-hidden className="hidden lg:block" />

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(19rem,25rem)] lg:gap-10">
            {/* Help items */}
            <ul className="space-y-8">
              {helpItems.map(({ icon: Icon, title, body }, i) => (
                <motion.li
                  key={title}
                  {...reveal(i * 0.11)}
                  className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-5"
                >
                  <span className="group grid h-16 w-16 shrink-0 place-items-center rounded-full border border-gold/35 bg-foreground/[0.03] text-gold transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-gold hover:shadow-[0_0_26px_-8px_rgba(201,168,76,0.5)]">
                    <Icon className="h-6 w-6" strokeWidth={1.3} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-medium text-foreground">{title}</h3>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-muted-foreground">
                      {body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* Form card */}
            <motion.form
              onSubmit={(e) => e.preventDefault()}
              {...reveal(0.1, 0.7)}
              className="rounded-3xl border border-foreground/12 bg-hero-base/80 p-6 backdrop-blur-xs sm:p-8"
            >
              <h3 className="font-display text-xl font-semibold text-foreground">
                Send us a Message
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                We&apos;ll get back to you within 24 hours.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="relative">
                  <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input aria-label="Your Name" placeholder="Your Name" className={fieldBase} />
                </div>
                <div className="relative">
                  <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    aria-label="Phone Number"
                    placeholder="Phone Number"
                    className={fieldBase}
                  />
                </div>
              </div>

              <div className="relative mt-4">
                <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  aria-label="Email Address"
                  type="email"
                  placeholder="Email Address"
                  className={fieldBase}
                />
              </div>

              <div className="relative mt-4">
                <Home className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <select
                  aria-label="I'm interested in"
                  defaultValue=""
                  className={`${fieldBase} appearance-none pr-10 text-muted-foreground`}
                >
                  <option value="">I&apos;m interested in</option>
                  <option>Smart Switches</option>
                  <option>Touch Panels</option>
                  <option>Smart Locks</option>
                  <option>Full Home Automation</option>
                </select>
              </div>

              <div className="relative mt-4">
                <MessageSquare className="pointer-events-none absolute left-4 top-5 h-4 w-4 text-muted-foreground" />
                <textarea
                  aria-label="Tell us about your requirements"
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full resize-none rounded-xl border border-foreground/12 bg-foreground/[0.03] py-4 pl-12 pr-4 text-[0.95rem] text-foreground placeholder:text-muted-foreground/80 outline-hidden focus-glow focus:border-gold/60 focus:bg-foreground/[0.05]"
                />
              </div>

              <button
                type="submit"
                className="btn-lift group mt-5 inline-flex h-14 min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-gold to-gold/80 text-[0.95rem] font-medium text-hero-base"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.form>
          </div>
        </div>
      </div>

      {/* Assurance strip */}
      <div className="relative mx-auto max-w-[95rem] px-6 pb-16 sm:px-12 lg:px-20 2xl:px-30">
        <div className="grid grid-cols-1 gap-8 rounded-3xl border border-foreground/10 bg-hero-base/80 px-8 py-8 backdrop-blur-xs sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-0">
          {assurances.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              {...reveal(i * 0.08)}
              className={`flex min-w-0 items-center gap-4 ${
                i > 0 ? "lg:border-l lg:border-foreground/12 lg:pl-8" : ""
              }`}
            >
              <Icon className="h-9 w-9 shrink-0 text-gold" strokeWidth={1.2} />
              <div className="min-w-0">
                <p className="text-[0.95rem] font-medium text-foreground">{title}</p>
                <p className="text-sm text-muted-foreground">{body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
