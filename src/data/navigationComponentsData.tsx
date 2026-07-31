import { BottomNav } from "@/components/Navigation/BottomNav";
import { TabBar } from "@/components/Navigation/TabBar";
import { NavbarWeb } from "@/components/Navigation/NavbarWeb";
import { BreadcrumbsNav } from "@/components/Navigation/BreadcrumbsNav";
import { PaginationNav } from "@/components/Navigation/PaginationNav";
import { CollapsibleRightSidebarNav } from "@/components/Navigation/CollapsibleRightSidebarNav";
import { CollapsibleLeftSidebarNav } from "@/components/Navigation/CollapsibleLeftSidebarNav";
import type { ComponentDetailItem } from "@/types/componentDetail";

export const NAVIGATION_COMPONENTS: ComponentDetailItem[] = [
  {
    id: "left-sidebar",
    category: "navigation",
    title: "Collapsible Left Sidebar",
    description: "Thanh điều hướng Left Sidebar lề trái trượt mở/đóng mượt mà với nút Hamburger (☰), Tiêu đề thương hiệu, danh sách Menu có Badge đếm số lượng và nút chuyển đổi giao diện Sáng/Tối (ThemeToggle) căn giữa tự động.",
    component: <CollapsibleLeftSidebarNav />,
    prompt: `Tạo Collapsible Left Sidebar Navigation component bằng React + Tailwind CSS — sidebar điều hướng chính cho Admin Dashboard, CMS, SaaS app, bất kỳ ứng dụng nào có nhiều section cần menu cố định.

Yêu cầu kỹ thuật:
- Hai trạng thái: expanded (w-60 hoặc w-64) và collapsed (w-16); chuyển đổi bằng transition-all duration-300 với easing cubic-bezier tự nhiên.
- Header sidebar: nút hamburger (☰) luôn hiển thị; tên app/logo chỉ hiển thị khi expanded (opacity + translate animation).
- Navigation items: mỗi item có icon (luôn hiển thị) + label (ẩn khi collapsed) + badge count (ẩn khi collapsed). Khi collapsed, tooltip hiển thị label khi hover icon.
- Active state: highlight item đang active dựa trên current route (useLocation từ React Router hoặc pathname từ Next.js usePathname).
- Footer sidebar: ThemeToggle (icon only khi collapsed, icon + label khi expanded) + thông tin user/logout.
- Nhận props: isExpanded (controlled từ App), onToggle () => void, navItems (Array<{id, path, label, icon, badge?}>), activeId (string).
- Persistent state: lưu trạng thái expanded/collapsed vào localStorage để giữ nguyên sau khi reload.
- Overlay trên mobile: khi màn hình < md, sidebar đổi sang mode drawer (fixed, overlay backdrop, đóng khi click ra ngoài).`,
  },
  {
    id: "right-sidebar",
    category: "navigation",
    title: "Collapsible Right Sidebar",
    description: "Thanh điều hướng Right Sidebar lề phải trượt mở/đóng mượt mà với nút Hamburger (☰), Tiêu đề, danh sách Menu có Badge đếm số lượng và nút chuyển đổi giao diện Sáng/Tối (ThemeToggle) căn giữa tự động.",
    component: <CollapsibleRightSidebarNav />,
    prompt: `Tạo Collapsible Right Sidebar Navigation component bằng React + Tailwind CSS — sidebar phụ ở lề phải, dùng cho: panel ngữ cảnh (context panel), bộ lọc nâng cao, properties panel (như Figma/VS Code), notification tray, AI assistant panel.

Yêu cầu kỹ thuật:
- Vị trí: fixed hoặc sticky right-0, không đè lên main content mà đẩy main content sang trái (dùng margin-right responsive trên container).
- Hai trạng thái: expanded (w-60–w-80 tuỳ nội dung) và collapsed (w-0 hoặc w-12); animation transform translateX hoặc width.
- Trigger mở: nút ☰ trong header (global) hoặc nút tab cố định ở mép phải màn hình.
- Nội dung panel: tuỳ ngữ cảnh — có thể là filter options, properties của item đang chọn, notification list, hoặc navigation links.
- Nếu dùng làm navigation: tương tự Left Sidebar nhưng icon và label bố cục ngược (icon bên phải hoặc theo thiết kế RTL).
- Đóng khi: click backdrop (mobile), nhấn Escape, hoặc navigate sang route khác.
- Nhận props: isOpen (controlled), onClose () => void, children (ReactNode) — nội dung linh hoạt qua children, không hardcode.
- Accessible: role="complementary" hoặc role="navigation", aria-label mô tả purpose, focus trap khi open trên mobile.`,
  },
  {
    id: "navbar-web",
    category: "navigation",
    title: "Top Header Navbar",
    description: "Thanh điều hướng Header Web chính thức đầy đủ Logo, Links, Tìm kiếm, Thông báo và Dùng thử.",
    component: <NavbarWeb />,
    prompt: `Tạo Top Header Navbar component bằng React + Tailwind CSS — thanh điều hướng chính nằm trên cùng cho website/landing page/web app; một trong những component quan trọng nhất ảnh hưởng đến UX toàn bộ site.

Yêu cầu kỹ thuật:
- Layout: Logo (trái) + Nav links (giữa) + Actions (phải: search, notification, CTA button, user avatar).
- Sticky + blur: position sticky top-0 + backdrop-blur-md + border-b khi scroll (thêm class "scrolled" qua scroll event listener, chuyển từ transparent sang blurred background).
- Mobile responsive: Nav links ẩn thành hamburger menu; click mở mobile drawer (full-screen hoặc slide-down).
- Dropdown menus: các nav link có sub-menu mở khi hover (desktop) hoặc click (mobile); đóng khi click ra ngoài hoặc Escape.
- Active link: highlight link của trang hiện tại.
- User menu: avatar → dropdown với Profile, Settings, Logout.
- Notification bell: badge count + dropdown panel danh sách thông báo.
- Nhận props: logo (ReactNode), navItems (Array<{label, href, children?}>), actions? (ReactNode), user? ({name, avatarUrl}), onLogout? () => void.
- Skip link: "Bỏ qua điều hướng" link ẩn cho keyboard/screen reader users (focus-visible mới hiện).`,
  },
  {
    id: "tab-bar",
    category: "navigation",
    title: "Segmented TabBar",
    description: "Thanh chuyển đổi Tab dạng viên thuốc (Segmented Control Pills) tương tác chuyển nội dung.",
    component: <TabBar />,
    prompt: `Tạo Segmented TabBar (Tab Control) component bằng React + Tailwind CSS — dùng để chuyển đổi giữa các view của cùng một màn hình mà không reload trang: dashboard sections, filter categories, settings tabs, report views.

Yêu cầu kỹ thuật:
- Nhận props: tabs (Array<{id, label, icon?, badge?}>), activeTab (string), onChange (id: string) => void, variant ("pills"|"underline"|"boxed"), size ("sm"|"md"|"lg").
- variant="pills": nền active di chuyển mượt giữa các tab bằng absolute positioned highlight + CSS transition (không thay background từng tab riêng lẻ).
- variant="underline": đường gạch chân trượt theo tab active (phổ biến trong web app kiểu Material/Ant Design).
- Overflow scroll: khi tabs nhiều hơn container, tự động overflow-x-auto + ẩn scrollbar (scrollbar-hide hoặc custom CSS).
- Badge: hiển thị số lượng (notifications, unread) trên từng tab; auto hide khi badge = 0.
- Keyboard navigation: ArrowLeft/Right để chuyển tab, Home/End để tab đầu/cuối, Enter/Space để select.
- Accessible: role="tablist" trên container, role="tab" + aria-selected + aria-controls trên mỗi tab, role="tabpanel" trên nội dung tương ứng, liên kết bằng id.
- Không dùng TabBar để navigate sang page khác — dùng cho in-page content switch; nếu cần navigate dùng Link thay.`,
  },
  {
    id: "breadcrumbs",
    category: "navigation",
    title: "Breadcrumb Navigation",
    description: "Thanh điều hướng phân cấp đường dẫn trang web kèm icon trực quan.",
    component: <BreadcrumbsNav />,
    prompt: `Tạo Breadcrumb Navigation component bằng React + Tailwind CSS — hiển thị đường dẫn phân cấp (hierarchical path) giúp người dùng biết mình đang ở đâu và dễ dàng quay lại cấp trên.

Yêu cầu kỹ thuật:
- Nhận props: items (Array<{label, href?, icon?}>); item cuối cùng là trang hiện tại (không có href, không clickable).
- Separator: tuỳ chọn qua prop separator ("/" | ">" | ChevronRight icon | bất kỳ ReactNode).
- Auto-generate từ route: có thể nhận prop autoGenerate=true để tự parse pathname hiện tại thành breadcrumb items (cần mapping label từ slug).
- Truncation: khi có nhiều hơn 4 cấp, collapse các cấp giữa thành "..." clickable — click mở dropdown hiển thị các cấp ẩn.
- Accessible: bọc trong <nav aria-label="Breadcrumb">, dùng <ol> thay <ul> (ordered list phản ánh thứ bậc), item hiện tại có aria-current="page".
- SEO: render đúng structured data (JSON-LD BreadcrumbList) nếu dùng trong SSR (Next.js).
- Mobile: rút gọn chỉ hiển thị item cha gần nhất ("← Tên trang cha") khi màn hình nhỏ.`,
  },
  {
    id: "pagination",
    category: "navigation",
    title: "Pagination Navigation",
    description: "Thanh phân trang số (Page 1..N) kèm nút Chuyển trang trước / sau.",
    component: <PaginationNav />,
    prompt: `Tạo Pagination component bằng React + Tailwind CSS — điều hướng phân trang cho danh sách dữ liệu lớn (API list, table, search results, product catalog).

Yêu cầu kỹ thuật:
- Nhận props: currentPage (number), totalPages (number), onPageChange (page: number) => void, siblingCount? (số trang hiện mỗi bên current, mặc định 1), boundaryCount? (số trang hiện ở đầu/cuối, mặc định 1).
- Logic hiển thị: luôn hiện trang 1, trang cuối, current ± siblingCount; các khoảng trống hiển thị "..." (không phải nút, không clickable). Ví dụ: [1] ... [4] [5] [6] ... [20].
- Nút Prev/Next: disabled và aria-disabled khi ở trang đầu/cuối; không ẩn đi (để layout không nhảy).
- Page size selector (tuỳ chọn): dropdown chọn số item/trang (10, 25, 50, 100); nhận prop onPageSizeChange.
- Jump to page (tuỳ chọn): input số trang trực tiếp cho danh sách rất dài.
- Accessible: bọc trong <nav aria-label="Phân trang">, trang active có aria-current="page", tất cả nút có aria-label mô tả rõ ("Trang trước", "Trang 5", "Trang tiếp theo").
- URL sync: cập nhật query param ?page=N vào URL khi chuyển trang (hỗ trợ share link và back/forward browser).
- Không dùng offset pagination cho dataset cực lớn — cursor-based pagination phù hợp hơn nhưng UI tương tự (chỉ có Prev/Next).`,
  },
  {
    id: "bottom-nav",
    category: "navigation",
    title: "Mobile Bottom Navigation",
    description: "Thanh điều hướng đáy màn hình di động 4 tab linh hoạt.",
    component: <BottomNav />,
    prompt: `Tạo Mobile Bottom Navigation Bar component bằng React + Tailwind CSS — thanh tab cố định ở đáy màn hình cho mobile app (Progressive Web App, mobile-first web), tương đương UITabBar của iOS và BottomNavigationView của Android.

Yêu cầu kỹ thuật:
- Nhận props: tabs (Array<{id, label, icon, activeIcon?, badge?}>), activeTab (string), onChange (id: string) => void, hideLabels? (boolean — icon only mode).
- Fixed bottom: position fixed bottom-0 + Safe Area Inset (padding-bottom env(safe-area-inset-bottom)) cho iPhone notch/home indicator.
- Active indicator: đổi màu icon + label; tuỳ chọn thêm dot indicator hoặc animated pill/bubble phía sau icon active.
- Badge: số thông báo nhỏ góc trên phải icon; ẩn khi badge = 0.
- Scroll behaviour: ẩn bottom nav khi scroll down, hiện lại khi scroll up (gọi là "auto-hide" — tăng không gian nội dung).
- Chỉ dùng 3–5 tab — không nhét nhiều hơn; tab thứ 5+ nên là "More" mở thêm options.
- Main content: padding-bottom bằng chiều cao bottom nav + safe area để nội dung không bị che.
- Accessible: role="navigation" trên container, mỗi tab có aria-label, tab active có aria-current="page".
- Không dùng Bottom Nav khi ứng dụng không có routing phân cấp rõ ràng — dùng TabBar inline thay thế.`,
  },
];
