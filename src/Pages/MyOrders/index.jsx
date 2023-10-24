import React from "react";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

function MyOrders() {
  const context = React.useContext(ShoppingCartContext);
  return (
    <Layout>
      {context.order.map((order, index) => (
        <Link to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.total}
          />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
