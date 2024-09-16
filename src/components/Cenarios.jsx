import { useState, useEffect, useRef} from "react";
import img1 from "../assets/m1.jpeg";
import img2 from "../assets/m2.jpeg";
import img3 from "../assets/m3.jpeg";
import chapeu from "../assets/chapeu.png";
import "../App.css";
import { motion } from 'framer-motion'


 const images = [img1, img2, img3]


 function Cenario() {

  const carousel = useRef();
  const [width, setWidth] = useState (0)

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  return (
    <div className=" bg-zinc-900">
      <div className="menuBanner">
        <div className="MainTxt grid grid-cols-2 container mx-auto">
          <h1 className="text-white RTDyans text-5xl font-extrabold md:self-center">
            <span className="C text-8xl bg-black opacity-80 rounded-md">C</span>enários
          </h1>
          <div className="flex justify-end invisible md:visible">
            <img src={chapeu} className="py-5 w-20 items-end"></img>
          </div>
        </div>
      </div>
      <div className="page-container">
        <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
          <motion.div 
            className="inner"
            drag="x"
            dragConstraints = {{ right: 0, left: -width}}
            initial={{ x: 100}}
            animate= {{ x: 0}}
            transition={{duration: 0.8 }}
          >
            {images.map(image => (
              <motion.div className="item" key={image}>
                  <img src={image} alt="alt text"></img>
              </motion.div>
            ))}
            </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Cenario;
