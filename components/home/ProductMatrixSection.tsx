import { ArrowUpRight, Blocks, Bot, Boxes, ChartNoAxesCombined, Cpu, ShieldCheck } from "lucide-react";
import { GlowCard } from "./GlowCard";
import { SectionTitle } from "./SectionTitle";

const aipLoginHref = "/login?next=/aip";
const aiscmHref = "/aiscm";

const products = [
  {
    title: "企业 AI 管理中台 AIP",
    english: "AI Management Platform",
    description: "统一管理企业 AI 的权限、成本、安全、Agent、日志与效能测评，构建可管、可控、可运营的 AI 中枢。",
    tags: ["权限治理", "成本管理", "安全策略", "Agent 管理", "日志审计", "效能测评"],
    icon: ShieldCheck,
    href: aipLoginHref,
    cta: "进入 AIP"
  },
  {
    title: "模型能力网关 ModelHub",
    english: "Model Gateway / ModelHub",
    description: "统一接入原厂模型、开源模型、云端模型与本地模型，根据任务、成本、时延和安全等级自动路由。",
    tags: ["模型接入", "智能路由", "调用分发", "限流熔断", "成本统计", "调用监控"],
    icon: Bot
  },
  {
    title: "LLM 私有化部署与微调蒸馏",
    english: "Private Deployment & Fine-tuning",
    description: "构建企业专属大模型，沉淀行业知识与业务推理能力，实现数据不出域的安全智能化。",
    tags: ["本地部署", "行业微调", "知识注入", "模型蒸馏", "RAG", "安全推理"],
    icon: Cpu
  },
  {
    title: "本地 0 代码开发平台 P1",
    english: "AI Native App Builder",
    description: "通过自然语言生成页面、流程、表单、报表与代码，帮助企业快速构建内部系统和业务工具。",
    tags: ["自然语言生成", "页面生成", "流程编排", "代码生成", "本地交付", "二次开发"],
    icon: Blocks
  },
  {
    title: "供应链 AI 应用套件",
    english: "Supply Chain AI Suite",
    description: "以多 Agent 协同驱动预测、补货、仓储、质检、供应商协同与商拍内容生成，打造供应链智能决策中枢。",
    tags: ["智能预测", "自动补货", "视觉质检", "智能库位", "供应商协同", "AI 商拍"],
    icon: Boxes,
    href: aiscmHref,
    cta: "进入 AISCM"
  },
  {
    title: "AI 运营 OS",
    english: "AI Growth & Operations OS",
    description: "打通智能获客、自动选品、动态定价、素材生成、智能投放与 AI 客服，形成增长运营闭环。",
    tags: ["智能获客", "自动选品", "动态定价", "素材生成", "智能投放", "经营分析"],
    icon: ChartNoAxesCombined
  }
];

export function ProductMatrixSection() {
  return (
    <section id="products" className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <SectionTitle
          eyebrow="Products"
          title="六大核心产品，覆盖企业 AI 落地全链路"
          description="从模型底座、治理中台到业务应用，形成可部署、可治理、可持续运营的企业 AI 产品矩阵。"
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => {
            const Icon = product.icon;

            const card = (
              <GlowCard accent={index === 2 || product.href === aiscmHref ? "amber" : index % 2 ? "cyan" : "blue"} className="h-full">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-200/30 bg-cyan-200/10 text-cyan-100">
                    <Icon size={22} />
                  </span>
                  {product.href ? (
                    <span className="inline-flex items-center gap-1 rounded-full border border-cyan-200/20 px-3 py-1 text-xs text-cyan-100 transition group-hover:border-cyan-100/70 group-hover:bg-cyan-100/10">
                      {product.cta} <ArrowUpRight size={13} />
                    </span>
                  ) : (
                    <span className="rounded-full border border-cyan-200/20 px-3 py-1 text-xs text-cyan-100">规划中</span>
                  )}
                </div>
                <h3 className="text-xl font-bold leading-8 text-white">{product.title}</h3>
                <p className="mt-2 text-sm font-semibold text-cyan-200">{product.english}</p>
                <p className="mt-4 min-h-[96px] text-sm leading-7 text-[#A9B8D8]">{product.description}</p>
                {product.href === aiscmHref ? (
                  <div className="mt-5 rounded-2xl border border-amber-200/25 bg-amber-300/10 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-100">AISCM</p>
                    <p className="mt-2 text-sm leading-6 text-[#F4F8FF]">进入供应链 AI 工作台，查看预测、补货、库存风险与多 Agent 协同能力。</p>
                  </div>
                ) : null}
                <div className="mt-5 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-cyan-200/15 bg-cyan-100/5 px-3 py-1 text-xs text-[#A9B8D8]">
                      {tag}
                    </span>
                  ))}
                </div>
              </GlowCard>
            );

            if (!product.href) {
              return <div key={product.title}>{card}</div>;
            }

            return (
              <a key={product.title} href={product.href} className="block h-full" aria-label={`${product.cta}：${product.title}`}>
                {card}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
