import React from "react";
import { TabGroup } from "../components/Tab";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Stats } from "../components/Stats";

export const Home = () => {
  return (
    <>
      <Navbar />
      <TabGroup />
      <Stats />
      <Footer />
    </>
  );
};
