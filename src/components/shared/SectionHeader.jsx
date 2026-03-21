export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="w-full flex flex-col items-center text-center">
      {/* Main Heading */}
      <h2 className="text-[#001f3f] text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
        {title}
      </h2>

      {/* Subtitle / Description */}
      {subtitle && (
        <p className="text-slate-500 text-sm md:text-base font-medium max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
