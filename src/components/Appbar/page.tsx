import React from "react";

function Appbar() {
  return (
    <div className="fixed left-0 py-4 px-6 flex justify-between top-0 w-full items-center bg-green-semilight text-white">
      <h1 className="text-2xl">Sign Teacher</h1>
      <button
        type="button"
        className="border-2 border-white rounded-md text-white px-2 text-xl tracking-wider"
      >
        Training
      </button>
    </div>
  );
}

export default Appbar;
