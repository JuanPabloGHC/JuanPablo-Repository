

export interface IJobs {
    title: string,
    company: string,
    type: string,
    dateI: Date,
    dateF: Date,
    current: boolean,
    place?: string,
    description?: string
}

export const jobs: IJobs[] = [

    {
        title: 'ALDS & Apps Trainee',
        company: 'Schaeffler',
        type: 'Jornada completa',
        dateI: new Date(2024, 4, 13),
        dateF: new Date(),
        current: true,
        place: 'Huejotzingo, Puebla',
        description: 'Trainee para el desarrollo de front-end y back-end'
    },
    {
        title: 'Desarrollador de software',
        company: 'FISAIR',
        type: 'Freelance',
        dateI: new Date(2023, 7, 15),
        dateF: new Date(2024, 3, 16),
        current: false,
        description: 'Desarrollo de una aplicación móvil para la empresa Fisair como freelancer'
    },
]