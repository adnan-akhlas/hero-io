import { use, useMemo, useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import AppCard from "./AppCard";
import { getAppPromise } from "../../api/data";

const appPromise = getAppPromise();

export default function AppsSection({ limit = null, showOptions = false }) {
  const allApps = use(appPromise);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredApps = useMemo(() => {
    const filtered = allApps.filter((app) =>
      app.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return limit ? filtered.slice(0, limit) : filtered;
  }, [allApps, searchQuery, limit]);
  return (
    <>
      {/* Search and Count Bar */}
      {showOptions && (
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-slate-100 gap-4">
          {/* Total Apps Count */}
          <h3 className="text-[#001f3f] text-xl font-bold">
            ({filteredApps.length}) Apps Found
          </h3>

          {/* Search Input Field */}
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IconSearch className="text-slate-400" />
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
      )}

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
    </>
  );
}
