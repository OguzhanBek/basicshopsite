import { ProductType } from "../../App";
interface ProductpageProps {
  children: React.ReactNode;
  filteredproducts: ProductType[];
}

function Productpage({ children, filteredproducts }: ProductpageProps) {
  return (
    <div className="product-page-container  w-[100%]">
      <h2 className="">{filteredproducts.length} Product(s) found</h2>
      {children}
    </div>
  );
}

export default Productpage;
