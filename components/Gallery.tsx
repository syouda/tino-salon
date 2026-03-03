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
  { label: "Natural Highlight", size: "tall", img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80" },
  { label: "Sleek Straight", size: "normal", img: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80" },
  { label: "Soft Waves", size: "normal", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80" },
  { label: "Ash Color", size: "wide", img: "https://images.unsplash.com/photo-1522337660859-02b9ba2436b0?w=900&q=80" },
  { label: "Bob Style", size: "normal", img: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80" },
  { label: "Texture Perm", size: "normal", img: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80" },
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
                background: "#111",
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
                  background: "#111",
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
                background: "#111",
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
                  background: "#111",
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
  const item = galleryItems[index];
  return (
    <>
      {/* Actual photo */}
      <img
        src={item.img}
        alt={item.label}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
      {/* Subtle overlay gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.6) 100%)",
        }}
      />
      {/* Hover overlay */}
      <div
        className="gallery-overlay"
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(201,169,110,0.08)",
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
