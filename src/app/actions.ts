"use server";

import { summarizeReviews } from '@/ai/flows/summarize-reviews';

export async function generateReviewSummary(reviews: string) {
  try {
    if (!reviews) {
      throw new Error("No reviews provided.");
    }
    const result = await summarizeReviews({ reviews });
    return { data: result.summary };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
    return { error: `Failed to generate summary: ${errorMessage}` };
  }
}
