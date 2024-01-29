import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";
import {
  ShoppingCartContext,
  initilizeLocalStorage,
  ShoppingCartProvider,
} from "../../Context";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import "./App.css";
import NavBar from "../../Components/NavBar";
import { useContext } from "react";

const AppRoutes = () => {
  const context = useContext(ShoppingCartContext);

  //Get Account
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);

  //get SignOut
  const signOut = localStorage.getItem("sign-out");
  const parsedSignOut = JSON.parse(signOut);

  //Has an account
  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountInLocalState = context.account
    ? Object.keys(parsedAccount).length === 0
    : true;

  console.log(parsedAccount);
  const hasUserAnAccount = !noAccountInLocalState || !noAccountInLocalStorage;

  const isUserSignOut = context.signOut || parsedSignOut;

  let routes = useRoutes([
    {
      path: "/",
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <Home />
        ) : (
          <Navigate replace to={"/sign-in"} />
        ),
    },
    {
      path: "/clothes",
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <Home />
        ) : (
          <Navigate replace to={"/sign-in"} />
        ),
    },
    {
      path: "/electronics",
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <Home />
        ) : (
          <Navigate replace to={"/sign-in"} />
        ),
    },
    {
      path: "/furnitures",
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <Home />
        ) : (
          <Navigate replace to={"/sign-in"} />
        ),
    },
    {
      path: "/toys",
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <Home />
        ) : (
          <Navigate replace to={"/sign-in"} />
        ),
    },
    {
      path: "/others",
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <Home />
        ) : (
          <Navigate replace to={"/sign-in"} />
        ),
    },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/*", element: <NotFound /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/sign-in", element: <SignIn /> },
  ]);
  return routes;
};

function App() {
  initilizeLocalStorage();
  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <AppRoutes />
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
