import React from "react";
import clsx from "clsx";
import useIsBrowser from "@docusaurus/useIsBrowser";

function SunIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4">
      <circle cx="10" cy="10" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M10 1.8v2.1M10 16.1v2.1M18.2 10h-2.1M3.9 10H1.8M15.9 4.1l-1.5 1.5M5.6 14.4l-1.5 1.5M15.9 15.9l-1.5-1.5M5.6 5.6L4.1 4.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4">
      <path
        d="M13.9 2.8a6.8 6.8 0 1 0 3.3 12.7A7.7 7.7 0 1 1 13.9 2.8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function NavbarColorModeToggle({ className }) {
  const isBrowser = useIsBrowser();
  const [colorMode, setColorMode] = React.useState("light");

  React.useEffect(() => {
    if (!isBrowser) {
      return;
    }

    const root = document.documentElement;
    const syncFromDom = () => {
      const currentMode = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      setColorMode(currentMode);
    };

    syncFromDom();

    const observer = new MutationObserver(syncFromDom);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, [isBrowser]);

  const isDark = colorMode === "dark";
  const nextMode = isDark ? "light" : "dark";

  function handleToggle() {
    if (!isBrowser) {
      return;
    }

    const root = document.documentElement;
    root.setAttribute("data-theme", nextMode);
    root.setAttribute("data-theme-choice", nextMode);

    try {
      window.localStorage.setItem("theme", nextMode);
    } catch {}

    setColorMode(nextMode);
  }

  return (
    <div className={clsx("shinkai-colorToggle", className)}>
      <button
        type="button"
        className="clean-btn inline-flex h-9 w-9 items-center justify-center rounded-full"
        onClick={handleToggle}
        disabled={!isBrowser}
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
}
