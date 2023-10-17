import React from "react";
import { ShoppingCartContext } from "../../Context";

function Card(data) {
  const context = React.useContext(ShoppingCartContext);
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg" onClick={()=> context.openProductDetail()}>
      <figure className="relative mb-4 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 p-1">
          {data.data.category.name}
        </span>
        <img
          src={data.data.images[0]}
          alt={data.data.description}
          className="w-full h-full object-cover rounded-lg"
        />
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-8 h-8 rounded-lg m-2 p-1 select-none"
          onClick={(e) => {
            e.stopPropagation(); 
            context.setCount(context.count + 1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-lg font-medium">${data.data.price}</span>
      </p>
    </div>
  );
}

export default Card;
