import { AiOutlineDollarCircle } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { useLoaderData, useParams } from "react-router-dom";
import { saveLocalstorage } from "../utilites/Localstorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idx = parseInt(id);
  const filterJob = jobs.find((job) => job.id === idx);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = filterJob;

  const handleApplyjob = (job) => {
    saveLocalstorage(job);
  };

  return (
    <div className="my-20 relative">
      <h1 className=" text-4xl font-bold text-center">Job Details</h1>
      <img
        className="absolute -top-20 right-0 size-32"
        src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1726253852/bg2_rtjm1j.png"
        alt=""
      />
      <img
        className="absolute -top-20 left-0 size-32"
        src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1726253846/bg1_idnbxk.png"
        alt=""
      />
      <div className="grid md:grid-cols-6 md:gap-5 gap-y-5 my-10">
        <div className="border md:col-span-4 space-y-6 rounded-lg p-5">
          <h1 className="font-semibold">
            Job Description :
            <span className="font-normal">{job_description}</span>
          </h1>
          <h1 className="font-semibold">
            Job Responsibility :
            <span className="font-normal">{job_responsibility}</span>
          </h1>
          <h1 className="font-semibold">
            educational_requirements : <br />
            <span className="font-normal">{educational_requirements}</span>
          </h1>
          <h1 className="font-semibold">
            experiences : <br />
            <span className="font-normal">{experiences}</span>
          </h1>
        </div>

        <div className="border rounded-lg bg-[#7E90FE1A] col-span-2 p-3 space-y-4 text-[18px]">
          <h1 className="text-xl font-semibold">Job Details</h1>
          <hr />
          <p className="flex items-center gap-2">
            <AiOutlineDollarCircle className="text-[#7E90FEFF]" />
            <span>Salary : {salary}</span>
          </p>
          <div className="flex items-start gap-2">
            <HiOutlineCalendarDays className="text-[#7E90FEFF] mt-1" />
            <span>Job Title : {job_title}</span>
          </div>
          <h2 className="text-xl font-semibold">Contact Information</h2>
          <hr />
          <h2 className="flex items-center gap-2">
            <IoCallOutline className="text-[#7E90FEFF]" />
            <span>Phone : {contact_information.phone}</span>
          </h2>
          <h2 className="flex items-center gap-2">
            <HiOutlineMail className="text-[#7E90FEFF]" />
            <span>Email : {contact_information.email}</span>
          </h2>
          <h2 className="flex items-start gap-2">
            <SlLocationPin className="mt-1 text-[#7E90FEFF] text-2xl" />
            <span>Address : {contact_information.address}</span>
          </h2>
          <button
            onClick={() => handleApplyjob(filterJob)}
            className="w-full text-white bg-blue-500 px-4 py-2 font-semibold rounded-md"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
