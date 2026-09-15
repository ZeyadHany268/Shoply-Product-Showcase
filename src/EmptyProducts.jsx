export default function EmptyProducts({ restoreProducts }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      {/* Icon */}
      <div class="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <svg
          class="w-6 h-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10"
          ></path>
        </svg>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800">No products left</h2>

      {/* Description */}
      <p className="mt-2 text-lg text-gray-400">You've removed all items.</p>

      {/* Restore Button */}
      <button
        onClick={restoreProducts}
        className="mt-6 rounded-xl border border-indigo-300 px-6 py-3 text-lg font-medium text-indigo-600 transition duration-200 hover:bg-indigo-600 hover:text-white"
      >
        Restore all products
      </button>
    </div>
  );
}
