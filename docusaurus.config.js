const mintConfig = require("./mint.json");

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: mintConfig.name,
  tagline: "Shinkai documentation",
  favicon: "favicon.svg",
  url: "https://docs.shinkai.com",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          path: ".",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          exclude: [
            "README.md",
            "api-reference/yamls/**/*",
            "generated/**/*",
            "snippets/**/*",
            "node_modules/**/*",
            "build/**/*",
            ".docusaurus/**/*",
            "src/**/*",
            "static/**/*",
          ],
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  staticDirectories: ["static"],
  themeConfig: {
    image: "logo/logo-light.svg",
    navbar: {
      title: mintConfig.name,
        logo: {
          alt: mintConfig.name,
          src: "logo/logo-light.svg",
        },
      items: [
        { to: "/", label: "Docs", position: "left" },
        { to: "/shinkai-web/Welcome_1", label: "Shinkai Web", position: "left" },
        { to: "/api-reference/introduction", label: "API Reference", position: "left" },
        { href: "https://discord.gg/eJBhuTUQCU", label: "Discord", position: "right" },
        { href: "https://github.com/dcSpark/shinkai-apps", label: "GitHub", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            { label: "Introduction", to: "/" },
            { label: "Quickstart", to: "/quickstart" },
            { label: "API Reference", to: "/api-reference/introduction" },
          ],
        },
        {
          title: "Community",
          items: [
            { label: "Discord", href: "https://discord.gg/eJBhuTUQCU" },
            { label: "X", href: "https://x.com/ShinkaiLocalAI" },
          ],
        },
        {
          title: "More",
          items: [
            { label: "GitHub", href: "https://github.com/dcSpark/shinkai-apps" },
            { label: "Blog", href: "https://blog.shinkai.com/" },
          ],
        },
      ],
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
};
