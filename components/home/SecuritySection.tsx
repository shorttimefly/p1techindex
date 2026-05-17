import { ArrowUpRight, Cloud, Database, FileKey2, Lock, ScanLine, ShieldCheck } from "lucide-react";
import { GlowCard } from "./GlowCard";
import { SectionTitle } from "./SectionTitle";

const securityItems = ["字段级脱敏", "本地模型处理", "云端模型分流", "权限边界控制", "调用日志审计", "成本与风险监控"];

export function SecuritySection() {
  return (
    <section id="security" className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <SectionTitle
          eyebrow="Security"
          title="企业数据安全优先，敏感数据不出本地"
          description="通过本地模型、私有化部署、字段级脱敏、模型路由和 AIP 策略管控，让企业在安全边界内使用 AI。"
        />
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <GlowCard className="p-6 md:p-8" accent="cyan">
            <div className="grid gap-4">
              <div className="flex items-center gap-4 rounded-[20px] border border-cyan-200/25 bg-cyan-100/5 p-5">
                <Database className="text-cyan-200" />
                <div>
                  <p className="font-bold text-white">敏感数据</p>
                  <p className="text-sm text-[#A9B8D8]">本地模型处理 → 本地结果组装</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-[20px] border border-blue-300/25 bg-blue-400/10 p-5">
                <Cloud className="text-cyan-200" />
                <div>
                  <p className="font-bold text-white">非敏感数据</p>
                  <p className="text-sm text-[#A9B8D8]">云端模型增强理解 → 本地结果组装</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-[20px] border border-amber-300/25 bg-amber-300/10 p-5">
                <ShieldCheck className="text-amber-200" />
                <div>
                  <p className="font-bold text-white">所有调用</p>
                  <p className="text-sm text-[#A9B8D8]">AIP 策略校验 + ModelHub 路由 + 日志审计</p>
                </div>
              </div>
              <a
                href="/login?next=/aip"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cyan-200/35 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-100/70 hover:bg-cyan-100/10"
                aria-label="进入 AIP 登录页查看安全策略"
              >
                进入 AIP 查看安全策略 <ArrowUpRight size={16} />
              </a>
            </div>
          </GlowCard>

          <GlowCard accent="blue">
            <div className="mb-6 flex items-center gap-3">
              <Lock className="text-cyan-200" />
              <h3 className="text-2xl font-bold text-white">安全能力</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {securityItems.map((item, index) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-cyan-200/15 bg-cyan-100/5 p-4 text-sm text-[#F4F8FF]">
                  {index % 2 ? <FileKey2 size={18} className="text-cyan-200" /> : <ScanLine size={18} className="text-cyan-200" />}
                  {item}
                </div>
              ))}
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}
