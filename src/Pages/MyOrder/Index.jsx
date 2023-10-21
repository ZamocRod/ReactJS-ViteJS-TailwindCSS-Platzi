import React from "react";
import Layout from "../../Components/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
function MyOrder() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      MyOrder
      <div className="overflow-y-auto flex flex-col w-80">
        {context.order?.slice(-1)[0].products.map((item) => (
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
