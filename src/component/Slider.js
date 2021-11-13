import React from 'react'
import { useState, useEffect } from 'react'

export default function Slider(props) {
    const [currImg, setCurrImg] = useState({ img: 0 });

    const img_arr = ["https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGVza3RvcCUyMHdhbGxwYXBlcnN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1444076784383-69ff7bae1b0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGRlc2t0b3AlMjB3YWxscGFwZXJzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1619608135352-868e8313e121?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGRlc2t0b3AlMjB3YWxscGFwZXJzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1490077476659-095159692ab5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjAzfHxkZXNrdG9wJTIwd2FsbHBhcGVyc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGVza3RvcCUyMHdhbGxwYXBlcnN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"];



    useEffect(() => {
        const interval = setInterval(() => {
            if (currImg.img === 4) {
                setCurrImg(() => ({

                    img: 0,
                }))
            } else {
                setCurrImg(() => ({

                    img: currImg.img + 1,
                }))
            }
        }, 2000)
        return () => {
            clearInterval(interval);
        }
    }, [currImg.img])


    let mystyle = {
        backgroundImage: `url(${img_arr[currImg.img]})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
    }

   
    return (
        <>
            <h1>{props.slider}</h1>
            <div className="slider" style={mystyle}>
               
            </div>
        </>
    )
}


