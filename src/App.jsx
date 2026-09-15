import Header from "./Header";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import { useState } from "react";
import EmptyProducts from "./EmptyProducts";
import Products from "./Products";


function App() {

  const initialProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "Premium sound quality with 30-hour battery life.",
      price: 149.99,
      rating: 5,
      reviews: 284,
      badge: "Best Seller",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    },
    {
      id: 2,
      name: "Leather Watch",
      description:
        "Crafted from genuine Italian leather with sapphire crystal.",
      price: 219.0,
      rating: 4,
      reviews: 157,
      badge: "New",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      description: "Waterproof IPX7, 360° sound, built for adventure.",
      price: 89.95,
      rating: 4,
      reviews: 412,
      badge: null,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
    },
    {
      id: 4,
      name: "Desk Lamp",
      description: "Adjustable color temperature and USB-C charging port.",
      price: 64.0,
      rating: 5,
      reviews: 96,
      badge: null,
      image:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80",
    },
    {
      id: 5,
      name: "Mechanical Keyboard",
      description: "Compact TKL layout, Cherry MX switches, RGB lighting.",
      price: 129.99,
      rating: 5,
      reviews: 531,
      badge: "Popular",
      image:
        "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&q=80",
    },
    {
      id: 6,
      name: "Smart Water Bottle",
      description: "Tracks hydration goals, LED reminders, 24h cold.",
      price: 45.5,
      rating: 4,
      reviews: 73,
      badge: null,
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
    },
  ]

  const [products, setProducts] = useState(initialProducts);
  
      

  function restoreProducts() {
    setProducts(initialProducts);
  }
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="max-w-6xl mx-auto px-6 py-12">
          <Header restoreProducts={restoreProducts} numberOfProducts={products.length} totalProducts={initialProducts.length} />
          {products.length > 0 ? <Products products={products} setProducts={setProducts} /> : <EmptyProducts restoreProducts={restoreProducts} />}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
