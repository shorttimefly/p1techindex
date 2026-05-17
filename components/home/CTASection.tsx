import { ArrowRight } from "lucide-react";
import { GlowCard } from "./GlowCard";

const businessTypes = ["电商", "供应链", "制造业", "游戏", "智能穿戴", "企业内部系统", "其他"];

export function CTASection() {
  return (
    <section id="cta" className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <GlowCard className="grid gap-10 p-6 md:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start" accent="cyan">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Start</p>
            <h2 className="text-balance text-3xl font-black leading-tight text-white md:text-5xl">
              想知道你的企业适合从哪个 AI 场景开始？
            </h2>
            <p className="mt-6 text-base leading-8 text-[#A9B8D8]">
              我们可以基于你的业务流程、系统现状和数据安全要求，给出一套可落地的 AI 改造路径。
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="mailto:hello@p1tech.cc" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1E7BFF] px-6 py-3 font-semibold text-white">
                预约 AI 转型咨询 <ArrowRight size={18} />
              </a>
              <a href="mailto:hello@p1tech.cc" className="inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/35 px-6 py-3 font-semibold text-cyan-100">
                获取产品方案
              </a>
            </div>
          </div>

          <form className="grid gap-4" aria-label="AI 转型咨询表单">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-[#A9B8D8]">
                姓名
                <input className="min-h-12 rounded-2xl border border-cyan-200/20 bg-[#050B1E]/70 px-4 text-white outline-none focus:border-cyan-200" name="name" />
              </label>
              <label className="grid gap-2 text-sm text-[#A9B8D8]">
                公司
                <input className="min-h-12 rounded-2xl border border-cyan-200/20 bg-[#050B1E]/70 px-4 text-white outline-none focus:border-cyan-200" name="company" />
              </label>
              <label className="grid gap-2 text-sm text-[#A9B8D8]">
                职位
                <input className="min-h-12 rounded-2xl border border-cyan-200/20 bg-[#050B1E]/70 px-4 text-white outline-none focus:border-cyan-200" name="role" />
              </label>
              <label className="grid gap-2 text-sm text-[#A9B8D8]">
                手机号 / 微信
                <input className="min-h-12 rounded-2xl border border-cyan-200/20 bg-[#050B1E]/70 px-4 text-white outline-none focus:border-cyan-200" name="contact" />
              </label>
            </div>
            <label className="grid gap-2 text-sm text-[#A9B8D8]">
              业务类型
              <select className="min-h-12 rounded-2xl border border-cyan-200/20 bg-[#050B1E]/70 px-4 text-white outline-none focus:border-cyan-200" name="businessType">
                {businessTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm text-[#A9B8D8]">
              当前最想解决的问题
              <textarea className="min-h-28 rounded-2xl border border-cyan-200/20 bg-[#050B1E]/70 px-4 py-3 text-white outline-none focus:border-cyan-200" name="problem" />
            </label>
            <button type="button" className="min-h-12 rounded-full bg-cyan-300 px-6 py-3 font-bold text-[#050B1E]" aria-label="提交咨询需求">
              提交咨询需求
            </button>
          </form>
        </GlowCard>
      </div>
    </section>
  );
}
