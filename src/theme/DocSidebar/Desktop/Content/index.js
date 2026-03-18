import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import * as LucideIcons from "lucide-react";
import {
  DOC_AREA,
  filterSidebarItemsByArea,
  getApiMethodBadge,
  getDocArea,
  getSidebarAnchors,
  getSidebarIconLabel,
  isSidebarItemActive,
} from "../../../../lib/mintNavigation";

function AnchorIcon({ name }) {
  if (name === "Discord") {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-[18px] w-[18px]"
      >
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
      </svg>
    );
  }
  const Icon = name === "Blog" ? LucideIcons.FileText : LucideIcons.MessageCircle;
  return <Icon size={18} className="h-[18px] w-[18px]" />;
}

function SidebarLink({ item, area, pathname }) {
  const active = isSidebarItemActive(item, pathname);
  const badge = area === DOC_AREA.API ? getApiMethodBadge(item) : null;
  const iconName = getSidebarIconLabel(item, area);
  const Icon = iconName ? LucideIcons[iconName] || LucideIcons.FileText : null;

  return (
    <li className="my-[3px]">
      <Link
        to={item.href}
        className={clsx(
          "flex min-h-9 text-sm items-start gap-2.5 rounded-[14px] px-3 py-2 leading-[1.45] text-[#4f4a4a] no-underline hover:bg-black/[0.025] hover:text-[#1f1c1c] hover:no-underline dark:text-[#c9c1c1] dark:hover:bg-white/[0.04] dark:hover:text-[#f3eded]",
          active && "bg-[var(--shinkai-soft)] text-[var(--ifm-color-primary)]",
          badge && "gap-3",
        )}
      >
        {Icon ? <Icon size={16} className="mt-px h-4 w-4 shrink-0 text-[#8b8484]" /> : null}
        {badge ? (
          <span
            className={clsx(
              "mt-[3px] inline-flex h-[18px] min-w-9 shrink-0 items-center justify-center rounded-full text-[0.62rem] font-extrabold tracking-[0.02em]",
              badge === "GET" ? "bg-[#dff5e6] text-[#2a8b48]" : "bg-[#e5eeff] text-[#3d6fe5]",
            )}
          >
            {badge}
          </span>
        ) : null}
        <span>{item.label}</span>
      </Link>
    </li>
  );
}

function SidebarCategory({ item, area, pathname, level = 0 }) {
  if (level === 0) {
    return (
      <section className="mb-[26px]">
        <div className="mb-3 text-sm font-extrabold text-[#1f1b1b] dark:text-[#f3eded]">
          {item.label}
        </div>
        <ul className="m-0 list-none p-0">
          {item.items.map((child, index) =>
            child.type === "category" ? (
              <SidebarCategory
                key={`${child.label}-${index}`}
                item={child}
                area={area}
                pathname={pathname}
                level={1}
              />
            ) : (
              <SidebarLink
                key={`${child.label}-${index}`}
                item={child}
                area={area}
                pathname={pathname}
              />
            ),
          )}
        </ul>
      </section>
    );
  }

  const open = isSidebarItemActive(item, pathname);
  const Icon = item.label === "Cloud AI Models" ? LucideIcons.Cloud : null;

  return (
    <li className="my-1">
      <details open={open} className="group my-1 mb-2">
        <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2 text-[#4f4a4a] dark:text-[#c9c1c1]">
          <div className="flex items-center gap-2.5">
            {Icon ? <Icon size={16} className="h-4 w-4 shrink-0 text-[#8b8484]" /> : null}
            <span>{item.label}</span>
          </div>
          <span className="text-[#8d8686] transition-transform duration-150 ease-out group-open:rotate-90">
            ›
          </span>
        </summary>
        <ul className="m-0 list-none pl-2.5">
          {item.items.map((child, index) =>
            child.type === "category" ? (
              <SidebarCategory
                key={`${child.label}-${index}`}
                item={child}
                area={area}
                pathname={pathname}
                level={level + 1}
              />
            ) : (
              <SidebarLink
                key={`${child.label}-${index}`}
                item={child}
                area={area}
                pathname={pathname}
              />
            ),
          )}
        </ul>
      </details>
    </li>
  );
}

export default function DocSidebarDesktopContent({ path, sidebar, className }) {
  const { pathname } = useLocation();
  const area = getDocArea(pathname);
  const items = filterSidebarItemsByArea(sidebar, area);
  const anchors = getSidebarAnchors();

  return (
    <nav
      className={clsx(
        "flex h-[calc(100vh-var(--ifm-navbar-height))] flex-col overflow-hidden px-0 pt-[38px] pb-7",
        className,
      )}
    >
      <div className="mb-[34px] grid gap-[14px]">
        {anchors.map((anchor) => (
          <Link
            key={anchor.name}
            href={anchor.url}
            className="inline-flex items-center gap-[14px] text-[0.98rem] text-[#4e4949] no-underline hover:text-[#1f1c1c] hover:no-underline dark:text-[#c9c1c1] dark:hover:text-[#f3eded]"
          >
            <span className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-[10px] border border-[rgba(18,18,18,0.08)] bg-white text-[#8d8686] dark:border-[rgba(255,255,255,0.08)] dark:bg-[#151313] dark:text-[#c9c1c1]">
              <AnchorIcon name={anchor.name} />
            </span>
            <span>{anchor.name}</span>
          </Link>
        ))}
      </div>

      <div className="shinkai-sidebar-scroll flex-1 overflow-x-hidden overflow-y-auto pr-3.5 pb-10">
        {items.map((item, index) =>
          item.type === "category" ? (
            <SidebarCategory
              key={`${item.label}-${index}`}
              item={item}
              area={area}
              pathname={path || pathname}
            />
          ) : (
            <ul key={`${item.label}-${index}`} className="m-0 list-none p-0">
              <SidebarLink item={item} area={area} pathname={path || pathname} />
            </ul>
          ),
        )}
      </div>
    </nav>
  );
}
