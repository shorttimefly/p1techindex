import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { GlowCard } from "./GlowCard";
import { SectionTitle } from "./SectionTitle";

const steps = [
  {
    stage: "第一阶段",
    title: "交付基础底座",
    description: "AIP + ModelHub + P1，建立可管控的 AI 基础设施和快速生成业务工具的开发入口。"
  },
  {
    stage: "第二阶段",
    title: "设计基础 Agent",
    description: "开发规范 Agent、设计规范 Agent、数据安全 Agent、权限约束 Agent、业务流程约束 Agent。"
  },
  {
    stage: "第三阶段",
    title: "运行验证与持续优化",
    description: "跟踪调用数据、活跃用户、生成质量、业务反馈和问题日志，持续优化 Agent 和知识库。"
  },
  {
    stage: "第四阶段",
    title: "业务 Agent 改造落地",
    description: "围绕仓储、供应链、销售、研发、经营分析等具体场景，启动业务流程 AI 改造。"
  }
];

export function ImplementationSection() {
  return (
    <section id="implementation" className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <SectionTitle
          eyebrow="Roadmap"
          title="从平台底座到业务 Agent，分阶段完成企业 AI 转型"
          description="先搭建基础设施，再设计规范与业务 Agent，通过真实数据持续验证和优化。"
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <GlowCard key={step.stage} accent="cyan">
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-full border border-cyan-200/25 px-3 py-1 text-xs text-cyan-100">{step.stage}</span>
                <CheckCircle2 size={20} className="text-cyan-200" />
              </div>
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#A9B8D8]">{step.description}</p>
              {step.stage === "第一阶段" ? (
                <a
                  href="/login?next=/aip"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition hover:text-white"
                  aria-label="进入 AIP 登录页"
                >
                  进入 AIP <ArrowUpRight size={15} />
                </a>
              ) : null}
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
