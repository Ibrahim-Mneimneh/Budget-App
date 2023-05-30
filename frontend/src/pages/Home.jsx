import React from "react";
import { fetchData } from "../helpers";
import { Outlet, useLoaderData } from "react-router-dom";

import waves from "./../public/wave.svg";
import Navbar from "../Componenets/Navbar";

// loader function dashboardLoader
export function homeLoader() {
  const userName = fetchData("username");
  return { userName };
}

function Home() {
  const { userName } = useLoaderData();
  return (
    <div className="layout">
      <Navbar userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={waves} alt=""></img>
    </div>
  );
}

export default Home;
