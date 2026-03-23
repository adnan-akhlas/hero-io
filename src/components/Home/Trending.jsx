import { Suspense } from "react";
import { Link } from "react-router";
import SectionHeader from "../shared/SectionHeader";
import AppsSection from "../shared/AppsSection";
import AppsSkeleton from "../shared/AppsSkeleton";

export default function Trending() {
  return (
    <section className="max-w-7xl mx-auto px-6 my-20 space-y-6">
      <SectionHeader
        title={"Trending Apps"}
        subtitle={"Explore All Trending Apps on the Market developed by us"}
      />
      <Suspense fallback={<AppsSkeleton />}>
        <AppsSection limit={8} />
      </Suspense>
      <div className="flex w-full justify-center">
        <button>
          <Link
            className="px-10 py-2.5 bg-linear-to-r from-[#7c3aed] to-[#a855f7] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-purple-200 active:scale-95 transition-all duration-200 flex items-center justify-center min-w-45"
            to={"/apps"}
          >
            Show All
          </Link>
        </button>
      </div>
    </section>
  );
}
