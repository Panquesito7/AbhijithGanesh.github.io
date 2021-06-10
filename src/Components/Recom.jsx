import React from "react";


const Recom = () => {
    const headerstyle = {
        color: "White",
        fontSize:24,
        paddingLeft: 24,
        fontFamily:'Fredoka One',
    
    }
    const ContentStyles = {
        color:"White",
        fontSize: 20,
        paddingLeft: 24,
        fontFamily:'Mate'
    }
    const Title = {
        color: "White",
        paddingLeft: 20,
        fontSize:40,
        fontFamily:'Cormorant Garamond',

    }
    return (
        <>
        <section>
            <header style = {headerstyle}>
                <u>
                An Ideal high-performance rig would be:
                </u>
            </header>
            <br></br>
            <content>
            <u style = {Title}>Specifications Recommendations:</u>
            <ol>
                <li style = {ContentStyles}>Specifications: Processor : intel-i7-10750H;</li>
                <li style = {ContentStyles}>Graphics Processor: Nvidia GeForce MX series or GTX series;</li>
                <li style = {ContentStyles}>Operating System : Windows 10 Pro;</li>
                <li style = {ContentStyles}>Storage: 512 GB - 1 TB;</li>
                <li style = {ContentStyles}>Memory : 16 GB;</li>
            </ol>
            <br></br>
            <u style = {Title}>Laptops under the same range:</u>
            <ol>
                <li style = {ContentStyles}> HP Omen Gaming Series.</li>
                <li style = {ContentStyles}>HP Pavillion x360 for convertible</li>
                <li style = {ContentStyles}>  Lenovo Y series and Legion </li>
            </ol>
            </content>
        </section>
        </>
    )
}

export default Recom;