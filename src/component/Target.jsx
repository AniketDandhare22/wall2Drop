import Card from "./card.jsx";

function Target({
  userData,
  loading,
  Mode,
  index,
  setIndex,
  setUserData,
  setSelectedImage
}) {
  return (
      <div className="flex-1 overflow-auto m-2 pr-2 custom-scroll mb-1">

        {/* Cards Grid */}
        <div
          className={`grid gap-2 ${
            Mode
              ? "grid-cols-[repeat(auto-fit,minmax(500px,1fr))]"
              : "grid-cols-[repeat(auto-fit,minmax(300px,1fr))]"
          } transition-all duration-300 ease-in-out`}
        >
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
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray="210"
                    strokeDashoffset="60"
                  />
                </svg>
              </div>
            </div>
          ) : (
            userData.map((elem) => (
              <Card key={elem.id} elem={elem} 
                onPreview={() => setSelectedImage(elem)}/>
            ))
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center p-4 rounded-xl">
          <button
            className={`glass-effect px-8 h-10 rounded-lg mx-5 text-lg ${
              index === 1
                ? "opacity-50 pointer-events-none"
                : "hover:scale-103 active:scale-97"
            }`}
            onClick={() => {
              if (index > 1) setIndex(index - 1);
              setUserData([]);
            }}
          >
            Prev
          </button>

          <p className="text-xl font-bold">Page-{index}</p>

          <button
            className="glass-effect px-8 h-10 rounded-lg mx-5 text-lg hover:scale-103 active:scale-97"
            onClick={() => {
              setIndex(index + 1);
              setUserData([]);
            }}
          >
            Next
          </button>
        </div>
      </div>
  );
}

export default Target;
