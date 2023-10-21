import React from "react";
import "./styles.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../Utils";

function CheckOutSideMenu() {
  const context = useContext(ShoppingCartContext);

  const handelDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (item) => item.id != id
    );
    context.setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: "02-02-2023",
      products: context.cartProducts,
      total: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };
    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white/70 backdrop-blur-lg`}
    >
      <div className="flex justify-between items-center p-4">
        <h2 className="font-medium text-xl">Carrito de compras</h2>
        <button
          onClick={() => {
            context.closeCheckoutSideMenu();
          }}
          className="cursor-pointer"
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
      <div className="overflow-y-auto flex-1">
        {context.cartProducts?.map((item) => (
          <OrderCard
            key={item.id}
            id={item.id}
            title={item.title}
            imageURL={item.images[0]}
            price={item.price}
            handelDelete={handelDelete}
          />
        ))}
      </div>
      <div className="p-6">
        <p className="border-neutral-500 border-2 rounded-lg p-2 flex justify-between">
          <span className="text-lg">Total: </span>
          <span className="font-bold text-lg">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
        <Link to="/my-orders/last">
          <button
            className="bg-blue-800 text-white p-2 mt-2 rounded-lg w-full border-b-black border-r-black border-b-2 border-r-2 "
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
}

export default CheckOutSideMenu;
