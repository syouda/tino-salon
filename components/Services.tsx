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

const services = [
  {
    category: "CUT",
    ja: "カット",
    items: [
      { name: "カット（シャンプー込み）", price: "¥7,700" },
      { name: "カット + ブロー", price: "¥8,800" },
      { name: "前髪カット", price: "¥1,650" },
    ],
  },
  {
    category: "COLOR",
    ja: "カラー",
    items: [
      { name: "全体カラー", price: "¥12,100" },
      { name: "リタッチカラー", price: "¥8,800" },
      { name: "ハイライト", price: "¥16,500〜" },
      { name: "インナーカラー", price: "¥13,200〜" },
    ],
  },
  {
    category: "PERM",
    ja: "パーマ",
    items: [
      { name: "デジタルパーマ", price: "¥18,700" },
      { name: "コールドパーマ", price: "¥13,200" },
      { name: "縮毛矯正", price: "¥22,000〜" },
    ],
  },
  {
    category: "TREATMENT",
    ja: "トリートメント",
    items: [
      { name: "ホームケアトリートメント", price: "¥3,300" },
      { name: "サロントリートメント", price: "¥6,600" },
      { name: "プレミアムトリートメント", price: "¥11,000" },
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
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
          backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(201,169,110,0.05) 0%, transparent 60%)",
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
              MENU & PRICE
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
              Services
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

        {/* Services grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2px",
          }}
          className="services-grid"
        >
          {services.map((service, i) => (
            <FadeIn key={service.category} delay={i * 0.1}>
              <div
                style={{
                  background: "#1a1a1a",
                  padding: "3rem",
                  border: "1px solid #2a2a2a",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,169,110,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#2a2a2a";
                }}
              >
                {/* Category number */}
                <div
                  style={{
                    position: "absolute",
                    top: "1.5rem",
                    right: "2rem",
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "4rem",
                    fontWeight: 700,
                    color: "rgba(201,169,110,0.05)",
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Category header */}
                <div style={{ marginBottom: "2rem" }}>
                  <p
                    style={{
                      color: "#c9a96e",
                      fontSize: "0.65rem",
                      letterSpacing: "0.3em",
                      marginBottom: "0.5rem",
                      fontFamily: "var(--font-playfair), serif",
                    }}
                  >
                    {service.category}
                  </p>
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 600,
                      color: "#f5f0e8",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {service.ja}
                  </h3>
                  <div
                    style={{
                      width: "30px",
                      height: "1px",
                      background: "#c9a96e",
                      marginTop: "1rem",
                      opacity: 0.5,
                    }}
                  />
                </div>

                {/* Price list */}
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {service.items.map((item, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        padding: "0.9rem 0",
                        borderBottom: `1px solid #2a2a2a`,
                        gap: "1rem",
                      }}
                    >
                      <span
                        style={{
                          color: "rgba(245,240,232,0.7)",
                          fontSize: "0.9rem",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {item.name}
                      </span>
                      <span
                        style={{
                          color: "#c9a96e",
                          fontFamily: "var(--font-playfair), serif",
                          fontSize: "0.95rem",
                          whiteSpace: "nowrap",
                          fontWeight: 600,
                        }}
                      >
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Note */}
        <FadeIn delay={0.4}>
          <p
            style={{
              textAlign: "center",
              marginTop: "2rem",
              color: "rgba(245,240,232,0.35)",
              fontSize: "0.75rem",
              letterSpacing: "0.05em",
            }}
          >
            ※ 表示価格はすべて税込みです。髪の長さ・状態により料金が変わる場合があります。
          </p>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
