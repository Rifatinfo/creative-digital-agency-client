import { NavSection } from "@/types/dashboard.interface";
import { getDefaultDashboardRoute, UserRole } from "./auth-utils";

export const getCommonNavItems = (role: UserRole): NavSection[] => {
    const defaultDashboard = getDefaultDashboardRoute(role);

    return [
        {
            items: [
                {
                    title: "Home",
                    href: "/",
                    icon: "Home", 
                    roles: ["CLIENT", "ADMIN"],
                },
                {
                    title: "Dashboard",
                    href: defaultDashboard,
                    icon: "LayoutDashboard",
                    roles: ["CLIENT", "ADMIN"],
                }

            ]
        }
    ]
}


export const getClientNavItems = async (): Promise<NavSection[]> => {
  return [
    {
      title: "My Engagements",
      items: [
        {
          title: "Orders History Profile",
          href: "/dashboard/my-profile",
          icon: "History",
          roles: ["CLIENT"],
        },
        {
          title: "Orders History",
          href: "/dashboard/order-management",
          icon: "History",
          roles: ["CLIENT"],
        },
      ],
    },
    {
      title: "Services",
      items: [
        {
          title: "Content Development",
          href: "/checkout",
          icon: "FileText",
          roles: ["CLIENT"],
        },
        {
          title: "Digital Marketing",
          href: "/checkout",
          icon: "TrendingUp",
          roles: ["CLIENT"],
        },
        {
          title: "Branding & Promotion",
          href: "/checkout",
          icon: "Palette",
          roles: ["CLIENT"],
        },
        {
          title: "Web & App Development",
          href: "/checkout",
          icon: "Globe",
          roles: ["CLIENT"],
        },
        {
          title: "Event & Activation",
          href: "/checkout",
          icon: "Calendar",
          roles: ["CLIENT"],
        },
        {
          title: "Software Management",
          href: "/checkout",
          icon: "Settings",
          roles: ["CLIENT"],
        },
      ],
    }
  ];
};

export const adminNavItems: NavSection[] = [
    {
        title: "User Management",
        items: [
            {
                title: "Admins",
                href: "/admin/dashboard/admin-management",
                icon: "Shield", // ✅ String
                roles: ["ADMIN"],
            },
            {
                title: "Client",
                href: "/admin/dashboard/client-management",
                icon: "Users", // ✅ String
                roles: ["ADMIN"],
            },
        ],
    },
    {
        title: "Campaign Management",
        items: [
            {
                title: "Campaign",
                href: "/admin/dashboard/campaign-management",
                icon: "Shield", // ✅ String
                roles: ["ADMIN"],
            },
        ],
    },
    {
        title: "Order Management",
        items: [
            {
                title: "Bookings",
                href: "/admin/dashboard/booking-management",
                icon: "Payment", // ✅ String
                roles: ["ADMIN"],
            },
            {
                title: "Payments",
                href: "/admin/dashboard/payment-management",
                icon: "Payment", // ✅ String
                roles: ["ADMIN"],
            },
        ],
    }
]

export const getNavItemsByRole = async (role: UserRole): Promise<NavSection[]> => {
    const commonNavItems = getCommonNavItems(role);

    switch (role) {
        case "ADMIN":
            return [...commonNavItems, ...adminNavItems];
        case "CLIENT":
            return [...commonNavItems,
            ...await getClientNavItems()
            ];
        default:
            return [];
    }
}