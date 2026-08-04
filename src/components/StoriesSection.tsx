import { ArrowRight, Star, Home, Rocket, Star as StarIcon, ShieldCheck } from "lucide-react";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";

const stories = [
  {
    img: story1,
    alt: "Modern villa at dusk with warm glowing windows",
    quote: "\u201CZenith transformed the way we live. Everything just works together beautifully.\u201D",
    name: "Arjun R.",
    city: "Bangalore",
  },
  {
    img: story2,
    alt: "Luxury apartment living room at night with city skyline",
    quote: "\u201CThe touch panel is stunning and the automation is incredibly smooth. Highly recommended!\u201D",
    name: "Priya S.",
    city: "Chennai",
  },
  {
    img: story3,
    alt: "Contemporary house at night with illuminated driveway",
    quote: "\u201CInstallation was seamless and the support is outstanding. Zenith is worth every penny.\u201D",
    name: "Karthik M.",
    city: "Hyderabad",
  },
];

const numbers = [
  { icon: Home, value: "1000+", label: "Homes Automated" },
  { icon: Rocket, value: "50+", label: "Cities" },
  { icon: StarIcon, value: "4.9 / 5", label: "Customer Rating" },
  { icon: ShieldCheck, value: "99.9%", label: "System Reliability" },
];

export function StoriesSection() {
  return (
    <section className="bg-backdrop px-6 py-16 sm:px-12 sm:py-24 lg:px-20 lg:py-28 2xl:px-30">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:flex-wrap sm:items-end">
          <div>
            <p className="animate-rise text-xs font-medium uppercase tracking-[0.35em] text-gold">
              Customer Stories
            </p>
            <h2 className="animate-rise mt-5 font-display text-[clamp(2.1rem,5vw,3.4rem)] font-normal leading-[1.1] tracking-[-0.02em] text-foreground">
              Loved by <span className="text-gold">Homes.</span>
              <br />
              Trusted by <span className="text-gold">Families.</span>
            </h2>
          </div>
          <a
            href="#"
            className="animate-rise group inline-flex items-center gap-3 border-b border-gold/40 pb-2 text-sm text-gold transition-colors duration-300 hover:border-gold"
          >
            View all stories
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,1fr)]">
          <div className="snap-rail -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0">
            {stories.map((s, i) => (
              <article
                key={s.name}
                className="animate-rise w-[86%] shrink-0 snap-center overflow-hidden rounded-2xl bg-hero-base/80 ring-1 ring-foreground/[0.06] transition-colors duration-300 hover:ring-gold/40 sm:w-auto sm:shrink"
                style={{ animationDelay: `${100 + i * 90}ms` }}
              >
                <img
                  src={s.img}
                  alt={s.alt}
                  width={900}
                  height={700}
                  loading="lazy"
                  className="h-56 w-full object-cover sm:h-52"
                />
                <div className="px-6 pb-7 pt-5">
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.quote}</p>
                  <div className="mt-6 flex items-baseline gap-3">
                    <span className="text-sm font-medium text-foreground">{s.name}</span>
                    <span className="text-xs text-muted-foreground">{s.city}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="animate-rise rounded-2xl bg-hero-base/70 px-7 py-8 ring-1 ring-foreground/[0.06]" style={{ animationDelay: "200ms" }}>
            <h3 className="text-center text-[0.95rem] font-medium text-foreground">Zenith in Numbers</h3>
            <div className="mt-7 flex flex-col gap-7">
              {numbers.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/30 text-gold">
                    <Icon className="h-5 w-5" strokeWidth={1.2} />
                  </span>
                  <div>
                    <p className="font-display text-xl font-medium text-foreground">{value}</p>
                    <p className="text-xs text-muted-foreground">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
