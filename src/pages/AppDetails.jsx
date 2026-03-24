import { use, useMemo, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router";
import { getAppPromise } from "../api/data";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const appPromise = getAppPromise();

export default function AppDetails() {
  const apps = use(appPromise);
  const { id } = useParams();

  const [installedList, setInstalledList] = useState(() => {
    try {
      const saved = localStorage.getItem("installed-items");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Failed to load storage", error);
      return [];
    }
  });

  const app = useMemo(() => {
    const baseApp = apps.find((a) => a.id === Number(id));
    if (!baseApp) return null;

    const isInstalled = installedList.some((item) => item.id === baseApp.id);
    return { ...baseApp, installed: isInstalled };
  }, [apps, id, installedList]);

  const chartData = useMemo(() => {
    return app ? [...app.ratings].reverse() : [];
  }, [app]);

  if (!app) return <div className="py-20 text-center">App not found</div>;

  const handleInstallAction = () => {
    if (app.installed) return;

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
      console.error(error);
      toast.error("Failed to install app. Please try again.");
    }
  };

  return (
    <div className="max-w-5xl my-20 rounded-2xl mx-auto px-4">
      <Toaster position="top-center" />

      {/* 1. Hero Section */}
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

      {/* 2. Ratings Section (Recharts Implementation) */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-[#001f3f] mb-6">Ratings</h2>
        <div style={{ width: "100%", height: 280 }}>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart
              layout="vertical"
              data={chartData}
              margin={{ left: -20, right: 30, top: 0, bottom: 0 }}
            >
              <CartesianGrid
                horizontal={false}
                vertical={false}
                stroke="none"
              />

              <XAxis
                type="number"
                axisLine={{ stroke: "#e2e8f0" }}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
                dy={10}
              />

              <YAxis
                dataKey="name"
                type="category"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 13 }}
                width={80}
              />

              <Tooltip cursor={{ fill: "transparent" }} />

              <Bar dataKey="count" fill="#ff8c1a" barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 3. Description Section */}
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
