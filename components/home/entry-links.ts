export const entryLinks = {
  home: "#top",
  products: "#products",
  architecture: "#architecture",
  solutions: "#solutions",
  security: "#security",
  implementation: "#implementation",
  team: "#team",
  contact: "#cta",
  aip: "/login?next=/aip",
  aiscm: "/aiscm"
} as const;

export const primaryEntries = [
  {
    label: "进入 AIP",
    description: "AI 治理、权限、审计与经营看板",
    href: entryLinks.aip,
    status: "已开放"
  },
  {
    label: "进入 AISCM",
    description: "供应链 AI Agent 工作台",
    href: entryLinks.aiscm,
    status: "已开放"
  },
  {
    label: "获取 P1 / AI 运营方案",
    description: "0 代码平台与运营 OS 咨询入口",
    href: entryLinks.contact,
    status: "方案咨询"
  }
] as const;
