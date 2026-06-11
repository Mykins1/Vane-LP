/**
 * layout/index.jsx
 *
 * Structural layout components used by every section on the page.
 * They own the max-width, padding, and scroll-reveal animation.
 *
 * These are the "bones" — sections don't define their own wrappers,
 * they compose from these.
 */

import { colors, layout, typography } from "../../styles/tokens";
import { useFadeUp } from "../../hooks/useFadeUp";

/* ─── Container ───────────────────────────────────────────────── */

/**
 * Centered content wrapper with standard max-width and horizontal padding.
 * Used inside Section and anywhere else that needs it.
 */
export function Container({ children, style: extra }) {
  return (
    <div
      style={{
        maxWidth: layout.maxWidth,
        margin: "0 auto",
        padding: `0 ${layout.pagePaddingX}px`,
        boxSizing: "border-box",
        width: "100%",
        ...extra,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Section ─────────────────────────────────────────────────── */

/**
 * Full-width section wrapper with fade-up scroll animation.
 *
 * @param {string}  id   – HTML id for anchor scroll targets
 * @param {string}  bg   – background color (defaults to page base)
 * @param {number}  paddingY – vertical padding override
 */
export function Section({ id, bg, paddingY, children }) {
  const [ref, isVisible] = useFadeUp();

  return (
    <section
      id={id}
      ref={ref}
      style={{
        background: bg || colors.bgBase,
        padding: `${paddingY ?? layout.sectionPaddingY}px 0`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(26px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        width: "100%",
      }}
    >
      <Container>{children}</Container>
    </section>
  );
}

/* ─── Typography helpers ──────────────────────────────────────── */

/**
 * Eyebrow / section label — small all-caps tag above headings
 */
export function SectionLabel({ children }) {
  return (
    <p
      style={{
        fontSize: 10,
        fontWeight: typography.weights.bold,
        letterSpacing: "0.13em",
        textTransform: "uppercase",
        color: colors.textSecondary,
        marginBottom: 14,
      }}
    >
      {children}
    </p>
  );
}

/**
 * Section heading — responsive size via clamp().
 * @param {number} mb – margin-bottom in px
 */
export function SectionH2({ children, mb = 40 }) {
  return (
    <h2
      style={{
        fontSize: "clamp(24px, 5vw, 38px)",
        fontWeight: typography.weights.extrabold,
        lineHeight: 1.12,
        color: colors.textPrimary,
        marginBottom: mb,
      }}
    >
      {children}
    </h2>
  );
}
