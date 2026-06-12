/**
 * sections/Waitlist.jsx
 *
 * Email capture form with a simple success state.
 *
 * Currently validates client-side only (`email.includes("@")`).
 * When you wire up a real backend, replace the `submit` function
 * with an API call — everything else stays the same.
 */

import { useState } from "react";
import { Section, SectionH2 } from "../layout";
import { Button, TextInput, Checkbox } from "../ui";
import { colors, radii } from "../../styles/tokens";

function SuccessCard() {
  return (
    <div
      style={{
        background: colors.bgWhite,
        border: `1px solid ${colors.successBg}`,
        borderRadius: radii.xl,
        padding: "28px 20px",
        maxWidth: 360,
        margin: "0 auto",
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: 20, color: colors.success, marginBottom: 8 }}>
        ✓
      </div>
      <div
        style={{
          fontWeight: 700,
          fontSize: 16,
          color: colors.textPrimary,
          marginBottom: 6,
        }}
      >
        You're on the list.
      </div>
      <div style={{ fontSize: 14, color: colors.textSecondary }}>
        We'll be in touch when your spot opens up.
      </div>
    </div>
  );
}

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [isFounder, setIsFounder] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const submit = () => {
    // TODO: replace with POST to /api/waitlist
    if (email.includes("@")) setSubmitted(true);
  };

  return (
    <Section id="waitlist" bg={colors.bgMuted}>
      <div
        style={{
          maxWidth: 560,
          margin: "0 auto",
          textAlign: "center",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        <SectionH2 mb={14}>Get early access.</SectionH2>
        <p
          style={{
            fontSize: 16,
            color: colors.textSecondary,
            lineHeight: 1.7,
            marginBottom: 32,
          }}
        >
          Vane is rolling out in small batches. Leave your email and we'll reach
          out when your spot is ready.
        </p>

        {submitted ? (
          <SuccessCard />
        ) : (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                alignItems: "stretch",
                maxWidth: 480,
                margin: "0 auto",
                boxSizing: "border-box",
              }}
            >
              <TextInput
                type="email"
                placeholder="you@yourcompany.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && submit()}
              />
              <Button onClick={submit} variant="primary" width="100%">
                Join the Waitlist
              </Button>
            </div>

            <div
              style={{
                maxWidth: 480,
                margin: "16px auto 0",
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Checkbox
                checked={isFounder}
                onChange={() => setIsFounder((p) => !p)}
                label="I am a solo founder or agency owner (Prioritize my access)"
              />
            </div>
          </>
        )}
      </div>
    </Section>
  );
}
