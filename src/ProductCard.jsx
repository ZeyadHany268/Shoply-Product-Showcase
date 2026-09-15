export default function ProductCard({ product, onDelete }) {
  let { image, badge, name, price, description, rating, reviews, id } = product;

  return (
    <div className="group relative w-full max-w-[386px] overflow-hidden rounded-2xl border border-gray-200 bg-white">
      {/* Image */}
      <div className="relative h-[288px] overflow-hidden bg-gray-100">
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

        {/* Badge */}
        {badge && (
          <span className="absolute left-2.5 top-2.5 rounded-full bg-indigo-600 px-3 py-1 text-sm font-medium text-white">
            {badge}
          </span>
        )}
      </div>

      {/* Delete Button */}
      <button
        className="
          absolute right-3 top-3 z-10
          flex h-9 w-9 text-center mx-auto  justify-center
          rounded-full bg-white
          text-2xl font-medium text-gray-400
          opacity-0 shadow-sm
          transition-all duration-200
          group-hover:opacity-100
          hover:text-red-500
          hover:shadow-md
        "
        onClick={() => onDelete(id)}
      >
        ×
      </button>

      {/* Content */}
      <div className="p-5">
        {/* Title + Price */}
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-lg font-bold leading-6 text-gray-900">{name}</h2>

          <span className="shrink-0 text-lg font-bold text-indigo-600">
            ${price}
          </span>
        </div>

        {/* Description */}
        <p className="mt-3 min-h-[48px] text-sm leading-6 text-gray-500">
          {description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex gap-1 text-yellow-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= rating ? "text-yellow-400" : "text-gray-300"}
              >
                ★
              </span>
            ))}
          </div>

          <span className="text-sm text-gray-400">({reviews})</span>
        </div>

        {/* Button */}
        <button className="mt-2 w-full text-sm font-medium text-indigo-600 border border-indigo-200 rounded-lg py-1.5 hover:bg-indigo-50 transition-colors">
          Add to cart
        </button>
      </div>
    </div>
  );
}
