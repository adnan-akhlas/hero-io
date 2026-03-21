import { Link } from "react-router";
import AppCard from "../shared/AppCard";
import SectionHeader from "../shared/SectionHeader";

export default function Trending() {
  const app = {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg",
    title: "Productive Pro",
    companyName: "Hero.io Labs",
    id: 1,
    description:
      "The ultimate tool to streamline your workflow and boost daily efficiency.",
    size: 45,
    reviews: 906000,
    ratingAvg: 4.8,
    downloads: 29600000,
    ratings: [
      { name: "5 star", count: 750000 },
      { name: "4 star", count: 100000 },
      { name: "3 star", count: 30000 },
      { name: "2 star", count: 16000 },
      { name: "1 star", count: 10000 },
    ],
  };

  return (
    <section className="max-w-7xl mx-auto px-6 my-20">
      <SectionHeader
        title={"Trending Apps"}
        subtitle={"Explore All Trending Apps on the Market developed by us"}
      />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AppCard app={app} />
      </div>
      <div className="flex w-full justify-center py-12">
        <button className="px-10 py-2.5 bg-linear-to-r from-[#7c3aed] to-[#a855f7] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-purple-200 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 flex items-center justify-center min-w-45">
          <Link to={"/apps"}>Show All</Link>
        </button>
      </div>
    </section>
  );
}
