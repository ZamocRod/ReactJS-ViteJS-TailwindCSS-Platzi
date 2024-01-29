import React from "react";
import { ShoppingCartContext } from "../../Context";

function Card(data) {
  const context = React.useContext(ShoppingCartContext);
  const showProduct = (productDetail) => {
    context.setProductToShow(productDetail);
    context.openProductDetail();
    context.closeCheckoutSideMenu();
  };

  const addProductsToCart = (productData) => {
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    context.closeProductDetail();
    context.openCheckoutSideMenu();
  };
  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0;
    if (isInCart) {
      {
        return (
          <div
            className="absolute top-0 right-0 flex justify-center items-center bg-white w-8 h-8 rounded-lg m-2 p-1 select-none"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="green"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        );
      }
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-8 h-8 rounded-lg m-2 p-1 select-none"
          onClick={(e) => {
            e.stopPropagation();
            addProductsToCart(data.data);
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
      );
    }
  };
  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-4 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 p-1">
          {data.data.category.name}
        </span>
        <img
          src={data.data.images[0]}
          alt={data.data.description}
          className="w-full h-full object-cover rounded-lg"
        />
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-lg font-medium">${data.data.price}</span>
      </p>
    </div>
  );
}

export default Card;
