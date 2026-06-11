/**
 * sections/Hero.jsx
 *
 * The page hero: headline, sub-copy, CTAs, and the FeedMockup demo.
 *
 * `heroVis` is controlled by the parent (App) — it fires on mount
 * via a short setTimeout so the animation is guaranteed to play
 * even when the page loads instantly.
 */

import { colors, typography } from "../../styles/tokens";
import { Button } from "../ui";
import FeedMockup from "./FeedMockup";

export default function Hero({ heroVis, onGetAccess, onSeeHow }) {
  return (
    <div
      style={{
        padding: "28px 20px 48px",
        maxWidth: 1080,
        margin: "0 auto",
        textAlign: "center",
        boxSizing: "border-box",
        width: "100%",
        opacity: heroVis ? 1 : 0,
        transform: heroVis ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      {/* Eyebrow */}
      <p
        style={{
          fontSize: 10,
          fontWeight: typography.weights.bold,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: colors.textSecondary,
          marginBottom: 18,
        }}
      >
        Now in private beta
      </p>

      {/* Headline */}
      <h1
        style={{
          fontSize: "clamp(32px, 8vw, 62px)",
          fontWeight: typography.weights.black,
          lineHeight: 1.06,
          letterSpacing: "-0.03em",
          color: colors.textPrimary,
          marginBottom: 18,
        }}
      >
        Everything pointing
        <br />
        one way.
      </h1>

      {/* Sub-copy */}
      <p
        style={{
          fontSize: "clamp(15px, 2.5vw, 18px)",
          color: colors.textSecondary,
          maxWidth: 500,
          margin: "0 auto 28px",
          lineHeight: 1.72,
        }}
      >
        Vane unifies your business tools into a single, actionable feed. Stop drowning in open tabs—see every payment, client message, and project task in one centralized view, ranked by what moves the needle.
      </p>

      {/* CTAs */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0,
          maxWidth: 320,
          margin: "0 auto 18px",
        }}
      >
        <Button
          onClick={onGetAccess}
          variant="primary"
          width="80%"
          borderRadius="10px 10px 0 0"
        >
          Get early access
        </Button>
        <Button
          onClick={onSeeHow}
          variant="secondary"
          width="80%"
          borderRadius="0 0 10px 10px"
        >
          See how it works
        </Button>
      </div>

      {/* Social proof */}
      <p style={{ fontSize: 13, color: colors.textPrimary, marginBottom: 44 }}>
        Join 1,200+ founders already on the list
      </p>

      <FeedMockup />
    </div>
  );
}
