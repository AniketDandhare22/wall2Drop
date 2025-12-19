import { useState } from "react";

function Preview({ image ,onClose,index }) {
  const [liked, setLiked] = useState(false);
  if (!image) return null;

  return (
    
    <div className="glass-effect h-full p-2 m-2 rounded-2xl">
      <div className= {`w-full h-full bg-cover rounded-2xl flex flex-col bg-center bg-no-repeat`} style={{backgroundImage: `url(${image.download_url})`}}>
          <div className="w-full p-2 justify-between flex flex-row">
            <button className="glass-effect px-4 rounded-4xl text-lg font-bold active:scale-95 hover:text-red-400 hover:border-none" onClick={() => onClose()}>X</button>
            <p className=" glass-effect px-4 rounded-xl border-none hover:scale-103">{`${image.width} X ${image.height}`}</p>
          </div>
          <div className="h-[75%]"></div>
          <div className="flex flex-col">
              <div className="border-none glass-effect w-[25%] m-2 ml-6 p-2 rounded-xl flex flex-col cursor-pointer hover:scale-97 transition-all duration-300 ease-in-out">
                <p className=" ">{`Created by - ${image.author}`}</p>
                <p className="text-xs">{`Image Index - ${ ((index-1) * 10 ) + (image.id)}`}</p>
              </div>
              <div className="flex flex-row justify-between px-4">
                <button className="glass-effect rounded-xl  w-[40%] px-9 py-1 active:scale-95 active:font-bold text-lg hover:scale-105 
                          transition-transform duration-200 "
                          onClick={() => window.open(image.download_url, "_blank")}
                          >Download</button>
                      <button
                        onClick={() => setLiked(!liked)}
                        className="
                        glass-effect 
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
    </div>
  );
}

export default Preview;
