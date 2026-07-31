import { GradientGlowButton } from "@/components/Buttons/GradientGlow";
import { PrimaryButton } from "@/components/Buttons/PrimaryButton";
import { OutlineButton } from "@/components/Buttons/OutlineButton";
import { DangerButton } from "@/components/Buttons/DangerButton";
import { LoadingButton } from "@/components/Buttons/LoadingButton";
import { IconButton } from "@/components/Buttons/IconButton";
import { DropdownButton } from "@/components/Buttons/DropdownButton";
import { GlassmorphismButton } from "@/components/Buttons/GlassmorphismButton";
import { NeumorphismButton } from "@/components/Buttons/NeumorphismButton";
import { ButtonGroup } from "@/components/Buttons/ButtonGroup";
import { FloatingActionButton } from "@/components/Buttons/FloatingActionButton";
import { BadgeButton } from "@/components/Buttons/BadgeButton";
import { ThemeToggleButton } from "@/components/Buttons/ThemeToggleButton";
import type { ComponentDetailItem } from "@/types/componentDetail";

export const BUTTON_COMPONENTS: ComponentDetailItem[] = [
  {
    id: "theme-toggle",
    category: "buttons",
    title: "Theme Toggle Switcher",
    description: "Nút bấm chuyển đổi Chế độ Giao diện Sáng / Tối với hiệu ứng xoay 3D Icon ☀️/🌙 và trượt mở chữ nhãn mượt mà.",
    component: (
      <div className="p-4 flex items-center justify-center">
        <ThemeToggleButton showLabel={true} />
      </div>
    ),
    prompt: "Thiết kế một Nút bấm Chuyển đổi Giao diện Sáng / Tối (Theme Toggle Switcher) chuẩn Tailwind CSS & React. Khi nhấp chuyển đổi, Icon Mặt Trời ☀️ màu vàng và Icon Mặt Trăng 🌙 màu tím có hiệu ứng xoay 3D 500ms mượt mà (-rotate-90 scale-0 sang rotate-0 scale-100). Hỗ trợ truyền prop showLabel để hiển thị nhãn chữ 'Giao diện Sáng/Tối' trượt mở mượt 300ms hoặc co thành nút icon tròn căn giữa.",
  },
  {
    id: "gradient-glow",
    category: "buttons",
    title: "Gradient Glow Button",
    description: "Nút bấm hiệu ứng dải màu chuyển tiếp rực rỡ với ánh sáng quét qua khi hover.",
    component: <GradientGlowButton />,
    prompt: "Tạo một React Button component hiện đại với Tailwind CSS có hiệu ứng Gradient rực rỡ từ violet-600 qua indigo-600 đến purple-600. Đính kèm icon Sparkles màu vàng nhấp nháy bên trái và icon ArrowRight bên phải. Khi rê chuột hover, hiệu ứng vệt sáng white/20 lướt trượt từ trái sang phải mượt mà trong 700ms, đồng thời icon mũi tên đẩy nhẹ sang phải 4px.",
  },
  {
    id: "glassmorphism",
    category: "buttons",
    title: "Glassmorphism Button",
    description: "Nút bấm phong cách kính mờ độc đáo hỗ trợ cả Light Mode và Dark Mode.",
    component: <GlassmorphismButton />,
    prompt: "Viết một Button React chuẩn phong cách Glassmorphism (kính mờ) bằng Tailwind CSS. Sử dụng nền bg-white/20 ở chế độ sáng và bg-slate-800/40 ở chế độ tối, đính kèm hiệu ứng làm mờ nền backdrop-blur-md và viền mờ border-white/30. Thêm icon Sparkles ở bên trái tự động xoay nhẹ 12 độ khi hover.",
  },
  {
    id: "neumorphism",
    category: "buttons",
    title: "Neumorphism Soft UI Button",
    description: "Nút bấm nổi khối 3D đổ bóng mềm mại (Neumorphic Design) phản hồi bấm chân thật.",
    component: <NeumorphismButton />,
    prompt: "Thiết kế nút Neumorphism (Soft UI) trong React & Tailwind CSS với hiệu ứng đổ bóng kép sáng/tối 3D màu sắc mềm mại. Khi người dùng click chọn active, bóng nổi biến đổi thành shadow inset lún chìm tạo cảm giác bấm phím cơ học chân thật.",
  },
  {
    id: "primary-slate",
    category: "buttons",
    title: "Primary Slate Button",
    description: "Nút bấm chính màu sắc tối giản chuẩn theme hệ thống.",
    component: <PrimaryButton />,
    prompt: "Tạo một Primary Button tối giản chuẩn Design System với Tailwind CSS. Nút có góc bo tròn rounded-xl, padding px-6 py-3, màu nền Slate tối thanh lịch, hiệu ứng hover shadow nâng nhẹ và active:scale-[0.98] phản hồi nhấp chuột mượt mà.",
  },
  {
    id: "outline-border",
    category: "buttons",
    title: "Outline Border Button",
    description: "Nút bấm dạng viền viền thanh lịch cho các thao tác phụ.",
    component: <OutlineButton />,
    prompt: "Thiết kế một Outline Button dạng viền mảnh thanh lịch bằng Tailwind CSS. Nút có đường viền border-slate-300 dark:border-slate-700, nền trong suốt đổi màu nhẹ bg-slate-100 khi hover và hỗ trợ hiển thị đẹp mắt trên cả giao diện sáng lẫn tối.",
  },
  {
    id: "danger-action",
    category: "buttons",
    title: "Danger Action Button",
    description: "Nút hành động cảnh báo màu đỏ cho các tác vụ quan trọng như xóa dữ liệu.",
    component: <DangerButton />,
    prompt: "Viết một Danger Action Button dành cho thao tác nguy hiểm (Xóa dữ liệu) bằng Tailwind CSS. Nút màu đỏ rose-600 nổi bật với icon thùng rác Trash2 ở bên trái, hiệu ứng shadow đổ bóng đỏ shadow-rose-600/25 và co nhẹ scale-[0.98] khi nhấp.",
  },
  {
    id: "loading-state",
    category: "buttons",
    title: "Loading State Button",
    description: "Nút bấm ở trạng thái đang tải dữ liệu tích hợp Spinner xoay tròn.",
    component: <LoadingButton />,
    prompt: "Tạo nút bấm trạng thái đang tải Loading State bằng React & Tailwind CSS. Nút bị khóa disabled với độ mờ opacity-85, đính kèm icon Loader2 xoay tròn liên tục animate-spin và nhãn chữ 'Đang xử lý...'.",
  },
  {
    id: "badge-counter",
    category: "buttons",
    title: "Badge Counter Button",
    description: "Nút thông báo đính kèm nhãn số lượng có hiệu ứng nảy (bounce animation).",
    component: <BadgeButton />,
    prompt: "Thiết kế nút bấm Thông báo đính kèm nhãn Badge đếm số lượng bằng Tailwind CSS. Ở góc trên bên phải nút có một huy hiệu tròn màu đỏ rose-500 nhỏ gọn chứa số thông báo và hiệu ứng nảy animate-bounce thu hút sự chú ý.",
  },
  {
    id: "button-group",
    category: "buttons",
    title: "Button Group Counter",
    description: "Nút bấm gộp tăng giảm số lượng (Segmented Counter).",
    component: <ButtonGroup />,
    prompt: "Tạo bộ nút gộp tăng giảm số lượng Button Group bằng React state và Tailwind CSS. Bao gồm 2 nút icon trừ (-) và cộng (+) bo góc nguyên khối p-1, ở giữa hiển thị số lượng hiện tại với giới hạn giảm tối thiểu là 1.",
  },
  {
    id: "icon-toggle",
    category: "buttons",
    title: "Icon Toggle Button",
    description: "Nút icon thả tim tương tác chuyển đổi trạng thái sinh động.",
    component: <IconButton />,
    prompt: "Tạo nút IconButton thả tim tương tác bật/tắt trái tim bằng React state và Tailwind CSS. Khi bấm chọn active, nút chuyển sang màu hồng rose-500 mờ, icon Heart tô kín màu hồng fill-rose-500 và phóng to nảy nhẹ scale-110.",
  },
  {
    id: "dropdown-menu",
    category: "buttons",
    title: "Dropdown Menu Button",
    description: "Nút bấm kèm Menu tùy chọn xổ xuống chọn tác vụ.",
    component: <DropdownButton />,
    prompt: "Thiết kế nút bấm Dropdown Button kèm menu tùy chọn xổ xuống bằng React và Tailwind CSS. Khi click bấm nút 'Tác vụ', mũi tên ChevronDown xoay 180 độ và một menu các lệnh (Tải xuống PDF, v.v.) hiển thị mượt mà với hiệu ứng animate-in fade-in zoom-in-95.",
  },
  {
    id: "fab",
    category: "buttons",
    title: "Floating Action Button (FAB)",
    description: "Nút bấm tròn nổi linh hoạt có hiệu ứng xoay trạng thái.",
    component: <FloatingActionButton />,
    prompt: "Thiết kế nút Floating Action Button (FAB) hình tròn nổi bật bằng Tailwind CSS. Nút có đổ bóng đậm shadow-xl shadow-indigo-600/40, icon Check ở trung tâm. Khi bấm kích hoạt, nút xoay tròn 180 độ và đổi sang màu xanh emerald-600 lập tức.",
  },
];
