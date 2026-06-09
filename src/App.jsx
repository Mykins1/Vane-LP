import { useState, useEffect, useRef } from "react";

/* Icons */
const VaneIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 28 28"
    fill="none"
    style={{ flexShrink: 0 }}
  >
    <path d="M4 24 L14 4 L24 14 L14 18 Z" fill="#1D4ED8" opacity="0.9" />
    <path
      d="M14 18 L14 24"
      stroke="#1D4ED8"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
const StripeIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 20 20"
    fill="none"
    style={{ flexShrink: 0 }}
  >
    <rect width="20" height="20" rx="4" fill="#635BFF" />
    <path
      d="M10 6c-1.5 0-2.5.6-2.5 1.6 0 1.8 3.5 1.7 3.5 3.2 0 .7-.6 1.1-1.6 1.1-.9 0-1.7-.3-2.4-.7v1.7c.7.3 1.5.5 2.4.5 1.6 0 2.7-.7 2.7-1.9 0-1.9-3.5-1.8-3.5-3.2 0-.6.5-1 1.4-1 .8 0 1.5.2 2.1.5V6.4C11.4 6.1 10.7 6 10 6z"
      fill="white"
    />
  </svg>
);
const GmailIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 20 20"
    fill="none"
    style={{ flexShrink: 0 }}
  >
    <rect width="20" height="20" rx="4" fill="#EA4335" />
    <path d="M4 6.5l6 4.5 6-4.5" stroke="white" strokeWidth="1.5" fill="none" />
    <rect
      x="4"
      y="6"
      width="12"
      height="9"
      rx="1"
      stroke="white"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);
const NotionIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 20 20"
    fill="none"
    style={{ flexShrink: 0 }}
  >
    <rect width="20" height="20" rx="4" fill="#191919" />
    <text x="5" y="15" fontSize="12" fill="white" fontWeight="bold">
      N
    </text>
  </svg>
);
const SlackIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 20 20"
    fill="none"
    style={{ flexShrink: 0 }}
  >
    <rect width="20" height="20" rx="4" fill="#4A154B" />
    <circle cx="7.5" cy="7.5" r="2" fill="#E01E5A" />
    <circle cx="12.5" cy="7.5" r="2" fill="#36C5F0" />
    <circle cx="7.5" cy="12.5" r="2" fill="#2EB67D" />
    <circle cx="12.5" cy="12.5" r="2" fill="#ECB22E" />
  </svg>
);
const ToolIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#6B7280"
    strokeWidth="1.5"
  >
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);
const SwitchIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#6B7280"
    strokeWidth="1.5"
  >
    <path d="M8 3L4 7l4 4M4 7h16M16 21l4-4-4-4M20 17H4" />
  </svg>
);
const SlipIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#6B7280"
    strokeWidth="1.5"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
);
const CheckSvg = () => (
  <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
    <path
      d="M3 8l3.5 3.5L13 5"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/*  Data */
const FEED_CARDS = [
  {
    id: 1,
    source: "Stripe",
    dot: "#22C55E",
    time: "2 min ago",
    urgent: true,
    title: "Payment failed — $840.00",
    subtitle: "Acme Corp · Card declined (insufficient funds)",
    actions: ["Retry charge", "Email customer"],
  },
  {
    id: 2,
    source: "Gmail",
    dot: "#E24B4A",
    time: "14 min ago",
    urgent: false,
    title: "Re: Q3 proposal — quick question",
    subtitle: "Sarah Chen · 'Just one thing before we sign off…'",
    actions: ["Reply", "Archive"],
  },
  {
    id: 3,
    source: "Notion",
    dot: "#A855F7",
    time: "1 hr ago",
    urgent: false,
    title: "Task overdue: Finalize onboarding copy",
    subtitle: "Assigned to you · Was due yesterday",
    actions: ["Mark done", "Snooze"],
  },
  {
    id: 4,
    source: "Slack",
    dot: "#F59E0B",
    time: "2 hr ago",
    urgent: false,
    title: "@you in #design — feedback needed",
    subtitle: "Marcus: 'Can you take a quick look at the new header?'",
    actions: ["Open thread"],
  },
];

/* Hooks */
function useFadeUp() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold: 0.08 },
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, []);
  return [ref, vis];
}

/* Feed mockup */
function FeedMockup() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    FEED_CARDS.forEach((c, i) =>
      setTimeout(() => setShown((p) => [...p, c.id]), 350 + i * 200),
    );
  }, []);
  return (
    <div
      style={{
        background: "#fff",
        // border: "1px solid #E5E7EB",
        // borderRadius: 14,
        boxShadow:
          "0 16px 56px -8px rgba(0,0,0,0.11),0 4px 16px -2px rgba(0,0,0,0.05)",
        overflow: "hidden",
        maxWidth: 560,
        width: "100%",
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      {/* chrome */}
      <div
        style={{
          background: "#F9FAFB",
          borderBottom: "1px solid #E5E7EB",
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div style={{ display: "flex", gap: 5, flexShrink: 0 }}>
          {["#E24B4A", "#F59E0B", "#22C55E"].map((c) => (
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
        <div
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 11,
            color: "#9CA3AF",
            fontFamily: "monospace",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          vane.io/feed
        </div>
      </div>
      {/* feed header */}
      <div
        style={{
          padding: "12px 14px 6px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontWeight: 700, fontSize: 13, color: "#1A1A18" }}>
          Your feed
        </span>
        <span style={{ fontSize: 11, color: "#9CA3AF" }}>
          4 new · updated now
        </span>
      </div>
      {/* cards */}
      <div style={{ padding: "2px 10px 12px" }}>
        {FEED_CARDS.map((card) => (
          <div
            key={card.id}
            style={{
              opacity: shown.includes(card.id) ? 1 : 0,
              transform: shown.includes(card.id)
                ? "translateY(0)"
                : "translateY(12px)",
              transition: "opacity 0.38s ease,transform 0.38s ease",
              background: "#fff",
              border: "1px solid #E5E7EB",
              borderLeft: card.urgent
                ? "3px solid #E24B4A"
                : "1px solid #E5E7EB",
              borderRadius: 9,
              padding: "10px 11px",
              marginBottom: 7,
              boxSizing: "border-box",
              minWidth: 0,
            }}
          >
            {/* top row */}
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
                    color: "#6B7280",
                    flexShrink: 0,
                  }}
                >
                  {card.source}
                </span>
                {card.urgent && (
                  <span
                    style={{
                      background: "#FEF2F2",
                      color: "#E24B4A",
                      fontSize: 9,
                      fontWeight: 700,
                      padding: "1px 6px",
                      borderRadius: 20,
                      border: "1px solid #FECACA",
                      flexShrink: 0,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Urgent
                  </span>
                )}
              </div>
              <span
                style={{
                  fontSize: 10,
                  color: "#9CA3AF",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {card.time}
              </span>
            </div>
            {/* title + subtitle — clipped, never overflow */}
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#1A1A18",
                marginBottom: 2,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {card.title}
            </div>
            <div
              style={{
                fontSize: 11,
                color: "#6B7280",
                marginBottom: 8,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {card.subtitle}
            </div>
            {/* actions */}
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
              {card.actions.map((a) => (
                <button
                  key={a}
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    padding: "3px 9px",
                    borderRadius: 5,
                    border: "1px solid #E5E7EB",
                    background: "#F9FAFB",
                    color: "#374151",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    whiteSpace: "nowrap",
                  }}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/*Section wrapper*/
function Section({ id, bg, children }) {
  const [ref, vis] = useFadeUp();
  return (
    <section
      id={id}
      ref={ref}
      style={{
        background: bg || "#FAFAF9",
        padding: "68px 0",
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(26px)",
        transition: "opacity 0.6s ease,transform 0.6s ease",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "0 20px",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        {children}
      </div>
    </section>
  );
}

const SectionLabel = ({ children }) => (
  <p
    style={{
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.13em",
      textTransform: "uppercase",
      color: "#6B7280",
      marginBottom: 14,
    }}
  >
    {children}
  </p>
);

const SectionH2 = ({ children, mb = 40 }) => (
  <h2
    style={{
      fontSize: "clamp(24px,5vw,38px)",
      fontWeight: 800,
      lineHeight: 1.12,
      color: "#1A1A18",
      marginBottom: mb,
    }}
  >
    {children}
  </h2>
);

/* Problem section*/
const PROBLEMS = [
  {
    icon: <ToolIcon />,
    title: "Tool overload",
    text: "You have a payment processor, an inbox, a project tracker, and a messaging app. No single place to see what actually needs your attention ASAP.",
  },
  {
    icon: <SwitchIcon />,
    title: "Constant switching",
    text: "Every context switch costs you focus. By the time you've checked your messages, emails, and tasks, you've forgotten why you opened any of them.",
  },
  {
    icon: <SlipIcon />,
    title: "Things fall through",
    text: "A failed payment you didn't catch. A message you meant to reply to. A task that was overdue before you noticed.",
  },
];

function WhyVaneExist() {
  return (
    <Section>
      <SectionLabel>Why Vane Exists</SectionLabel>
      <SectionH2>
        Too many tools. Too much switching. Things falling through.
      </SectionH2>
      {/* single-column on mobile, 3-col on desktop via inline grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,260px),1fr))",
          gap: 16,
        }}
      >
        {PROBLEMS.map((p) => (
          <div
            key={p.title}
            style={{
              border: "1px solid #E5E7EB",
              borderRadius: 12,
              padding: "22px 20px",
              background: "#fff",
              boxSizing: "border-box",
            }}
          >
            <div style={{ marginBottom: 12 }}>{p.icon}</div>
            <div
              style={{
                fontWeight: 700,
                fontSize: 15,
                color: "#1A1A18",
                marginBottom: 8,
              }}
            >
              {p.title}
            </div>
            <p
              style={{
                fontSize: 14,
                color: "#6B7280",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              {p.text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* How it works section */
const STEPS = [
  {
    n: "01",
    title: "Sign in to your tools",
    text: "Connect your payment processor, inbox, project tracker, and messaging app by signing in the same way you'd log into any website. No technical setup, no developer needed.",
  },
  {
    n: "02",
    title: "Everything shows up in one list",
    text: "Vane pulls in your payments, emails, tasks, and messages and lines them up in one place. You decide which tools and item types sit at the top, so what matters most to you is always first",
  },
  {
    n: "03",
    title: "Handle it all without opening other apps",
    text: "Reply to an email, retry a failed payment, tick off a task — right here. No tab switching required.",
  },
];
const LOGOS = [
  { name: "Stripe", el: <StripeIcon /> },
  { name: "Gmail", el: <GmailIcon /> },
  { name: "Notion", el: <NotionIcon /> },
  { name: "Slack", el: <SlackIcon /> },
];

function HowItWorksSection() {
  return (
    <Section id="howItWorks" bg="#fff">
      <SectionLabel>How it works</SectionLabel>
      <SectionH2>Connect your tools once. Vane does the rest.</SectionH2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,240px),1fr))",
          gap: 28,
          marginBottom: 44,
        }}
      >
        {STEPS.map((s) => (
          <div key={s.n} style={{ boxSizing: "border-box" }}>
            <div
              style={{
                fontSize: 42,
                fontWeight: 900,
                color: "#EEEEED",
                lineHeight: 1,
                marginBottom: 10,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {s.n}
            </div>
            <div
              style={{
                fontWeight: 700,
                fontSize: 15,
                color: "#1A1A18",
                marginBottom: 8,
              }}
            >
              {s.title}
            </div>
            <p
              style={{
                fontSize: 14,
                color: "#6B7280",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              {s.text}
            </p>
          </div>
        ))}
      </div>
      {/* integration chips */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          flexWrap: "wrap",
        }}
      >
        {LOGOS.map((l) => (
          <div
            key={l.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              background: "#F9FAFB",
              border: "1px solid #E5E7EB",
              borderRadius: 8,
              padding: "6px 12px",
              flexShrink: 0,
            }}
          >
            {l.el}
            <span style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>
              {l.name}
            </span>
          </div>
        ))}
        <span style={{ fontSize: 13, color: "#9CA3AF" }}>
          + more coming soon
        </span>
      </div>
    </Section>
  );
}

/* Waitlist section */
function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [done, setDone] = useState(false);
  const submit = () => {
    if (email.includes("@")) setDone(true);
  };

  return (
    <Section id="waitlist" bg="#F5F5F3">
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
            color: "#6B7280",
            lineHeight: 1.7,
            marginBottom: 32,
          }}
        >
          Vane is rolling out in small batches. Leave your email and we'll reach
          out when your spot is ready.
        </p>
        {done ? (
          <div
            style={{
              background: "#fff",
              border: "1px solid #D1FAE5",
              borderRadius: 12,
              padding: "28px 20px",
              maxWidth: 360,
              margin: "0 auto",
              boxSizing: "border-box",
            }}
          >
            <div style={{ fontSize: 20, color: "#22C55E", marginBottom: 8 }}>
              ✓
            </div>
            <div
              style={{
                fontWeight: 700,
                fontSize: 16,
                color: "#1A1A18",
                marginBottom: 6,
              }}
            >
              You're on the list.
            </div>
            <div style={{ fontSize: 14, color: "#6B7280" }}>
              We'll be in touch when your spot opens up.
            </div>
          </div>
        ) : (
          <>
            {/* stacked on mobile, row on desktop */}
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
              <input
                type="email"
                placeholder="you@yourcompany.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && submit()}
                style={{
                  width: "100%",
                  padding: "13px 16px",
                  fontSize: 15,
                  border: "1px solid #D1D5DB",
                  borderRadius: 10,
                  outline: "none",
                  background: "#fff",
                  color: "#1A1A18",
                  fontFamily: "inherit",
                  boxSizing: "border-box",
                }}
              />
              <button
                onClick={submit}
                style={{
                  width: "100%",
                  background: "#1D4ED8",
                  color: "#fff",
                  border: "none",
                  borderRadius: 10,
                  padding: "13px 20px",
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  boxSizing: "border-box",
                }}
              >
                Join waitlist
              </button>
            </div>
            <label
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: 10,
                cursor: "pointer",
                marginTop: 16,
                maxWidth: 480,
                margin: "16px auto 0",
                boxSizing: "border-box",
              }}
              onClick={() => setChecked((p) => !p)}
            >
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 4,
                  flexShrink: 0,
                  marginTop: 1,
                  border: `2px solid ${checked ? "#1D4ED8" : "#D1D5DB"}`,
                  background: checked ? "#1D4ED8" : "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.15s",
                }}
              >
                {checked && <CheckSvg />}
              </div>
              <span
                style={{
                  fontSize: 13,
                  color: "#6B7280",
                  textAlign: "left",
                  lineHeight: 1.5,
                }}
              >
                I'm a small business owner or solo founder
              </span>
            </label>
          </>
        )}
      </div>
    </Section>
  );
}

/* Root */
export default function VaneLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [heroVis, setHeroVis] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    setTimeout(() => setHeroVis(true), 80);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      style={{
        fontFamily: "'Sora',system-ui,sans-serif",
        background: "#FAFAF9",
        color: "#1A1A18",
        lineHeight: 1.6,
        overflowX: "hidden",
        minWidth: 0,
      }}
    >
      {/* Google Fonts — loaded via link so @import doesn't race */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        ::selection{background:#DBEAFE}
        img,svg{display:block;max-width:100%}
        button{font-family:'Sora',system-ui,sans-serif}
        input,button{-webkit-appearance:none}
      `}</style>

      {/* ── NAV ── */}
      <nav
        style={{
          position: "sticky",

          zIndex: 100,
          padding: "10px 20px ",
          background: "rgba(250,250,249,0.94)",
          borderBottom: "1px solid #E5E7EB",
          transition: "background 0.3s,border-color 0.3s",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            // height: 60,
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            // justifyContent: "space-between",

            minWidth: 0,
          }}
        >
          {/* logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              flexShrink: 0,
              minWidth: 0,
            }}
          >
            <VaneIcon />
            <span
              style={{
                fontWeight: 800,
                fontSize: 17,
                letterSpacing: "-0.02em",
                whiteSpace: "nowrap",
              }}
            >
              Vane
            </span>
          </div>

          <p style={{ fontSize: 13, color: "#6b7280" }}>
            One feed for everything that matters.
          </p>
        </div>
      </nav>

      {/* ── HERO ── */}
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
          transition: "opacity 0.8s ease,transform 0.8s ease",
        }}
      >
        <p
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#6B7280",
            marginBottom: 18,
          }}
        >
          Now in private beta
        </p>

        <h1
          style={{
            fontSize: "clamp(32px,8vw,62px)",
            fontWeight: 900,
            lineHeight: 1.06,
            letterSpacing: "-0.03em",
            color: "#1A1A18",
            marginBottom: 18,
          }}
        >
          Everything pointing
          <br />
          one way.
        </h1>

        <p
          style={{
            fontSize: "clamp(15px,2.5vw,18px)",
            color: "#6B7280",
            maxWidth: 500,
            margin: "0 auto 28px",
            lineHeight: 1.72,
          }}
        >
          Vane is a unified feed for your business tools. See every payment,
          message, and task in one place. Ranked by what you decide matters
          most, and act on them without switching tabs.
        </p>

        {/* CTAs — stacked on mobile */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
            maxWidth: 320,
            margin: "0 auto 18px",
          }}
        >
          <button
            onClick={() => scrollTo("waitlist")}
            style={{
              background: "#1D4ED8",
              color: "#fff",
              border: "none",
              borderRadius: "10px 10px 0px 0px",
              padding: "13px 24px",
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
              width: "80%",
            }}
          >
            Get early access
          </button>
          <button
            onClick={() => scrollTo("howItWorks")}
            style={{
              background: "none",
              border: "1px solid #D1D5DB",
              borderRadius: "0px 0px 10px 10px",
              padding: "13px 24px",
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              color: "#374151",
              width: "80%",
            }}
          >
            See how it works
          </button>
        </div>

        <p style={{ fontSize: 13, color: "#000000", marginBottom: 44 }}>
          Join 1,200+ founders already on the list
        </p>

        <FeedMockup />
      </div>

      {/* ── SECTIONS ── */}
      <WhyVaneExist />
      <HowItWorksSection />
      <WaitlistSection />

      {/* ── FOOTER ── */}
      <footer
        style={{
          borderTop: "1px solid #E5E7EB",
          padding: "40px 20px 32px",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            boxSizing: "border-box",
            width: "100%",
          }}
        >
          {/* top row — stacks on mobile */}
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
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  marginBottom: 7,
                }}
              >
                <VaneIcon />
                <span style={{ fontWeight: 800, fontSize: 15 }}>Vane</span>
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "#6B7280",
                  lineHeight: 1.55,
                  maxWidth: 200,
                }}
              >
                One feed for everything that matters.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                gap: 18,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {["Privacy", "Terms", "Twitter/X", "hello@vane.so"].map((l) => (
                <a
                  key={l}
                  href="#"
                  style={{
                    fontSize: 13,
                    color: "#6B7280",
                    textDecoration: "none",
                  }}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid #E5E7EB",
              paddingTop: 18,
              fontSize: 12,
              color: "#9CA3AF",
            }}
          >
            © 2026 Vane. Built for managers who have enough tabs open.
          </div>
        </div>
      </footer>
    </div>
  );
}
