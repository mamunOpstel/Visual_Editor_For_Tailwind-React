function Elements({addElement}) {
  const handleAddElement = (event) => {
    addElement(event.target.name);
  };

  return (
    <section className=" w-full max-w-[200px] h-full p-6 border-2 border-white">
      {/* Main container */}
      <div className=" w-full">
        <div className="box_elements_container flex flex-col gap-3">
          <button className="btn" onClick={handleAddElement} name="section">
            Section
          </button>
          <button className="btn" onClick={handleAddElement} name="text">
            Text
          </button>
          <button className="btn" onClick={handleAddElement} name="button">
            Button
          </button>
        </div>
      </div>
    </section>
  );
}

export default Elements;
