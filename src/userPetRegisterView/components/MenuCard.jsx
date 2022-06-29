import Dropdown from "./Dropdown";

export default function Card({ title, color, src2 }) {
  return (
    <article
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 10px 30px" }}
      className={`flex flex-col p-6 text-black-800 bg-gray-200 rounded-lg justify-evenly justify-items-stretch ${color} sm:w-1/2 md:w-full lg:w-full`}
    >
      <article className="bg-emerald-300 rounded-3xl flex justify-center justify-items-stretch space-x-28 w-full p-0">
        <h1 className="p-4 text-3xl my-4 font-medium text-center truncate ">
          {title}
        </h1>
      </article>
      <article className="flex flex-col md:flex-row justify-around pt-4">
        <article className=" bg-gray-300 rounded-2xl flex justify-center w-full p-4">
          <form>
            <label className="flex justify-center w-full md:px-36 lg:px-64 py-2 text-sm bg-emerald-300 leading-tight text-gray-700 border rounded-3xl shadow appearance-none focus:outline-none focus:shadow-outline">
              Submit pet information
            </label>
            <div className="mb-4 md:mr-2 md:mb-0 pt-4">
              <input
                className="w-full px-3 py-2 text-sm bg-white leading-tight text-gray-700 border rounded-3xl shadow appearance-none focus:outline-none focus:shadow-outline"
                id="registerFirstName"
                type="text"
                placeholder="Pet Name"
              />
            </div>
            <div className="mb-4 md:mr-2 md:mb-0 md:py-4 flex flex-row rounded-3xl">
              <input
                className="justify-between w-full px-3 py-2 text-sm bg-white leading-tight text-gray-700 border rounded-3xl rounded-r-none shadow appearance-none focus:outline-none focus:shadow-outline"
                id="registerLastName"
                type="text"
                placeholder="Color"
              />
              <Dropdown />
            </div>
            <div className="mb-4 md:mr-2 md:mb-0 md:pb-4">
              <input
                className="w-full px-3 py-2 text-sm bg-white leading-tight text-gray-700 border rounded-3xl shadow appearance-none focus:outline-none focus:shadow-outline"
                id="registerEmail"
                type="email"
                placeholder="Age"
              />
            </div>
            <div className="mb-4 md:mr-2 md:mb-0 md:pb-4">
              <input
                className="w-full px-3 py-2 text-sm bg-white leading-tight text-gray-700 border rounded-3xl shadow appearance-none focus:outline-none focus:shadow-outline"
                id="registerEmail"
                type="email"
                placeholder="Raze"
              />
            </div>
            <div className="mb-4 md:mr-2 md:mb-0 md:pb-4">
              <input
                className="w-full px-3 py-2 text-sm bg-white leading-tight text-gray-700 border rounded-3xl shadow appearance-none focus:outline-none focus:shadow-outline"
                id="registerEmail"
                type="email"
                placeholder="Species"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className=" w-16 p-2 bg-green-300 rounded-3xl flex justify-items-end space-x-24"
              >
                <div className="flex w-full justify-center items-center">
                  <img src={src2} alt="back" className="justify-items-end" />
                </div>
              </button>
            </div>
          </form>
        </article>
      </article>
    </article>
  );
}
