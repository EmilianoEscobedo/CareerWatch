import React from 'react'
import { ThreePoints } from '../../assets/icons/Icons'

export const Tarjetas = () => {
  return (
    <main className="select-none">
       <div className="bg-[#FFFFF] w-[90vw] h-[20.5vh] text-black flex flex-col items-star rounded-lg border-2 border-#D4D4D8 shadow-lg mt-1 cursor-pointer">
         <div className="flex flex-row justify-between">
           <h2 className="w-[90%] text-[1.5em] text-start font-['Lato','sans-serif'] font-bold mt-3 ml-3 ">
             Globant
           </h2>
           <button className="place-self-center mr-[4vw] lg:mr-[1.5vw]">
             <ThreePoints CN={"h-[0.7vh]"} />
           </button>
         </div>
         <h2 className=" ml-3 text-start text-[1.5em] font-['Lato','sans-serif'] font-normal ">
           QA Tester
         </h2>
         <h3 className="flex flex-col items-star mt-4 ml-3 font-['Lato','sans-serif'] font-normal">
           Creado hace 3 días
         </h3>
       </div>
     </main>
  )
}
