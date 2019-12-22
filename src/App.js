import React from "react";
import { useBlockstack } from "react-blockstack";
import Content from "./Content.js";
import Landing from "./Landing.js";

export default function App() {
  const { person, signIn } = useBlockstack();
  return (
    <>
      {signIn && <Landing />}
      {person && <Content person={person} />}
    </>
  );
}
