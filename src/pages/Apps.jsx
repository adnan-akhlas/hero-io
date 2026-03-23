import { use, useMemo, useState } from "react";
import AppCard from "../components/shared/AppCard";
import SectionHeader from "../components/shared/SectionHeader";

const appPromise = fetch("/data/data.json").then((res) => res.json());

export default function Apps() {
  const allApps = use(appPromise);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredApps = useMemo(() => {
    return allApps.filter((app) =>
      app.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [allApps, searchQuery]);

  return (
    <section className="my-20 max-w-7xl mx-auto px-6 space-y-6">
      <SectionHeader
        title={"Our All Applications"}
        subtitle={
          "Explore All Apps on the Market developed by us. We code for Millions"
        }
      />

      {/* Search and Count Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-slate-100 gap-4">
        {/* Total Apps Count */}
        <h3 className="text-[#001f3f] text-xl font-bold">
          ({filteredApps.length}) Apps Found
        </h3>

        {/* Search Input Field */}
        <div className="relative w-full md:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="search Apps"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg
                     bg-slate-50 focus:outline-none focus:ring-2 focus:ring-purple-500
                     focus:bg-white transition-all text-slate-600 placeholder-slate-400"
          />
        </div>
      </div>

      {/* Grid of Filtered Apps */}
      {filteredApps.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
          <p className="text-slate-400 text-lg">
            No applications found matching "{searchQuery}"
          </p>
        </div>
      )}
    </section>
  );
}
