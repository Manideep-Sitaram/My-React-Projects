import { useState } from "react";
import "./App.css";
import "./index.css";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const data = useCurrencyInfo(from);

  const currencyOptions = Object.keys(data);

  function swap(e) {
    e.preventDefault();
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  function convert(){
    setConvertedAmount(amount * data[to])
  }
  
  return (
    <>
      <form onSubmit={ e => {
        e.preventDefault();
        convert()
      }}>
        <div className="w-full h-screen flex flex-wrap justify-center items-center">
          <div className="p-8 bg-slate-300 max-w-md">
            <InputBox
              label="From"
              amount={amount}
              selectCurrency={from}
              currencyOptions={currencyOptions}
              onAmountChange={amount => setAmount(amount)}
              onCurrencyChange={currency => setFrom(currency)}
            />
            <button
              className="py-2 text-white bg-blue-500 rounded m-1 px-3"
              onClick={swap}
            >
              swap
            </button>
            <InputBox
              label="To"
              amount={convertedAmount}
              selectCurrency={to}
              currencyOptions={currencyOptions}
              onAmountChange={amount => setAmount(amount)}
              onCurrencyChange={currency => setTo(currency)}
              amountInputDisable={true}
            />
            <button className="w-full bg-blue-600 rounded-xl px-2 py-3 my-4 text-white" >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
