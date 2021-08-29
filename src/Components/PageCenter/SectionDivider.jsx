import React from 'react'


export const SectionDivider = () => {
    const StyleOne = {
        width: "108px",
        height: "6px",
        borderRadius: "10px",
        background: 'linear-gradient(270deg, #333333 30%,  #00a19b 100% )' 
    }
    return (
        <>
            <section style = {StyleOne}></section>
        </>
    )
}