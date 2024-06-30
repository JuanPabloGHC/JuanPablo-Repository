import { useState } from 'react';
import { BiSolidUser } from 'react-icons/bi';
import { PiCertificateFill, PiDevicesFill } from 'react-icons/pi';
import { MdWork  } from 'react-icons/md';

interface Props {
    setData: React.Dispatch<React.SetStateAction<string>>
}

const Portfolio = ( { setData }: Props ) => {

    const [bgColorAbout, setBgColorAbout] = useState<string>("bg-portfolioS");
    const [bgColorEducation, setBgColorEducation] = useState<string>("bg-subcomponents");
    const [bgColorWorks, setBgColorWorks] = useState<string>("bg-subcomponents");
    const [bgColorExperience, setBgColorExperience] = useState<string>("bg-subcomponents");



    const ChangeColor = (buttonId: string) => {
        setBgColorAbout("bg-subcomponents")
        setBgColorEducation("bg-subcomponents")
        setBgColorWorks("bg-subcomponents")
        setBgColorExperience("bg-subcomponents")

        switch(buttonId) {
            case 'a':
                setBgColorAbout("bg-portfolioS")
                break;
            case 'e':
                setBgColorEducation("bg-portfolioS")
                break;
            case 'w':
                setBgColorWorks("bg-portfolioS")
                break;
            case 'x':
                setBgColorExperience("bg-portfolioS")
                break;
        }

        setData(buttonId)
    }

    return (
        
        <div className="portfolio-component rounded-lg shadow-lg bg-components">
        
            {/* ABOUT */}
            <button id='a' 
            className={`flex flex-col items-center rounded-lg ${bgColorAbout} m-2 p-2 space-y-1 w-24 hover:text-sm`}
            onClick={() => ChangeColor('a')}>
                <BiSolidUser className='w-8 h-8'/>
                <h2 className='font-bold' >About</h2>
            </button>

            {/* EDUCATION */}
            <button id='e' 
            className={`flex flex-col items-center rounded-lg ${bgColorEducation} m-2 p-2 space-y-1 w-24 hover:text-sm`}
            onClick={() => ChangeColor('e')}>
                <PiCertificateFill className='w-8 h-8'/>
                <h2 className='font-bold' >Certificates</h2>
            </button>

            {/* WORKS */}
            <button id='w' 
            className={`flex flex-col items-center rounded-lg ${bgColorWorks} m-2 p-2 space-y-1 w-24 hover:text-sm`}
            onClick={() => ChangeColor('w')}>
                <PiDevicesFill className='w-8 h-8'/>
                <h2 className='font-bold' >Projects</h2>
            </button>

            {/* CONTACT */}
            <button id='c' 
            className={`flex flex-col items-center rounded-lg ${bgColorExperience} m-2 p-2 space-y-1 w-24 hover:text-sm`}
            onClick={() => ChangeColor('x')}>
                <MdWork className='w-8 h-8'/>
                <h2 className='font-bold' >Experience</h2>
            </button>

        </div>

    );

}

export default Portfolio;