import Link from "next/link";
import { Briefcase, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="bg-card border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold font-headline text-primary">
            <Briefcase className="h-6 w-6" />
            <span>ProcurLink</span>
          </Link>
          <nav>
            <Button asChild>
              <Link href="/dashboard">
                Go to Dashboard <ArrowRight />
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
