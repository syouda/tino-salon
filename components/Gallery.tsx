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
      style={{ height: "100%" }}
    >
      {children}
    </motion.div>
  );
}

const galleryItems = [
  { label: "Natural Highlight", img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80" },
  { label: "Sleek Straight",    img: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80" },
  { label: "Soft Waves",        img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80" },
  { label: "Ash Color",         img: "https://images.unsplash.com/photo-1522337660859-02b9ba2436b0?w=900&q=80" },
  { label: "Bob Style",         img: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80" },
  { label: "Texture Perm",      img: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80" },
];

const baseItem: React.CSSProperties = {
  width: "100%",
  height: "100%",
  minHeight: "220px",
  display: "flex",
  alignItems: "flex-end",
  padding: "1.2rem",
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
  border: "1px solid #1e1e1e",
  background: "#111",
  transition: "border-color 0.3s",
};

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

        {/* Grid */}
        <div className="gallery-grid">
          {/* Item 1 — tall (spans 2 rows on desktop) */}
          <div className="gw-tall">
            <FadeIn delay={0}>
              <div style={baseItem} className="gallery-item">
                <GalleryPhoto item={galleryItems[0]} />
                <GalleryLabel label={galleryItems[0].label} />
              </div>
            </FadeIn>
          </div>

          {/* Items 2 & 3 — normal */}
          {[1, 2].map((i) => (
            <div key={i} className="gw-normal">
              <FadeIn delay={i * 0.1}>
                <div style={baseItem} className="gallery-item">
                  <GalleryPhoto item={galleryItems[i]} />
                  <GalleryLabel label={galleryItems[i].label} />
                </div>
              </FadeIn>
            </div>
          ))}

          {/* Item 4 — wide (spans 2 cols on desktop) */}
          <div className="gw-wide">
            <FadeIn delay={0.2}>
              <div style={baseItem} className="gallery-item">
                <GalleryPhoto item={galleryItems[3]} />
                <GalleryLabel label={galleryItems[3].label} />
              </div>
            </FadeIn>
          </div>

          {/* Items 5 & 6 — normal */}
          {[4, 5].map((i) => (
            <div key={i} className="gw-normal">
              <FadeIn delay={(i - 3) * 0.1}>
                <div style={baseItem} className="gallery-item">
                  <GalleryPhoto item={galleryItems[i]} />
                  <GalleryLabel label={galleryItems[i].label} />
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* ── Desktop grid ── */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 260px;
          gap: 8px;
        }
        .gw-tall   { grid-row: span 2; }
        .gw-wide   { grid-column: 2 / span 2; }
        .gw-normal { /* default */ }

        /* ── Tablet (≤768px): 2 columns, no spans ── */
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 220px;
          }
          .gw-tall  { grid-row: auto; }
          .gw-wide  { grid-column: auto; }
        }

        /* ── Mobile (≤480px): 1 column ── */
        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 240px;
          }
        }

        /* ── Hover effects ── */
        .gallery-item:hover {
          border-color: rgba(201,169,110,0.4) !important;
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}

function GalleryPhoto({ item }: { item: { label: string; img: string } }) {
  return (
    <>
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
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.6) 100%)",
        }}
      />
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
          color: "rgba(245,240,232,0.9)",
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
