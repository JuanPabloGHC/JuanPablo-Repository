import { useState } from 'react';
import { BiSolidUser } from 'react-icons/bi';
import { PiCertificateFill, PiDevicesFill } from 'react-icons/pi';
import { MdWork  } from 'react-icons/md';

interface Props {
    setData: React.Dispatch<React.SetStateAction<string>>
}

const Portfolio = ( { setData }: Props ) => {

    const [bgColorAbout, setBgColorAbout] = useState<string>("bg-portfolioS");
    const [bgColorCertificates, setBgColorCertificates] = useState<string>("bg-subcomponents");
    const [bgColorProjects, setBgColorProjects] = useState<string>("bg-subcomponents");
    const [bgColorExperience, setBgColorExperience] = useState<string>("bg-subcomponents");



    const ChangeColor = (buttonId: string) => {
        setBgColorAbout("bg-subcomponents")
        setBgColorCertificates("bg-subcomponents")
        setBgColorProjects("bg-subcomponents")
        setBgColorExperience("bg-subcomponents")

        switch(buttonId) {
            case 'a':
                setBgColorAbout("bg-portfolioS")
                break;
            case 'c':
                setBgColorCertificates("bg-portfolioS")
                break;
            case 'p':
                setBgColorProjects("bg-portfolioS")
                break;
            case 'e':
                setBgColorExperience("bg-portfolioS")
                break;
        }

        setData(buttonId)
    }

    return (
        
        <menu className="portfolio-component rounded-lg shadow-lg bg-components">
        
            {/* ABOUT */}
            <button id='a' 
            className={`flex flex-col items-center rounded-lg ${bgColorAbout} m-2 p-2 space-y-1 w-24 hover:text-sm`}
            onClick={() => ChangeColor('a')}>
                <BiSolidUser className='w-8 h-8'/>
                <h2 className='font-bold' >About</h2>
            </button>

            {/* CERTIFICATES */}
            <button id='e' 
            className={`flex flex-col items-center rounded-lg ${bgColorCertificates} m-2 p-2 space-y-1 w-24 hover:text-sm`}
            onClick={() => ChangeColor('c')}>
                <PiCertificateFill className='w-8 h-8'/>
                <h2 className='font-bold' >Certificates</h2>
            </button>

            {/* PROJECTS */}
            <button id='w' 
            className={`flex flex-col items-center rounded-lg ${bgColorProjects} m-2 p-2 space-y-1 w-24 hover:text-sm`}
            onClick={() => ChangeColor('p')}>
                <PiDevicesFill className='w-8 h-8'/>
                <h2 className='font-bold' >Projects</h2>
            </button>

            {/* CONTACT */}
            <button id='c' 
            className={`flex flex-col items-center rounded-lg ${bgColorExperience} m-2 p-2 space-y-1 w-24 hover:text-sm`}
            onClick={() => ChangeColor('e')}>
                <MdWork className='w-8 h-8'/>
                <h2 className='font-bold' >Experience</h2>
            </button>

        </menu>

    );

}

export default Portfolio;