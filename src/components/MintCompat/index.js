import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Admonition from "@theme/Admonition";
import ThemeTabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

const ICONS = {
  box: "▣",
  copy: "⧉",
  paste: "📋",
  "hands-clapping": "👏",
  "floppy-disk": "💾",
  check: "✓",
  robot: "🤖",
  paperclip: "📎",
  toolbox: "🧰",
  books: "📚",
  "folder-closed": "📁",
  sliders: "⚙",
  laptop: "💻",
  "book-open": "📖",
  wrench: "🛠",
  message: "💬",
  "box-archive": "🗃",
  compass: "🧭",
  eye: "👁",
  "circle-question": "?",
  "circle-nodes": "◎",
  plug: "🔌",
  chrome: "◉",
  store: "🏪",
  bird: "🐦",
  user: "👤",
  coin: "◌",
  "diagram-project": "⌘",
  "gear-code": "</>",
  "envelope-circle-check": "✉",
  "graduation-cap": "🎓",
  microchip: "◫",
};

function iconGlyph(icon) {
  return ICONS[icon] || "•";
}

function titleToValue(title) {
  return String(title || "tab")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function AdmonitionWrapper({ type, title, children }) {
  return (
    <div className="not-prose">
      <Admonition type={type} title={title}>
        {children}
      </Admonition>
    </div>
  );
}

export function Note(props) {
  return <AdmonitionWrapper type="note" title={null} {...props} />;
}

export function Tip(props) {
  return <AdmonitionWrapper type="tip" title={null} {...props} />;
}

export function Info(props) {
  return <AdmonitionWrapper type="info" title={null} {...props} />;
}

export function Warning(props) {
  return <AdmonitionWrapper type="caution" title={null} {...props} />;
}

export function Frame({ children }) {
  return (
    <div className="not-prose my-6 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white/70 p-[0.9rem] shadow-[0_10px_40px_rgba(30,24,24,0.06)] dark:border-[rgba(255,255,255,0.08)] dark:bg-white/[0.03] dark:shadow-none">
      {children}
    </div>
  );
}

export function CardGroup({ cols = 2, children }) {
  return (
    <div
      className="not-prose my-6 grid grid-cols-[repeat(var(--mint-columns),minmax(0,1fr))] gap-4 max-[996px]:grid-cols-1"
      style={{ "--mint-columns": String(cols) }}
    >
      {children}
    </div>
  );
}

export function Card({ title, href, icon, children }) {
  const content = (
    <>
      {(icon || title) && (
        <div className="mb-[0.65rem] flex items-center gap-[0.65rem]">
          {icon ? <span className="mr-0.5 inline-flex min-w-[1.2rem] items-center justify-center">{iconGlyph(icon)}</span> : null}
          {title ? <span className="font-bold">{title}</span> : null}
        </div>
      )}
      <div className="[&>:last-child]:mb-0">{children}</div>
    </>
  );

  if (href) {
    return (
      <Link
        className="not-prose block h-full rounded-2xl border border-[rgba(0,0,0,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,246,246,0.96))] px-[1.1rem] py-4 text-inherit no-underline shadow-[0_14px_40px_rgba(43,28,28,0.08)] transition-transform hover:-translate-y-px hover:border-[rgba(254,97,98,0.45)] hover:text-inherit hover:no-underline dark:border-[rgba(255,255,255,0.08)] dark:bg-[linear-gradient(180deg,rgba(34,28,28,0.96),rgba(24,19,19,0.96))] dark:shadow-none"
        to={href}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="not-prose block h-full rounded-2xl border border-[rgba(0,0,0,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,246,246,0.96))] px-[1.1rem] py-4 shadow-[0_14px_40px_rgba(43,28,28,0.08)] dark:border-[rgba(255,255,255,0.08)] dark:bg-[linear-gradient(180deg,rgba(34,28,28,0.96),rgba(24,19,19,0.96))] dark:shadow-none">
      {content}
    </div>
  );
}

export function Tabs({ children }) {
  const tabs = React.Children.toArray(children).filter(Boolean);

  return (
    <div className="not-prose">
      <ThemeTabs>
        {tabs.map((child) => {
          if (!React.isValidElement(child)) {
            return null;
          }

          const { title, children: tabChildren } = child.props;
          return (
            <TabItem key={titleToValue(title)} value={titleToValue(title)} label={title}>
              {tabChildren}
            </TabItem>
          );
        })}
      </ThemeTabs>
    </div>
  );
}

export function Tab({ children }) {
  return <>{children}</>;
}

export function AccordionGroup({ children }) {
  return <div className="not-prose my-6">{children}</div>;
}

export function Accordion({ title, icon, children }) {
  return (
    <details className="not-prose my-3 overflow-hidden rounded-[0.85rem] border border-[rgba(0,0,0,0.08)] bg-white/70 dark:border-[rgba(255,255,255,0.08)] dark:bg-white/[0.03]">
      <summary className="cursor-pointer list-none px-4 py-[0.9rem] font-semibold [&::-webkit-details-marker]:hidden">
        {icon ? <span className="mr-0.5 inline-flex min-w-[1.2rem] items-center justify-center">{iconGlyph(icon)}</span> : null}
        <span>{title}</span>
      </summary>
      <div className="px-4 pb-4">{children}</div>
    </details>
  );
}

export function Steps({ children }) {
  const steps = React.Children.toArray(children).filter(Boolean);

  return (
    <ol className="not-prose my-6 list-none p-0">
      {steps.map((child, index) => {
        if (!React.isValidElement(child)) {
          return <li key={`step-${index}`}>{child}</li>;
        }

        return React.cloneElement(child, {
          key: child.key || `step-${index + 1}`,
          stepNumber: index + 1,
        });
      })}
    </ol>
  );
}

export function Step({ title, children, stepNumber }) {
  return (
    <li className="mb-4 grid grid-cols-[2.25rem_minmax(0,1fr)] gap-4">
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ifm-color-primary)] font-bold text-white">
        {stepNumber}
      </div>
      <div className="border-b border-[rgba(0,0,0,0.08)] pb-4">
        {title ? <div className="mb-[0.35rem] font-bold">{title}</div> : null}
        <div>{children}</div>
      </div>
    </li>
  );
}

export function ResponseField({ name, type, children }) {
  return (
    <div className="not-prose my-4 rounded-xl border-l-4 border-[var(--ifm-color-primary)] bg-[rgba(254,97,98,0.08)] p-4 dark:bg-[rgba(254,97,98,0.12)]">
      <div className="mb-3 flex flex-wrap items-center gap-[0.6rem]">
        <strong>{name}</strong>
        {type ? <code className="rounded bg-black/5 px-1.5 py-0.5 dark:bg-white/10">{type}</code> : null}
      </div>
      <div>{children}</div>
    </div>
  );
}

export function Expandable({ title, children }) {
  return (
    <details className="not-prose my-3 overflow-hidden rounded-[0.85rem] border border-[rgba(0,0,0,0.08)] bg-white/70 dark:border-[rgba(255,255,255,0.08)] dark:bg-white/[0.03]">
      <summary className="cursor-pointer list-none px-4 py-[0.9rem] font-semibold [&::-webkit-details-marker]:hidden">
        {title}
      </summary>
      <div className="px-4 pb-4">{children}</div>
    </details>
  );
}

export function CodeGroup({ children }) {
  return <div className="not-prose my-6">{children}</div>;
}

export function Icon({ icon, size }) {
  const style = size ? { fontSize: `${size}px` } : undefined;
  return (
    <span
      aria-hidden="true"
      className={clsx("mr-0.5 inline-flex min-w-[1.2rem] items-center justify-center")}
      style={style}
    >
      {iconGlyph(icon)}
    </span>
  );
}
