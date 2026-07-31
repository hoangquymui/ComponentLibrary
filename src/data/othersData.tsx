import { IndeterminateSpinner } from "@/components/Others/IndeterminateSpinner";
import { DeterminateProgressRing } from "@/components/Others/DeterminateProgressRing";
import { LinearProgressBar } from "@/components/Others/LinearProgressBar";
import { CustomProgressBar } from "@/components/Others/CustomProgressBar";
import type { ComponentDetailItem } from "@/types/componentDetail";

export const OTHERS_COMPONENTS: ComponentDetailItem[] = [
  {
    id: "indeterminate-spinner",
    category: "others",
    title: "Indeterminate Spinner",
    description:
      "Con quay tải không xác định — dùng khi thời gian xử lý còn lại là ẩn số. Không có %, không có điểm cuối. Tương đương SwiftUI: ProgressView().",
    component: (
      <div className="p-4 flex items-center justify-center">
        <IndeterminateSpinner />
      </div>
    ),
    prompt: `Tạo Indeterminate Spinner component bằng React + Tailwind CSS — indicator loading khi thời lượng xử lý không xác định trước được: gọi API, khởi tạo app, chờ WebSocket, stream data.

Yêu cầu kỹ thuật:
- KHÔNG dùng khi biết progress % — dùng Determinate Progress thay thế.
- Dùng role="progressbar" aria-busy="true" aria-label="Đang tải..." — KHÔNG có aria-valuenow vì không có giá trị % cụ thể.
- Animation: vòng cung (arc) xoay liên tục bằng CSS animation keyframes (không dùng JS interval); prefer CSS animation để không bị chặn bởi JS thread.
- Kích thước linh hoạt qua prop size ("sm" | "md" | "lg") hoặc nhận className để override.
- Màu sắc: inherit từ currentColor của container (không hardcode màu) để tự động phù hợp với mọi context (button, card, full-page overlay).
- Variants: inline (cạnh text), centered (giữa container), full-page overlay (backdrop mờ + spinner giữa màn hình).
- Timeout handling: nếu spinner hiển thị quá lâu (>10s), tự động hiện message "Đang mất nhiều thời gian hơn bình thường..." để người dùng không tự hỏi app có bị treo không.
- Nhận props: size?, color?, label? (text mô tả kèm spinner), className?.`,
  },
  {
    id: "determinate-progress-ring",
    category: "others",
    title: "Determinate Progress Ring",
    description:
      "Vòng tròn SVG thu gọn điền đến % hoàn thành — dùng khi không gian bố cục nhỏ gọn và cần hiển thị tiến trình dạng cung tròn. Tương đương SwiftUI: ProgressView(value:) kiểu Gauge.",
    component: (
      <div className="p-4 flex items-center justify-center">
        <DeterminateProgressRing />
      </div>
    ),
    prompt: `Tạo Determinate Progress Ring (Circular Progress) component bằng React + SVG — dùng khi cần hiển thị % hoàn thành dạng cung tròn trong không gian nhỏ gọn: upload file, score/rating, storage usage, skill proficiency, step completion.

Yêu cầu kỹ thuật:
- Render bằng SVG thuần (không cần thư viện): 2 <circle> — track (nền mờ, stroke-dasharray đầy) và arc (progress, stroke-dashoffset = circumference × (1 - value/100)). Xoay -90deg để bắt đầu từ 12 giờ.
- Nhận props: value (0–100), size (px), strokeWidth (px), color (CSS color string hoặc Tailwind class), trackColor?, label? (text giữa ring), animate? (boolean).
- Animate: khi value thay đổi, transition stroke-dashoffset bằng CSS transition-all duration-700 ease-in-out — không dùng JS requestAnimationFrame.
- Center content: slot linh hoạt qua prop centerContent? (ReactNode) — có thể là %, icon, hoặc text tuỳ chỉnh.
- Multiple rings: hỗ trợ stacked rings (nhiều vòng đồng tâm, mỗi vòng khác strokeWidth) cho dashboard compact.
- Accessible: role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} aria-label mô tả mục đích. Giá trị % hiển thị PHẢI bằng aria-valuenow (WCAG requirement).
- Gradient stroke (tuỳ chọn): dùng <linearGradient> hoặc <linearGradient> trong <defs> SVG để tạo arc gradient màu đẹp.`,
  },
  {
    id: "linear-progress-bar",
    category: "others",
    title: "Linear Progress Bar",
    description:
      "Thanh tiến trình ngang dùng khi có đủ không gian hiển thị track đọc được. Dùng role='progressbar' với aria-valuenow, aria-valuemin, aria-valuemax. Phần trăm hiển thị phải khớp chính xác với aria-valuenow.",
    component: (
      <div className="p-4 flex items-center justify-center w-full">
        <LinearProgressBar />
      </div>
    ),
    prompt: `Tạo Linear Progress Bar component bằng React + Tailwind CSS — thanh tiến trình ngang dùng khi có đủ không gian hiển thị và người dùng cần theo dõi tiến độ dọc theo trục ngang: file upload, form completion, onboarding steps, course progress, download.

Yêu cầu kỹ thuật:
- Nhận props: value (0–100), label? (string), showPercentage? (boolean), size ("xs"|"sm"|"md"|"lg" → tương ứng h-1, h-2, h-3, h-4), color? (CSS color hoặc variant), animate? (boolean), indeterminate? (boolean — khi true: shimmer animation thay vì fill cố định).
- Accessible: role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} aria-label bắt buộc. Nếu có text % hiển thị: phải bằng aria-valuenow CHÍNH XÁC (không làm tròn khác nhau).
- Animate khi mount: fill từ 0% → value bằng CSS transition-all duration-700 ease-out; tránh animate mỗi khi re-render.
- Indeterminate mode: shimmer/wave animation chạy từ trái sang phải lặp lại khi không biết % (dùng khi đang fetch data ban đầu).
- Stacked bars (tuỳ chọn): nhiều segment màu khác nhau trong cùng một track (ví dụ storage: Used / Cache / Free).
- Striped variant: CSS repeating-linear-gradient tạo sọc chéo chuyển động (kiểu bootstrap striped progress).
- Không hardcode màu — dùng CSS custom property hoặc prop để tái sử dụng trên nhiều dự án.`,
  },
  {
    id: "custom-progress-bar",
    category: "others",
    title: "Custom Accessible Progress Bar",
    description:
      "Thanh tiến trình tùy chỉnh hoàn toàn với role='progressbar', aria-valuenow, aria-valuemin, aria-valuemax đầy đủ. Giá trị % hiển thị phải bằng aria-valuenow — chuẩn WCAG.",
    component: (
      <div className="p-4 flex items-center justify-center w-full">
        <CustomProgressBar />
      </div>
    ),
    prompt: `Tạo Custom Progress Indicator component bằng React + Tailwind CSS với đầy đủ ARIA attributes theo chuẩn WCAG 2.1 — dùng khi cần UI progress hoàn toàn tùy chỉnh mà native <progress> element không đáp ứng được về mặt styling.

Yêu cầu kỹ thuật (WCAG bắt buộc):
- Luôn khai báo role="progressbar" trên element chứa visual indicator (không phải container wrapper).
- aria-valuenow: giá trị số hiện tại (integer hoặc float làm tròn 1 chữ số thập phân).
- aria-valuemin="0" và aria-valuemax="100" (hoặc max thực tế nếu không phải 0–100).
- aria-label hoặc aria-labelledby: mô tả PURPOSE của progress bar (ví dụ "Tiến độ upload file", không chỉ ghi "Progress").
- Nếu có text % hiển thị trên UI: giá trị đó PHẢI BẰNG aria-valuenow — không được làm tròn khác nhau.

Yêu cầu UX:
- Multi-step progress: hiển thị từng bước (Step 1/4, Step 2/4...) kèm tên bước; bước hoàn thành có checkmark, bước active highlight, bước chưa đến mờ.
- Nhận props: steps (Array<{id, label, status: "done"|"active"|"pending"}>), currentStep (number).
- Mỗi step transition mượt khi chuyển trạng thái.
- Không dùng div giả làm button cho các step — nếu step clickable dùng <button>; nếu không clickable dùng <li> trong <ol>.
- Kết hợp Linear Bar bên dưới step list để hiển thị overall progress %.`,
  },
];
