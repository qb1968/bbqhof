export default function ComingSoon() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 flex items-center justify-center px-6 py-24">
      {/* Animated background glow */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl animate-pulse" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-[15%] h-4 w-4 rounded-full bg-cyan-400 animate-ping" />
      <div className="absolute bottom-32 left-[15%] h-3 w-3 rounded-full bg-blue-400 animate-pulse" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Icon */}
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl border border-white/20 bg-white/10 shadow-2xl shadow-blue-500/20 backdrop-blur-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-cyan-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
            />
          </svg>
        </div>

        {/* Small label */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-black backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
          Coming Soon
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-6xl md:text-7xl">
          Something
          <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Great Is Coming
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-black sm:text-xl">
          We're putting the finishing touches on this page. Check back soon for
          more information, updates, resources, and exciting new content.
        </p>

        {/* Progress-style decoration */}
        <div className="mx-auto mt-10 max-w-md">
          <div className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-black">
            <span>Under Construction</span>
            <span>Coming Soon</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[75%] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 shadow-lg shadow-blue-500/40" />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 font-bold text-slate-900 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <span>Go Back</span>
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
          </button>
        </div>

        {/* Bottom message */}
        <p className="mt-8 text-sm text-black">
          Thank you for your patience. We can't wait to share it with you.
        </p>
      </div>
    </section>
  );
}
