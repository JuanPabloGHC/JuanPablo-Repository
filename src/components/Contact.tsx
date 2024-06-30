import { FaPhone, FaEnvelope, FaSearchLocation, FaLinkedin, FaGithub } from "react-icons/fa";

import JP from "../images/JP.jpeg";

const Contact = () => {

    return (

        <div className="contact-component relative rounded-2xl shadow-2xl bg-components p-8">

            {/* PHOTO */}
            <img 
                src={JP}
                alt="JP"
                className="profile-img absolute transform -translate-x-1/2 rounded-lg shadow-2xl"
            />

            {/* DATA */}
            <div className="data-card text-center px-6 py-16 flex flex-col items-center">

                {/* NAME */}
                <h1 className="font-bold text-xl mb-2 text-texts">Juan Pablo Gómez Haro Cabrera</h1>
                
                {/* CAREER */}
                <h2 className="bg-gray-200 rounded-md p-3 my-2 text-xs font-bold text-gray-700">LICENCIATURA EN INGENIERÍA EN SISTEMAS COMPUTACIONALES</h2>
                
                {/* SOCIAL MEDIA */}
                <div className="flex justify-center">
                    <a href="https://www.linkedin.com/in/juanpablog%C3%B3mezharocabrera/">
                        <FaLinkedin color="#1F363C" className="w-16 h-16 p-2 hover:p-1"/>
                    </a>
                    <a href="https://github.com/JuanPabloGHC">
                        <FaGithub color="#1F363C" className="w-16 h-16 p-2 hover:p-1"/>
                    </a>
                </div>

                {/* CONTACT */}
                <div className="table-contact rounded-md bg-subcomponents p-5 mt-10 space-y-3">

                    {/* PHONE */}
                    <div className="flex items-center space-x-3">
                        <FaPhone color="#1F363C" className="w-10 h-10 p-2"/>
                        <p className="text-texts">22-13-52-64-58</p>
                    </div>

                    <hr className="h-px bg-texts border-0 dark:bg-texts mx-3"></hr>

                    {/* EMAIL */}
                    <div className="flex items-center space-x-3">
                        <FaEnvelope color="#1F363C"  className="w-10 h-10 p-2"/>
                        <p className="text-texts">jpghc552@hotmail.com</p>
                    </div>

                    <hr className="h-px bg-texts border-0 dark:bg-texts mx-3"></hr>

                    {/* LOCATION */}
                    <div className="flex items-center space-x-3">
                        <FaSearchLocation color="#1F363C"  className="w-10 h-10 p-2"/>
                        <p className="text-texts">Puebla</p>
                    </div>

                </div>

            </div>
        </div>

    );

}

export default Contact;