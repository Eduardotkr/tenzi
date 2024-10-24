import React from 'react'

export default function Die(props){
    const value = props.value;
    const myStyle = {
        backgroundColor: props.locked ? "#00ff37" : "white"  
    }
    
    function getDiceFace(){
        if(value === 1){
            return `translateZ(-50px) rotateY(0deg)`;
        }else if(value === 2){
            return `translateZ(-50px) rotateY(180deg)`
        }else if(value === 3){
            return `translateZ(-50px) rotateY(-90deg)`
        }else if(value === 4){
            return `translateZ(-50px) rotateY(90deg)`
        }else if(value === 5){
            return `translateZ(-50px) rotateX(-90deg)`
        }else{
            return `translateZ(-50px) rotateX(90deg)`
        }
    }
    
    const [cubeRotation, setCubeRotation] = React.useState()

    React.useEffect(() => {
        setCubeRotation({  
            transform: getDiceFace(value)
        });
    },[value]);

    return(
        <div className="scene">
            <div className='cube' style={cubeRotation}>
                <div className='cube__face cube__face--1' style={myStyle } onClick={props.handleLock}>
                    <img className="dice_face" src="public\images\dice1.png" />
                </div>
                <div className='cube__face cube__face--2' style={myStyle } onClick={props.handleLock}>
                    <img className="dice_face" src="public\images\dice2.png" />
                </div>
                <div className='cube__face cube__face--3' style={myStyle } onClick={props.handleLock}>
                    <img className="dice_face" src="public\images\dice3.png" />
                </div>
                    <div className='cube__face cube__face--4' style={myStyle } onClick={props.handleLock}>
                <img className="dice_face" src="public\images\dice4.png" />
                    </div>
                <div className='cube__face cube__face--5' style={myStyle } onClick={props.handleLock}>
                    <img className="dice_face" src="public\images\dice5.png" />
                </div>
                <div className='cube__face cube__face--6' style={myStyle } onClick={props.handleLock}>
                    <img className="dice_face" src="public\images\dice6.png" />
                </div>
             </div>
        </div>
        
    )
}