import { LoginForm } from "@/components/Forms/LoginForm";
import { RegisterForm } from "@/components/Forms/RegisterForm";
import { ResetPasswordForm } from "@/components/Forms/ResetPasswordForm";
import { FeedbackForm } from "@/components/Forms/FeedbackForm";
import { SearchInput } from "@/components/Forms/SearchInput";
import type { ComponentDetailItem } from "@/types/componentDetail";

export const FORM_COMPONENTS: ComponentDetailItem[] = [
  {
    id: "login-form",
    category: "forms",
    title: "Login Form",
    description: "Form đăng nhập chuẩn UI/UX với ô nhập Email, Mật khẩu và phản hồi nút bấm.",
    component: <LoginForm />,
    prompt: `Tạo Login Form component bằng React + Tailwind CSS — form đăng nhập chuẩn production cho bất kỳ ứng dụng web nào có authentication.

Yêu cầu kỹ thuật:
- Fields: Email (type="email") và Password (type="password") với icon trực quan bên trái.
- Validation: chạy onBlur (khi rời field), không chạy onChange liên tục để tránh stress người dùng. Email: format hợp lệ. Password: tối thiểu 8 ký tự (chỉ check ở login nếu backend trả lỗi).
- Toggle hiện/ẩn mật khẩu: icon Eye/EyeOff bên phải password field. aria-label phải cập nhật theo trạng thái ("Hiển thị mật khẩu" / "Ẩn mật khẩu").
- Submit: gọi prop onSubmit(email, password) async; khi đang xử lý nút đổi sang Loading State + disabled.
- Error handling: hiển thị lỗi server phía dưới form (ví dụ "Email hoặc mật khẩu không đúng") — không chỉ console.log.
- "Quên mật khẩu?": link dẫn đến trang reset, không phải button; đặt ngay dưới password field.
- Accessibility: form có aria-label, mỗi input có <label> liên kết bằng htmlFor, error message dùng aria-describedby.
- Bảo mật: KHÔNG log credentials ra console. Luôn dùng HTTPS. Thêm rate limiting phía backend.`,
  },
  {
    id: "register-form",
    category: "forms",
    title: "Register / Sign Up Form",
    description: "Form đăng ký tài khoản mới bao gồm Họ tên, Email và Mật khẩu.",
    component: <RegisterForm />,
    prompt: `Tạo Register Form (Sign Up) component bằng React + Tailwind CSS — form đăng ký tài khoản mới với validation đầy đủ, dùng cho bất kỳ ứng dụng có user authentication.

Yêu cầu kỹ thuật:
- Fields cơ bản: Họ tên (text), Email (email), Mật khẩu (password), Xác nhận mật khẩu (password). Tuỳ dự án có thể thêm Username, Phone.
- Password strength indicator: thanh hiển thị độ mạnh (Yếu/Trung bình/Mạnh/Rất mạnh) dựa trên độ dài + ký tự đặc biệt + số. Cập nhật realtime khi gõ.
- "Xác nhận mật khẩu": chỉ validate khi field này bị blur hoặc khi submit — không báo lỗi ngay khi đang gõ.
- Email uniqueness: không check realtime (gây spam API); chỉ check khi submit hoặc onBlur sau 500ms debounce.
- Checkbox: đồng ý Điều khoản sử dụng + Chính sách bảo mật (link mở tab mới). Submit disabled nếu chưa check.
- Sau khi đăng ký thành công: hiển thị thông báo xác nhận email (nếu có email verification flow), không navigate thẳng vào app.
- Tránh hỏi quá nhiều thông tin ở bước đăng ký — chỉ hỏi những gì thực sự cần; thông tin bổ sung thu thập sau ở profile page.`,
  },
  {
    id: "reset-form",
    category: "forms",
    title: "Reset Password Form",
    description: "Form cập nhật mật khẩu mới và xác nhận mật khẩu.",
    component: <ResetPasswordForm />,
    prompt: `Tạo Reset Password Form component bằng React + Tailwind CSS — gồm cả 2 bước của luồng quên mật khẩu: (1) nhập email để nhận link, (2) nhập mật khẩu mới sau khi click link.

Yêu cầu kỹ thuật:
Bước 1 — Forgot Password Form:
- Chỉ 1 field: Email. Submit gọi API gửi reset link.
- Sau khi submit thành công: ẩn form, hiện thông báo "Kiểm tra email của bạn" — không reveal liệu email có tồn tại hay không (security).
- Nút "Gửi lại" sau 60s nếu không nhận được email (countdown timer).

Bước 2 — New Password Form (dùng token từ URL):
- Fields: Mật khẩu mới + Xác nhận mật khẩu mới.
- Validate token từ URL ngay khi component mount; nếu token hết hạn → hiển thị error + link yêu cầu lại.
- Password strength indicator.
- Toggle hiện/ẩn cho cả 2 field.
- Sau khi đổi thành công: redirect về trang login với thông báo thành công (không tự động đăng nhập để tránh lỗ hổng bảo mật).

Nhận props: mode ("forgot"|"reset"), token? (string từ URL params), onForgot(email) => Promise, onReset(token, newPassword) => Promise.`,
  },
  {
    id: "feedback-form",
    category: "forms",
    title: "Feedback / Contact Form",
    description: "Form gửi ý kiến đóng góp/nhận xét với ô nhập văn bản textarea.",
    component: <FeedbackForm />,
    prompt: `Tạo Feedback / Contact Form component bằng React + Tailwind CSS — dùng trong: trang liên hệ, widget góc phải màn hình (feedback button), modal khảo sát, form báo lỗi.

Yêu cầu kỹ thuật:
- Fields linh hoạt qua props: name? (string), email? (string), category? (select — Bug/Feature Request/General), subject? (string), message (textarea, bắt buộc), rating? (1–5 sao, click để chọn).
- Nhận prop fields?: ("name"|"email"|"category"|"subject"|"rating")[] để hiện/ẩn fields tuỳ ngữ cảnh (form liên hệ khác form báo lỗi).
- Character counter cho textarea (ví dụ "45/500 ký tự"); maxLength validate cả frontend lẫn backend.
- Anti-spam: honeypot field (input ẩn bằng CSS, không phải display:none để bot điền vào) + rate limiting phía backend.
- File attachment (tuỳ chọn): cho phép đính kèm ảnh/screenshot, drag & drop, preview thumbnail, giới hạn size.
- Sau khi submit thành công: hiển thị success state ngay trong form (không redirect), kèm ticket ID nếu có.
- Nhận props: onSubmit(data) => Promise<void>, maxMessageLength? (number), showCategory? (boolean).`,
  },
  {
    id: "search-input",
    category: "forms",
    title: "Search Input / Command Bar",
    description: "Ô nhập dữ liệu tìm kiếm nhanh với icon kính lúp.",
    component: <SearchInput />,
    prompt: `Tạo Search Input component bằng React + Tailwind CSS — từ ô tìm kiếm đơn giản đến command palette nâng cao, dùng trong: header navigation, trang danh sách, sidebar filter, spotlight search (⌘K).

Yêu cầu kỹ thuật:
- Nhận props: value (controlled), onChange, onSearch (khi Enter hoặc click icon), placeholder, isLoading? (hiện spinner thay icon kính lúp), onClear? (nút X xóa nhanh), debounceMs? (số ms delay trước khi fire onChange lên parent — mặc định 300ms).
- Debounce: implement bằng useEffect + setTimeout/clearTimeout hoặc dùng hook useDebounce riêng — không gọi API mỗi keystroke.
- Clear button (X): chỉ hiện khi value.length > 0; click xóa input + focus lại field.
- Loading state: khi đang search, thay icon Search bằng Loader2 (animate-spin).
- Autocomplete/Suggestions dropdown: khi nhận prop suggestions (string[]), hiển thị danh sách kết quả bên dưới với keyboard navigation (ArrowUp/Down, Enter, Escape).
- Accessible: role="searchbox" hoặc type="search", aria-label, aria-autocomplete="list" nếu có suggestions, aria-expanded.
- Keyboard shortcut: ⌘K hoặc / để focus ô search từ bất kỳ đâu trong trang (useEffect global keydown listener).`,
  },
];
