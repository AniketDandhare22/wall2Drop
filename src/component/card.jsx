import { useState } from "react";

function Card({ elem ,onPreview }){
  const [liked, setLiked] = useState(false);

  return (
    <>
        <div className="group glass-effect w-full h-100 overflow-hidden rounded-2xl p-2 hover:p-1 hover:scale-101 transition-transform duration-300 ease-in-out m-1 ">
            <div className={`cover w-full h-full opacity-83 hover:opacity-100  rounded-2xl  justify-center transition-transform duration-300 ease-in-out  flex flex-col bg-cover bg-center bg-no-repeat`} style={{
              backgroundImage: `url(${elem.download_url})`,
            }}
              onClick={onPreview}
            >
                <div className=" h-[75%]"></div>
                <div className="mx-5 text-gray-300 mb-2 text-xs group-hover:font-bold  ">{elem.author}</div>
                <div className="flex flex-row w-full justify-between px-4">
                  <button className="glass-effect rounded-xl  text-white font-light px-9 py-1 active:scale-95 active:font-bold text-lg hover:scale-105 
                      transition-transform duration-200 "
                      onClick={() => window.open(elem.download_url, "_blank")}
                      >Download</button>
                  <button
                    onClick={() => setLiked(!liked)}
                    className="
                      glass-effect text-white 
                      w-9 h-9 rounded-3xl 
                      flex justify-center items-center
                      transition-transform duration-200
                      hover:scale-110 active:scale-90
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      className={`
                        transition-colors duration-300
                        ${liked ? "fill-red-400" : "fill-none stroke-white"}
                      `}
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01z" />
                    </svg>
                  </button>
                </div>
            </div>

        </div>
    </>
  );
}

export default Card;


          // absolute inset-0
          // bg-gradient-to-r
          // from-[rgba(255,99,8,0.35)]
          // via-[rgba(189,201,230,0.35)]
          // to-[rgba(151,196,255,0.35)]
          // [mask-image:radial-gradient(ellipse_at_top,black_40%,transparent_75%)]
          // [-webkit-mask-image:radial-gradient(ellipse_at_top,black_40%,transparent_75%)]