"use client";

import { ERROR_BTN_LBL, ERROR_MSG_GLOBAL } from "../../constants";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="grid h-screen px-4 bg-white place-content-center">
          <div className="text-center">
            <h2 className="text-2xl text-black">{ERROR_MSG_GLOBAL}</h2>
            <button onClick={() => reset()}>{ERROR_BTN_LBL}</button>
          </div>
        </div>
      </body>
    </html>
  );
}
