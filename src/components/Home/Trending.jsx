import { Link } from "react-router";
import AppCard from "../shared/AppCard";
import SectionHeader from "../shared/SectionHeader";
import { use } from "react";

const appPromise = fetch("/data/data.json").then((res) => res.json());

export default function Trending() {
  const apps = use(appPromise);

  return (
    <section className="max-w-7xl mx-auto px-6 my-20">
      <SectionHeader
        title={"Trending Apps"}
        subtitle={"Explore All Trending Apps on the Market developed by us"}
      />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {apps.slice(0, 8).map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
      <div className="flex w-full justify-center py-12">
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
