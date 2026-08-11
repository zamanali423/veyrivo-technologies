import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70dvh] items-center overflow-hidden border-b border-line bg-background">
      <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-1/2 h-[380px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[130px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-xl px-5 text-center sm:px-8">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary">
          404 · error
        </p>
        <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          This page drifted{" "}
          <span className="text-gradient">out of orbit.</span>
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get
          you back to something useful.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" size="lg">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
