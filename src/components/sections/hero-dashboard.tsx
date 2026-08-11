import { cn } from "@/lib/cn";

const barHeights = ["38%", "58%", "44%", "72%", "56%", "88%", "66%"];

function StatusDot({
  color,
  pulse = false,
}: {
  color: string;
  pulse?: boolean;
}) {
  return (
    <span className="relative inline-flex h-2 w-2">
      {pulse ? (
        <span
          className={cn("absolute inline-flex h-full w-full rounded-full opacity-60", color)}
          style={{ animation: "pulse-dot 2.4s ease-in-out infinite" }}
        />
      ) : null}
      <span className={cn("relative inline-flex h-2 w-2 rounded-full", color)} />
    </span>
  );
}

function AiChatCard() {
  return (
    <div className="flex flex-col rounded-xl border border-line bg-background/70 p-3.5">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-primary to-secondary text-[10px] font-bold text-white">
          A
        </span>
        <div className="flex-1">
          <p className="text-xs font-semibold text-foreground">
            AI Assistant
          </p>
          <p className="flex items-center gap-1 font-mono text-[10px] text-success">
            <StatusDot color="bg-success" pulse /> online
          </p>
        </div>
      </div>

      <div className="mt-3 space-y-2">
        {/* user message */}
        <div className="flex justify-end">
          <p className="max-w-[80%] rounded-2xl rounded-br-sm bg-primary/20 px-3 py-2 text-[11px] leading-relaxed text-foreground">
            What&apos;s the status of order #V-2048?
          </p>
        </div>
        {/* assistant message */}
        <div className="flex justify-start">
          <p className="max-w-[85%] rounded-2xl rounded-bl-sm border border-line bg-surface px-3 py-2 text-[11px] leading-relaxed text-foreground">
            Order #V-2048 is confirmed and being packed. It ships tomorrow
            via express  you&apos;ll get a tracking link shortly. Want me to
            notify your customer?
          </p>
        </div>
        {/* typing indicator */}
        <div className="flex items-center gap-1 px-3 py-2">
          <span
            className="h-1.5 w-1.5 rounded-full bg-muted"
            style={{ animation: "pulse-dot 1.4s ease-in-out infinite" }}
          />
          <span
            className="h-1.5 w-1.5 rounded-full bg-muted"
            style={{ animation: "pulse-dot 1.4s ease-in-out 0.2s infinite" }}
          />
          <span
            className="h-1.5 w-1.5 rounded-full bg-muted"
            style={{ animation: "pulse-dot 1.4s ease-in-out 0.4s infinite" }}
          />
        </div>
      </div>

      {/* input mock */}
      <div className="mt-1 flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2">
        <span className="flex-1 font-mono text-[11px] text-muted">
          Ask anything…
        </span>
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary">
          <svg viewBox="0 0 16 16" className="h-3 w-3 text-white" fill="none" aria-hidden="true">
            <path
              d="M2 8 L14 2 L9 14 L7.5 9.5 Z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

function MetricsCard() {
  return (
    <div className="rounded-xl border border-line bg-background/70 p-3.5">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
          Automation runs
        </p>
        <span className="flex items-center gap-1 rounded-full bg-success/15 px-2 py-0.5 font-mono text-[10px] font-medium text-success">
          <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" aria-hidden="true">
            <path d="M6 10 L6 3 M3 6 L6 3 L9 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          14.2%
        </span>
      </div>
      <p className="mt-1 font-heading text-2xl font-bold tracking-tight text-foreground">
        12,840
      </p>
      <div className="mt-3 flex h-16 items-end gap-1.5" aria-hidden="true">
        {barHeights.map((h, i) => (
          <span
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-primary to-secondary"
            style={{
              height: h,
              animation: `bar-grow 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.08}s both`,
              transformOrigin: "bottom",
            }}
          />
        ))}
      </div>
      <p className="mt-2.5 font-mono text-[10px] text-muted">
        This week · across 4 workflows
      </p>
    </div>
  );
}

function WorkflowCard() {
  const steps = [
    { label: "Order captured", note: "Web · API", tone: "bg-success" },
    { label: "AI validation & routing", note: "3 rules passed", tone: "bg-secondary" },
    { label: "Team notified", note: "WhatsApp · email", tone: "bg-accent" },
  ];
  return (
    <div className="rounded-xl border border-line bg-background/70 p-3.5">
      <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
        Workflow · Order intake
      </p>
      <ol className="mt-3 space-y-2.5">
        {steps.map((step) => (
          <li key={step.label} className="flex items-center gap-2.5">
            <span className={cn("flex h-5 w-5 shrink-0 items-center justify-center rounded-full", step.tone)}>
              <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-[#030B1C]" fill="none" aria-hidden="true">
                <path d="M2.5 6.5 L5 9 L9.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="flex flex-1 items-center justify-between gap-2 border-b border-line/60 pb-2 last:border-0 last:pb-0">
              <p className="text-[11px] font-medium text-foreground">{step.label}</p>
              <p className="font-mono text-[10px] text-muted">{step.note}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function CustomerCard() {
  return (
    <div className="rounded-xl border border-line bg-background/70 p-3.5">
      <div className="flex items-center gap-2.5">
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary text-[11px] font-bold text-white">
          AR
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[11px] font-semibold text-foreground">
            Acme Retail
          </p>
          <p className="font-mono text-[10px] text-muted">
            Enterprise · since 2024
          </p>
        </div>
        <span className="rounded-full border border-success/30 bg-success/10 px-2 py-0.5 font-mono text-[10px] font-medium text-success">
          Active
        </span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-line bg-surface px-2.5 py-2">
          <p className="font-mono text-[10px] text-muted">Lifetime value</p>
          <p className="text-xs font-bold text-foreground">$86,400</p>
        </div>
        <div className="rounded-lg border border-line bg-surface px-2.5 py-2">
          <p className="font-mono text-[10px] text-muted">Open orders</p>
          <p className="text-xs font-bold text-foreground">12</p>
        </div>
      </div>
    </div>
  );
}

function OrderCard() {
  return (
    <div className="rounded-xl border border-line bg-background/70 p-3.5">
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-semibold text-foreground">
          Order #V-2048
        </p>
        <div className="flex items-center gap-1.5">
          <span className="rounded-full bg-success/15 px-2 py-0.5 font-mono text-[10px] font-medium text-success">
            Paid
          </span>
          <span className="rounded-full bg-secondary/15 px-2 py-0.5 font-mono text-[10px] font-medium text-primary">
            Shipped
          </span>
        </div>
      </div>
      <p className="mt-1.5 font-mono text-[10px] text-muted">
        3 items · $1,240.00
      </p>
      <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-surface-2">
        <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-primary to-secondary" />
      </div>
      <p className="mt-1.5 font-mono text-[10px] text-muted">
        Delivering Fri · tracking synced
      </p>
    </div>
  );
}

/**
 * Decorative dashboard-style product visual. Purely illustrative 
 * hidden from assistive tech, with motion reduced on request.
 */
export function HeroDashboard() {
  return (
    <div
      className="relative mx-auto w-full max-w-[560px]"
      aria-hidden="true"
    >
      {/* glow behind the panel */}
      <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-tr from-primary/25 via-secondary/15 to-accent/25 blur-3xl" />

      <div className="relative rounded-2xl border border-line bg-surface/80 shadow-[0_40px_80px_-20px] shadow-black/60 backdrop-blur-xl motion-reduce:animate-none">
        {/* window header */}
        <div className="flex items-center gap-2.5 border-b border-line px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
          </div>
          <span className="ml-1 font-mono text-[10px] uppercase tracking-widest text-muted">
            veyrivo · command center
          </span>
          <div className="ml-auto hidden items-center gap-2 sm:flex">
            <span className="flex items-center gap-1.5 rounded-full border border-line bg-background/60 px-2 py-1 font-mono text-[9px] text-success">
              <StatusDot color="bg-success" pulse /> Automated
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-line bg-background/60 px-2 py-1 font-mono text-[9px] text-primary">
              <StatusDot color="bg-secondary" pulse /> Connected
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-line bg-background/60 px-2 py-1 font-mono text-[9px] text-accent">
              <StatusDot color="bg-accent" pulse /> Growing
            </span>
          </div>
        </div>

        <div className="grid gap-3 p-3.5">
          <div className="grid gap-3 sm:grid-cols-5">
            <div className="sm:col-span-3">
              <AiChatCard />
            </div>
            <div className="flex flex-col gap-3 sm:col-span-2">
              <MetricsCard />
              <WorkflowCard />
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <CustomerCard />
            <OrderCard />
          </div>
        </div>
      </div>

      {/* floating status chips */}
      <div className="absolute -left-4 -top-5 rotate-[-3deg] rounded-full border border-line bg-background px-3 py-1.5 font-mono text-[10px] text-success shadow-lg animate-float-slow motion-reduce:animate-none">
        <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-success align-middle" />
        Automated
      </div>
      <div
        className="absolute -right-3 top-1/3 rotate-[2deg] rounded-full border border-line bg-background px-3 py-1.5 font-mono text-[10px] text-primary shadow-lg animate-float-slow motion-reduce:animate-none"
        style={{ animationDelay: "0.8s" }}
      >
        <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-secondary align-middle" />
        Connected
      </div>
      <div
        className="absolute -bottom-4 left-8 rotate-[2deg] rounded-full border border-line bg-background px-3 py-1.5 font-mono text-[10px] text-accent shadow-lg animate-float-slow motion-reduce:animate-none"
        style={{ animationDelay: "1.6s" }}
      >
        <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
        Growing
      </div>
    </div>
  );
}
