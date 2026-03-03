"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

const hours = [
  { day: "月・火・木・金", time: "10:00 – 19:00" },
  { day: "土・日・祝日", time: "09:00 – 18:00" },
  { day: "水曜日", time: "定休日" },
];

export default function Access() {
  return (
    <section
      id="access"
      style={{
        background: "#111111",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(ellipse at 0% 100%, rgba(201,169,110,0.04) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <FadeIn>
            <p
              style={{
                color: "#c9a96e",
                fontSize: "0.7rem",
                letterSpacing: "0.4em",
                marginBottom: "1.2rem",
                fontFamily: "var(--font-playfair), serif",
              }}
            >
              FIND US
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 700,
                color: "#f5f0e8",
                marginBottom: "1.2rem",
              }}
            >
              Access
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div
              style={{
                width: "50px",
                height: "1px",
                background: "#c9a96e",
                margin: "0 auto",
              }}
            />
          </FadeIn>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="access-grid"
        >
          {/* Left: Map placeholder */}
          <FadeIn delay={0}>
            <div
              style={{
                background: "#1a1a1a",
                border: "1px solid #2a2a2a",
                aspectRatio: "4/3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Map grid lines for visual effect */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `
                    linear-gradient(rgba(201,169,110,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(201,169,110,0.05) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Location pin */}
              <div style={{ textAlign: "center", zIndex: 1 }}>
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    background: "#c9a96e",
                    borderRadius: "50%",
                    margin: "0 auto 8px",
                    boxShadow: "0 0 0 4px rgba(201,169,110,0.2), 0 0 0 8px rgba(201,169,110,0.1)",
                  }}
                />
                <p
                  style={{
                    color: "#c9a96e",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    fontFamily: "var(--font-playfair), serif",
                  }}
                >
                  TINO
                </p>
              </div>

              {/* Map label */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  right: "1rem",
                  color: "rgba(245,240,232,0.2)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  fontFamily: "var(--font-playfair), serif",
                }}
              >
                SAPPORO MAP
              </div>
            </div>
          </FadeIn>

          {/* Right: Info */}
          <div>
            {/* Address */}
            <FadeIn delay={0.1}>
              <div
                style={{
                  marginBottom: "2.5rem",
                  paddingBottom: "2.5rem",
                  borderBottom: "1px solid #2a2a2a",
                }}
              >
                <p
                  style={{
                    color: "#c9a96e",
                    fontSize: "0.65rem",
                    letterSpacing: "0.3em",
                    marginBottom: "0.8rem",
                    fontFamily: "var(--font-playfair), serif",
                  }}
                >
                  ADDRESS
                </p>
                <p
                  style={{
                    color: "#f5f0e8",
                    fontSize: "1rem",
                    lineHeight: 1.8,
                    letterSpacing: "0.05em",
                  }}
                >
                  〒060-0003
                  <br />
                  北海道札幌市中央区北3条西5丁目1-1
                  <br />
                  プレミアムビル 3F
                </p>
              </div>
            </FadeIn>

            {/* Access */}
            <FadeIn delay={0.2}>
              <div
                style={{
                  marginBottom: "2.5rem",
                  paddingBottom: "2.5rem",
                  borderBottom: "1px solid #2a2a2a",
                }}
              >
                <p
                  style={{
                    color: "#c9a96e",
                    fontSize: "0.65rem",
                    letterSpacing: "0.3em",
                    marginBottom: "0.8rem",
                    fontFamily: "var(--font-playfair), serif",
                  }}
                >
                  ACCESS
                </p>
                <p
                  style={{
                    color: "rgba(245,240,232,0.7)",
                    fontSize: "0.9rem",
                    lineHeight: 2,
                  }}
                >
                  札幌市営地下鉄 大通駅 徒歩3分
                  <br />
                  JR札幌駅 徒歩10分
                </p>
              </div>
            </FadeIn>

            {/* Hours */}
            <FadeIn delay={0.3}>
              <div>
                <p
                  style={{
                    color: "#c9a96e",
                    fontSize: "0.65rem",
                    letterSpacing: "0.3em",
                    marginBottom: "1rem",
                    fontFamily: "var(--font-playfair), serif",
                  }}
                >
                  OPENING HOURS
                </p>
                {hours.map((h) => (
                  <div
                    key={h.day}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0.7rem 0",
                      borderBottom: "1px solid #2a2a2a",
                      gap: "1rem",
                    }}
                  >
                    <span
                      style={{
                        color:
                          h.time === "定休日"
                            ? "rgba(245,240,232,0.35)"
                            : "rgba(245,240,232,0.7)",
                        fontSize: "0.85rem",
                      }}
                    >
                      {h.day}
                    </span>
                    <span
                      style={{
                        color:
                          h.time === "定休日" ? "#666" : "#c9a96e",
                        fontFamily: "var(--font-playfair), serif",
                        fontSize: "0.85rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .access-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
