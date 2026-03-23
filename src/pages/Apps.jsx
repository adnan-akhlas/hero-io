import { Suspense } from "react";
import AppsSection from "../components/shared/AppsSection";
import SectionHeader from "../components/shared/SectionHeader";
import AppsSkeleton from "../components/shared/AppsSkeleton";

export default function Apps() {
  return (
    <section className="my-20 max-w-7xl mx-auto px-6 space-y-6">
      <SectionHeader
        title={"Our All Applications"}
        subtitle={
          "Explore All Apps on the Market developed by us. We code for Millions"
        }
      />
      <Suspense fallback={<AppsSkeleton />}>
        <AppsSection showOptions={true} />
      </Suspense>
    </section>
  );
}
