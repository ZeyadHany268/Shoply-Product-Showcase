
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <div class="w-7 h-7 bg-indigo-600 rounded-md flex items-center justify-center">
              <svg
                class="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap">
              Shoply
            </span>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0">
            <li>
              <a
                href="#"
                className="text-xs text-gray-400 hover:text-gray-700 transition-colors"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-xs text-gray-400 hover:text-gray-700 transition-colors me-4 md:me-6"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-xs text-gray-400 hover:text-gray-700 transition-colors me-4 md:me-6"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-xs text-gray-400 hover:text-gray-700 transition-colors"
              >
                Support
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-default sm:mx-auto lg:my-8" />
        <span className="block text-sm text-body ">
          © 2026 Shoply, Inc. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
