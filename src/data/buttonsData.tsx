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
    prompt: `Tạo một ThemeToggle button component bằng React + Tailwind CSS cho phép người dùng chuyển đổi giữa Dark Mode và Light Mode trong toàn bộ ứng dụng.

Yêu cầu kỹ thuật:
- Dùng hook useDarkMode() để đọc/ghi trạng thái vào localStorage và toggle class "dark" trên thẻ <html>.
- Hiển thị icon Sun (sáng) và Moon (tối) chồng nhau tại cùng vị trí; icon nào không active thì opacity-0 + scale-0 + rotate-90, icon active thì opacity-100 + scale-100 + rotate-0. Transition 400–500ms ease-in-out.
- Nhận prop showLabel?: boolean. Khi true: hiển thị nhãn chữ "Chế độ Sáng / Chế độ Tối" trượt mở (opacity + translateX) bên cạnh icon. Khi false: chỉ hiện icon, nút thu gọn thành hình vuông.
- Nút phải accessible: aria-label mô tả hành động tiếp theo ("Chuyển sang chế độ tối/sáng"), không chỉ trạng thái hiện tại.
- Hỗ trợ dùng độc lập (standalone button) hoặc nhúng vào Sidebar/Navbar.`,
  },
  {
    id: "gradient-glow",
    category: "buttons",
    title: "Gradient Glow Button",
    description: "Nút bấm hiệu ứng dải màu chuyển tiếp rực rỡ với ánh sáng quét qua khi hover.",
    component: <GradientGlowButton />,
    prompt: `Tạo một Gradient Glow Button component bằng React + Tailwind CSS — phù hợp cho CTA chính (Call-to-Action) trên landing page, hero section, hoặc bất kỳ nơi nào cần thu hút thị giác người dùng ngay lập tức.

Yêu cầu kỹ thuật:
- Nền nút là gradient ngang (from → via → to) với màu brand của dự án; dễ dàng thay bằng Tailwind color class hoặc CSS variable.
- Khi hover: một lớp overlay trắng bán trong suốt (ví dụ white/20) chạy animation "shimmer" từ trái sang phải trong ~600–800ms, tạo cảm giác ánh sáng quét qua mặt nút.
- Nhận props: label (string), leftIcon?, rightIcon?, onClick, disabled, className để tái sử dụng.
- Khi disabled: opacity giảm và pointer-events: none; nên dùng aria-disabled thay vì attribute disabled thuần để giữ focus cho screen reader.
- active:scale-[0.97] để phản hồi nhấp chuột. Transition toàn bộ 200ms.`,
  },
  {
    id: "glassmorphism",
    category: "buttons",
    title: "Glassmorphism Button",
    description: "Nút bấm phong cách kính mờ độc đáo hỗ trợ cả Light Mode và Dark Mode.",
    component: <GlassmorphismButton />,
    prompt: `Tạo Glassmorphism Button component bằng React + Tailwind CSS — phù hợp cho các UI overlay, modal, hero section có ảnh nền, hoặc dashboard dark-themed.

Yêu cầu kỹ thuật:
- Nền: bg-white/10 (light) hoặc bg-white/5 (dark) kết hợp backdrop-blur-md để tạo hiệu ứng kính mờ thực sự; cần đặt trên nền có màu sắc hoặc hình ảnh để thấy rõ hiệu ứng.
- Viền: border border-white/20 — mỏng, bán trong suốt, tạo cảm giác cạnh kính.
- Hover: tăng bg-white/20 nhẹ + shadow nội tại (inset shadow).
- Màu text và icon phải đủ contrast trên cả nền sáng lẫn tối; tránh dùng màu trắng thuần vì khó đọc trên nền sáng.
- Nhận props: label, icon?, onClick, className — không hardcode màu cứng trong component, để className override.
- Accessible: đủ color contrast ratio tối thiểu 4.5:1 (WCAG AA).`,
  },
  {
    id: "neumorphism",
    category: "buttons",
    title: "Neumorphism Soft UI Button",
    description: "Nút bấm nổi khối 3D đổ bóng mềm mại (Neumorphic Design) phản hồi bấm chân thật.",
    component: <NeumorphismButton />,
    prompt: `Tạo Neumorphism (Soft UI) Button component bằng React + Tailwind CSS — dùng cho giao diện đơn sắc nhẹ nhàng kiểu iOS Settings, smart home app, hoặc wellness/health app.

Yêu cầu kỹ thuật:
- Nền nút phải đồng màu với nền container (cùng một màu base, ví dụ slate-100). Hai bóng đổ tạo chiều sâu: bóng sáng (upper-left, màu trắng/40) và bóng tối (lower-right, màu slate-400/40) — dùng box-shadow kép bằng Tailwind arbitrary value hoặc CSS inline.
- Trạng thái :active hoặc isPressed=true: đảo ngược thành inset shadow (shadow-inner) để mô phỏng nút bị nhấn lún xuống.
- KHÔNG hoạt động tốt trên dark mode (neumorphism phụ thuộc vào màu nền đồng nhất); cần cung cấp fallback style cho dark mode hoặc chỉ dùng cho light mode.
- Nhận props: label, icon?, isPressed (controlled), onClick.
- Tránh dùng cho các tác vụ quan trọng (nguy hiểm, submit) vì affordance thấp — ưu tiên cho toggle/switch.`,
  },
  {
    id: "primary-slate",
    category: "buttons",
    title: "Primary Button",
    description: "Nút bấm chính màu sắc tối giản chuẩn theme hệ thống.",
    component: <PrimaryButton />,
    prompt: `Tạo Primary Button component — nút hành động chính (CTA) chuẩn Design System, dùng cho mọi submit form, confirm dialog, hoặc hành động quan trọng nhất trên màn hình.

Yêu cầu kỹ thuật:
- Chỉ dùng một màu brand duy nhất (nhận qua prop variant hoặc className) — không dùng gradient để giữ nhận diện thương hiệu nhất quán.
- Kích thước chuẩn: height 40px (md), 36px (sm), 48px (lg). Padding horizontal nhất quán. Font: medium/semibold.
- States phải rõ ràng: default → hover (brighter/darker 10%) → active (scale-[0.97]) → focus (ring-2 ring-offset-2) → disabled (opacity-50, cursor-not-allowed).
- Nhận props: label (string), size ("sm"|"md"|"lg"), leftIcon?, rightIcon?, isLoading?, disabled?, onClick, type ("button"|"submit"|"reset").
- Khi isLoading=true: thay leftIcon bằng spinner xoay, disabled tự động, aria-busy="true".
- Phải là element <button> thực, không phải <div> giả, để hỗ trợ keyboard navigation và form submission.`,
  },
  {
    id: "outline-border",
    category: "buttons",
    title: "Outline / Secondary Button",
    description: "Nút bấm dạng viền thanh lịch cho các thao tác phụ.",
    component: <OutlineButton />,
    prompt: `Tạo Outline Button (Secondary Button) component bằng React + Tailwind CSS — dùng song song với Primary Button cho hành động phụ (Hủy, Quay lại, Xem thêm).

Yêu cầu kỹ thuật:
- Nền trong suốt, chỉ có viền (border-2 hoặc border) cùng màu brand hoặc neutral.
- Hover: nền nhạt (bg-brand/10 hoặc bg-slate-100) — không đổi màu viền để giữ nhất quán.
- Nhận cùng props interface với Primary Button (label, size, leftIcon, rightIcon, isLoading, disabled, onClick, type) để 2 nút dùng chung Design System.
- Quan trọng: không được dùng Outline Button cho hành động chính trên màn hình — luôn để Primary Button làm CTA chính, Outline là secondary.
- Dark mode: viền và text tự động đổi màu tương phản, nền hover đậm hơn (bg-slate-800/50).`,
  },
  {
    id: "danger-action",
    category: "buttons",
    title: "Danger / Destructive Button",
    description: "Nút hành động cảnh báo màu đỏ cho các tác vụ quan trọng như xóa dữ liệu.",
    component: <DangerButton />,
    prompt: `Tạo Danger (Destructive) Button component bằng React + Tailwind CSS — dùng cho các hành động không thể hoàn tác: Xóa tài khoản, Xóa dữ liệu, Hủy đơn hàng, Logout khẩn cấp.

Yêu cầu kỹ thuật:
- Màu: red-600 / rose-600 — KHÔNG dùng màu đỏ cho bất kỳ hành động bình thường nào.
- Luôn kèm icon cảnh báo (Trash2, AlertTriangle, X) ở bên trái để reinforcement visual.
- Nên có confirmation step trước khi thực thi: khi click lần đầu, nút đổi sang trạng thái "Xác nhận?" + countdown 3s; nếu không confirm thì tự reset. Hoặc trigger modal confirm từ bên ngoài qua prop onConfirm.
- Không đặt Danger Button ngay cạnh Primary Button — phải có khoảng cách hoặc separator để tránh bấm nhầm.
- Accessible: aria-label mô tả rõ hành động nguy hiểm, không chỉ ghi "Xóa".
- Nhận props: label, icon?, onClick, isLoading?, requireConfirmation?: boolean.`,
  },
  {
    id: "loading-state",
    category: "buttons",
    title: "Loading State Button",
    description: "Nút bấm ở trạng thái đang tải dữ liệu tích hợp Spinner xoay tròn.",
    component: <LoadingButton />,
    prompt: `Tạo Loading State Button pattern bằng React + Tailwind CSS — xử lý trạng thái async (gọi API, upload file, submit form) trực tiếp trên nút bấm.

Yêu cầu kỹ thuật:
- Nhận prop isLoading: boolean. Khi true: icon/text chính ẩn đi, spinner Loader2 (animate-spin) hiện ra, nút disabled, chiều rộng KHÔNG thay đổi để layout không nhảy (dùng min-w hoặc giữ nguyên padding).
- Spinner phải cùng màu với text/icon của nút (không hardcode màu riêng).
- aria-busy="true" khi loading, aria-disabled="true" kèm disabled attribute.
- Label có thể thay thế khi loading (ví dụ "Lưu..." thay vì "Lưu lại") — nhận qua prop loadingLabel?: string.
- Pattern nên dùng: const [isLoading, setIsLoading] = useState(false); onClick async: setIsLoading(true) → await apiCall() → setIsLoading(false) với try/finally để đảm bảo reset kể cả khi lỗi.`,
  },
  {
    id: "badge-counter",
    category: "buttons",
    title: "Badge Counter Button",
    description: "Nút thông báo đính kèm nhãn số lượng có hiệu ứng nảy (bounce animation).",
    component: <BadgeButton />,
    prompt: `Tạo Badge Counter Button component bằng React + Tailwind CSS — dùng cho icon notification bell, cart, message inbox trong header/navbar của ứng dụng.

Yêu cầu kỹ thuật:
- Badge đặt absolute tại góc trên-phải (top-0 right-0 translate-x-1/2 -translate-y-1/2) so với nút cha.
- Hiển thị số count; khi count > 99 thì hiển thị "99+". Khi count = 0: ẩn badge hoàn toàn (không hiện "0").
- Animation: khi count thay đổi (tăng), badge scale từ 0 → 1.2 → 1 (bounce effect) bằng CSS keyframe hoặc Tailwind animate-bounce ngắn.
- Nhận props: count (number), icon (ReactNode), onClick, aria-label (bắt buộc mô tả số thông báo cho screen reader: "3 thông báo chưa đọc").
- Khi dùng trong Navbar: đảm bảo badge không bị overflow:hidden của container cha cắt mất — cần overflow-visible trên wrapper.`,
  },
  {
    id: "button-group",
    category: "buttons",
    title: "Button Group / Segmented Control",
    description: "Nút bấm gộp tăng giảm số lượng (Segmented Counter).",
    component: <ButtonGroup />,
    prompt: `Tạo Button Group (Segmented Control) component bằng React + Tailwind CSS — dùng cho quantity picker trong giỏ hàng, font-size selector, view toggle (Grid/List), hoặc bất kỳ nơi nào cần chọn một trong nhiều option liền kề.

Yêu cầu kỹ thuật:
- Các nút trong group chia sẻ border và bo góc chung: nút đầu bo trái (rounded-l-xl), nút cuối bo phải (rounded-r-xl), nút giữa không bo góc; viền chung không bị nhân đôi (dùng -mx-px hoặc divide-x).
- Trạng thái active: nền đậm + text tương phản — phân biệt rõ với inactive.
- Dành cho quantity picker: nút "-" cần disabled khi value = min, nút "+" disabled khi value = max; truyền min/max qua props.
- Dành cho toggle group: chỉ một option được chọn tại một thời điểm; dùng role="group" + aria-label trên container, mỗi nút có aria-pressed.
- Nhận props: options (Array<{label, value, icon?}>), value, onChange, min?, max?, disabled?.`,
  },
  {
    id: "icon-toggle",
    category: "buttons",
    title: "Icon Toggle Button",
    description: "Nút icon thả tim tương tác chuyển đổi trạng thái sinh động.",
    component: <IconButton />,
    prompt: `Tạo Icon Toggle Button component bằng React + Tailwind CSS — nút icon có 2 trạng thái bật/tắt, dùng cho: Like/Unlike, Bookmark/Unbookmark, Follow/Unfollow, Mute/Unmute, Favorite.

Yêu cầu kỹ thuật:
- Nhận props: isActive (controlled), onToggle, icon (ReactNode hoặc tên icon), activeIcon? (icon thay thế khi active), activeColor, size, ariaLabel.
- Khi toggle: micro-animation scale 0.8 → 1.2 → 1.0 trong ~300ms để phản hồi sinh động (không cần thư viện, dùng CSS keyframe hoặc Tailwind animate).
- Icon fill vs outline: khi inactive dùng outline (stroke), khi active dùng filled version (ví dụ Heart outline → Heart fill màu rose-500).
- Optimistic UI: cập nhật state ngay lập tức khi click, gọi API async sau; nếu API lỗi thì revert state và hiện toast error.
- Accessible: aria-pressed="true/false", aria-label mô tả hành động ("Thêm vào yêu thích" / "Bỏ yêu thích").`,
  },
  {
    id: "dropdown-menu",
    category: "buttons",
    title: "Dropdown Menu Button",
    description: "Nút bấm kèm Menu tùy chọn xổ xuống chọn tác vụ.",
    component: <DropdownButton />,
    prompt: `Tạo Dropdown Menu Button component bằng React + Tailwind CSS — nút bấm kèm menu ngữ cảnh xổ xuống, dùng cho: actions menu (⋮), export options, filter selector, language picker.

Yêu cầu kỹ thuật:
- Đóng/mở bằng useState; đóng khi click ra ngoài (useEffect + mousedown event listener trên document) hoặc khi nhấn Escape.
- Menu xuất hiện với animation: opacity 0→1 + scale 0.95→1 từ origin-top-right, duration 150ms. Đóng ngược lại.
- Mỗi item menu nhận: label, icon?, onClick, disabled?, destructive? (nếu true: text màu red).
- Accessibility (WCAG): trigger button có aria-haspopup="menu" + aria-expanded. Menu container có role="menu". Mỗi item có role="menuitem". Keyboard: ArrowDown/ArrowUp điều hướng giữa items, Enter kích hoạt, Escape đóng.
- Vị trí menu: mặc định drop-down, tự động đổi sang drop-up nếu không đủ không gian phía dưới viewport.
- Nhận props: trigger (ReactNode), items (Array<MenuItem>), align ("left"|"right").`,
  },
  {
    id: "fab",
    category: "buttons",
    title: "Floating Action Button (FAB)",
    description: "Nút bấm tròn nổi linh hoạt có hiệu ứng xoay trạng thái.",
    component: <FloatingActionButton />,
    prompt: `Tạo Floating Action Button (FAB) component bằng React + Tailwind CSS — nút nổi cố định trên màn hình, đại diện cho hành động chính của màn hình đó (Material Design pattern).

Yêu cầu kỹ thuật:
- Position: fixed bottom-6 right-6 (mobile) hoặc absolute nếu dùng trong scoped container. z-index đủ cao (z-50).
- Kích thước chuẩn: 56px (FAB) hoặc 40px (mini FAB). Hình tròn (rounded-full). Shadow đậm (shadow-lg).
- Extended FAB: khi hover hoặc theo prop isExpanded, mở rộng ngang để hiện label text kèm icon — animation width + opacity.
- Speed Dial: FAB có thể mở ra nhiều action nhỏ khi click, xếp theo chiều dọc với stagger animation.
- Chỉ dùng DUY NHẤT MỘT FAB trên mỗi màn hình. Không dùng cho hành động phụ.
- Accessible: aria-label mô tả hành động (không chỉ là "+" vì screen reader sẽ đọc "cộng"). Ẩn FAB khi keyboard focus đang ở cuối trang để không chặn tab order.
- Nhận props: icon, label?, onClick, isExpanded?, position?.`,
  },
];
