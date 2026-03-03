"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0f0f0f 100%)",
        overflow: "hidden",
        padding: 0,
      }}
    >
      {/* Background decorative elements */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(ellipse at 20% 50%, rgba(201,169,110,0.06) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(201,169,110,0.04) 0%, transparent 50%)
          `,
        }}
      />

      {/* Thin horizontal gold line top */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        style={{
          position: "absolute",
          top: "72px",
          left: "10%",
          right: "10%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.4), transparent)",
        }}
      />

      {/* Main content */}
      <div style={{ textAlign: "center", zIndex: 1, padding: "0 2rem" }}>
        {/* Eyebrow text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            color: "#c9a96e",
            fontSize: "0.7rem",
            letterSpacing: "0.4em",
            marginBottom: "2rem",
            fontFamily: "var(--font-playfair), serif",
          }}
        >
          SAPPORO, JAPAN
        </motion.p>

        {/* TINO logo */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(5rem, 18vw, 14rem)",
            fontWeight: 700,
            letterSpacing: "0.2em",
            color: "#f5f0e8",
            lineHeight: 1,
            margin: "0 0 1.5rem 0",
          }}
        >
          TINO
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{
            width: "80px",
            height: "1px",
            background: "#c9a96e",
            margin: "0 auto 1.5rem",
          }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
            letterSpacing: "0.35em",
            color: "rgba(245,240,232,0.7)",
            marginBottom: "3rem",
          }}
        >
          Hair Salon, Sapporo
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <a
            href="#contact"
            style={{
              display: "inline-block",
              border: "1px solid #c9a96e",
              color: "#c9a96e",
              padding: "16px 48px",
              fontSize: "0.75rem",
              letterSpacing: "0.3em",
              fontFamily: "var(--font-playfair), serif",
              textDecoration: "none",
              transition: "background 0.4s, color 0.4s",
              position: "relative",
              overflow: "hidden",
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
            MAKE A RESERVATION
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            color: "rgba(201,169,110,0.6)",
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            fontFamily: "var(--font-playfair), serif",
          }}
        >
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, rgba(201,169,110,0.6), transparent)",
          }}
        />
      </motion.div>

      {/* Bottom gold line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        style={{
          position: "absolute",
          bottom: 0,
          left: "10%",
          right: "10%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.3), transparent)",
        }}
      />
    </section>
  );
}
