import React, { useEffect } from "react";
import { Hearts } from "react-loader-spinner";
import Typed from "typed.js";
import "../styles/components/_loader.scss";

const Loader = ({ isExiting }) => {

  useEffect(() => {
      const typed = new Typed(".multiple-text", {
        strings: [
          "...",
        ],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
      });
      return () => typed.destroy();
    }, []);

  return (
    
    <div className={`loader-container ${isExiting ? "fade-out" : ""}`}>
      <Hearts
        height="150"
        width="150"
        color="#FBCAEF"
        ariaLabel="hearts-loading"
        wrapperStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        visible={true}
      />
      <br/>
      <h1>
          <p>Loading<span className="multiple-text"></span></p>
      </h1>
    </div>
    
  );
};

export default Loader;
