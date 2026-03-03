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
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

const galleryItems = [
  { label: "Natural Highlight", size: "tall" },
  { label: "Sleek Straight", size: "normal" },
  { label: "Soft Waves", size: "normal" },
  { label: "Ash Color", size: "wide" },
  { label: "Bob Style", size: "normal" },
  { label: "Texture Perm", size: "normal" },
];

const gradients = [
  "linear-gradient(135deg, #1a1a1a 0%, #252525 100%)",
  "linear-gradient(135deg, #1c1a18 0%, #2a2520 100%)",
  "linear-gradient(135deg, #181818 0%, #222222 100%)",
  "linear-gradient(135deg, #1a1a18 0%, #28261e 100%)",
  "linear-gradient(135deg, #1a1818 0%, #252020 100%)",
  "linear-gradient(135deg, #181a18 0%, #202522 100%)",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      style={{ background: "#0a0a0a", position: "relative", overflow: "hidden" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
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
              OUR WORK
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
              Gallery
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

        {/* Masonry-like grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto",
            gap: "8px",
          }}
          className="gallery-grid"
        >
          {/* Item 1 - tall */}
          <FadeIn delay={0}>
            <div
              style={{
                gridRow: "span 2",
                background: gradients[0],
                border: "1px solid #1e1e1e",
                aspectRatio: "3/5",
                display: "flex",
                alignItems: "flex-end",
                padding: "1.5rem",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                transition: "border-color 0.3s",
              }}
              className="gallery-item"
            >
              <GalleryPlaceholder index={0} />
              <GalleryLabel label={galleryItems[0].label} />
            </div>
          </FadeIn>

          {/* Items 2 & 3 - normal */}
          {[1, 2].map((i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                style={{
                  background: gradients[i],
                  border: "1px solid #1e1e1e",
                  aspectRatio: "4/3",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "1.2rem",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "border-color 0.3s",
                }}
                className="gallery-item"
              >
                <GalleryPlaceholder index={i} />
                <GalleryLabel label={galleryItems[i].label} />
              </div>
            </FadeIn>
          ))}

          {/* Item 4 - wide (col span 2) */}
          <FadeIn delay={0.2}>
            <div
              style={{
                gridColumn: "2 / span 2",
                background: gradients[3],
                border: "1px solid #1e1e1e",
                aspectRatio: "16/7",
                display: "flex",
                alignItems: "flex-end",
                padding: "1.2rem",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                transition: "border-color 0.3s",
              }}
              className="gallery-item"
            >
              <GalleryPlaceholder index={3} />
              <GalleryLabel label={galleryItems[3].label} />
            </div>
          </FadeIn>

          {/* Items 5 & 6 */}
          {[4, 5].map((i) => (
            <FadeIn key={i} delay={(i - 3) * 0.1}>
              <div
                style={{
                  background: gradients[i],
                  border: "1px solid #1e1e1e",
                  aspectRatio: "4/3",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "1.2rem",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "border-color 0.3s",
                }}
                className="gallery-item"
              >
                <GalleryPlaceholder index={i} />
                <GalleryLabel label={galleryItems[i].label} />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <style>{`
        .gallery-item:hover {
          border-color: rgba(201,169,110,0.4) !important;
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1 !important;
        }
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .gallery-grid > *:first-child {
            grid-row: auto !important;
            aspect-ratio: 4/3 !important;
          }
          .gallery-grid > *:nth-child(4) {
            grid-column: auto !important;
            aspect-ratio: 4/3 !important;
          }
        }
        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function GalleryPlaceholder({ index }: { index: number }) {
  return (
    <>
      {/* Subtle overlay gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.5) 100%)",
        }}
      />
      {/* Center icon */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -60%)",
          opacity: 0.12,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "3rem",
            color: "#c9a96e",
            fontWeight: 700,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>
      {/* Hover overlay */}
      <div
        className="gallery-overlay"
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(201,169,110,0.06)",
          opacity: 0,
          transition: "opacity 0.3s",
        }}
      />
    </>
  );
}

function GalleryLabel({ label }: { label: string }) {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <p
        style={{
          color: "rgba(245,240,232,0.8)",
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
          fontFamily: "var(--font-playfair), serif",
        }}
      >
        {label}
      </p>
    </div>
  );
}
