export default function AppCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col gap-4 animate-pulse h-full w-full">
      {/* Image Placeholder */}
      <div className="w-full aspect-square bg-slate-200 rounded-xl" />

      {/* Title Placeholder - Two lines to match line-clamp-2 */}
      <div className="flex flex-col gap-2">
        <div className="h-5 bg-slate-200 rounded-md w-5/6" />
        <div className="h-5 bg-slate-200 rounded-md w-2/3" />
      </div>

      {/* Stats Row Placeholder */}
      <div className="flex justify-between items-center mt-1">
        {/* Downloads Pill Placeholder */}
        <div className="h-8 w-20 bg-slate-100 rounded-md" />

        {/* Ratings Pill Placeholder */}
        <div className="h-8 w-16 bg-slate-100 rounded-md" />
      </div>
    </div>
  );
}
