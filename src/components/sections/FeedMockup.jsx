/**
 * sections/FeedMockup.jsx
 *
 * The animated browser-chrome UI demo shown in the hero.
 * Simulates cards streaming in one by one on mount.
 *
 * This is a "section component" — it owns its own data animation
 * state but pulls display data from /data and primitives from /ui.
 */

import { useState, useEffect } from "react";
import { FEED_CARDS } from "../../data";
import { Badge, Button } from "../ui";
import { colors, radii, shadows } from "../../styles/tokens";

/* ─── Sub-components (private to this file) ─────────────────────── */

function BrowserChrome() {
  return (
    <div
      style={{
        background: colors.bgSubtle,
        borderBottom: `1px solid ${colors.borderDefault}`,
        padding: "10px 14px",
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      {/* Traffic lights */}
      <div style={{ display: "flex", gap: 5, flexShrink: 0 }}>
        {[colors.urgent, colors.warning, colors.success].map((c) => (
          <span
            key={c}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: c,
              display: "block",
            }}
          />
        ))}
      </div>
      {/* Fake URL bar */}
      <div
        style={{
          flex: 1,
          textAlign: "center",
          fontSize: 11,
          color: colors.textTertiary,
          fontFamily: "monospace",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        vane/feed
      </div>
    </div>
  );
}

function FeedHeader({ count }) {
  return (
    <div
      style={{
        padding: "12px 14px 6px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        style={{ fontWeight: 700, fontSize: 13, color: colors.textPrimary }}
      >
        Your feed
      </span>
      <span style={{ fontSize: 11, color: colors.textTertiary }}>
        {count} new · updated now
      </span>
    </div>
  );
}

function FeedCard({ card, visible }) {
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.38s ease, transform 0.38s ease",
        background: colors.bgWhite,
        border: `1px solid ${colors.borderDefault}`,
        borderLeft: card.urgent
          ? `3px solid ${colors.urgent}`
          : `1px solid ${colors.borderDefault}`,
        borderRadius: radii.md,
        padding: "10px 11px",
        marginBottom: 7,
        boxSizing: "border-box",
        minWidth: 0,
      }}
    >
      {/* Top row: source + urgent badge + timestamp */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 3,
          gap: 6,
          minWidth: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            minWidth: 0,
            flexShrink: 1,
            overflow: "hidden",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: card.dot,
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: 9,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: colors.textSecondary,
              flexShrink: 0,
            }}
          >
            {card.source}
          </span>
          {card.urgent && <Badge tone="urgent">Urgent</Badge>}
        </div>
        <span
          style={{
            fontSize: 10,
            color: colors.textTertiary,
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          {card.time}
        </span>
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: 12,
          fontWeight: 700,
          color: colors.textPrimary,
          marginBottom: 2,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {card.title}
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontSize: 11,
          color: colors.textSecondary,
          marginBottom: 8,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {card.subtitle}
      </div>

      {/* Action buttons */}
      <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
        {card.actions.map((action) => (
          <Button
            key={action}
            variant="ghost"
            size="sm"
          >
            {action}
          </Button>
        ))}
      </div>
    </div>
  );
}

/* ─── Main export ───────────────────────────────────────────────── */

export default function FeedMockup() {
  const [visibleIds, setVisibleIds] = useState([]);

  // Stagger cards in one by one
  useEffect(() => {
    FEED_CARDS.forEach((card, i) => {
      setTimeout(
        () => setVisibleIds((prev) => [...prev, card.id]),
        350 + i * 200,
      );
    });
  }, []);

  return (
    <div
      style={{
        background: colors.bgWhite,
        boxShadow: shadows.mockup,
        overflow: "hidden",
        maxWidth: 560,
        width: "100%",
        margin: "0 auto",
        boxSizing: "border-box",
        borderRadius: radii.xl,
      }}
    >
      <BrowserChrome />
      <FeedHeader count={FEED_CARDS.length} />
      <div style={{ padding: "2px 10px 12px" }}>
        {FEED_CARDS.map((card) => (
          <FeedCard
            key={card.id}
            card={card}
            visible={visibleIds.includes(card.id)}
          />
        ))}
      </div>
    </div>
  );
}
