import React from "react";
import Layout from "../../Components/Layout";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;

  //Se va a tomar el path de la orden y luego se buscará el ultimo "/" para encontrar el numero al que se refiere la orden, luego se borrara el resto del string para tomar el valor final

  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") {
    index = context.order?.length - 1;
  }

  return (
    <Layout>
      <div className="flex items-center justify-around relative w-80">
        <Link to={"/my-orders"}>
          <button>
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
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </Link>
        <h1 className="text-lg font-bold">My Order</h1>
      </div>
      <div className="overflow-y-auto flex flex-col w-80">
        {context.order?.[index]?.products.map((item) => (
          <OrderCard
            key={item.id}
            id={item.id}
            title={item.title}
            imageURL={item.images[0]}
            price={item.price}
          />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;
