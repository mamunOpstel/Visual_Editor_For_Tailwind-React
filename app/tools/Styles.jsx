"use client";
import { useEffect } from "react";

function Styles({ event }) {
  const editColor = () => {
    event.target.classList.add("text-red-500");
  };
  useEffect(() => {
    if (!event) {
      console.log("No element selected");
      return;
    } else {
      console.log(event);
    }
  }, [event]);

  return (
    <section className=" w-full  max-w-[200px] h-full p-6 border-2 border-white">
      {event && (
        // main styles button container
        <div className=" flex flex-col gap-2">
          <button className=" btn">border</button>
          <button className=" btn" onClick={editColor}>
            color red
          </button>
        </div>
      )}
    </section>
  );
}

export default Styles;
