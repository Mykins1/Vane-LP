/**
 * sections/Footer.jsx
 *
 * Site footer: logo, tagline, navigation links, copyright.
 * Links come from /data so they can be updated in one place.
 */

import { VaneIcon } from "../icons";
import { Container } from "../layout";
import { FOOTER_LINKS } from "../../data";
import { colors, typography } from "../../styles/tokens";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: `1px solid ${colors.borderDefault}`,
        padding: "40px 0 32px",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      <Container>
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 24,
            marginBottom: 28,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                marginBottom: 7,
              }}
            >
              <VaneIcon size={22} />
              <span
                style={{
                  fontWeight: typography.weights.extrabold,
                  fontSize: 15,
                }}
              >
                Vane
              </span>
            </div>
            <p
              style={{
                fontSize: 13,
                color: colors.textSecondary,
                lineHeight: 1.55,
                maxWidth: 200,
              }}
            >
              One feed for everything that matters.
            </p>
          </div>

          {/* Links */}
          <nav
            style={{
              display: "flex",
              gap: 18,
              flexWrap: "wrap",
              alignItems: "center",
            }}
            aria-label="Footer navigation"
          >
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{ fontSize: 13, color: colors.textSecondary }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div
          style={{
            borderTop: `1px solid ${colors.borderDefault}`,
            paddingTop: 18,
            fontSize: 12,
            color: colors.textTertiary,
          }}
        >
          © 2026 Vane. Built for managers who have enough tabs open.
        </div>
      </Container>
    </footer>
  );
}
