import { Link, Navigate } from "react-router-dom";

import React, { useContext, useState, useRef } from "react";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";

function SignIn() {
  const context = useContext(ShoppingCartContext);
  const [view, setView] = useState("user-info");
  const form = useRef(null);

  //account

  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);

  //Validate if there is an account
  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountInLocalState = context.account
    ? Object.keys(parsedAccount).length === 0
    : true;

  console.log(parsedAccount);
  const hasUserAnAccount = !noAccountInLocalState || !noAccountInLocalStorage;

  //Create an account functon
  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false);
    localStorage.setItem("sign-out", stringifiedSignOut);
    context.setSignOut(false);
    return <Navigate replace to={"/"} />;
  };

  const createAnAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    //Create account to localStorage
    const stringifiedAccount = JSON.stringify(data);
    localStorage.setItem("account", stringifiedAccount);
    context.setAccount(data);
    handleSignIn();
  };

  const renderLogin = () => {
    return (
      <div>
        <p>
          <span className="font-light text-sn">Email: </span>
          <span>{parsedAccount?.email}</span>
        </p>
        <p className="mb-4">
          <span className="font-light text-sn">Password: </span>
          <span>{parsedAccount?.password}</span>
        </p>
        <Link to="/">
          <button
            className="bg-black rounded-md w-64 text-white p-2 mb-3 disabled:bg-neutral-400"
            disabled={!hasUserAnAccount}
            onClick={() => {
              handleSignIn();
            }}
          >
            Log in
          </button>
        </Link>
        <div className="mb-8 text-center self-center w-full">
          <a href="" className="underline text-sm">
            Forgot my password
          </a>
        </div>
        <button
          className="border-black border w-64 p-2 rounded-md disabled:text-gray-600 disabled:border-gray-700"
          disabled={hasUserAnAccount}
          onClick={() => {
            setView("create-user-info");
          }}
        >
          Sign up
        </button>
      </div>
    );
  };

  const renderCreateUserInfo = () => {
    return (
      <form ref={form} className="flex flex-col gap-4 w-80">
        <div className="flex flex-col gap-4 w-80 mb-2">
          <label htmlFor="name" className="text-lg font-medium">
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={parsedAccount?.name}
            placeholder="Ex: Peter"
            className="rounded-md bg-slate-200 w-80 p-3"
          />
        </div>
        <div className="flex flex-col gap-4 w-80 mb-2">
          <label htmlFor="email" className="text-lg font-medium">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={parsedAccount?.email}
            placeholder="Ex: Peter@email.com"
            className="rounded-md bg-slate-200 w-80 p-3"
          />
        </div>
        <div className="flex flex-col gap-4 w-80 mb-2">
          <label htmlFor="password" className="text-lg font-medium">
            Your Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            defaultValue={parsedAccount?.password}
            placeholder="Write a password"
            className="rounded-md bg-slate-200 w-80 p-3"
          />
        </div>
        <Link to="/">
          <button
            className="bg-black text-white w-full rounder-md py-4"
            onClick={() => {
              createAnAccount();
            }}
          >
            Create
          </button>
        </Link>
      </form>
    );
  };
  const renderView = () => {
    return view === "create-user-info" ? renderCreateUserInfo() : renderLogin();
  };

  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-8 mt-4">Welcome</h1>
      {renderView()}
    </Layout>
  );
}

export default SignIn;
