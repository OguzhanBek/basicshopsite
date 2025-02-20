import React from "react";
import { FaShoppingCart } from "react-icons/fa";
type ProductType = {
  image: string;
  title: string;
  price: number;
  size: string;
  id: number;
  quantity?: number;
};

type NavbarProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  shoppingCart: ProductType[];
};
function Navbar({ setIsOpen, shoppingCart }: NavbarProps) {
  return (
    <div style={{marginBottom:"3rem",marginTop:"1rem"}} className="flex justify-between w-full ">
      <div></div>

      <div
        className="linkedin flex items-center justify-center w-[30%] text-[12px] border border-violet-200 "
        style={{ paddingLeft: "12px", paddingBottom: "10px" }}
      >
        <div className="linkedindiv flex gap-4 items-center">
          <img
            src="/bora.jpg"
            alt="Bora"
            className="w-16 h-16 object-cover rounded-full border border-gray-300 "
          />
          <div className="right-navbar">
            <h3 className="font-bold">Work in the Netherlands</h3>
            <p className="text-[12px] ">
              Hi! I'm Jeremy Akeze from Doghouse IT Recruitment and I'm looking
              for skilled Software Engineers like you. If you wish to move
              abroad,
              <a
                href="https://www.linkedin.com/in/jeremy-akeze-9542b396/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold"
              >
                follow me on Linkedin
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div
        className="sepet-ikonu  relative bg-black h-fit "
        style={{ padding: "0.5rem" }}
      >
        {/* Sepet İkonu */}
        <FaShoppingCart
          className="text-4xl cursor-pointer text-white "
          onClick={() => setIsOpen(true)}
        />

        {/* Sepette Ürün Sayısı */}
        {shoppingCart.length >= 0 && (
          <span
            onClick={() => setIsOpen(true)}
            className="absolute  top-6 -right-0 bg-[#f0de42] cursor-pointer text-black text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-md border "
          >
            {shoppingCart.reduce(
              (total, item) => total + (item.quantity || 0),
              0
            )}
          </span>
        )}
      </div>
    </div>
  );
}
export default Navbar;
