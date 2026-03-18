import mintConfig from "../../mint.json";

export const DOC_AREA = {
  APP: "app",
  WEB: "web",
  API: "api",
};

export function normalizePath(pathname) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.replace(/\/+$/, "");
}

export function getDocArea(pathname) {
  const path = normalizePath(pathname);

  if (path.startsWith("/api-reference")) {
    return DOC_AREA.API;
  }

  if (path.startsWith("/shinkai-web")) {
    return DOC_AREA.WEB;
  }

  return DOC_AREA.APP;
}

export function getAreaTabs() {
  return [
    {
      area: DOC_AREA.APP,
      label: mintConfig.primaryTab.name,
      to: "/",
    },
    {
      area: DOC_AREA.WEB,
      label: mintConfig.tabs[0].name,
      to: "/shinkai-web/Welcome_1",
    },
    {
      area: DOC_AREA.API,
      label: mintConfig.tabs[1].name,
      to: "/api-reference/introduction",
    },
  ];
}

export function getSidebarAnchors() {
  return mintConfig.anchors;
}

export function getTopbarLinks() {
  return mintConfig.topbarLinks;
}

export function getTopbarCta() {
  return mintConfig.topbarCtaButton;
}

function pathBelongsToArea(candidate, area) {
  if (!candidate) {
    return false;
  }

  const value = String(candidate);
  const cleaned = value.startsWith("/") ? value : `/${value}`;

  if (area === DOC_AREA.API) {
    return cleaned.startsWith("/api-reference");
  }

  if (area === DOC_AREA.WEB) {
    return cleaned.startsWith("/shinkai-web");
  }

  return !cleaned.startsWith("/api-reference") && !cleaned.startsWith("/shinkai-web");
}

function sidebarItemBelongsToArea(item, area) {
  if (item.type === "link") {
    return (
      pathBelongsToArea(item.href, area) ||
      pathBelongsToArea(item.docId, area)
    );
  }

  if (item.type === "category") {
    return item.items.some((child) => sidebarItemBelongsToArea(child, area));
  }

  return false;
}

export function filterSidebarItemsByArea(items, area) {
  return items.flatMap((item) => {
    if (!sidebarItemBelongsToArea(item, area)) {
      return [];
    }

    if (item.type !== "category") {
      return [item];
    }

    const children = filterSidebarItemsByArea(item.items, area);
    if (children.length === 0) {
      return [];
    }

    return [{ ...item, items: children }];
  });
}

export function isSidebarItemActive(item, pathname) {
  const current = normalizePath(pathname);
  const itemPath = normalizePath(item.href);

  if (item.type === "link") {
    return itemPath === current;
  }

  if (item.type === "category") {
    return item.items.some((child) => isSidebarItemActive(child, current));
  }

  return false;
}

export function getApiMethodBadge(item) {
  const source = item.docId || item.href || "";

  if (source.includes("/get-") || source.startsWith("get-")) {
    return "GET";
  }

  if (source.includes("/post-") || source.startsWith("post-")) {
    return "POST";
  }

  return null;
}

const ICON_LABELS = {
  introduction: null,
  "what-is-shinkai": "HelpCircle",
  quickstart: "Wrench",
  "basics/ai-agents": "Bot",
  "first-steps": "Eye",
  "basics/ai-chats": "MessageSquare",
  "basics/files-manager": "FolderOpen",
  "basics/tools": "PenTool",
  "basics/metadata": "Tag",
  "advanced/custom-ai": "Server",
  "advanced/chat-settings": "Sliders",
  "advanced/shinkai-identity": "Send",
  "advanced/connect-identity": "Link",
  "advanced/AI-store-account": "Store",
  "advanced/agents": "Bot",
};

export function getSidebarIconLabel(item, area) {
  if (area !== DOC_AREA.APP || item.type !== "link") {
    return null;
  }

  const key = item.docId || "";
  if (key in ICON_LABELS) {
    return ICON_LABELS[key];
  }
  return null;
}
