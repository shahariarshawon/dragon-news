import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div className="bg-base-200">
      <header>
        <Header></Header>
      </header>

      <main>
        <section className="leftNav">Left side navbar</section>
        <section className="main">
          <Outlet></Outlet>
        </section>
        <section className="rightNav">Right side navbar</section>
      </main>
    </div>
  );
};

export default HomeLayout;
