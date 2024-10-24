import Die from "./components/die"
import React from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti';

function App() {
  const [dice, setDice] = React.useState(generateNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const value = dice[0].value;
    if(dice.every(die => die.isLocked === true && die.value === value) ){
      setTenzies(true);
    }
  }, [dice]);

  function generateNewDie(){
    return {
      id: nanoid(),
      value: Math.ceil(Math.random()*6),
      isLocked: false
    }
  }

  function generateNewDice(){
    let diceArr = [];
    for(let i = 0; i < 10; i++){
      diceArr.push(
        generateNewDie()
      );
    }
    return diceArr;
  }

  
  function rollDice(){
    if(tenzies){
      setDice(generateNewDice());
      setTenzies(false);
    }else{  
      setDice(dice => dice.map(die =>{
        return die.isLocked ? die : generateNewDie() 
      }));
    }
  }

  function handleLockClick(id){
    setDice(dice => dice.map(die => {
        return die.id === id ? {...die, isLocked: !die.isLocked} : die
      })
    )
  }

  const diceElement = dice.map(die => <Die key={die.id} value={die.value} locked={die.isLocked} handleLock={() => handleLockClick(die.id)}/>)

  return (
    <main>
      {tenzies && <Confetti/> }
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="die-container">
          {diceElement}
      </div>
      <button className="game-button" onClick={rollDice}>
        {tenzies  ? "New Game" : "Roll"}
      </button>  
    </main>
  )
}

export default App
