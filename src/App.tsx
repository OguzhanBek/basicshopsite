import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Filter from "./components/Filters/Filter";
import Productpage from "./components/ProductPage/Productpage";
import Products from "./components/ProductPage/Products";
import Slide from "./components/Slide/Slide";

export type ProductType = {
  image: string;
  title: string;
  price: number;
  monthlycredit?: number;
  size: string;
  id: number;
  quantity?: number;
  hoverimage?: string;
};
function App() {
  const productList = [
    {
      image: "/images.jpg",
      title: "Cropped Stay Groovy off white",
      price: 10.9,
      monthlycredit: 9,
      size: "M",
      hoverimage: "indir (15).jpg",
      id: 1,
    },
    {
      image: "indir.jpg",
      title: "Basic Cactus White T-shirt",
      price: 13.25,
      monthlycredit: 3,
      size: "M",
      hoverimage: "indir (16).jpg",
      id: 2,
    },
    {
      image: "indir (1).jpg",
      title: "Skater Black Sweatshirt",
      price: 25.9,
      monthlycredit: 12,
      size: "M",
      hoverimage: "indir (17).jpg",
      id: 3,
    },
    {
      image: "indir (2).jpg",
      title: "Black Tule Oversized",
      price: 29.45,
      monthlycredit: 5,
      size: "L",
      hoverimage: "indir (18).jpg",
      id: 4,
    },
    {
      image: "indir (3).jpg",
      title: "Black Batman T-shirt",
      price: 10.9,
      monthlycredit: 9,
      size: "L",
      hoverimage: "indir (19).jpg",
      id: 5,
    },
    {
      image: "indir (4).jpg",
      title: "Blue T-Shirt",
      price: 9.0,
      monthlycredit: 3,
      size: "S",
      hoverimage: "indir (20).jpg",
      id: 6,
    },
    {
      image: "indir (5).jpg",
      title: "Loose Black T-shirt",
      price: 14.0,
      monthlycredit: 5,
      size: "XL",
      hoverimage: "indir (21).jpg",
      id: 7,
    },
    {
      image: "indir (6).jpg",
      title: "Ringer Hall Pass",
      price: 10.9,
      monthlycredit: 9,
      size: "M",
      hoverimage: "indir (22).jpg",
      id: 8,
    },
    {
      image: "indir (7).jpg",
      title: "Grey T-shirt",
      price: 14.9,
      monthlycredit: 7,
      size: "ML",
      hoverimage: "indir (23).jpg",
      id: 9,
    },
    {
      image: "indir (8).jpg",
      title: "Black T-shirt with white stripes",
      price: 14.9,
      monthlycredit: 7,
      size: "XXL",
      hoverimage: "indir (24).jpg",
      id: 10,
    },
    {
      image: "indir (9).jpg",
      title: "Turtles Ninja T-shirt",
      price: 10.9,
      monthlycredit: 9,
      size: "XS",
      hoverimage: "indir (25).jpg",
      id: 11,
    },
    {
      image: "indir (10).jpg",
      title: "Slim black T-shirt",
      price: 49.9,
      monthlycredit: 0,
      size: "S",
      hoverimage: "indir (26).jpg",
      id: 12,
    },
    {
      image: "indir (11).jpg",
      title: "Blue Sweatshirt",
      price: 22.5,
      monthlycredit: 4,
      size: "XL",
      hoverimage: "indir (27).jpg",
      id: 13,
    },
    {
      image: "indir (12).jpg",
      title: "White T-shirt Gucci",
      price: 18.7,
      monthlycredit: 4,
      size: "XXL",
      hoverimage: "indir (28).jpg",
      id: 14,
    },
    {
      image: "indir (13).jpg",
      title: "Tropical Wine T-shirt",
      price: 134.9,
      monthlycredit: 5,
      size: "ML",
      hoverimage: "indir (29).jpg",
      id: 15,
    },
    {
      image: "indir (14).jpg",
      title: "Marine Blue T-shirt",
      price: 49.0,
      monthlycredit: 9,
      size: "L",
      hoverimage: "ben.jpg",
      id: 16,
    },
  ];

  const [selectedSizes, setSelectedSizes] = useState<Set<string>>(new Set());
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState<ProductType[]>([]);
  const filteredProducts = productList.filter(
    (product) => selectedSizes.size === 0 || selectedSizes.has(product.size)
  );

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(size)) {
        newSet.delete(size);
      } else {
        newSet.add(size);
      }
      return newSet;
    });
  };

  const addToCart = (product: ProductType) => {
    setShoppingCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item?.quantity || 0) + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (id: number) => {
    setShoppingCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: (item?.quantity || 0) + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setShoppingCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === id && (item.quantity || 0) > 1
              ? { ...item, quantity: (item?.quantity || 0) - 1 }
              : item
          )
          .filter((item) => item?.quantity || 0 > 0) // Remove item if quantity is 0
    );
  };

  const removeFromCart = (id: number) => {
    setShoppingCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calculate subtotal
  const calculateSubtotal = () => {
    return shoppingCart.reduce(
      (total, item) => total + item.price * (item?.quantity || 0),
      0
    );
  };

  return (
    <div style={{ marginBottom: "2rem" }}>
      <Slide
        isOpen={isOpen}
        setIsopen={setIsOpen}
        shoppingCart={shoppingCart}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        calculateSubtotal={calculateSubtotal}
      />

      <nav style={{ marginBottom: "20px" }}>
        <Navbar setIsOpen={setIsOpen} shoppingCart={shoppingCart} />
      </nav>
      <main className="tuta flex justify-center">
        <div className="tuta-2 flex w-4/6 gap-4">
          <div className="filter-part w-1/5">
            <Filter selectedSizes={selectedSizes} toggleSize={toggleSize} />
          </div>
          <div className="product-part w-4/5">
            <Productpage filteredproducts={filteredProducts}>
              <Products
                filteredproducts={filteredProducts}
                addToCart={addToCart}
                isopen={isOpen}
                setisopen={setIsOpen}
              />
            </Productpage>
          </div>
        </div>
      </main>
    </div>
  );
}
export default App;
