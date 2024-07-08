import { FaRegUser, FaLaptopCode } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';


const About = () => {


    return (
        <section className="p-2 flex flex-col justify-center">

            {/* TITLE */}
            <header className='flex items-center'>
                <h1 className='font-bold text-3xl'>ABOUT</h1>
                <hr className="hr-element h-1 bg-texts border-0 dark:bg-texts ml-10 w-full"></hr>
            </header>

            {/* ME */}
            <header className='flex items-center mt-2'>
                <FaRegUser className='mx-2 w-4 h-4' color='#1F363C'/>
                <h1 className='font-bold text-2xl'>ME</h1>
            </header>
            <p className='p-4 font-serif mr-auto text-element'>
                Apasionado sobre el desarrollo de videojuegos, front-end y back-end y fascinado por la lógica que maneja la creación de experiencias.
                Me caracterizan la responsabilidad, orden y compromiso. 
                <br/>Soy una persona comprometida y disciplinada en mi trabajo. 
                Mi habilidad de Adaptabilidad y una efectiva colaboración remarca mi habilidad para superar desafíos y lograr las metas efectiva y eficientemente.
            </p>

            {/* Skills */}
            <header className='flex items-center'>
                <FaLaptopCode className='mx-2 w-6 h-6' color='#1F363C'/>
                <h1 className='font-bold text-2xl'>SKILLS</h1>
            </header>
            <ul className='list-disc py-4 px-8 font-serif mr-auto text-element'>
                <li>C, C++, C#</li>
                <li>Python</li>
                <li>TypeScript</li>
                <li>React, Angular</li>
                <li>Django, Flask</li>
                <li>Bases de datos relacionales y no relacionales</li>
                <li>Postgres, MySQL, SQLite, MongoDB</li>
                <li>Estructuras de datos</li>
                <li>GIT</li>
                <li>POO</li>
            </ul>

            {/* APTITUDES */}
            <header className='flex items-center'>
                <GiSkills className='mx-2 w-6 h-6' color='#1F363C'/>
                <h1 className='font-bold text-2xl'>APTITUDES</h1>
            </header>
            <ul className='list-disc py-4 px-8 font-serif mr-auto text-element'>
                <li>Trabajo en equipo</li>
                <li>Responsabilidad</li>
                <li>Solución de problemas</li>
                <li>Habilidades de comunicación</li>
                <li>Adaptabilidad</li>
                <li>Liderazgo</li>
                <li>Autodidacta</li>
                <li>Gestión de tiempo</li>
            </ul>
            
        </section>
    );

}

export default About;