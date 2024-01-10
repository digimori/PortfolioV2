import React from "react";
import { FaBars } from "react-icons/fa";

const Toggler = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <FaBars />
    </button>
  );
};

export default Toggler;
