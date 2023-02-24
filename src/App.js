// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

// // import reducers from changes.js
// import {withdrawAmount, depositAmount, addInterest, addCharges} from "./store/changes";


// import "./CSS/myStyles.css"


// function App() {

//   // set variables for the account balance and for the dispatch
//   const balance = useSelector((state) => state.amount.value);
//   const dispatch = useDispatch();
  
//   // useState to Set variables for the userInputs that will be used with withdraw and deposit 
//   const [userInput1, setUserInput1] = useState(0);
//   const [userInput2, setUserInput2] = useState(0);


//   // create function to handle the logic when the withdraw button is clicked. 
// const handleWithdraw = (e) => {
//   e.preventDefault();

//   // defensive programming for if the user enters an invalid value in the form 
//   if (isNaN(Number(userInput1))) {
//     alert("Please only enter a NUMBER. ");
//     setUserInput1(0);
//     return;
//   }

//   dispatch(withdrawAmount(Number(userInput1)));
//   setUserInput1(0);
// }

//   // create function to handle the logic when the withdraw button is clicked. 
// const handleDeposit = (e) => {
//   e.preventDefault();

//     // defensive programming for if the user enters an invalid value in the form 
//   if (isNaN(Number(userInput2))) {
//     alert("Please only enter a NUMBER. ");
//     setUserInput2(0);
//     return;
//   }

//   dispatch(depositAmount(Number(userInput2)));
//   setUserInput2(0);
// }

//   return(
//     <div className="App">
//       <div id="compTask1">
//         <h2>Finance Calculator</h2>
//         <h4>Current Balance: £{balance.toFixed(2)}</h4>

//         {/* // a form for the user to add their amount to withdraw  */}
//         <form onSubmit={handleWithdraw}>
//           <input type="text" value={userInput1} onChange={(e) => setUserInput1(e.target.value)}/>
//           <button type="submit" onClick={() => dispatch(withdrawAmount)}>Withdraw</button>
//         </form><br/>

//         {/* // a form for the user to add their amount to deposit  */}
//         <form onSubmit={handleDeposit}>
//           <input type="text" value={userInput2} onChange={(e) => setUserInput2(e.target.value)}/>
//           <button type="submit" onClick={() => dispatch(withdrawAmount)}>Deposit</button>
//         </form><br/>
        
//         {/* // Buttons for adding interest and charges */}
//         <button id="interestButton" title="Apply 5% interest" type="button" onClick={() => dispatch(addInterest())}>Interest</button>
//         <button id="chargesButton"  title="Apply 15% charges" type="button" onClick={() => dispatch(addCharges())}>Charges</button>

//       </div>
//     </div>
//   )
// }

// export default App; 

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// import reducers from changes.js
import { withdrawAmount, depositAmount, addInterest, addCharges } from "./store/changes";

import "./CSS/myStyles.css";

function App() {
  // set variables for the account balance and for the dispatch
  const balance = useSelector((state) => state.amount.value);
  const dispatch = useDispatch();

  // useState to Set variables for the userInput that will be used for both deposit and withdraw
  const [userInput, setUserInput] = useState(0);

  // create function to handle the logic when the withdraw button is clicked.
  const handleWithdraw = (e) => {
    e.preventDefault();

    // defensive programming for if the user enters an invalid value in the form
    if (isNaN(Number(userInput))) {
      alert("Please only enter a NUMBER. ");
      setUserInput(0);
      return;
    }

    dispatch(withdrawAmount(Number(userInput)));
    setUserInput(0);
  };

  // create function to handle the logic when the deposit button is clicked.
  const handleDeposit = (e) => {
    e.preventDefault();

    // defensive programming for if the user enters an invalid value in the form
    if (isNaN(Number(userInput))) {
      alert("Please only enter a NUMBER. ");
      setUserInput(0);
      return;
    }

    dispatch(depositAmount(Number(userInput)));
    setUserInput(0);
  };

  return (
    <div className="App">
      <div id="financeCalculator">
        <h2 id="mainHeading">Finance Calculator</h2>
        <div id="balanceContainer">
          <h4 id="balanceHeading">Current Balance:<span id="balanceSpan"> £{balance.toFixed(2)}</span></h4>
        </div>

        {/* a form for the user to add their amount to deposit or withdraw */}
        <form id="inputValueForm" onSubmit={handleWithdraw}>
          <input 
          id="userInputValue"
          type="text" 
          value={userInput} 
          onChange={(e) => setUserInput(e.target.value)} />
          <br/><br/>

          <button 
          title="Withdraw funds from account"
          className="accountChangeButton" 
          type="submit" 
          onClick={handleWithdraw}>
          Withdraw
          </button>

          <button 
          title="Deposit funds into account"
          className="accountChangeButton"
          type="submit" onClick={handleDeposit}>
          Deposit
          </button>
        </form>
        <br />

        {/* Buttons for adding interest and charges */}
        <button id="interestButton" title="Apply 5% interest" type="button" onClick={() => dispatch(addInterest())}>
          Interest
        </button>
        <button id="chargesButton" title="Apply 15% charges" type="button" onClick={() => dispatch(addCharges())}>
          Charges
        </button>
      </div>
    </div>
  );
}

export default App;

