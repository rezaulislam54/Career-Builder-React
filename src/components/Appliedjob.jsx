import { useEffect, useState } from "react";
import { getejobs } from "../utilites/Localstorage";
import Apliedjobdetails from "./Apliedjobdetails";
import { FaAngleDown } from "react-icons/fa";

const Appliedjob = () => {
  const [jobs, setjobs] = useState([]);
  const [displyjob, setdisplyjob] = useState([]);

  const handlefilterjob = (filter) => {
    if (filter == "all") {
      setdisplyjob(jobs);
    } else if (filter == "remote") {
      const remotejob = jobs.filter((job) => job.remote_or_onsite === "Remote");
      setdisplyjob(remotejob);
    } else if (filter == "onsite") {
      const onsitejob = jobs.filter((job) => job.remote_or_onsite === "Onsite");
      setdisplyjob(onsitejob);
    }
  };

  useEffect(() => {
    const apliedjos = getejobs();
    setjobs(apliedjos);
    setdisplyjob(apliedjos);
  }, []);
  return (
    <div className="my-20 relative">
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
      <h2 className="text-4xl font-bold text-center">Applied Jobs</h2>

      <div className="space-y-5 mt-12">
        <div className="flex justify-end">
          <details className="dropdown">
            <summary className="btn m-1">
              Filter By
              <FaAngleDown />
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-b-lg z-[1] w-28 p-2 shadow">
              <li>
                <a onClick={() => handlefilterjob("all")}>All</a>
              </li>
              <li>
                <a onClick={() => handlefilterjob("remote")}>Remote</a>
              </li>
              <li>
                <a onClick={() => handlefilterjob("onsite")}>Onsite</a>
              </li>
            </ul>
          </details>
        </div>

        {displyjob.map((job) => (
          <Apliedjobdetails key={job.id} job={job}></Apliedjobdetails>
        ))}
      </div>
    </div>
  );
};

export default Appliedjob;
