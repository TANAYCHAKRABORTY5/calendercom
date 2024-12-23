import React, { useContext } from "react";

import GlobalContext from "../context/GlobalContext";

export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
    >
      <span className="p-1 text-2xl">+</span>
      <span className="pl-2 pr-7"> Create</span>
    </button>
  );
}
