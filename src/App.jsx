import { useEffect, useState } from "react";
import Card from "./component/card.jsx";
import axios from 'axios'
import backG from "../backG.png";
import Light from "../light.png";
import logo from "./logo.png";

function App() {
  const [userData,setUserData] =useState([]);
  const [Mode,setMode] =useState(false);
  const [Theme,setTheme] =useState(false);
  const [index,setIndex] =useState(1);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index+1}&limit=20`
      );
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
            <p className="px-20 opacity-60 hover:opacity-100 active:scale-95 text-lg">home</p>
            <p className="px-20 opacity-60 hover:opacity-100 active:scale-95 text-lg">About</p>
            <p className="px-20 opacity-60 hover:opacity-100 active:scale-95 text-lg">Categories</p>
            <p className="px-20 opacity-60 hover:opacity-100 active:scale-95 text-lg">Credits</p>
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
          <div className="glass-effect w-[20%] lg:w-[15%] p-10 rounded-lg shrink-0 ">
            <h2 className="text-3xl font-bold">Sidebar</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quisquam laborum vel vero est odit alias, temporibus reprehenderit debitis sunt dignissimos perferendis nemo adipisci voluptate et incidunt ullam, fuga hic, deleniti nam! Deserunt commodi aut tempore labore, perspiciatis eos? Harum reiciendis nesciunt laboriosam praesentium recusandae. Odit ad consequatur debitis fugiat quos incidunt aspernatur tempora, consequuntur beatae, et iure necessitatibus modi accusantium ducimus fugit at commodi ipsum facilis. Suscipit perferendis repudiandae consectetur, quam ut eveniet totam est, commodi pariatur porro, excepturi culpa autem? Sunt corrupti, sequi accusamus quam odit ducimus voluptates voluptatibus iusto quae reprehenderit tenetur numquam accusantium</p>
          </div>


          {/* Main */}
          <div className="flex flex-1 flex-col min-h-0">
            {/* Cards */}
            <div className="flex-1 overflow-auto m-2 pr-2 custom-scroll mb-1">
              {/* Cards grid ONLY */}
              <div className={`grid gap-2 ${Mode ? "grid-cols-[repeat(auto-fit,minmax(500px,1fr))]" : "grid-cols-[repeat(auto-fit,minmax(300px,1fr))]"} transition-all duration-300 ease-in-out`}>
                {loading ? (
                  <div className="col-span-full flex justify-center items-center text-xl h-200">
                        <div role="status">
                            <span className="text-xs font-bold">Loading...</span>
                            <svg
                              className="w-10 h-10 animate-spin"
                              viewBox="0 0 100 100"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="rgba(255,255,255,0.25)"   // glass color
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeDasharray="210"
                                strokeDashoffset="60"
                              />
                            </svg>
                        </div>
                  </div>
                ) : (
                  userData.map((elem) => <Card key={elem.id} elem={elem} />)
                )}
              </div>

              {/* Pagination BELOW grid */}
              <div className="flex justify-center p-4 rounded-xl">
                <button  className={`glass-effect px-8 h-10 rounded-lg mx-5 text-lg ${index === 1 ? "opacity-50 pointer-events-none" : "hover:scale-103 active:scale-97"}`}
                  onClick={()=>{
                    if(index>1)setIndex(index-1);
                    setUserData([])
                  }}
                >Prev</button>
                <p className="text-xl  font-bold">Page-{index}</p>
                <button className="glass-effect px-8 p-1 h-10 rounded-lg mx-5 text-lg  hover:scale-103 active:scale-97 hover:border-none"
                  onClick={()=>{
                      setIndex(index+1);
                      setUserData([])
                    }}
                >Next</button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="glass-effect h-12 flex items-center justify-center text-2xl font-bold shrink-0">
          Footer
        </div>

      </div>
    </div>
  );
}

export default App;
