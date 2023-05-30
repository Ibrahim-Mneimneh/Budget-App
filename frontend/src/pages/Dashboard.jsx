import React from "react";
import { fetchData } from "../helpers";
import { useLoaderData } from "react-router-dom";
// loader function dashboardLoader
export function dashboardLoader() {
  const userName = fetchData("username");
  return { userName };
}
function Dashboard() {
  const { userName } = useLoaderData();
  return <div> {userName} Dashboard !!</div>;
}

export default Dashboard;
