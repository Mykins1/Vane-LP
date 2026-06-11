/**
 * sections/WhyVaneExists.jsx
 *
 * "Why Vane Exists" — the three problem cards.
 * Pure display: data comes from /data, layout from /layout.
 */

import { PROBLEMS } from "../../data";
import { Section, SectionLabel, SectionH2 } from "../layout";
import { colors, radii } from "../../styles/tokens";

function ProblemCard({ icon, title, text }) {
  return (
    <div
      style={{
        border: `1px solid ${colors.borderDefault}`,
        borderRadius: radii.xl,
        padding: "22px 20px",
        background: colors.bgWhite,
        boxSizing: "border-box",
      }}
    >
      <div style={{ marginBottom: 12 }}>{icon}</div>
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

export default function WhyVaneExists() {
  return (
    <Section>
      <SectionLabel>Why Vane Exists</SectionLabel>
      <SectionH2>
        Too many tools. Too much switching. Things falling through.
      </SectionH2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
          gap: 16,
        }}
      >
        {PROBLEMS.map((p) => (
          <ProblemCard key={p.id} icon={p.icon} title={p.title} text={p.text} />
        ))}
      </div>
    </Section>
  );
}
