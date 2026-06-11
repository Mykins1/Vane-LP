/**
 * sections/Nav.jsx
 *
 * Sticky top navigation bar.
 * Receives `scrolled` as a prop so the parent (App) owns scroll state —
 * this component is purely presentational.
 */

import { VaneIcon } from "../icons";
import { Container } from "../layout";
import { colors, typography } from "../../styles/tokens";

export default function Nav({ scrolled }) {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        padding: "10px 0px",
        background: scrolled
          ? "rgba(250,250,249,0.97)"
          : "rgba(250,250,249,0.94)",
        borderBottom: `1px solid ${colors.borderDefault}`,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        transition: "background 0.3s",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Container>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <VaneIcon />
          <span
            style={{
              fontWeight: typography.weights.extrabold,
              fontSize: 17,
              letterSpacing: "-0.02em",
              whiteSpace: "nowrap",
            }}
          >
            Vane
          </span>
        </div>
        <p style={{ fontSize: 13, color: colors.textSecondary }}>
          One feed for everything that matters.
        </p>
      </Container>
    </nav>
  );
}
