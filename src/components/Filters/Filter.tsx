import { useEffect, useState } from "react";

type tuta = {
  selectedSizes: Set<string>;
  toggleSize: (size: string) => void;
};

function Filter({ selectedSizes, toggleSize }: tuta) {
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => setIsMobile(window.innerWidth <= 768);
  
  
  useEffect(() => {
    
    handleResize(); // İlk render'da kontrol et
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="anaclass flex flex-col gap-6 w-full max-w-xs"
      style={{ paddingRight: "4rem" }} // Sadece padding ve margin style içinde
    >
      <h3 className="font-bold">Sizes:</h3>
      <div
        className="sizes grid gap-2 w-full"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(30px, 1fr))", // Otomatik küçülen grid yapısı
          gap: "10px",
        }}
      >
        {["XS", "S", "M", "ML", "L", "XL", "XXL"].map((size, i) => (
          <button
            key={i}
            onClick={() => toggleSize(size)}
            className={`sizes w-full h-[2.5rem] min-w[40px] text-sm rounded-full border border-transparent cursor-pointer transition-all
              ${
                selectedSizes.has(size)
                  ? "bg-black text-white"
                  : "bg-gray-200 hover:border-black"
              }`}
          >
            {size}
          </button>
        ))}
      </div>
      <p
        className={`text-sm ${isMobile ? "hidden" : ""}`}
        style={{ marginTop: "1rem" }}
      >
        Leave a star on Github if this repository was useful :)
      </p>
    
      <a href="tuta" className="text-blue-600 underline">
        star
      </a>
    </div>
  );
}
export default Filter;