import React, { useState } from "react";
import BoardOptions from "./modal/BoardOptions";
import '../styles/latoFont.css'

const Board = (props) => {

  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal
  const handleClick = () => {
    setShowModal(true); // Al hacer clic, muestra el modal estableciendo el estado a true
  };

  return (
    <main>
      <button
        onClick={handleClick}
        className="bg-[#FFFFF] w-[90vw] h-[20.5vh] text-black flex flex-col items-star rounded-lg border-2 border-#D4D4D8 shadow-lg mt-1"
      >
        <h2 className="w-[90vw] text-[1.5em] text-start font-['Lato','sans-serif'] font-bold mt-3 ml-3 ">
          {props.title}
        </h2>
        <h2 className=" ml-3 text-start text-[1.5em] font-['Lato','sans-serif'] font-normal ">{props.description}</h2>
        <h3 className="flex flex-col items-star mt-4 ml-3 font-['Lato','sans-serif'] font-normal">
          Creado hace {props.data} días
        </h3>
      </button>
      {showModal && (
        <BoardOptions title={props.title} onClose={() => setShowModal(false)} />
      )}
    </main>
  );
};

export default Board;
