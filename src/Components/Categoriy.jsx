import React from "react";
import info from "../Assests/pngwing.com (4) 1.png";
import left from "../Assests/image 33.png";
import wheel from "../Assests/image 31.png";
import seat from "../Assests/Group 1943.png";

function Categoriy() {
  return (
    <div className="w-screen h-full">
      <h1 className="text-center font-extrabold text-6xl mt-14">Categories</h1>
      <div className="w-full flex gap-2 mt-10 p-9 ">
        {/* letft side */}
        <div className="flex-1 w-full">
          <div className="bg-[#A09EFF] w-[700px] h-[1300px] rounded-[50px] flex flex-col items-center justify-center gap-6">
            <div className="w-full flex justify-center flex-col items-center mt-14">
              {/* <div className="w-3/4 h-[490px]  bg-white rounded-2xl ">
                <img src={info} alt="" srcset="" className="relative -top-36" />
                <p className="text-center font-bold text-2xl absolute uppercase -top-64">
                  Infotainement System
                </p>
              </div> */}
              <div className="w-full flex justify-center flex-col items-center mt-20 mb-8">
                <div className="w-[592px] h-[480px]  bg-white rounded-2xl flex flex-col items-center relative ">
                  <img
                    src={info}
                    alt=""
                    srcset=""
                    className="absolute w-[600px] h-[480px] object-cover -top-20"
                  />
                  <p className="text-center font-bold text-2xl  uppercase absolute bottom-11 ">
                    Infotainement system
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center flex-col items-center mt-10 mb-14">
              <div className="w-[592px] h-[480px]  bg-white rounded-2xl flex flex-col items-center relative ">
                <img
                  src={left}
                  alt=""
                  srcset=""
                  className="absolute w-[600px] h-[480px] object-cover -top-20"
                />
                <p className="text-center font-bold text-2xl  uppercase absolute bottom-11 ">
                  Audio system
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flex-1 w-full  ">
          <div className="flex flex-col gap-6">
            <div className="bg-[#EE5757] w-[675px] h-[620px] px-7 rounded-[60px]">
              <div className="w-[582px] h-[476px] bg-white flex flex-col items-center rounded-[50px] my-24 mx-7 relative">
                <img
                  src={wheel}
                  alt=""
                  srcset=""
                  className="absolute w-[450px] h-[450px] object-cover -top-20"
                />
                <p className="text-center font-bold text-2xl  uppercase absolute bottom-11 ">
                  Alloy wheels
                </p>
              </div>
            </div>
            <div className="bg-[#7FCBF5] w-[675px] h-[650px] px-7 rounded-[60px]">
              <div className="w-[582px] h-[476px] bg-white flex flex-col items-center rounded-[50px] my-24 mx-7 relative ">
                <img
                  src={seat}
                  alt=""
                  srcset=""
                  className="absolute w-[600px] h-[480px] object-cover -top-20"
                />
                <p className="text-center font-bold text-2xl  uppercase absolute bottom-11 ">
                  Seat covers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categoriy;