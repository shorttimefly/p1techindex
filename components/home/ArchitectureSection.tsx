import { BrainCircuit, Gauge, LockKeyhole, Route, ScrollText, UsersRound } from "lucide-react";
import { GlowCard } from "./GlowCard";
import { SectionTitle } from "./SectionTitle";

const aipCapabilities = ["权限", "成本", "安全", "Agent", "日志", "效能"];
const hubCapabilities = ["接入", "路由", "分发", "调度", "监控"];
const landingProducts = [
  { label: "P1" },
  { label: "LLM 私有化" },
  { label: "供应链 AI", href: "/aiscm" },
  { label: "AI 运营 OS" }
];
const controls = [
  { label: "权限边界", icon: LockKeyhole },
  { label: "成本治理", icon: Gauge },
  { label: "日志审计", icon: ScrollText },
  { label: "模型路由", icon: Route },
  { label: "Agent 管理", icon: BrainCircuit },
  { label: "组织协同", icon: UsersRound }
];

export function ArchitectureSection() {
  return (
    <section id="architecture" className="relative px-6 py-16 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <SectionTitle
          eyebrow="Architecture"
          title="一套面向企业 AI 落地的产品架构"
          description="AIP 负责治理，ModelHub 负责模型路由，P1 和行业应用负责业务落地，Agent 咨询服务贯穿规划、接入、落地与运营全过程。"
        />
        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <GlowCard className="p-5 md:p-8">
            <a
              href="/login?next=/aip"
              className="block rounded-[20px] border border-cyan-200/35 bg-cyan-200/10 p-6 text-center transition hover:border-cyan-100/70 hover:bg-cyan-200/15"
              aria-label="进入 AIP 登录页"
            >
              <p className="text-2xl font-bold text-white">企业 AI 管理中台 AIP</p>
              <p className="mt-4 text-sm leading-7 text-[#A9B8D8]">{aipCapabilities.join(" / ")}</p>
            </a>
            <div className="mx-auto h-10 w-px bg-cyan-200/50" />
            <div className="rounded-[20px] border border-blue-300/35 bg-[#0C1E44]/80 p-6 text-center">
              <p className="text-2xl font-bold text-white">模型能力网关 ModelHub</p>
              <p className="mt-4 text-sm leading-7 text-[#A9B8D8]">{hubCapabilities.join(" / ")}</p>
            </div>
            <div className="mx-auto h-10 w-px bg-cyan-200/50" />
            <div className="grid gap-4 md:grid-cols-4">
              {landingProducts.map((item) =>
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-[18px] border border-amber-300/35 bg-amber-300/10 px-4 py-5 text-center font-semibold text-amber-50 transition hover:border-amber-100/70 hover:bg-amber-300/15"
                    aria-label="进入 AISCM 供应链 AI 首页"
                  >
                    {item.label}
                  </a>
                ) : (
                  <div key={item.label} className="rounded-[18px] border border-cyan-200/25 bg-[#08142F]/80 px-4 py-5 text-center font-semibold text-cyan-50">
                    {item.label}
                  </div>
                )
              )}
            </div>
            <div className="mt-6 rounded-[20px] border border-amber-300/30 bg-amber-300/10 p-5 text-center text-sm leading-7 text-amber-100">
              外围能力：企业 Agent 咨询与服务贯穿全栈，从流程诊断到 Agent 编排，再到持续运营。
            </div>
          </GlowCard>

          <div className="grid gap-4">
            {controls.map((item) => {
              const Icon = item.icon;
              return (
                <GlowCard key={item.label} className="flex items-center gap-4 p-4" accent="cyan">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-200/30 bg-cyan-200/10 text-cyan-100">
                    <Icon size={20} />
                  </span>
                  <span className="font-semibold text-white">{item.label}</span>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
