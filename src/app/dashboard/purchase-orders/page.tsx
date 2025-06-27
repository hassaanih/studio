import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function PurchaseOrdersPage() {
  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Purchase Orders</h2>
            <p className="text-muted-foreground">Create, track, and manage all purchase orders.</p>
          </div>
          <Button>
            <PlusCircle className="mr-2" />
            New Purchase Order
          </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>PO Management</CardTitle>
          <CardDescription>
            This section will contain tools for managing purchase orders.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-96 flex items-center justify-center border-2 border-dashed rounded-md">
              <p className="text-muted-foreground">Purchase Order functionality coming soon.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
