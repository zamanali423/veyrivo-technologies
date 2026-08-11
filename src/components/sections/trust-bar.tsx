import {
  Layers,
  Sparkles,
  ShieldCheck,
  Rocket,
  LifeBuoy,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/primitives";

const capabilities = [
  { Icon: Layers, label: "Scalable Architecture" },
  { Icon: Sparkles, label: "AI-Powered Solutions" },
  { Icon: ShieldCheck, label: "Secure Integrations" },
  { Icon: Rocket, label: "Production-Ready Delivery" },
  { Icon: LifeBuoy, label: "Continuous Support" },
];

export function TrustBar() {
  return (
    <section className="relative overflow-hidden border-b border-line/70 bg-surface py-12">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        aria-hidden="true"
      />
      <Container>
        <Reveal>
          <p className="text-center font-mono text-xs uppercase tracking-[0.26em] text-silver-muted">
            Trusted technology for ambitious businesses
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {capabilities.map(({ Icon, label }) => (
              <li
                key={label}
                className="group flex items-center gap-2.5 rounded-full border border-line/80 bg-surface-2/80 px-4.5 py-2.5 text-sm font-medium text-foreground/90 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.05)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[0_0_24px_-6px] hover:shadow-primary/40"
              >
                <Icon className="h-4 w-4 shrink-0 text-primary transition-transform duration-300 group-hover:scale-110" />
                {label}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
