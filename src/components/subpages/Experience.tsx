import { jobs } from "../../data/jobs";
import { useTime } from "../../hooks/useTime";

import { MdDateRange } from "react-icons/md";
import { FaWarehouse } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const Experience = () => {

    const {
        calculateTime
    } = useTime();

    return (

        <section className="p-2 flex flex-col justify-center">

            {/* TITLE */}
            <header className='flex items-center'>
                <h1 className='font-bold text-3xl'>EXPERIENCE</h1>
                <hr className="hr-element h-1 bg-texts border-0 dark:bg-texts ml-10 w-full"></hr>
            </header>

            {/* CONTENT */}
            <div className="h-full w-full flex flex-col items-center justify-center gap-3 mt-3">
                
                {jobs.map((job) => (
                    <section className="flex flex-col shadow-lg shadow-subTitles rounded-lg p-3 bg-texts w-11/12 gap-1">
                        {/* JOB */}
                        <h2 className="text-xl text-subcomponents">{job.title}</h2>
                        {/* COMPANY */}
                        <h3 className="text-xl text-subcomponents flex gap-1 items-center">
                            <FaWarehouse size={15}/>
                            {job.company}
                        </h3>
                        {/* DATES */}
                        <p className="text-subcomponents flex gap-1 items-center">
                            <MdDateRange size={20}/>
                            {job.dateI.toDateString()} - {job.current ? "Present" : job.dateF.toDateString()} ({calculateTime(job.dateI, job.dateF)})
                        </p>
                        {/* LOCATION */}
                        {job.place ? 
                            <p className="text-subcomponents flex gap-1 items-center">
                                <CiLocationOn size={20} />
                                {job.place}
                            </p>                            
                            :
                            null
                        }
                        {job.description ? 
                            <>
                                <br/>
                                <p className="text-subcomponents">{job.description}</p>
                            </>
                            :
                            null
                        }
                    </section>

                ))}
                
                {/* <section className="shadow-lg shadow-subTitles rounded-lg p-3 bg-card">
                    <h2 className="text-2xl my-3 text-subTitles">{certificates[certificateIndex].title}</h2>

                    <img 
                        className="sm:w-10/12 xl:w-3/4 mx-auto shadow-lg"
                        alt="certificate"
                        src={certificates[certificateIndex].image}
                    />

                    <p>
                        {certificates[certificateIndex].date}
                        
                        <br/>

                        {certificates[certificateIndex].description}
                    </p>

                </section> */}
                
            </div>

        </section>

    );
}

export default Experience;