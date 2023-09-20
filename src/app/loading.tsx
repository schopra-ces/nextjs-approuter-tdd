"use client";

import React from "react";
import { SpinnerCircular } from "spinners-react";
import { LOADER_TEXT } from "../constants";

export default function Loading() {
  return (
    <div className=" max-w-3xl  py-40 mx-auto">
      <section>
        <div className="flex flex-col">
          <h2 className="text-black text-5xl mx-auto">{LOADER_TEXT}</h2>
          <br />
          <SpinnerCircular size="40%" className="mx-auto" />
        </div>
      </section>
    </div>
  );
}
