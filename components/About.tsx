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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "#0a0a0a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          background: "radial-gradient(ellipse at 100% 50%, rgba(201,169,110,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* Left: Image placeholder */}
        <FadeIn delay={0}>
          <div style={{ position: "relative" }}>
            <div
              style={{
                aspectRatio: "3/4",
                border: "1px solid #2a2a2a",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Salon photo */}
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80"
                alt="TINO Hair Salon"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* Decorative corner */}
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  width: "40px",
                  height: "40px",
                  borderTop: "1px solid #c9a96e",
                  borderLeft: "1px solid #c9a96e",
                  opacity: 0.6,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  right: "16px",
                  width: "40px",
                  height: "40px",
                  borderBottom: "1px solid #c9a96e",
                  borderRight: "1px solid #c9a96e",
                  opacity: 0.6,
                }}
              />
            </div>

            {/* Gold accent box */}
            <div
              style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                width: "100px",
                height: "100px",
                border: "1px solid rgba(201,169,110,0.2)",
                zIndex: -1,
              }}
            />
          </div>
        </FadeIn>

        {/* Right: Text */}
        <div>
          <FadeIn delay={0.2}>
            <p
              style={{
                color: "#c9a96e",
                fontSize: "0.7rem",
                letterSpacing: "0.4em",
                marginBottom: "1.5rem",
                fontFamily: "var(--font-playfair), serif",
              }}
            >
              OUR STORY
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#f5f0e8",
                lineHeight: 1.2,
                marginBottom: "1.5rem",
              }}
            >
              美しさと
              <br />
              静寂の交差点
            </h2>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div
              style={{
                width: "50px",
                height: "1px",
                background: "#c9a96e",
                marginBottom: "2rem",
              }}
            />
          </FadeIn>

          <FadeIn delay={0.5}>
            <p
              style={{
                color: "rgba(245,240,232,0.65)",
                lineHeight: 2,
                marginBottom: "1.5rem",
                fontSize: "0.95rem",
              }}
            >
              TINOは、北海道・札幌の静かな一角に佇む、こだわりの美容院です。
              喧騒を離れた上質な空間の中で、お客様一人ひとりの個性と美しさを
              丁寧に引き出すことをコンセプトとしています。
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p
              style={{
                color: "rgba(245,240,232,0.65)",
                lineHeight: 2,
                marginBottom: "2.5rem",
                fontSize: "0.95rem",
              }}
            >
              経験豊富なスタイリストが、最新のトレンドを取り入れながらも
              お客様の生活スタイルに寄り添ったヘアデザインをご提案。
              素材にこだわったトリートメントで、髪本来の輝きを取り戻します。
            </p>
          </FadeIn>

          <FadeIn delay={0.7}>
            <div style={{ display: "flex", gap: "3rem" }}>
              {[
                { num: "2015", label: "創業" },
                { num: "3,000+", label: "ご来店" },
                { num: "8", label: "スタイリスト" },
              ].map((item) => (
                <div key={item.label}>
                  <div
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontSize: "1.8rem",
                      fontWeight: 700,
                      color: "#c9a96e",
                      lineHeight: 1,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {item.num}
                  </div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: "rgba(245,240,232,0.5)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
