import { ProfileCard } from "@/components/Cards/ProfileCard";
import { StatCard } from "@/components/Cards/StatCard";
import { PricingCard } from "@/components/Cards/PricingCard";
import { ArticleCard } from "@/components/Cards/ArticleCard";
import { ProductCard } from "@/components/Cards/ProductCard";
import { SocialPostCard } from "@/components/Cards/SocialPostCard";
import { EventCard } from "@/components/Cards/EventCard";
import { TaskProgressCard } from "@/components/Cards/TaskProgressCard";
import type { ComponentDetailItem } from "@/types/componentDetail";

export const CARD_COMPONENTS: ComponentDetailItem[] = [
  {
    id: "profile-card",
    category: "cards",
    title: "Profile Card Glassmorphism",
    description: "Thẻ cá nhân phong cách kính mờ Glassmorphism hiển thị trạng thái Online và thông tin lập trình viên.",
    component: <ProfileCard />,
    prompt: "Thiết kế thẻ Profile Card cá nhân phong cách kính mờ Glassmorphism với Tailwind CSS. Thẻ có khung làm mờ kính backdrop-blur-xl, hình đại diện avatar màu gradient rực rỡ đính kèm chấm tròn màu xanh emerald báo trạng thái Online, tiêu đề tên và nút bấm Theo dõi.",
  },
  {
    id: "stat-card",
    category: "cards",
    title: "Stat Card Analytics",
    description: "Thẻ thống kê doanh thu và chỉ số phần trăm tăng trưởng.",
    component: <StatCard />,
    prompt: "Tạo thẻ Stat Card chỉ số phân tích tài chính bằng Tailwind CSS. Thẻ hiển thị nhãn 'Tổng doanh thu', icon TrendingUp màu tím tím mờ, con số doanh thu lớn $24,500.00 và nhãn chỉ số phần trăm tăng trưởng +12.5% màu xanh lá kèm mũi tên chỉ lên.",
  },
  {
    id: "pricing-card",
    category: "cards",
    title: "Pricing Plan Card",
    description: "Thẻ dịch vụ nâng cấp tài khoản Pro Plan có danh sách tính năng.",
    component: <PricingCard />,
    prompt: "Tạo thẻ Pricing Card bảng giá gói dịch vụ Pro Plan bằng Tailwind CSS. Thẻ có badge đốm sáng mờ phía sau, tiêu đề gói Pro Plan $29/tháng, danh sách các tính năng đính kèm dấu check xanh lá và nút bấm hành động Nâng cấp ngay nổi bật.",
  },
  {
    id: "article-card",
    category: "cards",
    title: "Blog Article Card",
    description: "Thẻ bài viết tin tức/blog có ảnh bìa gradient và tag thể loại.",
    component: <ArticleCard />,
    prompt: "Thiết kế thẻ bài viết tin tức Blog Article Card bằng Tailwind CSS. Thẻ có hình ảnh bìa màu dải gradient rực rỡ flex items-center justify-center, tag thể loại Thiết kế mờ kính ở góc trên, tiêu đề bài viết 2 dòng và thông tin thời gian đọc 5 min read ở chân thẻ.",
  },
  {
    id: "product-card",
    category: "cards",
    title: "E-commerce Product Card",
    description: "Thẻ sản phẩm bán hàng có nhãn giảm giá và sao đánh giá.",
    component: <ProductCard />,
    prompt: "Tạo thẻ sản phẩm bán hàng thương mại điện tử Product Card bằng Tailwind CSS. Thẻ gồm hình ảnh sản phẩm tai nghe Wireless, huy hiệu giảm giá -20% màu đỏ, điểm sao đánh giá 4.9★ màu vàng, giá tiền khuyến mãi $159 và nút Thêm vào giỏ hàng.",
  },
  {
    id: "social-card",
    category: "cards",
    title: "Social Feed Post Card",
    description: "Thẻ bài đăng mạng xã hội tích hợp tương tác thả tim, bình luận và chia sẻ.",
    component: <SocialPostCard />,
    prompt: "Thiết kế thẻ bài đăng mạng xã hội Social Post Card bằng Tailwind CSS. Bao gồm avatar tác giả có viền gradient tím-fuchsia, tên người dùng, thời gian đăng, nội dung bài viết và bộ 3 nút tương tác Thả tim (Heart), Bình luận (MessageSquare) và Chia sẻ (Share2).",
  },
  {
    id: "event-card",
    category: "cards",
    title: "Event Schedule Card",
    description: "Thẻ sự kiện với ô hiển thị ngày tháng nổi bật và nút đăng ký.",
    component: <EventCard />,
    prompt: "Tạo thẻ sự kiện Event Schedule Card bằng Tailwind CSS. Bên trái có ô vuông hiển thị ngày 15 THÁNG 8 màu tím nổi bật, bên phải là tiêu đề hội thảo Tech, thông tin thời gian, địa điểm, số người tham dự và nút Đăng ký vé tham dự.",
  },
  {
    id: "task-card",
    category: "cards",
    title: "Task Progress Card",
    description: "Thẻ tiến độ công việc kèm thanh Progress Bar phần trăm.",
    component: <TaskProgressCard />,
    prompt: "Thiết kế thẻ theo dõi tiến độ dự án Task Progress Card bằng Tailwind CSS. Thẻ hiển thị chỉ số phần trăm 75%, thanh tiến độ Progress Bar gradient tím-indigo và danh sách các tác vụ có icon CheckCircle2 xanh lá báo hoàn thành.",
  },
];
