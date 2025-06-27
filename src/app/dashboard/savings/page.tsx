import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function SavingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Savings Tracking</h2>
        <p className="text-muted-foreground">Monitor and report on cost savings initiatives.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Savings Dashboard</CardTitle>
          <CardDescription>
            This section will contain tools for tracking savings.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-96 flex items-center justify-center border-2 border-dashed rounded-md">
              <p className="text-muted-foreground">Savings tracking functionality coming soon.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
