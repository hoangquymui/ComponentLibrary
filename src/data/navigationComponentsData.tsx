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
    title: "Collapsible Left Sidebar Navigation",
    description: "Thanh điều hướng Left Sidebar lề trái trượt mở/đóng mượt mà với nút Hamburger (☰), Tiêu đề thương hiệu, danh sách Menu có Badge đếm số lượng và nút chuyển đổi giao diện Sáng/Tối (ThemeToggle) căn giữa tự động.",
    component: <CollapsibleLeftSidebarNav />,
    prompt: "Thiết kế thanh điều hướng Collapsible Left Sidebar chuẩn Admin Dashboard chuyên nghiệp bằng React State, Lucide Icons và Tailwind CSS v4. Thanh điều hướng nằm ở lề trái (chuyển đổi mượt mà giữa chiều rộng w-60 khi mở rộng và w-16 khi thu gọn nhờ đường cong gia tốc cubic-bezier). Ở trên cùng chứa nút 3 gạch Hamburger (Menu ☰) căn giữa lề 16px kèm Tiêu đề 'Tailwind Lab'. Danh sách liên kết bao gồm các Icon điều hướng (Buttons, Cards, Forms, Navigation) cùng Badge số lượng đếm thành phần. Ở chân Sidebar là nút chuyển đổi chế độ giao diện Sáng/Tối (ThemeToggle) với hiệu ứng 3D xoay Icon Mặt trời ☀️/Mặt trăng 🌙 500ms, tự động căn giữa trục 100% khi thu gọn và trượt mở chữ nhãn 'Giao diện Sáng/Tối' êm ái 300ms khi mở rộng.",
  },
  {
    id: "right-sidebar",
    category: "navigation",
    title: "Collapsible Right Sidebar Navigation",
    description: "Thanh điều hướng Right Sidebar lề phải trượt mở/đóng mượt mà với nút Hamburger (☰), Tiêu đề, danh sách Menu có Badge đếm số lượng và nút chuyển đổi giao diện Sáng/Tối (ThemeToggle) căn giữa tự động.",
    component: <CollapsibleRightSidebarNav />,
    prompt: "Thiết kế thanh điều hướng Collapsible Right Sidebar chuyên nghiệp nằm ở lề phải bằng React State, Lucide Icons và Tailwind CSS v4 (chuyển đổi mượt giữa w-60 khi mở rộng và w-16 khi thu gọn). Ở đầu chứa nút 3 gạch Hamburger (Menu ☰) và Tiêu đề 'Right Sidebar'. Bên trong có danh sách liên kết kèm Badge số lượng và nút chuyển đổi giao diện Sáng/Tối (ThemeToggle) ở chân Sidebar có hiệu ứng 3D xoay Icon Mặt trời ☀️/Mặt trăng 🌙 500ms, tự động căn giữa trục 100% khi thu gọn và trượt mở chữ nhãn 'Giao diện Sáng/Tối' mượt mà 300ms khi mở rộng.",
  },
  {
    id: "navbar-web",
    category: "navigation",
    title: "Website Top Header Navigation",
    description: "Thanh điều hướng Header Web chính thức đầy đủ Logo, Links, Tìm kiếm, Thông báo và Dùng thử.",
    component: <NavbarWeb />,
    prompt: "Tạo thanh điều hướng trang web Header Navbar chính thức bằng React & Tailwind CSS. Bao gồm Logo thương hiệu WebStudio, menu các liên kết (Tính năng, Bảng giá, Tài liệu), icon Tìm kiếm, Thông báo và nút bấm Dùng thử màu tím nổi bật.",
  },
  {
    id: "tab-bar",
    category: "navigation",
    title: "Segmented TabBar",
    description: "Thanh chuyển đổi Tab dạng viên thuốc (Segmented Control Pills) tương tác chuyển nội dung.",
    component: <TabBar />,
    prompt: "Thiết kế thanh chuyển tab phân đoạn Segmented TabBar dạng viên thuốc bằng React state và Tailwind CSS. Bao gồm các tab (Tổng quan, Phân tích, Báo cáo) với hiệu ứng bóng mờ shadow-sm và đổi màu nền mượt khi người dùng nhấp chọn tab.",
  },
  {
    id: "breadcrumbs",
    category: "navigation",
    title: "Breadcrumb Path Navigation",
    description: "Thanh điều hướng phân cấp đường dẫn trangweb kèm icon trực quan.",
    component: <BreadcrumbsNav />,
    prompt: "Tạo thanh phân cấp đường dẫn Breadcrumbs Nav bằng Tailwind CSS. Hiển thị đường dẫn Trang chủ > Components > Navigation & Bars với icon Home ở đầu và icon ChevronRight phân cách giữa các cấp danh mục.",
  },
  {
    id: "pagination",
    category: "navigation",
    title: "Page Pagination Navigation",
    description: "Thanh phân trang số (Page 1..5) kèm nút Chuyển trang trước / sau.",
    component: <PaginationNav />,
    prompt: "Thiết kế thanh phân trang Pagination Navigation bằng React state & Tailwind CSS. Bao gồm dãy nút số trang từ 1 đến 5 và 2 nút mũi tên Chuyển trang trước/sau (ChevronLeft / ChevronRight) tự động disabled khi ở trang đầu hoặc trang cuối.",
  },
  {
    id: "bottom-nav",
    category: "navigation",
    title: "Mobile Bottom Navigation",
    description: "Thanh điều hướng đáy màn hình di động 4 tab linh hoạt.",
    component: <BottomNav />,
    prompt: "Tạo thanh Bottom Navigation 4 tab icon ở đáy ứng dụng di động bằng React state & Tailwind CSS. Bao gồm các tab (Trang chủ, Dự án, Hồ sơ, Cài đặt) với hiệu ứng đổi màu tím và phóng to nhẹ scale-105 khi tab đang được chọn.",
  },
];
