import { useState } from "react";

import { certificates } from "../../data/certificates";

const Certificates = () => {

    const [certificateIndex, setCetificateIndex] = useState(0);

    return (

        <section className="p-2 flex flex-col justify-center">

            {/* TITLE */}
            <header className='flex items-center'>
                <h1 className='font-bold text-3xl'>CERTIFICATES</h1>
                <hr className="hr-element h-1 bg-texts border-0 dark:bg-texts ml-10 w-full"></hr>
            </header>

            {/* CONTENT */}
            <div className="h-full w-full flex flex-col items-center justify-center text-center space-y-10">
                
                <section className="shadow-lg shadow-subTitles rounded-lg p-3 bg-card">
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

                </section>

                <div className="flex w-full justify-center gap-5 items-center">

                    {/* BUTTONS */}
                    {certificates.map((_, index) => (
                        <button 
                            onClick={() => setCetificateIndex(index)}
                            className={`${certificateIndex == index ?"bg-buttonColorS" : "bg-buttonColor"} rounded-full p-2 hover:bg-buttonColorS`}>
                                
                        </button>
                    ))}

                </div>
                
            </div>

        </section>

    );

}

export default Certificates;