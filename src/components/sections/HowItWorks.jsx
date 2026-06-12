/**
 * sections/HowItWorks.jsx
 *
 * "How it works" — numbered steps + integration logos.
 */

import { STEPS, INTEGRATIONS } from "../../data";
import { Section, SectionLabel, SectionH2 } from "../layout";
import { IntegrationChip } from "../ui";
import { colors } from "../../styles/tokens";

function Step({ n, title, text }) {
  return (
    <div style={{ boxSizing: "border-box" }}>
      <div
        style={{
          fontSize: 42,
          fontWeight: 900,
          color: "#EEEEED",
          lineHeight: 1,
          marginBottom: 10,
          fontVariantNumeric: "tabular-nums",
          WebkitTextStroke: "1px #000000",
        }}
      >
        {n}
      </div>
      <div
        style={{
          fontWeight: 700,
          fontSize: 15,
          color: colors.textPrimary,
          marginBottom: 8,
        }}
      >
        {title}
      </div>
      <p
        style={{
          fontSize: 14,
          color: colors.textSecondary,
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        {text}
      </p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <Section id="howItWorks" bg={colors.bgWhite}>
      <SectionLabel>How it works</SectionLabel>
      <SectionH2>How Vane clears the noise.</SectionH2>

      {/* Steps grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%, 240px), 1fr))",
          gap: 28,
          marginBottom: 44,
        }}
      >
        {STEPS.map((s) => (
          <Step key={s.id} n={s.n} title={s.title} text={s.text} />
        ))}
      </div>

      {/* Integration chips */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        {INTEGRATIONS.map((i) => (
          <IntegrationChip icon={i.icon} name={i.name} />
        ))}
        <span style={{ fontSize: 13, color: colors.textSecondary }}>
          + more coming soon
        </span>
      </div>
    </Section>
  );
}
