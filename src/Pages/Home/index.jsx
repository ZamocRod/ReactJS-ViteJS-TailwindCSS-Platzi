import React from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import CheckOutSideMenu from "../../Components/CheckOutSideMenu";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const context = React.useContext(ShoppingCartContext);
  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return context.filteredItems?.map((item) => (
        <Card key={item.id} data={item} />
      ));
    } else {
      return <div>No items found</div>;
    }
  };
  return (
    <Layout>
      <h2 className="text-xl font-bold mb-4 mt-2">Exclusive products</h2>
      <div>
        <span className="mr-4">Search</span>
        <input
          type="text"
          value={context.searchByTitle}
          className="border border-gray-800 rounded-lg mb-4 py-3 focus:outline-none px-5"
          placeholder="Search products by name"
          onChange={(event) => {
            context.setSearchByTitle(event.target.value);
          }}
        />
      </div>
      <div className="grid gap-8 grid-cols-5 w_full">{renderView()}</div>
      <ProductDetail></ProductDetail>
      <CheckOutSideMenu></CheckOutSideMenu>
    </Layout>
  );
}

export default Home;
