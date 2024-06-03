"use client";
import Styles from "@/components/Card.module.css"; // Corrected file naming
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

import Image from "next/image";

function Card({ image, title }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });

  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <Image src={image} alt="trainer" width={300} height={200} />{" "}
      {/* Added width and height */}
      <h2>{title}</h2>
      {/* <p>{paragraph}</p> */}
      <div className={Styles.btnn}></div>
    </animated.div>
  );
}

export default Card;
