import Link from "next/link";
import React from "react";

function Appbar() {
  return (
    <div className="py-4 px-6 flex justify-between w-full items-center -bg--secondary-blue text-white">
      <h1 className="text-2xl">Signer</h1>
      <ul className="flex gap-x-4">
        <li>
          <Link
            href="/alphabet"
            className="bg-white text-foreground rounded-md px-2 text-xl tracking-wider"
          >
            Alphabet
          </Link>
        </li>
        <li>
          <Link
            href="/training"
            className="bg-white text-foreground rounded-md px-2 text-xl tracking-wider"
          >
            Training
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Appbar;
