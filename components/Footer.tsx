"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid #1e1e1e",
        padding: "4rem 2rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Top section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "4rem",
            paddingBottom: "4rem",
            borderBottom: "1px solid #1e1e1e",
          }}
          className="footer-grid"
        >
          {/* Logo & tagline */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "2rem",
                fontWeight: 700,
                color: "#c9a96e",
                letterSpacing: "0.3em",
                marginBottom: "1rem",
              }}
            >
              TINO
            </div>
            <p
              style={{
                color: "rgba(245,240,232,0.4)",
                fontSize: "0.8rem",
                lineHeight: 1.8,
                letterSpacing: "0.02em",
              }}
            >
              美しさと静寂の交差点。
              <br />
              あなただけの輝きを。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                color: "#c9a96e",
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                marginBottom: "1.2rem",
                fontFamily: "var(--font-playfair), serif",
              }}
            >
              NAVIGATION
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Gallery", href: "#gallery" },
                { label: "Access", href: "#access" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.href} style={{ marginBottom: "0.6rem" }}>
                  <a
                    href={item.href}
                    style={{
                      color: "rgba(245,240,232,0.45)",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      transition: "color 0.3s",
                      letterSpacing: "0.05em",
                      fontFamily: "var(--font-playfair), serif",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#c9a96e")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(245,240,232,0.45)")
                    }
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SNS */}
          <div>
            <p
              style={{
                color: "#c9a96e",
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                marginBottom: "1.2rem",
                fontFamily: "var(--font-playfair), serif",
              }}
            >
              FOLLOW US
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { name: "Instagram", href: "https://instagram.com/" },
                { name: "Twitter / X", href: "https://twitter.com/" },
                { name: "LINE", href: "https://line.me/" },
              ].map((sns) => (
                <a
                  key={sns.name}
                  href={sns.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "rgba(245,240,232,0.45)",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    transition: "color 0.3s",
                    letterSpacing: "0.05em",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#c9a96e")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(245,240,232,0.45)")
                  }
                >
                  <span
                    style={{
                      width: "20px",
                      height: "1px",
                      background: "currentColor",
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                  {sns.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: copyright */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              color: "rgba(245,240,232,0.2)",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
            }}
          >
            © {currentYear} TINO Hair Salon. All rights reserved.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.2)",
              fontSize: "0.7rem",
              letterSpacing: "0.05em",
            }}
          >
            〒060-0003 北海道札幌市中央区北3条西5丁目
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
