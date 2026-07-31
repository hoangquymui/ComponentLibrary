import { User } from "lucide-react";
import { theme } from "@/theme";

export function ProfileCard() {
  return (
    <div className={`w-full max-w-sm p-6 rounded-2xl ${theme.colors.bg.card} ${theme.colors.border.primary} border backdrop-blur-xl shadow-xl flex flex-col items-center text-center space-y-4`}>
      <div className="relative">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-500 p-1">
          <div className={`w-full h-full rounded-full ${theme.colors.bg.drawer} flex items-center justify-center`}>
            <User className={`w-10 h-10 ${theme.colors.text.accent}`} />
          </div>
        </div>
        <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full" />
      </div>

      <div>
        <h4 className={`text-lg font-bold ${theme.colors.text.primary}`}>Nguyễn Văn A</h4>
        <p className={`text-xs ${theme.colors.text.secondary}`}>Frontend Developer & Designer</p>
      </div>

      <p className={`text-sm ${theme.colors.text.secondary}`}>
        Đang thực hành và thiết kế UI Component chuẩn với Tailwind CSS & React.
      </p>

      <div className="flex gap-2 w-full pt-2">
        <button className={`flex-1 py-2 px-4 rounded-xl ${theme.colors.bg.button.primary} text-sm font-medium transition-colors cursor-pointer`}>
          Theo dõi
        </button>
        <button className={`flex-1 py-2 px-4 rounded-xl ${theme.colors.bg.button.secondary} text-sm font-medium transition-colors cursor-pointer`}>
          Tin nhắn
        </button>
      </div>
    </div>
  );
}
