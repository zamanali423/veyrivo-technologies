import type { Project } from "@/content/projects";

const tone: Record<Project["tone"], { main: string; deep: string; soft: string }> = {
  blue: { main: "#168BFF", deep: "#7B4DFF", soft: "rgba(22,139,255,0.22)" },
  violet: { main: "#7B4DFF", deep: "#9B6CFF", soft: "rgba(123,77,255,0.24)" },
  cyan: { main: "#18C8F5", deep: "#168BFF", soft: "rgba(24,200,245,0.2)" },
};

const bars = [42, 68, 50, 82, 60, 92, 74];

/** Abstract app-mark glyph rendered with plain SVG (Satori-safe). */
function AppMark({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M8 16 V12 M12 16 V8 M16 16 V10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Small check dot used in the capabilities list. */
function CheckDot({ color }: { color: string }) {
  return (
    <div
      style={{
        width: 12,
        height: 12,
        borderRadius: 99,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: toneSoft(color),
        border: `1px solid ${color}`,
        flexShrink: 0,
      }}
    >
      <svg width="6" height="6" viewBox="0 0 12 12" fill="none">
        <path
          d="M2.5 6.5 L5 9 L9.5 3.5"
          stroke={color}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/** Soft translucent fill for check dots (kept simple for Satori). */
function toneSoft(color: string): string {
  return `${color}33`;
}

/**
 * Abstract dashboard mockup used to generate real image assets for each
 * project via ImageResponse. All visuals are decorative skeleton shapes  no
 * fake metrics, clients, or claims. Inline styles only: Satori does not
 * support Tailwind, <style>, or advanced CSS (no grid, no filters).
 */
export function ProjectMockup({ project }: { project: Project }) {
  const t = tone[project.tone];
  const caps = project.capabilities.slice(0, 3);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 26,
        backgroundImage:
          "linear-gradient(150deg, #101D40 0%, #0A1833 55%, #030B1C 100%)",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Window */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          borderRadius: 14,
          border: "1px solid rgba(255,255,255,0.09)",
          backgroundColor: "rgba(3,11,28,0.55)",
          overflow: "hidden",
        }}
      >
        {/* Chrome bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "0 14px",
            height: 34,
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            backgroundColor: "rgba(255,255,255,0.02)",
          }}
        >
          <div style={{ display: "flex", gap: 5 }}>
            <div style={{ width: 7, height: 7, borderRadius: 99, backgroundColor: "#F87171" }} />
            <div style={{ width: 7, height: 7, borderRadius: 99, backgroundColor: "#FBBF24" }} />
            <div style={{ width: 7, height: 7, borderRadius: 99, backgroundColor: "#34D399" }} />
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              fontSize: 9,
              letterSpacing: 2,
              color: "#8FA3C2",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            Veyrivo · {project.label}
          </div>
          <div
            style={{
              fontSize: 9,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              fontWeight: 700,
              color: t.main,
              border: `1px solid ${t.main}`,
              borderRadius: 99,
              padding: "2px 9px",
              backgroundColor: toneSoft(t.main),
            }}
          >
            {project.status}
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", minHeight: 0 }}>
          {/* Sidebar */}
          <div
            style={{
              width: 92,
              display: "flex",
              flexDirection: "column",
              gap: 14,
              padding: 14,
              borderRight: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 9,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: `linear-gradient(135deg, ${t.main}, ${t.deep})`,
              }}
            >
              <AppMark color="#FFFFFF" size={18} />
            </div>
            {[0.95, 0.75, 0.85, 0.6].map((w, i) => (
              <div
                key={i}
                style={{
                  height: 7,
                  width: `${w * 100}%`,
                  borderRadius: 4,
                  backgroundColor: i === 0 ? t.soft : "rgba(255,255,255,0.08)",
                  border: i === 0 ? `1px solid ${t.main}` : "none",
                }}
              />
            ))}
            <div style={{ flex: 1 }} />
            <div
              style={{
                height: 22,
                borderRadius: 6,
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            />
          </div>

          {/* Main panel */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 12,
              padding: 16,
              minWidth: 0,
            }}
          >
            {/* Title */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: 17,
                  fontWeight: 800,
                  color: "#FFFFFF",
                  letterSpacing: -0.2,
                  lineHeight: 1.2,
                }}
              >
                {project.title}
              </div>
              <div
                style={{
                  marginTop: 3,
                  display: "flex",
                  alignItems: "center",
                  fontSize: 8.5,
                  letterSpacing: 1.6,
                  textTransform: "uppercase",
                  color: "#B8C7DD",
                  fontWeight: 600,
                }}
              >
                {project.badge} · {project.label}
              </div>
            </div>

            {/* Metric cards  abstract, no numbers */}
            <div style={{ display: "flex", gap: 9 }}>
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    padding: 9,
                    borderRadius: 9,
                    border: "1px solid rgba(255,255,255,0.07)",
                    backgroundColor: "rgba(255,255,255,0.03)",
                  }}
                >
                  <div
                    style={{ height: 5, width: "62%", borderRadius: 3, backgroundColor: "rgba(255,255,255,0.12)" }}
                  />
                  <div
                    style={{
                      height: 13,
                      width: i === 1 ? "86%" : "70%",
                      borderRadius: 4,
                      ...(i === 1
                        ? { backgroundImage: `linear-gradient(90deg, ${t.main}, ${t.deep})` }
                        : {}),
                      backgroundColor:
                        i === 1 ? "transparent" : "rgba(255,255,255,0.16)",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Chart */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                padding: "10px 12px",
                borderRadius: 9,
                border: "1px solid rgba(255,255,255,0.07)",
                backgroundColor: "rgba(255,255,255,0.03)",
              }}
            >
              <div style={{ height: 5, width: 96, borderRadius: 3, backgroundColor: "rgba(255,255,255,0.12)" }} />
              <div style={{ display: "flex", alignItems: "flex-end", gap: 7, height: 64 }}>
                {bars.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${h}%`,
                      borderRadius: 3,
                      ...(i % 3 === 2
                        ? { backgroundImage: `linear-gradient(to top, ${t.main}, ${t.deep})` }
                        : {}),
                      backgroundColor:
                        i % 3 === 2 ? "transparent" : "rgba(255,255,255,0.09)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Capabilities (real, accurate) + coming soon */}
            <div style={{ display: "flex", gap: 9 }}>
              <div
                style={{
                  flex: 1.4,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 7,
                  padding: "9px 11px",
                  borderRadius: 9,
                  border: "1px solid rgba(255,255,255,0.07)",
                  backgroundColor: "rgba(255,255,255,0.03)",
                }}
              >
                {caps.map((c) => (
                  <div key={c} style={{ display: "flex", alignItems: "center", gap: 7, minWidth: 0 }}>
                    <CheckDot color={t.main} />
                    <div
                      style={{
                        fontSize: 9,
                        color: "#D8E2F2",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {c}
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 7,
                  padding: "9px 11px",
                  borderRadius: 9,
                  border: "1px solid rgba(255,255,255,0.07)",
                  backgroundColor: "rgba(255,255,255,0.03)",
                }}
              >
                <div style={{ height: 5, width: "70%", borderRadius: 3, backgroundColor: "rgba(255,255,255,0.12)" }} />
                <div style={{ height: 5, width: "48%", borderRadius: 3, backgroundColor: "rgba(255,255,255,0.09)" }} />
                <div
                  style={{
                    marginTop: 3,
                    height: 5,
                    borderRadius: 3,
                    backgroundImage: `linear-gradient(90deg, ${t.main}, ${t.deep})`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
