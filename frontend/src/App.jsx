import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import { useContract, useMetamask } from "@thirdweb-dev/react";
import { useDispatch } from "react-redux";

const App = () => {
  const connectWithMetamask = useMetamask();
  let { contract } = useContract('0xd34D612057ee13cbFeb4052811c4ea7fef381644');
  let Dispatch = useDispatch();
  useEffect(() => {
    connectWithMetamask().then(async (res) => {
      Dispatch({ type: "SetContract", payload: contract });
    });
  }, []);

  return (
    <section className="flex flex-col justify-between h-[100vh] bg-[#13131a]">
      <section className="h-max m-2">
        <Header />
      </section>
      <section className="h-[100%] m-2">
        <Body />
      </section>
      <section className="h-max m-2">
        <Footer />
      </section>
    </section>
  );
};

export default App;
