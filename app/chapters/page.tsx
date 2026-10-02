import type { Metadata } from "next";
import { Divider, FinalCta, PageHero, PreviewSection } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Chapters & Preview",
  description: "Read passages from the Preface and the full table of contents of The Weight of Loving by Sandra Mubanga.",
};

export default function ChaptersPage() {
  return (
    <>
      <PageHero
        crumb="Chapters"
        eyebrow="Inside the Book"
        title="Chapters & Preview"
        tag="Fourteen chapters, from the love that started it all to giving everything."
      />
      <Divider />
      <PreviewSection teaser={false} />
      <FinalCta secondary={{ href: "/book", label: "About the Book" }} />
    </>
  );
}
