import Unity from '../images/certificates/UnityCertificate.png';
import HackStem from '../images/certificates/HackStemCertificate.png';
import Codicon from '../images/certificates/CodiconCertificate.png';

export interface ICertificates {
    title: string,
    date: string,
    organization: string,
    description: string,
    image: string
}

export const certificates: ICertificates[] = [

    {
        title: 'Introducción a Unity para videojuegos 2D',
        date: '2020-2022',
        organization: 'Domestika',
        description: 'Curso online del desarrollo de videojuegos en Unity y C#',
        image: Unity
    },
    {
        title: 'Hackathon HackStem',
        date: '2023',
        organization: 'Lexpin',
        description: 'Participación en el CODICÓN 2024 de parte de Lexpin para desarrollar un software durante 48 horas con la temática de"transmisión"',
        image: HackStem
    },
    {
        title: 'CODICÓN 2024',
        date: '2024',
        organization: 'SIEMENS Gamesa, SPANISH STARTUPS, SESAME WORKSHOP INDIA',
        description: '4ta edición del HACKSTEM en el desarrollo de un proyecto con prototipo teniendo tiempo límite de 2 días',
        image: Codicon
    },

]