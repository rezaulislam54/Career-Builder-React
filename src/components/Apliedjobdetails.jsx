import { AiTwotoneDollarCircle } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Apliedjobdetails = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;

  return (
    <div className="border p-5 rounded-md md:flex items-center gap-6 justify-between">
      <div className="flex gap-6">
        <div className="py-10 px-8 bg-[#F4F4F4] rounded-lg flex items-center justify-center">
          <img src={logo} alt="" />
        </div>
        <div>
          <h2 className=" font-bold text-xl">{job_title}</h2>
          <p>Company : {company_name}</p>
          <div className="text-[#7E90FEFF] my-3 space-x-6">
            <button className="relative inline-flex border border-blue-600 items-center justify-start px-4 py-1 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                {remote_or_onsite}
              </span>
            </button>
            <button className="relative inline-flex border border-blue-600 items-center justify-start px-4 py-1 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                {job_type}
              </span>
            </button>
          </div>

          <div className="flex items-center gap-x-6 text-black">
            <p className="flex items-center gap-2">
              <IoLocationOutline />
              <span>{location}</span>
            </p>
            <p className="flex items-center gap-2">
              <AiTwotoneDollarCircle />
              <span>Salary : {salary}</span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <Link to={`/job/${id}`}>
          <a className="relative  items-center justify-center inline-block p-4 px-4 py-2 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
              <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
            </span>
            <span className="relative text-white">View Details</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Apliedjobdetails;
