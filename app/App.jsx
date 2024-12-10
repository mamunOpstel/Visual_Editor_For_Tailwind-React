"use client";
import { useState } from "react";
import Elements from "./tools/Elements";
import Styles from "./tools/Styles";

function App() {
  const [event, setEvent] = useState(null);
  const handleElementSelect = (event) => {
    setEvent(event);
  };

  //   Adding element to DOM
  const addElement = (elementType) => {
    const canvas = document.getElementById("cnavas");

    let element = document.createElement(`${elementType}`);
    element.innerText = `${element.tagName}`;
    canvas.appendChild(element);
  };

  return (
    <main className=" w-full ">
      {/* Main Container */}
      <div className=" flex min-h-screen max-h-screen overflow-y-scroll">
        <Elements addElement={addElement} />
        <section
          id="cnavas"
          className=" w-full border content-center"
          onClick={(event) => handleElementSelect(event)}
        ></section>
        <Styles event={event} />
      </div>
    </main>
  );
}

export default App;
