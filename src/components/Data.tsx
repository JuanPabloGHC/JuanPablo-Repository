import About from './subpages/About';
import Certificates from './subpages/Certificates';
import Projects from './subpages/Projects';
import Experience from './subpages/Experience';


interface Props{
    data: string
}

const Data = ( { data }: Props) => {

    return (

        <div className='data-component rounded-lg shadow-lg bg-data p-6 mt-10 mb-20 h-full'>
            {
                {
                    'a': <About />,
                    'c': <Certificates />,
                    'p': <Projects />,
                    'e': <Experience />
                }[data]
            }
        </div>

    );

}

export default Data;