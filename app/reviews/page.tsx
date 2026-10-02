import type { Metadata } from "next";
import { Divider, FinalCta, PageHero, ReviewsSection } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Reader and critical reviews of The Weight of Loving by Sandra Mubanga.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        crumb="Reviews"
        eyebrow="Reader Response"
        title="Reviews"
        tag="Honest responses to The Weight of Loving, gathered as they arrive."
      />
      <Divider />
      <ReviewsSection />
      <FinalCta />
    </>
  );
}
