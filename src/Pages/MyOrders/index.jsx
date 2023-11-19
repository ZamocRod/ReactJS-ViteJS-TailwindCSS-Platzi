import React from "react";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

function MyOrders() {
  const context = React.useContext(ShoppingCartContext);
  return (
    <Layout>
      <h2 className="text-xl font-bold mb-4 mt-2">My Orders</h2>
      {context.order.map((order, index) => (
        <Link to={`/my-orders/${index}`}>
          <OrdersCard
            key={context.order.length}
            totalPrice={order.totalPrice}
            totalProducts={order.total}
          />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
