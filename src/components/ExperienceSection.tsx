import { ArrowRight, Lightbulb, Blinds, ShieldCheck, Zap, Sunrise, Laptop, Armchair, Monitor, Wine, Moon } from "lucide-react";
import roomImg from "@/assets/exp-room.jpg";

const pillars = [
  {
    icon: Lightbulb,
    title: "Personalized Ambience",
    line1: "Set the perfect mood with intelligent",
    line2: "lighting, scenes and automation.",
  },
  {
    icon: Blinds,
    title: "Adaptive Comfort",
    line1: "Smart climate and curtains that",
    line2: "adjust to you, automatically.",
  },
  {
    icon: ShieldCheck,
    title: "Peace of Mind",
    line1: "Advanced security and real-time alerts",
    line2: "keep what matters most protected.",
  },
  {
    icon: Zap,
    title: "Effortless Control",
    line1: "Control everything from elegant touch",
    line2: "panels, the app, or your voice.",
  },
];

const scenes = [
  { icon: Sunrise, label: "Morning" },
  { icon: Laptop, label: "Work" },
  { icon: Armchair, label: "Relax", active: true },
  { icon: Monitor, label: "Movie" },
  { icon: Wine, label: "Dinner" },
  { icon: Moon, label: "Night" },
];

export function ExperienceSection() {
  return (
    <section className="bg-backdrop px-6 py-16 sm:px-12 sm:py-24 lg:px-20 lg:py-28 2xl:px-30">
      {/* Heading */}
      <div className="flex flex-col items-center text-center">
        <p className="animate-rise text-xs font-medium uppercase tracking-[0.35em] text-gold">
          The Zenith Experience
        </p>
        <h2 className="animate-rise mt-6 font-display text-[clamp(2.2rem,5.5vw,4rem)] font-normal leading-[1.1] tracking-[-0.02em] text-foreground">
          Intelligence That
          <br />
          <span className="text-gold">Enhances Every Moment.</span>
        </h2>
        <p className="animate-rise mt-6 max-w-xl text-[0.98rem] leading-relaxed text-muted-foreground">
          Zenith blends seamlessly into your lifestyle, anticipating your needs
          <br className="hidden sm:block" /> and creating the perfect atmosphere—effortlessly.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.6fr)] lg:gap-14">
        {/* Pillars */}
        <div className="order-2 lg:order-1 lg:pt-2">
          {pillars.map(({ icon: Icon, title, line1, line2 }, i) => (
            <div
              key={title}
              className={`animate-rise flex items-start gap-5 py-6 ${
                i > 0 ? "border-t border-foreground/10" : ""
              }`}
              style={{ animationDelay: `${100 + i * 90}ms` }}
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-gold/30 bg-foreground/[0.03] text-gold">
                <Icon className="h-6 w-6" strokeWidth={1.2} />
              </span>
              <div>
                <h3 className="text-[1.05rem] font-medium text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {line1}
                  <br />
                  {line2}
                </p>
              </div>
            </div>
          ))}

          <a
            href="#"
            className="animate-rise group mt-6 inline-flex items-center gap-3 border-b border-gold/40 pb-3 text-sm text-gold transition-colors duration-300 hover:border-gold"
          >
            Explore the Zenith Experience
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Visual */}
        <div className="animate-rise relative order-1 overflow-hidden rounded-2xl ring-1 ring-foreground/[0.08] lg:order-2" style={{ animationDelay: "180ms" }}>
          <img
            src={roomImg}
            alt="Luxury dark living room at night with a wall-mounted Zenith control panel"
            width={1600}
            height={1008}
            loading="lazy"
            className="h-full w-full object-cover"
          />

          {/* Scene bar */}
          <div className="absolute inset-x-4 bottom-4 rounded-xl border border-foreground/10 bg-background/70 px-5 py-4 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:px-7 sm:py-5">
            <p className="text-[0.8rem] text-muted-foreground">Scenes for Every Moment</p>
            <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6 sm:gap-2">
              {scenes.map(({ icon: Icon, label, active }) => (
                <button
                  key={label}
                  className="group flex flex-col items-center gap-2 text-center"
                >
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-full transition-colors duration-300 ${
                      active
                        ? "border border-gold/60 bg-gold/10 text-gold"
                        : "text-foreground/70 group-hover:text-gold"
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.2} />
                  </span>
                  <span
                    className={`text-[0.7rem] sm:text-xs ${
                      active ? "text-gold" : "text-muted-foreground"
                    }`}
                  >
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
