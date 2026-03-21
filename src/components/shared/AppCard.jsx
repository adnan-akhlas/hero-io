export default function AppCard({ app }) {
  const { image, title, downloads, ratingAvg } = app;

  const formattedDownloads =
    downloads >= 1000000
      ? `${(downloads / 1000000).toFixed(0)}M`
      : downloads.toLocaleString();

  return (
    <div className="max-w-75 bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col gap-4">
      {/* App Image Placeholder / Image */}
      <div className="w-full aspect-square bg-[#d9d9d9] rounded-xl overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* App Title */}
      <h3 className="text-[#001f3f] text-xl font-bold leading-tight line-clamp-2">
        {title}
      </h3>

      {/* Stats Row */}
      <div className="flex justify-between items-center mt-1">
        {/* Downloads Pill */}
        <div className="flex items-center gap-1 bg-[#f0f9f4] px-3 py-1.5 rounded-md">
          <svg
            className="w-4 h-4 text-[#10b981]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          <span className="text-[#10b981] font-bold text-sm">
            {formattedDownloads}
          </span>
        </div>

        {/* Ratings Pill */}
        <div className="flex items-center gap-1 bg-[#fff7ed] px-3 py-1.5 rounded-md">
          <svg
            className="w-4 h-4 text-[#f97316] fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-[#f97316] font-bold text-sm">{ratingAvg}</span>
        </div>
      </div>
    </div>
  );
}
