import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "企业 AI 服务平台｜AIP 管理中台、ModelHub 模型网关、P1 零代码开发平台",
  description:
    "提供企业 AI 全栈解决方案，覆盖模型 API 网关、AI 管理中台 AIP、LLM 私有化部署、P1 本地 0 代码开发平台、供应链 AI 套件和 AI 运营 OS，帮助企业安全低成本完成 AI 转型。",
  keywords: [
    "企业AI",
    "AI管理中台",
    "模型网关",
    "ModelHub",
    "大模型API",
    "LLM私有化部署",
    "零代码开发平台",
    "P1",
    "供应链AI",
    "AI运营OS",
    "企业Agent"
  ],
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
