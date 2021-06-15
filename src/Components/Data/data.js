import {SiBootstrap, SiDjango, SiPython} from 'react-icons/si'
import { Icon, InlineIcon } from '@iconify/react';
import fastapiIcon from '@iconify-icons/simple-icons/fastapi';



const FrontEndIcons ={
    color:"White",
    fontSize:42,
}
export const Data = [
    {
        title:"Password-Generator",
        description:` The project generates a 128-Bit Password which can be used for secure-applications. The password generator has an optional feature to generate 256 and 512 bit passwords as well. The feature will be integrated in the future by changing the funcitonality in the Backend. The Password Generated through the application was tested with multiple password-cracking applications such as but not limited to Kaspersky, DashLane and University of Texas' password cracker. All of them would reported that it would take 10 Trillion+ Years to crack, virtually unhackable. The Project was developed as a part of our annual computer science project for our Secondary school. The backend and a significant portion of the program logic were my primary contribution. A part of the UI/UX development was also under my purview.`,
        stack: [<SiDjango style = {FrontEndIcons}/>, <SiBootstrap style = {FrontEndIcons}/>, <SiPython style = {FrontEndIcons}/> ],
        source: 'https://github.com/AbhijithGanesh/Password-Generator-Django',
        web: 'https://team-unhackables.herokuapp.com/',
        id: 0
    },
    {
        title:"Car Data Analyzer",
        description:'The car data analyzer was a program which analyzes a large amount of records and returns an effective score of performance. The data analyzed five different cars: Toyota Innova, Tata Harrier, KIA Seltos, MG Hector and the Mahindra XUV 500. These cars were taken as vehicles for Simulation and the data emulated represents the realtime data from a OBD device which would be used for processing. The data was proccessed and  returned to the front end.',
        stack: [<SiDjango style = {FrontEndIcons}/>, <SiBootstrap style = {FrontEndIcons}/>, <SiPython style = {FrontEndIcons}/> ],
        source: 'https://github.com/AbhijithGanesh/car-data-analyzer',
        web: 'https://car-data-analyzer.herokuapp.com/',
        id: 1

    },
    {
        title:"FastAPI Django Integration",
        description:`I integrated FastAPI with Django for an API generation. The routing of FastAPI imporovizes the speed at the same time achieving traditional features of Django-ORM, subsequently this brings in the best of the two frameworks. The integrationw was done through the WSGI(Web-Server Gateway Interface) as specified in PEP 3333. The options of ASGI(Asynchronous Gateway Interface), a successor of WSGI was an option though the integration wasn't possible because of certain Django options. `,
        stack: [<SiDjango style = {FrontEndIcons}/>, <Icon icon={fastapiIcon} style = {{fontSize:48}}/>, <SiPython style = {FrontEndIcons}/> ],
        source: 'https://github.com/AbhijithGanesh/FastAPI-Django-Integration',
        web: 'https://fastapi-django.herokuapp.com/',
        id: 2

    }
]
export const TimeLineData = [
    { year: 2017, text: 'Learnt QBasic in High School. Introduction to programming.', },
    { year: 2018, text: 'Learnt about the basics of non-semantic HTML and CSS', },
    { year: 2019, text: 'Learnt about Python after finishing 10th Grade', },
    { year: 2020, text: 'My First Django Project', },
    { year: 2021, text: 'Learnt React', },
];