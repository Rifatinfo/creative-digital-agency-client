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
                },
                {
                    title: "My Profile",
                    href: `/my-profile`,
                    icon: "User",
                    roles: ["CLIENT", "ADMIN"],
                },

            ]
        },
        {
            title: "Settings",
            items: [
                {
                    title: "Change Password",
                    href: "/change-password",
                    icon: "Settings", 
                    roles: ["CLIENT"],
                },
            ],
        },
    ]
}





export const getClientNavItems = async (): Promise<NavSection[]> => {
  return [
    {
      title: "My Engagements",
      items: [
        {
          title: "Active Projects",
          href: "/dashboard/projects",
          icon: "Briefcase",
          roles: ["CLIENT"],
        },
        {
          title: "Service Orders",
          href: "/dashboard/orders",
          icon: "ShoppingBag",
          roles: ["CLIENT"],
        },
        {
          title: "Project History",
          href: "/dashboard/history",
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
          href: "/dashboard/services/content-development",
          icon: "FileText",
          roles: ["CLIENT"],
        },
        {
          title: "Digital Marketing",
          href: "/dashboard/services/digital-marketing",
          icon: "TrendingUp",
          roles: ["CLIENT"],
        },
        {
          title: "Branding & Promotion",
          href: "/dashboard/services/branding-promotion",
          icon: "Palette",
          roles: ["CLIENT"],
        },
        {
          title: "Web & App Development",
          href: "/dashboard/services/web-app",
          icon: "Globe",
          roles: ["CLIENT"],
        },
        {
          title: "Event & Activation",
          href: "/dashboard/services/event-activation",
          icon: "Calendar",
          roles: ["CLIENT"],
        },
        {
          title: "Software Management",
          href: "/dashboard/services/software-management",
          icon: "Settings",
          roles: ["CLIENT"],
        },
      ],
    },
    {
      title: "Account",
      items: [
        {
          title: "Invoices & Payments",
          href: "/dashboard/billing",
          icon: "CreditCard",
          roles: ["CLIENT"],
        },
        {
          title: "Profile Settings",
          href: "/dashboard/profile",
          icon: "User",
          roles: ["CLIENT"],
        },
      ],
    },
  ];
};

export const adminNavItems: NavSection[] = [
    {
        title: "User Management",
        items: [
            {
                title: "Admins",
                href: "/admin/dashboard/admins-management",
                icon: "Shield", // ✅ String
                roles: ["ADMIN"],
            },
            {
                title: "Patients",
                href: "/admin/dashboard/patients-management",
                icon: "Users", // ✅ String
                roles: ["ADMIN"],
            },
        ],
    },
    {
        title: "Order Management",
        items: [
            {
                title: "Appointments",
                href: "/admin/dashboard/appointments-management",
                icon: "Calendar", // ✅ String
                roles: ["ADMIN"],
            },
            {
                title: "Schedules",
                href: "/admin/dashboard/schedules-management",
                icon: "Clock", // ✅ String
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