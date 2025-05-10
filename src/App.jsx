import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
  const [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      transformOrigin: "50% 50%",
      ease: "power4.easeInOut",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      delay: -1.8,
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });
  return (
    <>
      <div className="svg flex items-center justify-between fixed top-0 left-0 z-50 w-full h-screen  bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="w-full main">
          <div className="h-screen landing w-full bg-black overflow-hidden ">
            <div className="navbar w-full absolute z-10 top-0 left-0 py-5 px-10 ">
              <div className="logo flex gap-2 items-center">
                <div className="lines flex flex-col gap-1">
                  <div className="line w-10 h-1 bg-white"></div>
                  <div className="line w-7 h-1 bg-white"></div>
                  <div className="line w-5 h-1 bg-white"></div>
                </div>
                <h3 className="text-3xl text-white -mt-1 leading-none">Rockstar</h3>
              </div>
            </div>
            <div className="imagesDiv relative h-screen w-full overflow-hidden">
              <img
                src="./sky.png"
                alt=""
                className="w-full left-0 top-0 absolute h-full object-cover "
              />
              <img
                src="./bg.png"
                alt=""
                className=" left-0 top-0 absolute w-full h-full object-cover "
              />
              <img
                src="./girlbg.png"
                alt=""
                className="w-full h-full left-1/2 -bottom-[25%] scale-[1.4] -translate-x-1/2 absolute object-contain "
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
