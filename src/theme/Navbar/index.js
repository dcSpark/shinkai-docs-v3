import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import NavbarLayout from "@theme/Navbar/Layout";
import NavbarMobileSidebarToggle from "@theme/Navbar/MobileSidebar/Toggle";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import { useThemeConfig } from "@docusaurus/theme-common";
import {
  getDocArea,
  getAreaTabs,
  getTopbarLinks,
  getTopbarCta,
} from "../../lib/docsNavigation";

export default function Navbar() {
  const { pathname } = useLocation();
  const area = getDocArea(pathname);
  const tabs = getAreaTabs();
  const topbarLinks = getTopbarLinks();
  const cta = getTopbarCta();
  const mobileSidebar = useThemeConfig().navbar;

  return (
    <NavbarLayout>
      <div className="mx-auto block w-full max-w-[calc(92rem+3rem)] px-6 max-[996px]:px-4">
        <div className="grid min-h-[60px] w-full grid-cols-[240px_minmax(380px,1fr)_auto] items-center gap-6 max-[996px]:grid-cols-[auto_1fr_auto] max-[996px]:gap-3.5 max-[996px]:min-h-[62px]">
          <div className="flex items-center gap-[18px]">
            {!mobileSidebar.disableNavbarCollapse && (
              <div className="hidden max-[996px]:inline-flex">
                <NavbarMobileSidebarToggle />
              </div>
            )}
            <Link
              className="inline-flex items-center gap-2.5 text-[#221f1f] no-underline hover:text-[#221f1f] hover:no-underline dark:text-[#f3eded] dark:hover:text-[#f3eded]"
              to="/"
            >
              <img src="/favicon.svg" alt="Shinkai" className="h-[28px] w-[28px] rounded-full" />
              <span className="text-[1.05rem] font-extrabold tracking-[-0.03em]">Shinkai</span>
              <span className="-ml-1.5 text-[0.86rem] font-medium text-[var(--shinkai-muted)]">Docs</span>
            </Link>
          </div>


          <div className="flex items-center justify-end gap-[18px] max-[996px]:gap-2.5">
            {topbarLinks.map((link) => (
              <Link
                key={link.name}
                className="text-sm font-medium text-[#403c3c] no-underline hover:text-[#1f1b1b] hover:no-underline dark:text-[#f3eded] dark:hover:text-[#f3eded] max-[996px]:hidden"
                href={link.url}
              >
                {link.name}
              </Link>
            ))}
            <Link
              className="inline-flex h-[38px] text-sm items-center gap-2 rounded-[14px] bg-[linear-gradient(180deg,#ff6668,#fe6162)] px-[18px] font-bold text-white no-underline shadow-[0_12px_22px_rgba(254,97,98,0.22)] hover:text-white hover:no-underline"
              href={cta.url}
            >
              <span>{cta.name}</span>
              <span className="text-sm leading-none">›</span>
            </Link>
            <NavbarColorModeToggle className="shinkai-colorToggle ml-1" />
          </div>
        </div>

        <div className="flex min-h-12 w-full items-center gap-7 overflow-x-auto max-[996px]:min-h-11 max-[996px]:gap-[18px]">
          {tabs.map((tab) => (
            <Link
              key={tab.area}
              to={tab.to}
              className={clsx(
                "relative inline-flex h-12 items-center text-sm font-medium text-[#4f4a4a] no-underline hover:text-[#231f1f] hover:no-underline dark:text-[#c9c1c1] dark:hover:text-[#f3eded] max-[996px]:h-11",
                area === tab.area && "font-bold text-[#231f1f] dark:text-[#f3eded]",
              )}
            >
              {tab.label}
              {area === tab.area ? (
                <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-[var(--ifm-color-primary)]" />
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </NavbarLayout>
  );
}
