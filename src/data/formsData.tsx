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
    prompt: "Thiết kế Form đăng nhập Login Form bằng React & Tailwind CSS. Form bao gồm ô nhập Email kèm icon Mail bên trái, ô nhập Mật khẩu kèm icon Lock bên trái, liên kết 'Quên mật khẩu?' và nút Đăng nhập đổi sang trạng thái 'Đăng nhập thành công' kèm icon CheckCircle2 khi submit.",
  },
  {
    id: "register-form",
    category: "forms",
    title: "Register Form",
    description: "Form đăng ký tài khoản mới bao gồm Họ tên, Email và Mật khẩu.",
    component: <RegisterForm />,
    prompt: "Tạo Form đăng ký tài khoản mới Register Form bằng React & Tailwind CSS. Gồm 3 ô nhập liệu có icon đính kèm: Họ tên (User), Email đăng ký (Mail), Mật khẩu (Lock) và nút bấm Đăng ký ngay tự động kích hoạt thông báo thành công.",
  },
  {
    id: "reset-form",
    category: "forms",
    title: "Reset Password Form",
    description: "Form cập nhật mật khẩu mới và xác nhận mật khẩu.",
    component: <ResetPasswordForm />,
    prompt: "Thiết kế Form đặt lại mật khẩu ResetPasswordForm bằng React & Tailwind CSS. Gồm 2 ô nhập liệu bảo mật: Mật khẩu mới (Lock) và Xác nhận mật khẩu (KeyRound) kèm hiệu ứng đường viền nét focus thanh lịch.",
  },
  {
    id: "feedback-form",
    category: "forms",
    title: "Feedback Form",
    description: "Form gửi ý kiến đóng góp/nhận xét với ô nhập văn bản textarea.",
    component: <FeedbackForm />,
    prompt: "Tạo Form phản hồi nhận xét FeedbackForm bằng React & Tailwind CSS. Gồm ô textarea nhập nội dung 4 dòng chống resize, nút Gửi phản hồi kèm icon Send màu tím nổi bật.",
  },
  {
    id: "search-input",
    category: "forms",
    title: "Search Input Field",
    description: "Ô nhập dữ liệu tìm kiếm nhanh với icon kính lúp.",
    component: <SearchInput />,
    prompt: "Thiết kế ô nhập liệu tìm kiếm nhanh Search Input Field bằng Tailwind CSS. Ô nhập bo góc rounded-xl, tích hợp icon kính lúp Search nằm căn giữa bên trái và đường viền đổi màu mượt khi người dùng nhấp con trỏ chuột.",
  },
];
