import Link from "next/link";
import React from "react";

function Appbar() {
  return (
    <div className="py-4 px-6 flex justify-between w-full items-center bg-green-semilight text-white">
      <h1 className="text-2xl">Sign Teacher</h1>
      <Link
        href="/training"
        type="button"
        className="border-2 border-white rounded-md text-white px-2 text-xl tracking-wider"
      >
        Training
      </Link>
    </div>
  );
}

export default Appbar;
