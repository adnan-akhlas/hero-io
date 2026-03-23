import AppCardSkeleton from "./AppCardSkeleton";

export default function AppsSkeleton() {
  const arr = Array.from({ length: 10 }, (_, idx) => `skeleton_${idx}`);
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {arr.map((app) => (
        <AppCardSkeleton key={app} />
      ))}
    </div>
  );
}
