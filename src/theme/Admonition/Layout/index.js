import React from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";

const TONE_CLASSES = {
  note: {
    container:
      "border-[rgba(18,18,18,0.1)] bg-white dark:border-[rgba(255,255,255,0.1)] dark:bg-[#1b1818]",
    icon: "text-[#2d2a2a] dark:text-[#f3eded]",
  },
  info: {
    container:
      "border-[rgba(18,18,18,0.1)] bg-white dark:border-[rgba(255,255,255,0.1)] dark:bg-[#1b1818]",
    icon: "text-[#21414f] dark:text-[#d7eef6]",
  },
  tip: {
    container:
      "border-[rgba(204,166,88,0.26)] bg-[#fffdfa] dark:border-[rgba(204,166,88,0.2)] dark:bg-[#1d1916]",
    icon: "text-[#8f6b20] dark:text-[#f0d28c]",
  },
  caution: {
    container:
      "border-[rgba(254,97,98,0.26)] bg-[#fffaf9] dark:border-[rgba(254,97,98,0.22)] dark:bg-[#201717]",
    icon: "text-[#c24d4e] dark:text-[#ff9b9c]",
  },
  danger: {
    container:
      "border-[rgba(254,97,98,0.26)] bg-[#fff9f8] dark:border-[rgba(254,97,98,0.22)] dark:bg-[#201717]",
    icon: "text-[#c24d4e] dark:text-[#ff9b9c]",
  },
};

function AdmonitionContainer({ type, className, children }) {
  const tone = TONE_CLASSES[type] || TONE_CLASSES.info;

  return (
    <div
      className={clsx(
        "theme-admonition not-prose my-6 rounded-[1.65rem] border px-6 py-5 shadow-[0_1px_2px_rgba(18,18,18,0.04)]",
        ThemeClassNames.common.admonition,
        ThemeClassNames.common.admonitionType(type),
        tone.container,
        className,
      )}
    >
      {children}
    </div>
  );
}

function AdmonitionHeading({ icon, title, type }) {
  const tone = TONE_CLASSES[type] || TONE_CLASSES.info;

  if (!title && !icon) {
    return null;
  }

  return (
    <div className="mb-3 flex items-start gap-4">
      {icon ? (
        <span
          className={clsx(
            "mt-0.5 inline-flex shrink-0 [&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-current",
            tone.icon,
          )}
        >
          {icon}
        </span>
      ) : null}
      <div className="min-w-0 flex-1 pt-0.5 text-[1.03rem] font-semibold tracking-[-0.01em] text-[#2a2626] dark:text-[#f3eded]">
        {title}
      </div>
    </div>
  );
}

function AdmonitionContent({ children, icon, title, type }) {
  const tone = TONE_CLASSES[type] || TONE_CLASSES.info;

  if (!children) {
    return null;
  }

  if (!title && icon) {
    return (
      <div className="flex items-start gap-4">
        <span
          className={clsx(
            "mt-0.5 inline-flex shrink-0 [&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-current",
            tone.icon,
          )}
        >
          {icon}
        </span>
        <div className="min-w-0 flex-1 shinkai-admonition-content text-[1.02rem] leading-[1.8] text-[#413b3b] dark:text-[#c9c1c1] [&>*]:m-0 [&>*+*]:mt-5 [&_strong]:text-[#231f1f] dark:[&_strong]:text-[#f3eded] [&_code]:rounded-[0.45rem] [&_code]:bg-black/[0.04] [&_code]:px-1.5 [&_code]:py-0.5 dark:[&_code]:bg-white/[0.08]">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="shinkai-admonition-content text-[1.02rem] leading-[1.8] text-[#413b3b] dark:text-[#c9c1c1] [&>*]:m-0 [&>*+*]:mt-5 [&_strong]:text-[#231f1f] dark:[&_strong]:text-[#f3eded] [&_code]:rounded-[0.45rem] [&_code]:bg-black/[0.04] [&_code]:px-1.5 [&_code]:py-0.5 dark:[&_code]:bg-white/[0.08]">
      {children}
    </div>
  );
}

export default function AdmonitionLayout(props) {
  const { type, icon, title, children, className } = props;

  return (
    <AdmonitionContainer type={type} className={className}>
      {title ? <AdmonitionHeading title={title} icon={icon} type={type} /> : null}
      <AdmonitionContent icon={icon} title={title} type={type}>
        {children}
      </AdmonitionContent>
    </AdmonitionContainer>
  );
}
