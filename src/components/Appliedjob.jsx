import { useEffect, useState } from "react";
import { getejobs } from "../utilites/Localstorage";
import Apliedjobdetails from "./Apliedjobdetails";

const Appliedjob = () => {
  const [jobs, setjos] = useState([]);

  useEffect(() => {
    const apliedjos = getejobs();
    setjos(apliedjos);
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
        {jobs.map((job) => (
          <Apliedjobdetails key={job.id} job={job}></Apliedjobdetails>
        ))}
      </div>
    </div>
  );
};

export default Appliedjob;
