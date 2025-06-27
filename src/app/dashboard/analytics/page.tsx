import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Analytics & Reporting</h2>
        <p className="text-muted-foreground">Insights into your procurement performance.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Procurement Dashboard</CardTitle>
          <CardDescription>
            This section will contain charts and reports.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-96 flex items-center justify-center border-2 border-dashed rounded-md">
              <p className="text-muted-foreground">Analytics charts and reports coming soon.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
