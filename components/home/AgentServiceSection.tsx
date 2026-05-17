import { Activity, GitBranch, Radar } from "lucide-react";
import { GlowCard } from "./GlowCard";
import { SectionTitle } from "./SectionTitle";

const services = [
  {
    title: "流程诊断",
    description: "识别高频、重复、跨系统的业务节点，判断哪些流程适合知识库、Agent、视觉模型、预测模型或系统自动化。",
    icon: Radar
  },
  {
    title: "Agent 编排",
    description: "设计业务 Agent、工具调用、权限边界、审批节点、状态机和 Skill 约束，让 AI 能嵌入真实流程。",
    icon: GitBranch
  },
  {
    title: "持续运营",
    description: "持续优化 Prompt、知识库、路由策略、调用日志和业务效果，让 AI 从试点工具变成日常生产系统。",
    icon: Activity
  }
];

export function AgentServiceSection() {
  return (
    <section className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <SectionTitle
          eyebrow="Agent Service"
          title="企业 Agent 咨询与服务，贯穿 AI 落地全流程"
          description="不只交付工具，而是把 AI 接入真实业务流程，形成可执行、可监控、可持续优化的提效闭环。"
        />
        <div className="rounded-[28px] border border-cyan-200/30 bg-[#08142F]/70 p-4 shadow-[0_0_40px_rgba(0,213,255,0.14)] md:p-6">
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <GlowCard key={service.title} accent="cyan">
                  <Icon size={28} className="text-cyan-200" />
                  <h3 className="mt-6 text-2xl font-bold text-white">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#A9B8D8]">{service.description}</p>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
