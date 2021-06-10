import React from "react";


const Profile = () => {
    const headerstyles = {
        color:"White",
        fontSize:24,
        fontFamily: 'Staatliches'
    };
    const ContentStyles = {
        color:"White",
        fontSize:24,
        fontFamily: 'Cormorant Garamond',
    }
    const TitleStyle = {
        fontFamily:'Bebas Neue',
        fontSize:32,
        color:"White"
    }
    return (
        <>
            <header style = {TitleStyle}>
                <u>So What are the projects listed in my LinkedIN profile?</u>
            </header>
            <content>
                <ol style = {headerstyles}>
                    <li>
                    <header>
                        <u style = {headerstyles}>
                            Password-Generator Project:
                        </u>
                    </header>
                    <content style = {ContentStyles}>
                        <p>
                            The project generates a 128-Bit Password which can be used for secure-applications. The password generator has an optional feature to generate 256 and 512 bit passwords as well. The feature will be integrated in the future by changing the funcitonality in the Backend. The Password Generated through the application was tested with multiple password-cracking applications such as but not limited to Kaspersky, DashLane and University of Texas' password cracker. All of them would reported that it would take 10 Trillion+ Years to crack, virtually unhackable. The Project was developed as a part of our annual computer science project for our Secondary school. The backend and a significant portion of the program logic were my primary contribution. A part of the UI/UX development was also under my purview.
                        </p>
                    </content>
                    </li>
                    <li>
                        <header>
                            <u style = {headerstyles}>
                                Car Data Analyzer
                            </u>
                        </header>
                        <content style = {ContentStyles}>
                            <p>
                            The car data analyzer was a program which analyzes a large amount of records and returns an effective score of performance. The data analyzed five different cars: Toyota Innova, Tata Harrier, KIA Seltos, MG Hector and the Mahindra XUV 500. These cars were taken as vehicles for Simulation and the data emulated represents the realtime data from a OBD device which would be used for processing. The data was proccessed and  returned to the front end..
                            </p>
                        </content>
                    </li>
                    <li>
                        <header>
                            <u style = {headerstyles}>FastAPI-Django Integration</u> 
                        </header>
                    <content style = {ContentStyles}>
                        <p>
                            I integrated FastAPI with Django for an API generation. The routing of FastAPI imporovizes the speed at the same time achieving traditional features of Django-ORM, subsequently this brings in the best of the two frameworks. The integrationw was done through the WSGI(Web-Server Gateway Interface) as specified in PEP 3333. The options of ASGI(Asynchronous Gateway Interface), a successor of WSGI was an option though the integration wasn't possible because of certain Django options. 
                        </p>
                    </content>
                    </li>
                </ol>
            </content>
        </>
    )
}

export default Profile;