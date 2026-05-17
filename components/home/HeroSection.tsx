import { ArrowRight, BadgeCheck, Cpu, Network, ShieldCheck, Sparkles } from "lucide-react";
import { AnimatedGridBackground } from "./AnimatedGridBackground";

const stackItems = [
  { label: "企业 AI 管理中台 AIP", detail: "权限 / 成本 / 安全 / 审计 / 效能", icon: ShieldCheck, href: "/login?next=/aip" },
  { label: "ModelHub 模型网关", detail: "模型接入 / 路由 / 分发 / 监控", icon: Network },
  { label: "业务落地层", detail: "P1 / LLM 私有化 / 供应链 AI / AI 运营 OS", icon: Cpu }
];

const landingShortcuts = [
  { label: "P1" },
  { label: "私有模型" },
  { label: "供应链 AI", href: "/aiscm" },
  { label: "运营 OS" }
];

export function HeroSection() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-28">
      <AnimatedGridBackground />
      <div className="relative mx-auto grid max-w-[1200px] gap-12 px-6 pb-20 pt-12 md:pt-20 lg:grid-cols-[1.03fr_0.97fr] lg:items-center">
        <div className="home-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/35 bg-cyan-200/10 px-4 py-2 text-sm text-cyan-100">
            <Sparkles size={16} />
            从“用 AI 工具”升级为“建设企业 AI 生产力系统”
          </div>
          <h1 className="text-balance text-5xl font-black leading-[1.06] text-white md:text-7xl">
            企业 AI 服务全栈解决方案
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-[#A9B8D8] md:text-xl">
            统一模型能力底座、企业 AI 管理中台、本地 0 代码开发平台与行业 AI 应用，帮助企业安全、低成本、可落地地完成 AI 转型。
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#cta"
              className="home-scan relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-[#1E7BFF] px-7 py-3 font-semibold text-white shadow-[0_0_34px_rgba(30,123,255,0.46)] after:absolute after:inset-y-0 after:w-16 after:bg-white/25 after:blur-md"
            >
              预约 AI 转型咨询 <ArrowRight size={18} />
            </a>
            <a
              href="#architecture"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/35 px-7 py-3 font-semibold text-cyan-100 transition hover:border-cyan-100/70 hover:bg-cyan-100/10"
            >
              查看产品架构
            </a>
          </div>
          <div className="mt-10 grid max-w-xl gap-3 border-l border-cyan-200/35 pl-5 text-sm text-[#A9B8D8]">
            <p className="flex items-center gap-2 text-white">
              <BadgeCheck size={18} className="text-cyan-200" />
              核心团队来自阿里 / 字节 / 平安 / 华为
            </p>
            <p>多年大厂 AI 产品与研发落地经验，覆盖企业系统、供应链数字化、本地化部署与 Agent 工作流设计。</p>
          </div>
        </div>

        <div className="home-fade-up relative min-h-[520px] [animation-delay:160ms]">
          <div className="absolute inset-0 rounded-[32px] border border-cyan-200/20 bg-[#08142F]/60 p-5 shadow-[0_0_44px_rgba(0,213,255,0.18)] backdrop-blur-md">
            <div className="flex h-full flex-col justify-between gap-4">
              <div className="rounded-[22px] border border-cyan-200/35 bg-cyan-200/10 p-4 text-center text-sm font-semibold text-cyan-100">
                企业 Agent 咨询与服务：规划 / 接入 / 落地 / 运营
              </div>
              <div className="grid gap-4">
                {stackItems.map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      <div className="flex items-start gap-4">
                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-cyan-200/30 bg-cyan-200/10 text-cyan-100">
                          <Icon size={22} />
                        </span>
                        <div>
                          <p className="text-lg font-bold text-white">{item.label}</p>
                          <p className="mt-2 text-sm leading-6 text-[#A9B8D8]">{item.detail}</p>
                        </div>
                      </div>
                      {index < stackItems.length - 1 ? (
                        <div className="absolute -bottom-4 left-1/2 h-4 w-px bg-cyan-200/50" />
                      ) : null}
                    </>
                  );

                  if (item.href) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="relative rounded-[20px] border border-blue-200/30 bg-[#0C1E44]/85 p-5 shadow-[0_0_26px_rgba(30,123,255,0.18)] transition hover:border-cyan-100/70 hover:bg-[#123064]/85"
                        aria-label="进入 AIP 登录页"
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <div
                      key={item.label}
                      className="relative rounded-[20px] border border-blue-200/30 bg-[#0C1E44]/85 p-5 shadow-[0_0_26px_rgba(30,123,255,0.18)]"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs text-[#A9B8D8] sm:grid-cols-4">
                {landingShortcuts.map((item) =>
                  item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="rounded-xl border border-amber-300/35 bg-amber-300/10 px-3 py-3 text-center font-semibold text-amber-50 transition hover:border-amber-100/70"
                      aria-label="进入 AISCM 供应链 AI 首页"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span key={item.label} className="rounded-xl border border-cyan-200/20 bg-cyan-100/5 px-3 py-3 text-center">
                      {item.label}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
