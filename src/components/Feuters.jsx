import { useEffect, useState } from "react";
import Job from "./job";


const Feuters = () => {
    const [jobs, setjobs] = useState([]);
    const [joblength, setjoblength] = useState(4);
    console.log(jobs);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setjobs(data))
    },[])
    return (
      <div className="my-5">
        <div className="text-center">
          <h2 className="text-5xl pb-4 font-extrabold">Job Category List</h2>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
          {jobs.slice(0, joblength).map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setjoblength(jobs.length)}
            className={`text-white bg-blue-500 px-4 py-2 font-semibold rounded-md ${joblength === jobs.length &&'hidden'}`}
          >
            Show All Jobs
          </button>
        </div>
      </div>
    );
};

export default Feuters;