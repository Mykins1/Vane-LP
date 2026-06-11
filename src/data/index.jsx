/**
 * data/index.js
 *
 * All static content for the landing page lives here.
 * Components import data; they don't define it inline.
 *
 * When you eventually connect to a CMS or API, this file is the
 * only thing that changes — no component edits needed.
 */

import { ToolIcon, SwitchIcon, SlipIcon } from "../components/icons";
import {
  StripeIcon,
  GmailIcon,
  NotionIcon,
  SlackIcon,
} from "../components/icons";

/* ─── Feed demo cards ─────────────────────────────────────────── */

export const FEED_CARDS = [
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

/* ─── Problem cards ───────────────────────────────────────────── */

// Icons rendered as JSX elements here because they're tightly coupled
// to display; no logic involved.
export const PROBLEMS = [
  {
    id: "tool-overload",
    icon: <ToolIcon />,
    title: "Tool overload",
    text: "You have a payment processor, an inbox, a project tracker, and a messaging app. No single place to see what actually needs your attention right now.",
  },
  {
    id: "constant-switching",
    icon: <SwitchIcon />,
    title: "Constant switching",
    text: "Every context switch costs you focus. By the time you've checked messages, emails, and tasks, you've forgotten why you opened any of them.",
  },
  {
    id: "things-slip",
    icon: <SlipIcon />,
    title: "Things fall through",
    text: "A failed payment you didn't catch. A message you meant to reply to. A task that was overdue before you noticed.",
  },
];

/* ─── How it works steps ──────────────────────────────────────── */

export const STEPS = [
  {
    id: "connect",
    n: "01",
    title: "Connect your stack",
    text: "Link your payment processor, inbox, project tracker, and messaging app in jut a few clicks. Vane aggregates your fragmented data into a single, secure stream.",
  },
  {
    id: "unified",
    n: "02",
    title: "Set your priorities",
    text: "Define what moves the needle for your business. Vane filters out the noise and ranks your feed so urgent client messages and key payments always sit at the top.",
  },
  {
    id: "act",
    n: "03",
    title: "Take action instantly",
    text: "Reply to pings, mark tasks as complete, or review financial updates directly within the feed. Handle your operations without ever switching tabs.",
  },
];

/* ─── Integration logos ───────────────────────────────────────── */

export const INTEGRATIONS = [
  { id: "stripe", name: "Stripe", icon: <StripeIcon /> },
  { id: "gmail", name: "Gmail", icon: <GmailIcon /> },
  { id: "notion", name: "Notion", icon: <NotionIcon /> },
  { id: "slack", name: "Slack", icon: <SlackIcon /> },
];

/* ─── Footer links ────────────────────────────────────────────── */

export const FOOTER_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Twitter / X", href: "https://x.com/vane_so" },
  { label: "hello@vane.so", href: "mailto:hello@vane.so" },
];
