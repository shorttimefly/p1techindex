"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "产品矩阵", href: "#products" },
  { label: "架构能力", href: "#architecture" },
  { label: "解决方案", href: "#solutions" },
  { label: "安全合规", href: "#security" },
  { label: "实施路径", href: "#implementation" },
  { label: "团队背景", href: "#team" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${
        scrolled
          ? "border-cyan-200/20 bg-[#050B1E]/88 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3" aria-label="返回首页首屏">
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-200/50 bg-cyan-200/10 text-sm font-black text-cyan-100 shadow-[0_0_22px_rgba(0,213,255,0.22)]">
            AI
          </span>
          <span>
            <span className="block text-sm font-semibold text-white">AI Service Platform</span>
            <span className="block text-xs text-[#A9B8D8]">企业 AI 服务</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="官网主导航">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-[#A9B8D8] transition hover:text-cyan-100">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/login?next=/aip"
            className="rounded-full border border-cyan-200/30 px-5 py-2 text-sm text-cyan-100 transition hover:border-cyan-100/70 hover:bg-cyan-100/10"
          >
            进入 AIP
          </a>
          <a
            href="#cta"
            className="rounded-full border border-cyan-200/30 px-5 py-2 text-sm text-cyan-100 transition hover:border-cyan-100/70 hover:bg-cyan-100/10"
          >
            获取方案
          </a>
          <a
            href="#cta"
            className="home-scan relative overflow-hidden rounded-full bg-[#1E7BFF] px-5 py-2 text-sm font-semibold text-white shadow-[0_0_24px_rgba(30,123,255,0.42)] after:absolute after:inset-y-0 after:w-14 after:bg-white/25 after:blur-md"
          >
            预约咨询
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "关闭导航菜单" : "打开导航菜单"}
          className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-200/30 text-cyan-100 lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-cyan-200/15 bg-[#050B1E]/96 px-6 py-5 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto grid max-w-[1200px] gap-4" aria-label="移动端官网导航">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl border border-cyan-200/15 px-4 py-3 text-sm text-[#F4F8FF]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/login?next=/aip"
              className="rounded-full border border-cyan-200/30 px-5 py-3 text-center text-sm font-semibold text-cyan-100"
            >
              进入 AIP
            </a>
            <a href="#cta" className="rounded-full bg-[#1E7BFF] px-5 py-3 text-center text-sm font-semibold text-white">
              预约 AI 转型咨询
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
