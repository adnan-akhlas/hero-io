export default function Stats() {
  const stats = [
    {
      label: "Total Downloads",
      value: "29.6M",
      subtext: "21% More Than Last Month",
    },
    {
      label: "Total Reviews",
      value: "906K",
      subtext: "46% More Than Last Month",
    },
    {
      label: "Active Apps",
      value: "132+",
      subtext: "31 More Will Launch",
    },
  ];

  return (
    <section className="w-full py-20 px-4 bg-linear-to-r from-[#7030e6] via-[#9147ff] to-[#7c3aed] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-20 tracking-tight">
          Trusted By Millions, Built For You
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Category Label */}
              <span className="text-sm md:text-base font-medium opacity-80 mb-4 tracking-wide">
                {stat.label}
              </span>

              {/* Big Numeric Value */}
              <span className="text-6xl md:text-7xl font-bold mb-4 tracking-tighter">
                {stat.value}
              </span>

              {/* Growth/Comparison Subtext */}
              <span className="text-xs md:text-sm font-normal opacity-70 tracking-normal">
                {stat.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
