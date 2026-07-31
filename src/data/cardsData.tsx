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
    title: "Profile Card",
    description: "Thẻ cá nhân phong cách kính mờ Glassmorphism hiển thị trạng thái Online và thông tin lập trình viên.",
    component: <ProfileCard />,
    prompt: `Tạo Profile Card component bằng React + Tailwind CSS — dùng trong: trang hồ sơ người dùng, danh sách team member, card tác giả bài viết, sidebar user info.

Yêu cầu kỹ thuật:
- Nhận props: name (string), role (string), avatarUrl (string), isOnline? (boolean), stats? (Array<{label, value}>), onFollow? () => void.
- Avatar: hiển thị ảnh nếu avatarUrl hợp lệ, fallback là initials (lấy chữ cái đầu của name) trên nền màu được hash từ name — tránh màu ngẫu nhiên mỗi lần render.
- Online indicator: chấm tròn emerald tuyệt đối (absolute bottom-0 right-0) trên avatar; ẩn khi isOnline=false.
- Skeleton loading state: khi data chưa load, hiển thị shimmer placeholder thay thế toàn bộ card (dùng animate-pulse).
- Glassmorphism chỉ phù hợp khi card nằm trên nền có màu/ảnh; nếu nền trắng/xám đơn thì dùng border + shadow thay thế.
- Tránh đặt thông tin nhạy cảm (email, phone) trực tiếp lên card nếu card hiển thị công khai.`,
  },
  {
    id: "stat-card",
    category: "cards",
    title: "Stat / KPI Card",
    description: "Thẻ thống kê doanh thu và chỉ số phần trăm tăng trưởng.",
    component: <StatCard />,
    prompt: `Tạo Stat Card (KPI Card) component bằng React + Tailwind CSS — dùng trong dashboard admin, analytics page, báo cáo tài chính, bất kỳ màn hình nào cần hiển thị chỉ số tóm tắt.

Yêu cầu kỹ thuật:
- Nhận props: title (string), value (string | number), unit? (string, ví dụ "$", "₫", "%"), change? (number — dương là tăng, âm là giảm), changeLabel? (string, ví dụ "so với tháng trước"), icon? (ReactNode), trend? ("up"|"down"|"neutral").
- change tự động tô màu: dương → emerald/green, âm → red/rose, 0 → slate. Kèm icon TrendingUp/TrendingDown.
- value nên format số: ngàn phân cách (1,000,000), rút gọn (1.2M, 45K) — dùng Intl.NumberFormat hoặc utility function.
- Sparkline mini chart (tuỳ chọn): một dãy số nhỏ render thành SVG polyline tối giản phía dưới value, không cần thư viện chart.
- Loading state: skeleton shimmer thay thế toàn bộ card.
- Grid layout: nên dùng 2–4 StatCard theo hàng ngang (grid-cols-2 md:grid-cols-4); mỗi card nên có min-height cố định để không nhảy layout khi data thay đổi.`,
  },
  {
    id: "pricing-card",
    category: "cards",
    title: "Pricing Plan Card",
    description: "Thẻ dịch vụ nâng cấp tài khoản Pro Plan có danh sách tính năng.",
    component: <PricingCard />,
    prompt: `Tạo Pricing Plan Card component bằng React + Tailwind CSS — dùng trên trang bảng giá (pricing page) của SaaS, subscription app, hoặc bất kỳ dịch vụ nào có nhiều gói.

Yêu cầu kỹ thuật:
- Nhận props: planName (string), price (number), currency (string), billingCycle ("monthly"|"yearly"), features (Array<{text, included: boolean}>), isPopular? (boolean), ctaLabel (string), onSelect () => void.
- isPopular=true: thêm badge "Phổ biến nhất" nổi bật + border màu brand + shadow đậm hơn để nổi bật so với các card khác.
- features list: dấu ✓ (xanh) cho included=true, dấu ✗ (xám mờ) hoặc ẩn cho included=false — giúp so sánh nhanh giữa các gói.
- Billing toggle (yearly/monthly): thường đặt bên ngoài card, truyền vào qua prop để card tự tính và hiển thị giá đúng.
- CTA button: nếu là gói người dùng đang dùng → "Gói hiện tại" (disabled); nếu gói cao hơn → "Nâng cấp"; nếu gói thấp hơn → "Hạ cấp" (warning style).
- Không hardcode màu sắc trong component — dùng CSS variable hoặc prop colorScheme để dễ đổi brand color.`,
  },
  {
    id: "article-card",
    category: "cards",
    title: "Article / Blog Card",
    description: "Thẻ bài viết tin tức/blog có ảnh bìa gradient và tag thể loại.",
    component: <ArticleCard />,
    prompt: `Tạo Article Card (Blog Post Card) component bằng React + Tailwind CSS — dùng trong: trang danh sách blog, news feed, related posts section, search results.

Yêu cầu kỹ thuật:
- Nhận props: title (string), excerpt (string, tối đa 2–3 dòng với line-clamp), coverImage (string), category (string), author ({name, avatarUrl}), publishedAt (Date | string), readingTime? (number, phút), href (string).
- Toàn bộ card là một link (<a> hoặc <Link>) để SEO và accessibility đúng chuẩn — không dùng onClick trên div để navigate.
- Cover image: dùng aspect-ratio (aspect-video hoặc aspect-[16/9]), object-fit: cover; fallback gradient khi ảnh lỗi.
- Hover: ảnh bìa scale nhẹ (scale-105) bên trong container overflow-hidden, underline title.
- Skeleton: hiển thị shimmer cho ảnh, title (2 dòng), meta info khi loading.
- Không hiển thị full content trên card — chỉ excerpt; click vào mới dẫn đến trang chi tiết.
- Date format: dùng Intl.DateTimeFormat hoặc thư viện date-fns để format local timezone.`,
  },
  {
    id: "product-card",
    category: "cards",
    title: "Product Card (E-commerce)",
    description: "Thẻ sản phẩm bán hàng có nhãn giảm giá và sao đánh giá.",
    component: <ProductCard />,
    prompt: `Tạo Product Card component bằng React + Tailwind CSS — dùng trong: trang danh sách sản phẩm e-commerce, trang tìm kiếm, trang category, section "Sản phẩm liên quan".

Yêu cầu kỹ thuật:
- Nhận props: name (string), price (number), originalPrice? (number), currency (string), rating? (number, 0–5), reviewCount? (number), imageUrl (string), badge? (string, ví dụ "Hot", "Mới"), isInStock (boolean), onAddToCart () => void, href (string).
- Discount badge: tự tính % giảm giá từ (originalPrice - price) / originalPrice * 100 nếu có originalPrice; hiện badge góc trên trái.
- Rating: render sao bằng SVG hoặc icon (không dùng emoji); hỗ trợ half-star; aria-label="4.5 trên 5 sao, 128 đánh giá".
- Hết hàng (isInStock=false): overlay mờ nhạt + badge "Hết hàng" + nút Thêm vào giỏ disabled.
- Quick action: icon Wishlist (heart) absolute góc trên phải, hiện khi hover card.
- Ảnh sản phẩm: vuông (aspect-square), object-contain (không crop sản phẩm), nền trắng/xám nhạt.
- Giá tiền: luôn format đúng currency với Intl.NumberFormat — không hardcode ký hiệu tiền tệ.`,
  },
  {
    id: "social-card",
    category: "cards",
    title: "Social Feed Post Card",
    description: "Thẻ bài đăng mạng xã hội tích hợp tương tác thả tim, bình luận và chia sẻ.",
    component: <SocialPostCard />,
    prompt: `Tạo Social Post Card component bằng React + Tailwind CSS — dùng trong: news feed, activity timeline, comment section, community forum, trong app có tính năng social.

Yêu cầu kỹ thuật:
- Nhận props: author ({name, avatarUrl, handle}), content (string), images? (string[]), timestamp (Date), likes (number), comments (number), shares (number), isLiked (boolean), onLike () => void, onComment () => void, onShare () => void.
- Optimistic update cho Like: cập nhật isLiked + count ngay khi click, rollback nếu API lỗi.
- Images: nếu 1 ảnh → full width; 2 ảnh → grid-cols-2; 3+ ảnh → grid-cols-2 với ảnh cuối overlay "+N". Click mở lightbox.
- Content: truncate sau 3 dòng với "Xem thêm" button — không dùng line-clamp cứng nếu content là rich text.
- Timestamp: format relative ("5 phút trước", "2 giờ trước") với Intl.RelativeTimeFormat; tooltip hiện datetime tuyệt đối khi hover.
- Menu ⋮: Edit, Delete, Report, Copy link — chỉ hiện Edit/Delete nếu là bài của người dùng hiện tại.
- Không hiện content nhạy cảm mà không có warning/spoiler toggle.`,
  },
  {
    id: "event-card",
    category: "cards",
    title: "Event / Schedule Card",
    description: "Thẻ sự kiện với ô hiển thị ngày tháng nổi bật và nút đăng ký.",
    component: <EventCard />,
    prompt: `Tạo Event Card component bằng React + Tailwind CSS — dùng trong: trang sự kiện, lịch họp, dashboard thông báo, email digest, anywhere người dùng cần theo dõi thời gian sự kiện.

Yêu cầu kỹ thuật:
- Nhận props: title (string), description? (string), startDate (Date), endDate? (Date), location? (string | {type: "online"|"offline", address}), attendees? (number), maxAttendees? (number), isRegistered (boolean), onRegister () => void, href? (string).
- Date display: format ngày/tháng/giờ theo locale người dùng (Intl.DateTimeFormat). Nếu sự kiện nhiều ngày: hiển thị range. Nếu sắp diễn ra trong 24h: highlight màu đặc biệt + badge "Sắp diễn ra".
- Đã đăng ký (isRegistered=true): nút đổi thành "Đã đăng ký ✓" (disabled, màu emerald) + option "Hủy đăng ký".
- Hết chỗ (attendees >= maxAttendees): nút "Hết chỗ" (disabled) + badge đỏ + waitlist option.
- Location: nếu online → link Join meeting; nếu offline → link Google Maps.
- Countdown timer (tuỳ chọn): hiển thị đếm ngược D:HH:MM nếu sự kiện trong vòng 7 ngày.`,
  },
  {
    id: "task-card",
    category: "cards",
    title: "Task / Project Progress Card",
    description: "Thẻ tiến độ công việc kèm thanh Progress Bar phần trăm.",
    component: <TaskProgressCard />,
    prompt: `Tạo Task Progress Card component bằng React + Tailwind CSS — dùng trong: project management dashboard, kanban board, todo app, OKR tracking, sprint planning.

Yêu cầu kỹ thuật:
- Nhận props: title (string), description? (string), progress (number, 0–100), tasks (Array<{id, label, isDone}>), assignees? (Array<{name, avatarUrl}>), dueDate? (Date), priority? ("low"|"medium"|"high"|"critical"), status ("todo"|"in_progress"|"done"|"blocked").
- Progress bar: tính tự động từ tasks (done/total) nếu không truyền progress trực tiếp. Màu đổi theo % (0–33: red, 34–66: amber, 67–99: blue, 100: green).
- Assignees: hiển thị avatar stack (overlap -ml-2) tối đa 3; nếu nhiều hơn hiện "+N". Tooltip tên khi hover.
- Due date: tô đỏ nếu quá hạn (dueDate < today && status !== "done"). Format relative ("Hết hạn hôm nay", "Còn 3 ngày").
- Priority badge: dùng màu sắc rõ ràng — critical (red), high (orange), medium (amber), low (slate).
- Status "blocked": hiển thị warning banner nổi bật phía trên card, không ẩn đi.
- Click vào task item để toggle isDone (optimistic update).`,
  },
];
