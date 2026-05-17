import { ArrowUpRight, Code2, Factory, LineChart, ShoppingBag, Warehouse } from "lucide-react";
import { GlowCard } from "./GlowCard";
import { SectionTitle } from "./SectionTitle";

const solutions = [
  { title: "电商运营", text: "智能获客 / 自动选品 / 动态定价 / 素材生成 / 智能投放 / AI 客服", icon: ShoppingBag },
  { title: "供应链管理", text: "需求预测 / 自动补货 / 视觉质检 / 智能库位 / 供应商协同 / 库存预警", icon: Warehouse, href: "/aiscm" },
  { title: "企业内部系统", text: "审批系统 / 经营看板 / 仓储操作台 / 销售知识库 / 数据查询工具", icon: Factory },
  { title: "研发提效", text: "需求生成 / 页面生成 / 代码生成 / Code Review / 测试用例生成 / 灰度部署", icon: Code2 },
  { title: "管理层经营分析", text: "AI 经营看板 / 异常预警 / 成本分析 / 人效分析 / 安全审计 / 业务问答", icon: LineChart }
];

export function SolutionSection() {
  return (
    <section id="solutions" className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <SectionTitle
          eyebrow="Solutions"
          title="从具体业务场景切入，让 AI 先产生看得见的结果"
          description="不从技术出发，而从业务痛点出发，优先改造重复、高频、跨系统、可量化的流程。"
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const card = (
              <GlowCard
                key={solution.title}
                accent={index === 4 || solution.href ? "amber" : "blue"}
                className={index === 4 ? "lg:col-span-2" : ""}
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-200/30 bg-cyan-200/10 text-cyan-100">
                    <Icon size={21} />
                  </span>
                  <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                </div>
                <p className="mt-5 text-sm leading-7 text-[#A9B8D8]">{solution.text}</p>
                {solution.href ? (
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-100">
                    进入 AISCM <ArrowUpRight size={15} />
                  </span>
                ) : null}
              </GlowCard>
            );

            if (!solution.href) {
              return card;
            }

            return (
              <a key={solution.title} href={solution.href} className="block h-full" aria-label="进入 AISCM 供应链 AI 首页">
                {card}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
