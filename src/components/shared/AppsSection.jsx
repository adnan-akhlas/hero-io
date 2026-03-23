import { use, useMemo, useState } from "react";
import {
  IconSearch,
  IconChevronLeft,
  IconChevronRight,
  IconArrowsSort,
} from "@tabler/icons-react";
import AppCard from "./AppCard";
import { getAppPromise } from "../../api/data";

const appPromise = getAppPromise();

export default function AppsSection({ limit = null, showOptions = false }) {
  const allApps = use(appPromise);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("desc");
  const itemsPerPage = 8;

  const processedApps = useMemo(() => {
    let filtered = allApps.filter((app) =>
      app.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    filtered.sort((a, b) => {
      return sortOrder === "desc"
        ? b.downloads - a.downloads
        : a.downloads - b.downloads;
    });

    return limit ? filtered.slice(0, limit) : filtered;
  }, [allApps, searchQuery, limit, sortOrder]);

  const totalPages = Math.ceil(processedApps.length / itemsPerPage);

  const paginatedApps = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return processedApps.slice(startIndex, startIndex + itemsPerPage);
  }, [processedApps, currentPage]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      {/* Search and Options Bar */}
      {showOptions && (
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-slate-100 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <h3 className="text-[#001f3f] text-xl font-bold whitespace-nowrap">
              ({processedApps.length}) Apps Found
            </h3>

            {/* Sort Dropdown */}
            <div className="relative flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
              <IconArrowsSort size={18} className="text-slate-400" />
              <select
                value={sortOrder}
                onChange={(e) => {
                  setSortOrder(e.target.value);
                  setCurrentPage(1);
                }}
                className="bg-transparent text-slate-600 focus:outline-none text-sm font-medium cursor-pointer"
              >
                <option value="desc">Most Downloads</option>
                <option value="asc">Least Downloads</option>
              </select>
            </div>
          </div>

          {/* Search Input Field */}
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IconSearch className="text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search Apps"
              value={searchQuery}
              onChange={handleSearch}
              className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg
                       bg-slate-50 focus:outline-none focus:ring-2 focus:ring-purple-500
                       focus:bg-white transition-all text-slate-600 placeholder-slate-400"
            />
          </div>
        </div>
      )}

      {/* Grid */}
      {paginatedApps.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {paginatedApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200 mt-6">
          <p className="text-slate-400 text-lg">
            No applications found matching "{searchQuery}"
          </p>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-1 px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
          >
            <IconChevronLeft size={18} />
            Previous
          </button>

          <span className="text-slate-500 font-medium text-sm">
            Page <span className="text-[#001f3f] font-bold">{currentPage}</span>{" "}
            of {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="flex items-center gap-1 px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
          >
            Next
            <IconChevronRight size={18} />
          </button>
        </div>
      )}
    </>
  );
}
