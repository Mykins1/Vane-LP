/**
 * ui/index.jsx
 *
 * Reusable, dumb UI primitives.
 * These components know nothing about the Vane product — they are
 * pure building blocks that can be dropped into any section.
 *
 * Rules for this file:
 *  - No business logic
 *  - No hardcoded copy
 *  - Props control everything
 */

import { colors, radii, typography } from "../../styles/tokens";
import { CheckIcon } from "../icons";

/* ─── Button ──────────────────────────────────────────────────── */

/**
 * @param {"primary"|"secondary"|"ghost"} variant
 * @param {"sm"|"md"} size
 * @param {string} width   e.g. "100%" or "80%"
 * @param {string} borderRadius  override corner style e.g. "10px 10px 0 0"
 */
export function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  width,
  borderRadius,
  style: extraStyle,
  ...rest
}) {
  const base = {
    fontFamily: typography.fontFamily,
    cursor: "pointer",
    border: "none",
    borderRadius: borderRadius ?? radii.lg,
    transition: "opacity 0.15s, background 0.15s",
    width: width ?? "auto",
    ...extraStyle,
  };

  const sizeStyles = {
    sm: {
      fontSize: 10,
      padding: "3px 9px",
      fontWeight: typography.weights.semibold,
    },
    md: {
      fontSize: 15,
      padding: "13px 24px",
      fontWeight: typography.weights.bold,
    },
  };

  const variantStyles = {
    primary: {
      background: colors.brandPrimary,
      color: colors.textOnDark,
    },
    secondary: {
      background: "none",
      color: "#374151",
      border: `1px solid ${colors.borderLight}`,
    },
    ghost: {
      background: colors.bgSubtle,
      color: "#374151",
      border: `1px solid ${colors.borderDefault}`,
    },
  };

  return (
    <button
      onClick={onClick}
      style={{ ...base, ...sizeStyles[size], ...variantStyles[variant] }}
      {...rest}
    >
      {children}
    </button>
  );
}

/* ─── TextInput ───────────────────────────────────────────────── */

export function TextInput({
  value,
  onChange,
  onKeyDown,
  placeholder,
  type = "text",
  style: extraStyle,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      style={{
        width: "100%",
        padding: "13px 16px",
        fontSize: 15,
        border: `1px solid ${colors.borderLight}`,
        borderRadius: radii.lg,
        outline: "none",
        background: colors.bgWhite,
        color: colors.textPrimary,
        fontFamily: typography.fontFamily,
        boxSizing: "border-box",
        ...extraStyle,
      }}
    />
  );
}

/* ─── Checkbox ────────────────────────────────────────────────── */

export function Checkbox({ checked, onChange, label }) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 10,
        cursor: "pointer",
        userSelect: "none",
      }}
      onClick={onChange}
    >
      <div
        style={{
          width: 18,
          height: 18,
          borderRadius: 4,
          flexShrink: 0,
          marginTop: 1,
          border: `2px solid ${checked ? colors.brandPrimary : colors.borderLight}`,
          background: checked ? colors.brandPrimary : colors.bgWhite,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.15s",
        }}
      >
        {checked && <CheckIcon />}
      </div>
      <span
        style={{
          fontSize: 13,
          color: colors.textSecondary,
          textAlign: "left",
          lineHeight: 1.5,
        }}
      >
        {label}
      </span>
    </label>
  );
}

/* ─── Badge ───────────────────────────────────────────────────── */

/**
 * Small pill label — e.g. "Urgent", "Beta"
 * @param {"urgent"|"success"|"warning"} tone
 */
export function Badge({ children, tone = "urgent" }) {
  const tones = {
    urgent: {
      background: colors.urgentBg,
      color: colors.urgent,
      border: `1px solid ${colors.urgentBorder}`,
    },
    success: {
      background: colors.successBg,
      color: colors.success,
      border: `1px solid ${colors.success}`,
    },
  };

  return (
    <span
      style={{
        fontSize: 9,
        fontWeight: typography.weights.bold,
        padding: "1px 6px",
        borderRadius: radii.pill,
        whiteSpace: "nowrap",
        flexShrink: 0,
        ...tones[tone],
      }}
    >
      {children}
    </span>
  );
}

/* ─── IntegrationChip ─────────────────────────────────────────── */

/**
 * Small branded chip showing an icon + name, used in "How it works"
 */
export function IntegrationChip({ icon, name }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 7,
        // background: colors.bgSubtle,
        // border: `1px solid ${colors.borderDefault}`,
        // borderRadius: radii.md,
        // padding: "6px 12px",
        flexShrink: 0,
      }}
    >
      {icon}
      <span style={{ color: colors.textTertiary, fontSize: 12 }}>{name}</span>
    </div>
  );
}
