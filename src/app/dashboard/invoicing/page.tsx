import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function InvoicingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Invoicing & Payments</h2>
        <p className="text-muted-foreground">Process vendor invoices and track payment status.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Invoice Management</CardTitle>
          <CardDescription>
            This section will contain tools for managing invoices and payments.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-96 flex items-center justify-center border-2 border-dashed rounded-md">
              <p className="text-muted-foreground">Invoicing functionality coming soon.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
