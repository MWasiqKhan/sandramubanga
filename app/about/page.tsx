import type { Metadata } from "next";
import { AuthorSection, Divider, FinalCta, PageHero } from "@/components/Sections";
import { QuoteMark } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About the Author",
  description: "Sandra Mubanga was born in Ndola, Zambia in 1970 and now lives in the United States. Her debut memoir is The Weight of Loving.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About the Author"
        eyebrow="Author · Memoirist"
        title="About Sandra"
        tag="From Ndola, Zambia to the United States — a life carried into words."
      />
      <Divider />
      <AuthorSection full />
      <Divider />
      <section className="section-pad">
        <div className="wrap">
          <div className="quote-card reveal" style={{ marginBottom: 0 }}>
            <QuoteMark />
            <blockquote>You do not move on from the people who shape you. You move forward with them.</blockquote>
            <p className="quote-cite">— Sandra Mubanga, from the Preface of The Weight of Loving</p>
          </div>
        </div>
      </section>
      <FinalCta secondary={{ href: "/book", label: "Explore Her Book" }} />
    </>
  );
}
