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
      <Link to={`job/${id}`}>
        <button className="text-white bg-blue-500 px-4 py-2 font-semibold rounded-md mt-3">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Job;
