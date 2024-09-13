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
    <div className="border p-4 rounded-md md:flex items-center gap-6">
      <div className="py-10 px-8 bg-[#F4F4F4] rounded-lg flex items-center justify-center">
        <img src={logo} alt="" />
      </div>
      <div>
        <h2 className=" font-bold text-xl">{job_title}</h2>
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
      </div>
      <Link to={`/job/${id}`} className="ml-36">
        <button className="text-white bg-blue-500 px-4 py-2 font-semibold rounded-md mt-3">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Apliedjobdetails;
