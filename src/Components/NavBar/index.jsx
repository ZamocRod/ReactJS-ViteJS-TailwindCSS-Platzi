import React from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

function NavBar() {
  let activeStyle = "underline underline-offset-8";
  const context = React.useContext(ShoppingCartContext);
  return (
    <nav className="flex justify-between items-center w-full py-5 px-8 text-m fixed top-0 z-40 bg-white/70 backdrop-blur-md shadow-lg">
      <ul className="flex gap-3">
        <li className="font-bold">
          <NavLink className="text-lg" to="/">
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => {
              context.setSearchByCategory("");
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            onClick={() => {
              context.setSearchByCategory("clothes");
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => {
              context.setSearchByCategory("electronics");
              console.log(context.setSearchByCategory);
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            onClick={() => {
              context.setSearchByCategory("furniture");
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            onClick={() => {
              context.setSearchByCategory("toys");
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            onClick={() => {
              context.setSearchByCategory("others");
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex gap-3">
        <li className="font-sm font-light text-black/70">Hola@Digit3D.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              context.openCheckoutSideMenu();
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            {context.cartProducts.length}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
