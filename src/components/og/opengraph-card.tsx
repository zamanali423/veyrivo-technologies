/**
 * 1200×630 Open Graph card for Veyrivo Technologies.
 *
 * This is a plain presentational component rendered once at build time by
 * `scripts/generate-opengraph-image.ts` into `src/app/opengraph-image.png`.
 * We intentionally ship a *static* PNG instead of a `next/og` route handler:
 * `output: "export"` (Cloudflare Pages) cannot run image-generation routes at
 * runtime, but the static `opengraph-image.png` convention is copied to the
 * export as-is.
 *
 * Inline styles only — Satori does not support Tailwind, <style>, or CSS
 * filters. No Tailwind classes, no lucide icons, no client components.
 */
export function OpengraphCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 90px",
        background: "#030B1C",
        color: "#F8FAFC",
        fontFamily: "system-ui, sans-serif",
        position: "relative",
      }}
    >
      {/* subtle grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* translucent glows (no CSS filter  not supported by the renderer) */}
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -80,
          width: 480,
          height: 480,
          borderRadius: 9999,
          background: "rgba(22,139,255,0.30)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -140,
          left: -80,
          width: 420,
          height: 420,
          borderRadius: 9999,
          background: "rgba(123,77,255,0.26)",
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <svg viewBox="0 0 64 64" width="46" height="46">
          <rect width="64" height="64" rx="14" fill="#0A1833" />
          <path
            d="M17 19 L32 47 L47 19"
            stroke="#168BFF"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M25 31.5 h14"
            stroke="#7B4DFF"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <div
          style={{
            fontSize: 30,
            letterSpacing: 4,
            color: "#B8C7DD",
            fontWeight: 600,
          }}
        >
          VEYRIVO TECHNOLOGIES
        </div>
      </div>

      <div
        style={{
          marginTop: 36,
          fontSize: 62,
          lineHeight: 1.12,
          fontWeight: 800,
          maxWidth: 940,
        }}
      >
        Building the Intelligent Digital Future of Business.
      </div>

      <div
        style={{
          marginTop: 28,
          fontSize: 26,
          color: "#B8C7DD",
          display: "flex",
          alignItems: "center",
          gap: 18,
        }}
      >
        <span style={{ color: "#168BFF", letterSpacing: 3 }}>SOFTWARE</span>
        <span>·</span>
        <span style={{ color: "#168BFF", letterSpacing: 3 }}>AI</span>
        <span>·</span>
        <span style={{ color: "#168BFF", letterSpacing: 3 }}>AUTOMATION</span>
      </div>
    </div>
  );
}
