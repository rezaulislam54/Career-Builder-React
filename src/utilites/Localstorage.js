import toast from "react-hot-toast";

const getejobs = ()=>{
    const storejob = localStorage.getItem('apliedjob');
    if(storejob){
        return JSON.parse(storejob);
    }
    return [];
}


const saveLocalstorage = filter =>{
    const aplied = getejobs();
    const filterjob = aplied.find(job => job.id === filter.id );
    if(filterjob){
       return toast.error('Already job Aplied');
    }
    else{
        aplied.push(filter);
        localStorage.setItem('apliedjob', JSON.stringify(aplied));
        return toast.success('Job Aplied Successfuly');
    }
}
export {getejobs, saveLocalstorage};