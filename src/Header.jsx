export default function Header({
  restoreProducts,
  numberOfProducts,
  totalProducts,
}) {
  return (
    <div className="flex items-end justify-between mb-8 ">
      <div>
        <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-1">
          Featured
        </p>
        <h2 className="text-2xl font-bold text-gray-900">Our Products</h2>
        <p className="text-sm text-gray-500 mt-1">
          {numberOfProducts} of {totalProducts} items shown
        </p>
      </div>
      <button
        onClick={restoreProducts}
        className="text-sm text-gray-500 hover:text-black font-medium flex items-center gap-1.5 transition-colors"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        Restore all
      </button>
    </div>
  );
}
