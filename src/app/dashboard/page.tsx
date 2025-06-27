import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ShoppingCart, Package, LineChart, PlusCircle, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const overviewCards = [
  {
    title: "Active Vendors",
    value: "84",
    icon: Users,
    description: "2 more than last month",
    href: "/dashboard/vendors"
  },
  {
    title: "Pending POs",
    value: "12",
    icon: ShoppingCart,
    description: "Awaiting approval",
    href: "/dashboard/purchase-orders"
  },
  {
    title: "Stock Value",
    value: "$1.2M",
    icon: Package,
    description: "Across 3 warehouses",
    href: "/dashboard/inventory"
  },
  {
    title: "YTD Savings",
    value: "$245K",
    icon: LineChart,
    description: "12% vs target",
    href: "/dashboard/savings"
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome Back!</h2>
          <p className="text-muted-foreground">Here&apos;s a quick overview of your procurement activities.</p>
        </div>
        <Button>
          <PlusCircle className="mr-2" />
          New Requisition
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {overviewCards.map(card => (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
              <card.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <p className="text-xs text-muted-foreground">{card.description}</p>
              <Button variant="ghost" size="sm" asChild className="p-0 h-auto mt-2">
                <Link href={card.href}>
                  View Details <ArrowUpRight className="h-4 w-4 ml-1"/>
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Recent Purchase Orders</CardTitle>
            <CardDescription>A list of the most recent purchase orders.</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Placeholder for recent POs table */}
            <div className="h-48 flex items-center justify-center border-2 border-dashed rounded-md">
              <p className="text-muted-foreground">Recent POs will be displayed here.</p>
            </div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Pending Validations</CardTitle>
            <CardDescription>Vendors awaiting your approval.</CardDescription>
          </CardHeader>
          <CardContent>
             {/* Placeholder for pending vendors list */}
             <div className="h-48 flex items-center justify-center border-2 border-dashed rounded-md">
              <p className="text-muted-foreground">Vendors to validate will be here.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
