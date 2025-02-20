import { ProductType } from "../../App";

type tuta = {
  filteredproducts: ProductType[];
  addToCart: (tuta: ProductType) => void;
  isopen: boolean;
  setisopen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Products({ filteredproducts, addToCart, setisopen }: tuta) {
  // **Filtreleme işlemi**

  return (
    <div
      className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6  max-w-[1200px] w-full "
      style={{ marginTop: "1rem" }}
    >
      {filteredproducts.map((product, index) => (
        <div
          key={index}
          className="product-card group flex flex-col items-center gap-1.5 relative h-[540px] min-w-[200px]"
        >
          <div className="relative w-full h-80">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-0 right-0 bg-black text-white text-[10px] ">
              Free shipping
            </span>
            <img
              src={product.hoverimage}
              className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100"
            />
            <span className="absolute top-0 right-0 bg-black text-white text-[10px] ">
              Free shipping
            </span>
          </div>

          <h3 className="text-center font-semibold h-[50px]">
            {product.title}
          </h3>
          <p className="text-center">
            <span>$ </span>
            <span className="font-bold text-3xl">
              {Math.floor(product.price)}
            </span>
            <span className="font-normal text-xl">
              .{product.price.toString().split(".")[1] || "00"}
            </span>
          </p>
          <p className="text-center text-gray-400">
            or {product.monthlycredit} x
            <span className="font-bold">
              ${(product.price / (product?.monthlycredit || 0)).toFixed(2)}
            </span>
          </p>

          <button
            className="w-full h-12 bg-black text-white font-semibold transition-all group-hover:bg-yellow-400 cursor-pointer"
            onClick={() => {
              addToCart(product);
              setisopen(true);
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
export default Products;