import { useState, useMemo } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Installation() {
  const [installedApps, setInstalledApps] = useState(() => {
    const items = localStorage.getItem("installed-items");
    return items ? JSON.parse(items) : [];
  });

  const [sortBy, setSortBy] = useState("size");

  const sortedApps = useMemo(() => {
    const list = [...installedApps];
    return list.sort((a, b) => {
      if (sortBy === "size") return b.size - a.size;
      if (sortBy === "name") return a.title.localeCompare(b.title);
      return 0;
    });
  }, [installedApps, sortBy]);

  const handleUninstall = (id, title) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);

    setInstalledApps(updatedApps);
    localStorage.setItem("installed-items", JSON.stringify(updatedApps));

    toast.success(`${title} uninstalled`, {
      icon: "🗑️",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-slate-50 min-h-screen">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[#001f3f] text-2xl font-bold">
          {sortedApps.length} Apps Found
        </h2>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-white border border-slate-200 rounded-md px-3 py-1.5 text-sm text-slate-600 focus:outline-none cursor-pointer"
        >
          <option value="size">Sort By Size</option>
          <option value="name">Sort By Name</option>
        </select>
      </div>

      {/* List Container */}
      <div className="flex flex-col gap-4">
        {sortedApps.length > 0 ? (
          sortedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-slate-200 rounded-lg overflow-hidden shrink-0">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-[#001f3f] font-bold text-lg leading-tight">
                    {app.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-1 text-sm text-slate-400">
                    <span className="flex items-center gap-1">
                      <span className="text-[#00cba9]">⬇️</span>{" "}
                      {Math.round(app.downloads / 1000000)}M
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-orange-400">⭐</span>{" "}
                      {app.ratingAvg}
                    </span>
                    <span className="font-medium text-slate-600">
                      {app.size} MB
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id, app.title)}
                className="bg-[#00cba9] hover:bg-red-500 text-white font-bold py-2 px-6 rounded-lg transition-all"
              >
                Uninstall
              </button>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-100">
            <p className="text-slate-400">No apps installed yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
