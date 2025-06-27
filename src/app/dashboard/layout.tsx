
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarProvider, Sidebar, SidebarHeader, SidebarTrigger, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter } from "@/components/ui/sidebar";
import { Briefcase, LayoutDashboard, Users, ShoppingCart, Package, LineChart, CreditCard, Wallet, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const menuItems = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/dashboard/vendors", label: "Vendor Management", icon: Users },
    { href: "/dashboard/purchase-orders", label: "Purchase Orders", icon: ShoppingCart },
    { href: "/dashboard/inventory", label: "Inventory", icon: Package },
    { href: "/dashboard/invoicing", label: "Invoicing & Payments", icon: CreditCard },
    { href: "/dashboard/analytics", label: "Analytics", icon: LineChart },
    { href: "/dashboard/savings", label: "Savings Tracking", icon: Wallet },
];

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <SidebarProvider>
            <Sidebar>
                <SidebarHeader>
                    <div className="flex items-center gap-2">
                        <Briefcase className="w-6 h-6 text-primary" />
                        <h1 className="text-lg font-semibold font-headline">ProcurLink</h1>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarMenu>
                        {menuItems.map((item) => (
                            <SidebarMenuItem key={item.href}>
                                <Link href={item.href} legacyBehavior passHref>
                                    <SidebarMenuButton isActive={pathname === item.href}>
                                        <item.icon />
                                        <span>{item.label}</span>
                                    </SidebarMenuButton>
                                </Link>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarContent>
                <SidebarFooter>
                     <SidebarMenu>
                        <SidebarMenuItem>
                             <Link href="#" legacyBehavior passHref>
                                <SidebarMenuButton isActive={pathname === "/dashboard/settings"}>
                                    <Settings />
                                    <span>Settings</span>
                                </SidebarMenuButton>
                            </Link>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                             <SidebarMenuButton>
                                <Avatar className="w-8 h-8">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <span>User Name</span>
                             </SidebarMenuButton>
                        </SidebarMenuItem>
                     </SidebarMenu>
                </SidebarFooter>
            </Sidebar>
            <main className="flex-1">
                <header className="p-4 border-b flex items-center gap-4">
                    <SidebarTrigger />
                    <h2 className="text-xl font-semibold">
                        {menuItems.find(item => item.href === pathname)?.label || 'Dashboard'}
                    </h2>
                </header>
                <div className="p-4 md:p-6">
                    {children}
                </div>
            </main>
        </SidebarProvider>
    );
}
