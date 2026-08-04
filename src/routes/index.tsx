import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Play, Home, ShieldCheck, SlidersHorizontal, Gem, Menu } from "lucide-react";
import { EcosystemSection } from "@/components/EcosystemSection";
import { ProductsSection } from "@/components/ProductsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { WhyZenithSection } from "@/components/WhyZenithSection";
import { StoriesSection } from "@/components/StoriesSection";
import panelImg from "@/assets/zenith-panel.jpg";
import roomImg from "@/assets/zenith-room.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meet Zenith — Lumiwaves Smart Home Automation" },
      {
        name: "description",
        content:
          "Zenith is a premium smart automation ecosystem by Lumiwaves, bringing comfort, control and elegance into every modern home.",
      },
      { property: "og:title", content: "Meet Zenith — Lumiwaves Smart Home Automation" },
      {
        property: "og:description",
        content: "The intelligence behind every modern home. Premium smart automation by Lumiwaves.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = ["Zenith", "Solutions", "Experience", "About Us", "Support"];

const features = [
  { icon: Home, line1: "Smart Living", line2: "Redefined" },
  { icon: ShieldCheck, line1: "Engineered\u00a0for", line2: "Reliability" },
  { icon: SlidersHorizontal, line1: "Seamless", line2: "Control" },
  { icon: Gem, line1: "Crafted for", line2: "Elegance" },
];

function Index() {
  return (
    <main className="min-h-screen bg-backdrop p-3 sm:p-5 lg:p-6">
      <section className="relative overflow-hidden rounded-[2rem] bg-hero-base">
        {/* Media layer */}
        <div className="absolute inset-y-0 right-0 hidden w-[54%] lg:flex">
          <div className="relative w-1/2 overflow-hidden">
            <img
              src={panelImg}
              alt="Zenith smart control panel mounted on a dark wall"
              width={912}
              height={1200}
              className="h-full w-full animate-slow-zoom object-cover brightness-110"
            />
            
          </div>
          <div className="relative w-1/2 overflow-hidden">
            <img
              src={roomImg}
              alt="Warmly lit modern living room at night"
              width={912}
              height={1200}
              className="h-full w-full animate-slow-zoom object-cover brightness-110"
            />
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-hero-base to-transparent" />
        </div>

        <div className="relative flex min-h-[calc(100vh-1.5rem)] flex-col lg:min-h-[860px]">
          {/* Nav */}
          <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-6 sm:px-10 lg:px-14">
            <a href="/" className="flex min-w-0 flex-col gap-1">
              <svg viewBox="0 0 60 16" className="h-3 w-14 text-gold" aria-hidden="true">
                <path
                  d="M2 10c6-9 12 5 18-3s12 5 18-3 12 5 18-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
              </svg>
              <span className="truncate font-display text-lg font-semibold tracking-[0.22em] text-foreground sm:text-xl">
                LUMIWAVES
              </span>
            </a>

            <nav className="hidden items-center gap-8 justify-self-center xl:flex xl:absolute xl:left-1/2 xl:-translate-x-1/2">
              {navLinks.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="relative text-[0.95rem] text-foreground/85 transition-colors duration-300 hover:text-gold after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  {l}
                </a>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-3">
              <a
                href="#"
                className="hidden rounded-full border border-foreground/25 px-6 py-3 text-sm text-foreground transition-all duration-300 hover:border-gold hover:text-gold sm:inline-flex"
              >
                Book Experience
              </a>
              <button
                aria-label="Open menu"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-foreground/25 text-foreground transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </header>

          {/* Copy */}
          <div className="flex flex-1 flex-col justify-center px-6 pt-10 pb-8 sm:px-10 lg:px-14">
            <div className="max-w-xl animate-rise">
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">Introducing</p>
              <h1 className="mt-6 font-display text-[clamp(3rem,9vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-foreground">
                Meet
                <br />
                <span className="text-gold">Zenith.</span>
              </h1>
              <p className="mt-8 font-display text-[clamp(1.35rem,2.4vw,1.9rem)] font-light leading-snug text-foreground/90">
                The intelligence behind
                <br className="hidden sm:block" /> every modern home.
              </p>
              <p className="mt-7 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
                Zenith is a premium smart automation ecosystem designed by Lumiwaves to bring comfort,
                control and elegance into your everyday life.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#"
                  className="group inline-flex items-center gap-4 rounded-full bg-foreground px-8 py-4 text-[0.95rem] font-medium text-hero-base transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Explore Zenith
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 rounded-full border border-foreground/20 px-8 py-4 text-[0.95rem] text-foreground transition-colors duration-300 hover:border-gold hover:text-gold"
                >
                  <Play className="h-4 w-4 fill-current" />
                  Watch Experience
                </a>
              </div>
            </div>
          </div>

          {/* Feature strip */}
          <div className="grid max-w-3xl grid-cols-2 gap-y-8 px-6 pb-12 sm:px-10 md:grid-cols-4 md:gap-y-0 lg:px-14">
            {features.map(({ icon: Icon, line1, line2 }, i) => (
              <div
                key={line1}
                className={`animate-rise pr-6 ${i > 0 ? "md:border-l md:border-foreground/15 md:pl-6" : ""}`}
                style={{ animationDelay: `${200 + i * 90}ms` }}
              >
                <Icon className="h-6 w-6 text-gold" strokeWidth={1.2} />
                <p className="mt-4 whitespace-nowrap text-sm text-foreground">{line1}</p>
                <p className="text-sm text-muted-foreground">{line2}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EcosystemSection />
      <ProductsSection />
      <ExperienceSection />
      <WhyZenithSection />
      <StoriesSection />
    </main>
  );
}
