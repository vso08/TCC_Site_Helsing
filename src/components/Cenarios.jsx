import { useState, useEffect, useRef } from "react";
import img1 from "../assets/m1.jpeg";
import img2 from "../assets/m2.jpeg";
import img3 from "../assets/m3.jpeg";
import Placa from "../assets/Placa.png";
import "../App.css";
import { motion } from "framer-motion";
import img4 from "../assets/caverrna.png"


const images = [img1, img2, img3, img4];

function Cenario() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <div className="bg-zinc-950" id="cenarios">
      <div className="MainTxt flex justify-between container mx-auto p-5">
        <h1 className="RTDyans text-white text-5xl md:text-6xl self-center py-6 rounded-md ">
          <span className="C text-8xl">C</span>enários
        </h1>
        <img src={Placa} className="w-24 rounded-md "></img>
      </div>
      <div className="page-container overflow-hidden bg-black">
        <motion.div
          ref={carousel}
          className="carousel cursor-grab overflow-hidden max-w-full"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="inner flex"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {images.map((image) => (
              <motion.div
                className="item px-2 min-w-[70%] md:min-w-[50%] lg:min-w-[33%] xl:min-w-[25%]"
                key={image}
              >
                <img
                  src={image}
                  alt="cenário"
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Cenario;
