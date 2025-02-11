import React, {useEffect, useRef, useState } from 'react'
import VIDEO from "./Video.mp4";
const RefExample = () => {
    const [play, setplay] = useState(true);
    const eleRef = useRef();
    let videoRef = useRef();
    console.log(videoRef);
    useEffect(()=>{
        eleRef.current.style.color="crimson";
        eleRef.current.innerText = "React Ref"
    })

    let playORpause=()=>{
        if(play == true){
            videoRef.current.play();
            console.log(play);
            setPlayy(false);

        }else{
            videoRef.current.pause();
            console.log(play);
            setplay(true);

        }
    }
    return (
        <div>
            <h1 ref={eleRef}>RefExample</h1>
            <video src={VIDEO} ref={videoRef} onclick={playORpause}></video>
        </div>
    )
}