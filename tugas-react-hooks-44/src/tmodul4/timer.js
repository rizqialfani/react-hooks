import React, { useEffect, useState, useRef } from 'react';
import { Button } from "antd";

export default function HookTimer(){
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() =>{
            setTimer(prevTimer => prevTimer +1)
        }, 1000)

        return() =>{
            clearInterval(intervalRef.current)
        };
    }, [])
    
    return(
        <div>
            <span>HookTimer - {timer}</span>
            <br></br>
            <Button type='danger' onClick={() => clearInterval(intervalRef.current)}>Stop Hook Timer</Button>
        </div>
    )
}
