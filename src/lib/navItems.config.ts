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
            title: "Appointments",
            items: [
                {
                    title: "My Appointments",
                    href: "/dashboard/my-appointments",
                    icon: "Calendar", // ✅ String
                    badge:  undefined,
                    roles: ["CLIENT"],
                },
                {
                    title: "Book Appointment",
                    href: "/consultation",
                    icon: "ClipboardList", // ✅ String
                     roles: ["CLIENT"],
                },
            ],
        },
        {
            title: "Medical Records",
            items: [
                {
                    title: "My Prescriptions",
                    href: "/dashboard/my-prescriptions",
                    icon: "FileText", // ✅ String
                     roles: ["CLIENT"],
                },
                {
                    title: "Health Records",
                    href: "/dashboard/health-records",
                    icon: "Activity", // ✅ String
                     roles: ["CLIENT"],
                },
            ],
        },

    ]
}

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