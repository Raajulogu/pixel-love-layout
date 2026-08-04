import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Play, Home, ShieldCheck, SlidersHorizontal, Gem } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { EcosystemSection } from "@/components/EcosystemSection";
import { ProductsSection } from "@/components/ProductsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { WhyZenithSection } from "@/components/WhyZenithSection";
import { StoriesSection } from "@/components/StoriesSection";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";
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

        <div className="relative flex min-h-dvh flex-col lg:min-h-[860px]">
          <SiteHeader />

          {/* Copy */}
          <div className="flex flex-1 flex-col justify-center px-6 pt-10 pb-8 sm:px-12 sm:pt-14 lg:px-14 xl:px-20">
            <div className="max-w-xl animate-rise">
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">Introducing</p>
              <h1 className="mt-6 font-display text-[clamp(2.75rem,11vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-foreground sm:text-[clamp(3.5rem,9vw,6.5rem)]">
                Meet
                <br />
                <span className="text-gold">Zenith.</span>
              </h1>
              <p className="mt-6 font-display text-[1.35rem] font-light leading-snug text-foreground/90 sm:mt-8 sm:text-[clamp(1.5rem,2.4vw,1.9rem)]">
                The intelligence behind
                <br className="hidden sm:block" /> every modern home.
              </p>
              <p className="mt-6 max-w-md text-[1rem] leading-relaxed text-muted-foreground sm:mt-7 sm:text-[0.95rem]">
                Zenith is a premium smart automation ecosystem designed by Lumiwaves to bring comfort,
                control and elegance into your everyday life.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href="#"
                  className="group inline-flex min-h-14 w-full items-center justify-center gap-4 rounded-full bg-foreground px-8 text-[0.95rem] font-medium text-hero-base transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98] sm:w-auto"
                >
                  Explore Zenith
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full border border-foreground/20 px-8 text-[0.95rem] text-foreground transition-colors duration-300 hover:border-gold hover:text-gold active:scale-[0.98] sm:w-auto"
                >
                  <Play className="h-4 w-4 fill-current" />
                  Watch Experience
                </a>
              </div>
            </div>

            {/* Mobile / tablet product visual */}
            <div className="animate-rise mt-12 grid grid-cols-2 gap-3 lg:hidden" style={{ animationDelay: "160ms" }}>
              <div className="col-span-1 overflow-hidden rounded-2xl ring-1 ring-foreground/10">
                <img
                  src={panelImg}
                  alt="Zenith smart control panel mounted on a dark wall"
                  width={912}
                  height={1200}
                  className="aspect-3/4 w-full animate-slow-zoom object-cover brightness-110"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded-2xl ring-1 ring-foreground/10">
                <img
                  src={roomImg}
                  alt="Warmly lit modern living room at night"
                  width={912}
                  height={1200}
                  className="aspect-3/4 w-full animate-slow-zoom object-cover brightness-110"
                />
              </div>
            </div>
          </div>

          {/* Feature strip */}
          <div className="grid max-w-3xl grid-cols-2 gap-y-8 px-6 pb-12 sm:px-12 md:grid-cols-4 md:gap-y-0 lg:px-14 xl:px-20">
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
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
