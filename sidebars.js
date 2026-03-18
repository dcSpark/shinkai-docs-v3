const mintConfig = require("./mint.json");

function toSidebarItem(entry) {
  if (typeof entry === "string") {
    return entry;
  }

  if (!entry || typeof entry !== "object") {
    return null;
  }

  const items = (entry.pages || []).map(toSidebarItem).filter(Boolean);

  if (items.length === 0) {
    return null;
  }

  return {
    type: "category",
    label: entry.group,
    items,
    link: {
      type: "generated-index",
      title: entry.group,
    },
  };
}

module.exports = {
  docsSidebar: mintConfig.navigation.map(toSidebarItem).filter(Boolean),
};
