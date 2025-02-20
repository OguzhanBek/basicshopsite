import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ProductType } from "../../App";

interface ProductpageProps {
  children?: React.ReactNode;
  isOpen: boolean;
  setIsopen: (value: boolean) => void;
  shoppingCart: ProductType[];
  removeFromCart: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  increaseQuantity: (id: number) => void;
  calculateSubtotal: () => number;
}



function Slide({isOpen , setIsopen , shoppingCart , removeFromCart ,decreaseQuantity, increaseQuantity, calculateSubtotal}: ProductpageProps) {
  return (
    <div
      className={` z-10 fixed top-0 right-0 h-screen bg-[#1B1A20] transition-all duration-200 flex flex-col items-start ${
        isOpen ? "w-120" : "w-0"
      }`}
    >
      <div
        onClick={() => setIsopen(!isOpen)}
        className={` kapatmaişareti absolute ${
          isOpen ? " top-0 left-[-8px]" : ""
        } cursor-pointer z-20 bg-[#1B1A20] text-white `}
      >
        X
      </div>
      <div
        className="flex justify-center gap-3 w-full"
        style={{ marginTop: "5rem" }}
      >
        <FaShoppingCart
          className="text-white text-3xl cursor-pointer"
          onClick={() =>  setIsopen(!isOpen)} // Open cart
        />
        <span className="text-white text-2xl">Cart</span>
      </div>

      {shoppingCart.length === 0 ? (
        <div className=" text-gray-500 h-160 w-full text-center">
         <p className="" style={{marginTop:"3rem"}}>Add some products in the cart :)</p> 
        </div>
      ) : (
        <div
          className="scrollable-div overflow-y-auto h-160 w-full "
          style={{ paddingLeft: "1.5rem", marginTop: "3rem" }}
        >
          {shoppingCart.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-4 border-t border-black justify-between"
              style={{ marginBottom: "2rem", paddingTop: "1.5rem" }}
            >
              <div className="flex">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-20 h-20 object-cover"
                />
                <div className="flex-col justify-center">
                  <p style={{ paddingLeft: "1rem", color: "white" }}>
                    {product.title}
                  </p>
                  <p style={{ paddingLeft: "1rem", color: "#5B5A5E" }}>
                    {product.size}
                  </p>
                  <p style={{ paddingLeft: "1rem", color: "#5B5A5E" }}>
                    Quantity: {product.quantity}
                  </p>
                </div>
              </div>
              <div className="flex flex-col" style={{ marginRight: "1rem" }}>
                <p
                  onClick={() => removeFromCart(product.id)} // Remove from cart
                  className="text-black text-xl font-bold cursor-pointer w-fit self-end"
                >
                  X
                </p>
                <p className="text-orange-400">${product.price}</p>
                <div className="w-full flex justify-end  bg-white">
                  <button
                    onClick={() => decreaseQuantity(product.id)} // Decrease quantity
                    className={`flex-1 cursor-pointer ${product.quantity ==1 ? "bg-[#272829] text-gray-600" : "bg-black text-white "} border-none  `} 
                    style={{ padding: "0.2rem" }}
                  >
                    -
                  </button>
                  <button
                    onClick={() => increaseQuantity(product.id)} // Increase quantity
                    className="flex-1 cursor-pointer bg-black text-white"
                    style={{ padding: "0.2rem" }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div
        style={{ boxShadow: "0 -8px 10px rgba(0, 0, 0, 0.5)" }}
        className="flex flex-col w-full bg-[#1b1a20] text-white border border-[#1a1a1a]"
      >
        {/* Subtotal Area */}
        <div className="w-96" style={{ margin: "auto" }}>
          <div
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
            className="flex justify-between w-full text-gray-400 text-sm"
          >
            <p className="text-xl">SUBTOTAL</p>
            <p className="text-2xl text-yellow-400 ">
              ${calculateSubtotal().toFixed(2)}
            </p>
          </div>

          {/* Checkout Button */}
          <div className="mt-auto">
            <button onClick={() => alert("tebrikler siteyi tamamladınız")} className="w-full h-10 bg-[#0c0b10] text-white hover:bg-black cursor-pointer transition-all  duration-200 ">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Slide;