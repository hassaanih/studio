import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function InventoryPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Inventory & Warehouse</h2>
          <p className="text-muted-foreground">Manage stock levels, warehouses, and classifications.</p>
        </div>
        <Button>
          <PlusCircle className="mr-2" />
          Add New Item
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Inventory Management</CardTitle>
          <CardDescription>
            This section will contain tools for managing inventory.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-96 flex items-center justify-center border-2 border-dashed rounded-md">
              <p className="text-muted-foreground">Inventory management functionality coming soon.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
