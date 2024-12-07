import MyChart from "./components/Mychart";
import MyRadarChart from "./components/myRedar";

const Report = () => {
  return (
    <>
      <section className="px-4 md:px-8 rounded-lg mt-14 mx-4 md:mx-6 my-4 ">
      <h1 className="text-blue-900 text-3xl px-8 py-4">Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-4 lg:grid-rows-3 gap-2">
          {/* div 1 */}
          <div className="h-40 bg-white shadow-lg rounded-lg border p-3">
            <h3 className="text-blue-600 font-bold mt-2 ml-2">
              <span className="text-gray-500 font-light">Today</span>
            </h3>
            <div className="flex justify-center items-center py-4 mt-3">
              <div className="bg-gray-200 rounded-full w-14 h-14 mr-2"></div>
              <div>
                <h1 className="text-blue-600 font-bold text-2xl">145</h1>
                <h5 className="text-gray-400">
                  <span className="font-bold text-black">12%</span> increase
                </h5>
              </div>
            </div>
          </div>
          {/* div 2 */}
          <div className="h-40 bg-white shadow-lg rounded-lg border p-3">
            <h3 className="text-blue-600 font-bold mt-2 ml-2">
              <span className="text-gray-500 font-light">Last Week</span>
            </h3>
            <div className="flex justify-center items-center py-4 mt-3">
              <div className="bg-gray-200 rounded-full w-14 h-14 mr-2"></div>
              <div>
                <h1 className="text-blue-600 font-bold text-2xl">145</h1>
                <h5 className="text-gray-400">
                  <span className="font-bold text-black">12%</span> increase
                </h5>
              </div>
            </div>
          </div>
          {/* div3 */}
          <div className="h-40 bg-white shadow-lg rounded-lg border p-3">
            <h3 className="text-blue-600 font-bold mt-2 ml-2">
              reviews{" "}
              <span className="text-gray-500 font-light">This Month</span>
            </h3>
            <div className="flex justify-center items-center py-4 mt-3">
              <div className="bg-gray-200 rounded-full w-14 h-14 mr-2"></div>
              <div>
                <h1 className="text-blue-600 font-bold text-2xl">145</h1>
                <h5 className="text-gray-400">
                  <span className="font-bold text-black">12%</span> increase
                </h5>
              </div>
            </div>
          </div>
          {/* div 4 Redar container */}
          <div className="row-span-2 h-40 lg:h-auto bg-white shadow-lg rounded-lg border p-3">
            <h3 className="text-blue-600 font-bold mt-2 ml-2">
              customers
              <span className="text-gray-500 font-light">This Month</span>
            </h3>
            <div className="h-full">
              <MyRadarChart />
            </div>
          </div>
          {/* report chart container */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 lg:row-span-2 bg-white rounded-lg shadow-lg py-3  px-3  overflow-hidden">
            <h4 className="text-blue-600 font-bold mt-2 ml-2 mb-3">
              Report <span className="text-gray-500 font-light">Today</span>
            </h4>
            <MyChart />
          </div>
        </div>
      </section>
    </>
  );
};

export default Report;

