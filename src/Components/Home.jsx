import React from "react";
import Carimage from "../Assests/Group 1941.jpg";
export default function Home() {


  const form =()=>{
    window.location.href="#form"
  }

  const product = ()=>{
    window.location.href="#product"
  }

  return (
    <div className="w-screen h-full" id="home">
      <div className="h-screen w-full relative">
        <img
          src={Carimage}
          alt=""
          className="absolute w-screen h-full  object-cover  "
        />
        <div className=" text-white rounded-lg  mx-12 relative top-5  h-16 px-4 flex items-center justify-between ">
          {/* logo */}
          <img
            src="https://s3-alpha-sig.figma.com/img/f22f/bd9f/10507b295a63295a49f6c6446b5149e7?Expires=1700438400&Signature=ABK11kzC8wF28xTrD9osrezqiEnzbqRjHjOoJI40gnDHzg3uyfRQXC1SOsF-uA0kspqQQ01soJFOVKRQwYvhu98FDrmIg0gFN6cjFKx3jg8BqNIahYsRGL0hIF5qy7s5rLtqXmQImUsrQDZyA2YcsTCgBne6632OxcI0R4l1YSFuHH9sx2N-WzsPjmtDMOYptX9WY4utpdVg739aVGfennZhgVYTKSwmnYnmvsv9MFrxYcZurqeNDslQqTpdp~EpZKI51yj89LRqdYDqvY-vqgtHUG46x1wxl~fxVPNPn8B-RjELEeEKjLXhJuAeliH8eLgSOHId-ZuvtzLVkQpkuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            className="w-44 h-11 object-cover rounded-lg"
          />
          {/* div NAv LInks */}
          <div className="flex w-full items-center gap-10 justify-end px-4">
            <ul className="flex justify-between gap-10">
              <li>
                <a href="#Home"> Home</a>
               </li>
               <li>
                <a href="#product"> product</a>
               </li>
               <li>
                <a href="#aboutus"> About us</a>
               </li>
             
            </ul>
            <button className="bg-[#FFA52F] text-black font-bold py-2 px-4 rounded-lg text-[12px]" onClick={form}>
              Contact Us
            </button>
          </div>
        </div>
        {/* eliation text */}
        <div className="text-white absolute bottom-14 left-32 ">
          <div className="flex flex-col items-start">
          <h1 className="text-[80px] text-start font-extrabold text-slate-300  leading-[1.1]">
            Elevate your ride with <br />
            premium car Accessories
          </h1>
          <div>
          <button className="bg-[#FFA52F] text-black font-bold py-2 rounded-lg text-[14px] mt-10 px-8" onClick={product}>
            View Products
          </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
