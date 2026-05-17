export function Footer() {
  return (
    <footer className="border-t border-cyan-200/15 px-6 py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 text-sm text-[#6F7F9E] md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">AI Service Platform 企业 AI 服务</p>
          <p className="mt-2">统一模型底座，管理企业 AI，落地业务智能化。</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="/login?next=/aip" className="hover:text-cyan-100">
            进入 AIP
          </a>
          <a href="#products" className="hover:text-cyan-100">
            产品矩阵
          </a>
          <a href="#architecture" className="hover:text-cyan-100">
            架构能力
          </a>
          <a href="#cta" className="hover:text-cyan-100">
            联系合作
          </a>
        </div>
      </div>
    </footer>
  );
}
