"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Sparkles, ServerCrash } from 'lucide-react';
import { generateReviewSummary } from '@/app/actions';
import type { Review } from '@/lib/types';

interface ReviewSummaryProps {
  reviews: Review[];
}

export function ReviewSummary({ reviews }: ReviewSummaryProps) {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateSummary = async () => {
    setIsLoading(true);
    setError('');
    setSummary('');

    const reviewText = reviews.map(r => `Rating: ${r.rating}/5. Comment: ${r.comment}`).join('\n\n');
    const result = await generateReviewSummary(reviewText);

    if (result.data) {
      setSummary(result.data);
    } else {
      setError(result.error || 'An unexpected error occurred.');
    }

    setIsLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="text-primary" />
          <span>AI-Powered Summary</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {error && (
           <Alert variant="destructive">
             <ServerCrash className="h-4 w-4" />
             <AlertTitle>Error</AlertTitle>
             <AlertDescription>{error}</AlertDescription>
           </Alert>
        )}
        {summary && (
          <div className="prose prose-sm max-w-none text-foreground bg-secondary/50 p-4 rounded-md">
            <p>{summary}</p>
          </div>
        )}
        {!summary && !error && (
            <p className="text-sm text-muted-foreground mb-4">
                Click the button to generate a summary of all customer reviews using AI.
            </p>
        )}
        <Button onClick={handleGenerateSummary} disabled={isLoading} className="mt-4">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              {summary ? 'Regenerate Summary' : 'Summarize Reviews'}
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
