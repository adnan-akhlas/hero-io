import { use, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router";
import { getAppPromise } from "../api/data";

const appPromise = getAppPromise();

export default function AppDetails() {
  const apps = use(appPromise);
  const { id } = useParams();

  const [installedList, setInstalledList] = useState(() => {
    const saved = localStorage.getItem("installed-items");
    return saved ? JSON.parse(saved) : [];
  });

  const app = useMemo(() => {
    const baseApp = apps.find((a) => a.id === Number(id));
    if (!baseApp) return null;

    const isInstalled = installedList.some((item) => item.id === baseApp.id);
    return { ...baseApp, installed: isInstalled };
  }, [apps, id, installedList]);

  if (!app) return <div className="py-20 text-center">App not found</div>;

  const maxRatingCount = Math.max(...app.ratings.map((r) => r.count));

  const handleInstallAction = () => {
    if (app.installed) {
      toast.error("App is already installed!");
      return;
    }

    try {
      const newItem = { ...app, installed: true };
      const updatedList = [...installedList, newItem];

      setInstalledList(updatedList);
      localStorage.setItem("installed-items", JSON.stringify(updatedList));

      toast.success(`${app.title} installed successfully!`, {
        style: {
          border: "1px solid #00cba9",
          padding: "16px",
          color: "#001f3f",
        },
        iconTheme: {
          primary: "#00cba9",
          secondary: "#FFFAEE",
        },
      });
    } catch (error) {
      toast.error("Failed to install app. Please try again.");
    }
  };

  return (
    <div className="max-w-5xl my-20 rounded-2xl mx-auto px-4">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-12 items-start">
        <div className="w-48 h-48 rounded-3xl border border-slate-100 p-4 shadow-sm shrink-0 bg-white">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="grow">
          <h1 className="text-3xl font-bold text-[#001f3f] mb-1">
            {app.title}
          </h1>
          <p className="text-purple-600 font-medium mb-6">
            Developed by {app.companyName}
          </p>

          <div className="flex flex-wrap gap-10 mb-8">
            <StatItem
              label="Downloads"
              value={`${(app.downloads / 1000000).toFixed(0)}M`}
              icon="⬇️"
            />
            <StatItem label="Average Ratings" value={app.ratingAvg} icon="⭐️" />
            <StatItem
              label="Total Reviews"
              value={`${(app.reviews / 1000).toFixed(0)}K`}
              icon="💬"
            />
          </div>

          <button
            onClick={handleInstallAction}
            disabled={app.installed}
            className={`${
              app.installed
                ? "bg-slate-200 text-slate-500 cursor-not-allowed"
                : "bg-[#00cba9] hover:bg-[#00b89a] text-white"
            } font-bold py-3 px-10 rounded-lg transition-colors`}
          >
            {app.installed ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      <hr className="border-slate-100 mb-10" />

      {/* Ratings Section */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-[#001f3f] mb-6">Ratings</h2>
        <div className="space-y-3 max-w-2xl">
          {[...app.ratings].reverse().map((rating) => (
            <div key={rating.name} className="flex items-center gap-4">
              <span className="text-xs text-slate-500 w-10 text-nowrap">
                {rating.name}
              </span>
              <div className="grow bg-slate-100 h-4 rounded-full overflow-hidden">
                <div
                  className="bg-orange-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${(rating.count / maxRatingCount) * 100}%` }}
                />
              </div>
              <span className="text-xs text-slate-400 w-10">
                {rating.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Description Section */}
      <div>
        <h2 className="text-xl font-bold text-[#001f3f] mb-4">Description</h2>
        <div className="text-slate-500 leading-relaxed space-y-4">
          <p>{app.description}</p>
        </div>
      </div>
    </div>
  );
}

function StatItem({ label, value, icon }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
        <span>{icon}</span>
        <span>{label}</span>
      </div>
      <span className="text-2xl font-black text-[#001f3f]">{value}</span>
    </div>
  );
}
