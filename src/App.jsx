import { useEffect, useState } from "react";
import Target from "./component/Target.jsx";
import Sidebar from "./component/Sidebar.jsx";
import axios from 'axios'
import backG from "../backG.png";
import Light from "../light.png";
import logo from "./logo.png";
import Preview from "./component/Preview.jsx";



function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [userData,setUserData] =useState([]);
  const [Mode,setMode] =useState(false);
  const [value,setValue] =useState(1);
  const [Theme,setTheme] =useState(true);
  const [index,setIndex] =useState(1);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index+1}&limit=20`
      );
      console.log(response.data)
      setUserData(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(function(){
    getData()
  },[index])

  return (
    <div className={`h-screen w-full ${Theme?'text-white':'text-black'}`}>
      
      {/* Page Wrapper */}
      <div className="flex h-full flex-col">
      <img
        src={Theme?backG:Light}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

        {/* Navbar */}
        <div className="glass-effect h-16 rounded-b-lg flex items-center justify-center text-2xl shrink-0">
          <div className="flex  w-[20%] ">
            <div className="flex justify-center ml-4">
              <img src={logo} 
                className={`w-14 h-8 ${Theme?'fliter invert':''}`}
              />
            </div>
            <div className="text-2xl font-extrabold">Wall2Drop</div>
          </div>
          <div className="w-[60%] flex justify-center">
            <p className="px-12 opacity-60 hover:opacity-100 active:scale-95 text-lg" onClick={() => {
                                                                                        setSelectedImage(null);
                                                                                        setIndex(1);
                                                                                      }}
            >Home</p>
            <p className="px-12 opacity-60 hover:opacity-100 active:scale-95 text-lg" onClick={() => alert("Upcoming Feature! Coming Soon")}>Categories</p>
            <input
              placeholder="Search -> [Page.No]"
              type="number"
              className="text-xs border border-white/50 p-2 px-3 rounded-4xl w-full lg:w-1/2 sm:m-0 mx-5 bg-transparent focus:bg-white/50"
              value={value}
              onChange={(e) => setValue(e.target.value)} 
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.target.value > 0) {
                  setIndex(Number(e.target.value)); 
                  setValue(""); 
                }
              }}
            />
            </div>
          <div className="w-[20%] flex justify-center ">
              <div className="flex justify-center p-4 rounded-xl">
                <button className="glass-effect px-8 p-1 h-10 rounded-lg mx-1 text-lg  hover:scale-103 active:scale-97 " 
                    onClick={()=>{
                      if(Mode==false){setMode(true);}
                      else setMode(false);
                    }}
                >{Mode?"Landscape":"Portrait"}</button>
                <button className="glass-effect px-2 p-1 h-10  rounded-3xl mx-2 text-lg  hover:scale-103 active:scale-97 "
                onClick={()=>{
                      if(Theme==false){setTheme(true);}
                      else setTheme(false);
                    }}>{Theme?"🌙":"☀️"}</button>
              </div>  
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 overflow-hidden p-1 gap-2">

          {/* Sidebar */}
            <Sidebar Theme={Theme} />
          
          {/* Main */}
          
          <div className="flex flex-1 flex-col min-h-0">
              {selectedImage ? (
                <Preview
                  image={selectedImage}
                  onClose={() => setSelectedImage(null)}
                  index={index}
                />
              ) : (
                <Target
                  userData={userData}
                  loading={loading}
                  Mode={Mode}
                  index={index}
                  setIndex={setIndex}
                  setUserData={setUserData}
                  setSelectedImage={setSelectedImage}
                />
              )}
          </div>

        </div>

        {/* Footer */}
        <div className="glass-effect h-12 flex items-center justify-between text-2xl font-bold shrink-0 rounded-t-lg">
          <div className="mt-auto  px-4 py-2 font-extralight text-sm">React + tailwind 4.0</div>
          <div className="mt-auto px-4 py-2 text-sm opacity-70">© 2025 Wall2Drop</div>
          <div className="mt-auto text-sm px-4 py-2 font-light ">Aniket Dandhare</div>
        </div>

      </div>
    </div>
  );
}

export default App;
