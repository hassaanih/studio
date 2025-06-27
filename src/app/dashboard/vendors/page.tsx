import { vendors } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { PlusCircle, FileDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { VendorStatus } from "@/lib/types";

function StatusBadge({ status }: { status: VendorStatus }) {
    const variant: "default" | "secondary" | "destructive" = 
        status === 'Active' ? 'default' :
        status === 'Pending Validation' ? 'secondary' :
        'destructive';
    
    const colorClass = 
        status === 'Active' ? 'bg-green-500 hover:bg-green-600' :
        status === 'Pending Validation' ? 'bg-yellow-500 hover:bg-yellow-600' :
        'bg-red-500 hover:bg-red-600';

    return <Badge variant={variant} className={colorClass}>{status}</Badge>;
}

export default function VendorsPage() {
    return (
        <div className="space-y-6">
             <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Vendor Database</h2>
                    <p className="text-muted-foreground">Manage your company's vendors and suppliers.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">
                        <FileDown className="mr-2" />
                        Export
                    </Button>
                    <Button>
                        <PlusCircle className="mr-2" />
                        Add New Vendor
                    </Button>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>All Vendors</CardTitle>
                    <CardDescription>A complete list of all vendors in your database.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead className="text-center">Status</TableHead>
                                <TableHead className="text-right">Rating</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {vendors.map(vendor => (
                                <TableRow key={vendor.id}>
                                    <TableCell className="font-medium">{vendor.name}</TableCell>
                                    <TableCell>{vendor.category}</TableCell>
                                    <TableCell>{vendor.location}</TableCell>
                                    <TableCell className="text-center">
                                       <StatusBadge status={vendor.status} />
                                    </TableCell>
                                    <TableCell className="text-right">{vendor.rating.toFixed(1)} / 5</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
