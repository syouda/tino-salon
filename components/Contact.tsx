"use client";

import { useState } from "react";
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

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#1a1a1a",
  border: "1px solid #2a2a2a",
  color: "#f5f0e8",
  padding: "14px 16px",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.3s",
  fontFamily: "inherit",
  letterSpacing: "0.02em",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  color: "#c9a96e",
  fontSize: "0.65rem",
  letterSpacing: "0.3em",
  marginBottom: "0.6rem",
  fontFamily: "var(--font-playfair), serif",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const getInputStyle = (field: string): React.CSSProperties => ({
    ...inputStyle,
    borderColor: focused === field ? "rgba(201,169,110,0.5)" : "#2a2a2a",
  });

  return (
    <section
      id="contact"
      style={{
        background: "#0a0a0a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(ellipse at 50% 100%, rgba(201,169,110,0.05) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
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
              GET IN TOUCH
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
              Contact
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div
              style={{
                width: "50px",
                height: "1px",
                background: "#c9a96e",
                margin: "0 auto 1.5rem",
              }}
            />
          </FadeIn>
          <FadeIn delay={0.3}>
            <p
              style={{
                color: "rgba(245,240,232,0.55)",
                fontSize: "0.9rem",
                lineHeight: 1.8,
              }}
            >
              ご予約・お問い合わせはこちらのフォームよりお気軽にどうぞ。
              <br />
              営業日2日以内にご返信いたします。
            </p>
          </FadeIn>
        </div>

        {sent ? (
          <FadeIn>
            <div
              style={{
                textAlign: "center",
                padding: "4rem 2rem",
                border: "1px solid rgba(201,169,110,0.3)",
                background: "#1a1a1a",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "2rem",
                  color: "#c9a96e",
                  marginBottom: "1rem",
                }}
              >
                ✓
              </div>
              <p
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "1.2rem",
                  color: "#f5f0e8",
                  marginBottom: "0.8rem",
                }}
              >
                送信完了しました
              </p>
              <p style={{ color: "rgba(245,240,232,0.55)", fontSize: "0.9rem" }}>
                お問い合わせありがとうございます。
                <br />
                担当者よりご連絡いたします。
              </p>
            </div>
          </FadeIn>
        ) : (
          <FadeIn delay={0.3}>
            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {/* Name */}
                <div>
                  <label style={labelStyle} htmlFor="name">
                    NAME / お名前
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="山田 花子"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    style={getInputStyle("name")}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label style={labelStyle} htmlFor="phone">
                    PHONE / 電話番号
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="080-0000-0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused(null)}
                    style={getInputStyle("phone")}
                  />
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle} htmlFor="message">
                    MESSAGE / メッセージ
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    placeholder="ご予約の希望日時、施術内容などをご記入ください"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    style={{
                      ...getInputStyle("message"),
                      resize: "vertical",
                      minHeight: "160px",
                    }}
                  />
                </div>

                {/* Submit button */}
                <div style={{ textAlign: "center", marginTop: "1rem" }}>
                  <button
                    type="submit"
                    style={{
                      background: "transparent",
                      border: "1px solid #c9a96e",
                      color: "#c9a96e",
                      padding: "16px 64px",
                      fontSize: "0.75rem",
                      letterSpacing: "0.3em",
                      fontFamily: "var(--font-playfair), serif",
                      cursor: "pointer",
                      transition: "background 0.3s, color 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#c9a96e";
                      e.currentTarget.style.color = "#0a0a0a";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#c9a96e";
                    }}
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </form>
          </FadeIn>
        )}

        {/* Direct contact info */}
        <FadeIn delay={0.4}>
          <div
            style={{
              marginTop: "3rem",
              paddingTop: "3rem",
              borderTop: "1px solid #2a2a2a",
              display: "flex",
              justifyContent: "center",
              gap: "3rem",
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "PHONE", value: "011-000-0000" },
              { label: "EMAIL", value: "info@tino-salon.jp" },
            ].map((item) => (
              <div key={item.label} style={{ textAlign: "center" }}>
                <p
                  style={{
                    color: "#c9a96e",
                    fontSize: "0.6rem",
                    letterSpacing: "0.3em",
                    marginBottom: "0.4rem",
                    fontFamily: "var(--font-playfair), serif",
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    color: "rgba(245,240,232,0.7)",
                    fontSize: "0.9rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
