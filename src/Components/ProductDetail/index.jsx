import React from "react";
import "./styles.css";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
function ProductDetail() {
  const context = React.useContext(ShoppingCartContext);
  console.log("Producto:", context.productToShow);
  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white/70 backdrop-blur-lg`}
    >
      <div className="flex justify-between items-center p-4">
        <h2 className="font-medium text-xl">Detail</h2>
        <button
          onClick={() => {
            context.closeProductDetail();
          }} className="cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={context.productToShow.images[0]}
          alt={context.productToShow.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-3xl mb-4">${context.productToShow.price}</span>
        <span className="font-medium text-xl mb-2">{context.productToShow.title}</span>
        <span>{context.productToShow.description}</span>
      </p>
    </aside>
  );
}

export default ProductDetail;
