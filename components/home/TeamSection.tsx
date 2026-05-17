import { Award, Brain, Building2, Workflow } from "lucide-react";
import { GlowCard } from "./GlowCard";
import { SectionTitle } from "./SectionTitle";

const logos = ["阿里", "字节", "平安", "华为"];
const skills = ["AI 产品设计", "企业系统架构", "大模型应用落地", "供应链数字化", "本地化部署", "Agent 工作流设计"];

export function TeamSection() {
  return (
    <section id="team" className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <SectionTitle
          eyebrow="Team"
          title="来自大厂 AI 产品与研发团队，具备真实落地经验"
          description="核心成员来自阿里 / 字节 / 平安 / 华为，具备多年大厂 AI 产品、研发与企业级 AI 落地经验。"
        />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <GlowCard accent="amber" className="grid place-items-center">
            <div className="grid w-full grid-cols-2 gap-4">
              {logos.map((logo) => (
                <div key={logo} className="grid min-h-28 place-items-center rounded-[20px] border border-cyan-200/20 bg-cyan-100/5 text-2xl font-black text-white">
                  {logo}
                </div>
              ))}
            </div>
          </GlowCard>
          <GlowCard accent="blue">
            <div className="grid gap-4 sm:grid-cols-3">
              {[Award, Brain, Building2].map((Icon, index) => (
                <div key={index} className="rounded-[20px] border border-cyan-200/15 bg-cyan-100/5 p-5">
                  <Icon className="text-cyan-200" />
                  <p className="mt-4 text-sm leading-6 text-[#A9B8D8]">
                    {index === 0 ? "产品与研发双背景" : index === 1 ? "AI 应用落地方法论" : "企业级交付经验"}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="inline-flex items-center gap-2 rounded-full border border-cyan-200/15 bg-cyan-100/5 px-3 py-2 text-sm text-[#A9B8D8]">
                  <Workflow size={14} className="text-cyan-200" />
                  {skill}
                </span>
              ))}
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}
