import React, {useState} from 'react';
import Result from './Result';

const UserInput = () => {
    const [userInputs, setUserInputs] = useState({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0,
    })

    function handleValueChange(value, identifier){
        setUserInputs(prevUserInputs => {
            return {
                ...prevUserInputs,
                [identifier]: value.trim() === "" ? 0 : parseInt(value, 10) || 0,
            }
        })
    }
    console.log(userInputs);
    
  return (
    <>
        <form id='user-input'>

        <div className='input-group'>

            <div>
                <label htmlFor="initial-investment">Initial Investment</label>
                <input 
                type="number" 
                id='initialInvestment' 
                onChange={(event)=> handleValueChange(event.target.value, event.target.id)} 
                value={userInputs.initialInvestment}/>
            </div>

            <div>
                <label htmlFor="annual-investment">Annual Investment</label>
                <input 
                type="number" 
                id='annualInvestment' 
                onChange={(event)=> handleValueChange(event.target.value, event.target.id)} 
                value={userInputs.annualInvestment}/>
            </div>

            <div>
                <label htmlFor="expected-return">Expected Return</label>
                <input 
                type="number" 
                id='expectedReturn' 
                onChange={(event)=> handleValueChange(event.target.value, event.target.id)} 
                value={userInputs.expectedReturn}/>
            </div>

            <div>
                <label htmlFor="duration">Duration</label>
                <input 
                type="number" 
                id='duration' 
                onChange={(event)=> handleValueChange(event.target.value, event.target.id)} 
                value={userInputs.duration}/>
            </div>
        </div>
    </form>
    <Result userInputs={userInputs}/>
    </>
  );
};

export default UserInput;