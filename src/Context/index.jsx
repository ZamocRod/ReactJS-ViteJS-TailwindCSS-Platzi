import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

//Inicializar los datos de local Storage o en su defecto tomar los datos y pasarlos por la función de parse

export const initilizeLocalStorage = () => {
  const accountInLocalStorage = localStorage.getItem("account");
  const signOutLocalStorage = localStorage.getItem("sign-out");
  let parsedAccount;
  let parsedSignOut;
  if (!accountInLocalStorage) {
    localStorage.setItem("account", JSON.stringify({}));
    parsedAccount = {};
  } else {
    parsedAccount = JSON.parse(accountInLocalStorage);
  }
  if (!signOutLocalStorage) {
    localStorage.setItem("sign-out", JSON.stringify(false));
    parsedSignOut = false;
  } else {
    parsedSignOut = JSON.parse(signOutLocalStorage);
  }
};

//Proveedor del contexto de la aplicación web

export const ShoppingCartProvider = ({ children }) => {
  //shopping cart counter
  const [count, setCount] = useState(0);

  // my account
  const [account, setAccount] = useState();

  //Sign out
  const [signOut, setSignOut] = useState();

  //Product Detail open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  //Checkout side menu open/close

  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  //Product Detail show product
  const [productToShow, setProductToShow] = useState({
    title: "",
    price: "",
    description: "",
    images: [],
  });

  //Shopping car, lista de productos de el carrito de compras
  const [cartProducts, setCartProducts] = useState([]);

  //Get products
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  //Get products by name
  const [searchByTitle, setSearchByTitle] = useState("");

  const APIUrl = "https://api.escuelajs.co/api/v1/products";
  useEffect(() => {
    fetch(APIUrl)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error(error));
  }, []);

  //Filter items by category

  const [searchByCategory, setSearchByCategory] = useState("");

  //Filter Items
  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };
  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  useEffect(() => {
    let filtered = items;
    if (searchByCategory?.length > 0)
      filtered = filteredItemsByCategory(filtered, searchByCategory);
    if (searchByTitle?.length > 0)
      filtered = filteredItemsByTitle(filtered, searchByTitle);
    setFilteredItems(filtered);
  }, [items, searchByTitle, searchByCategory]);

  //Shopping cart order
  const [order, setOrder] = useState([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        setIsCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        setSearchByTitle,
        searchByTitle,
        filteredItems,
        setFilteredItems,
        searchByCategory,
        setSearchByCategory,
        account,
        setAccount,
        signOut,
        setSignOut,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
