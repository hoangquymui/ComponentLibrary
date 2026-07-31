import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Copy, Check, Sparkles, Terminal } from "lucide-react";
import { getComponentById } from "@/data/allComponents";
import { theme } from "@/theme";

export function ComponentDetailPage() {
  const { id } = useParams<{ id: string }>();
  const componentData = getComponentById(id || "");

  const [copiedPrompt, setCopiedPrompt] = useState(false);

  if (!componentData) {
    return (
      <div className="text-center py-16 space-y-4">
        <h3 className={`text-xl font-bold ${theme.colors.text.primary}`}>
          Không tìm thấy Component!
        </h3>
        <p className={`text-sm ${theme.colors.text.secondary}`}>
          Component bạn đang tìm kiếm không tồn tại hoặc đã bị thay đổi đường dẫn.
        </p>
        <Link
          to="/buttons"
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl ${theme.colors.bg.button.primary} text-xs font-semibold shadow-sm`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại trang danh mục</span>
        </Link>
      </div>
    );
  }

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(componentData.prompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <div className="space-y-6 w-full max-w-6xl mx-auto">
      {/* Header điều hướng quay lại */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
        <Link
          to={`/${componentData.category}`}
          className={`inline-flex items-center gap-2 text-xs font-medium ${theme.colors.text.secondary} hover:${theme.colors.text.primary} transition-colors`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại danh mục <strong className="capitalize">{componentData.category}</strong></span>
        </Link>

        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-500/10 text-violet-500 border border-violet-500/20">
          ID: {componentData.id}
        </span>
      </div>

      <div className="space-y-1">
        <h2 className={`text-2xl md:text-3xl font-extrabold ${theme.colors.text.primary}`}>
          {componentData.title}
        </h2>
        <p className={`text-sm ${theme.colors.text.secondary}`}>
          {componentData.description}
        </p>
      </div>

      {/* Bố cục 2 cột: Bên trái là Live Component Preview, Bên phải là AI Prompt gợi ý chi tiết */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* 👈 CỘT BÊN TRÁI: LIVE COMPONENT PREVIEW */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-violet-500" />
            <h4 className={`text-sm font-bold ${theme.colors.text.primary}`}>
              Live Component Preview
            </h4>
          </div>

          <div className={`p-8 rounded-2xl ${theme.colors.bg.secondary} ${theme.colors.border.primary} border shadow-md flex items-center justify-center min-h-[400px] relative`}>
            {componentData.component}
          </div>
        </div>

        {/* 👉 CỘT BÊN PHẢI: AI PROMPT GỢI Ý CHI TIẾT */}
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-500" />
                <h4 className={`text-sm font-bold ${theme.colors.text.primary}`}>
                  AI Prompt gợi ý chi tiết
                </h4>
              </div>

              <button
                onClick={handleCopyPrompt}
                className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg ${theme.colors.bg.button.secondary} hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer font-medium`}
              >
                {copiedPrompt ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500 font-semibold">Đã chép Prompt</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Chép Prompt</span>
                  </>
                )}
              </button>
            </div>

            <div className={`p-5 rounded-2xl ${theme.colors.bg.input} ${theme.colors.border.input} border text-xs md:text-sm ${theme.colors.text.primary} leading-relaxed italic shadow-sm`}>
              "{componentData.prompt}"
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
