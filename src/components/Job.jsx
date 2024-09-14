import { AiTwotoneDollarCircle } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="border p-6 rounded-md">
      <img src={logo} alt="" />
      <h2 className="mt-4 font-bold text-xl">{job_title}</h2>
      <p>Company : {company_name}</p>
      <div className="text-[#7E90FEFF] my-3">
        <button className="px-3 py-1 mr-4 rounded-md bg-white border border-blue-600">
          {remote_or_onsite}
        </button>
        <button className=" px-3 py-1 rounded-md bg-white border border-blue-600">
          {job_type}
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
      <Link to={`/job/${id}`}>
        <button className="relative  items-center justify-center inline-block mt-3 p-4 px-4 py-2 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
          <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
          <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
            <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
            <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
          </span>
          <span className="relative text-white">View Details</span>
        </button>
      </Link>
    </div>
  );
};

export default Job;
