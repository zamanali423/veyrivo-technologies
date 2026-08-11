import Link from "next/link";

/** Branded fallback for unmatched top-level routes (e.g. /api misses). */
export default function RootNotFound() {
  return (
    <main className="relative flex min-h-dvh items-center overflow-hidden bg-background">
      <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-1/2 h-[360px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[130px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-xl px-5 text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary">
          404 · not found
        </p>
        <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-foreground">
          Page not found
        </h1>
        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center rounded-full bg-gradient-to-r from-primary to-cta px-6 text-sm font-semibold text-white transition-all hover:brightness-110"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
