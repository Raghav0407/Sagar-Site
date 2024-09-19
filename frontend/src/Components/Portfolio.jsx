import React, { useEffect, useState } from 'react'
import "../Styles/Portfolio.css"
import jsonData from "../Data/data.json"

function Portfolio() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(jsonData.portfolio);
    }, []);

    console.log(data);
    return (
        <div className="potfolio1-container">
            <div className="potfolio1-heading">
                <h1 className='potfolio1'>Our Portfolio</h1>
            </div>
            <div className="bottom-sec">
                <p className='intro'>Sagar art design studios based at Gandhinagar Ahemedabad India.This Studio is expert in many fields of editing of images and exposering the high quality of products.</p>
                {data.map((d) => (
                    <div className="image-sec">
                        <h2 className='potfolio-span'><span className='span-black'>{d.name}</span><span className='span-red'>RETOUCHING</span></h2>
                        {d.images.map((m) => (
                            <div className="after-before">
                                <div className="before"><img src={m.before} alt="before" /><h3>BEFORE</h3></div>
                                <div className="after"><img src={m.after} alt="" /><h3>AFTER</h3></div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio