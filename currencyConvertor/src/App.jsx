import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'

function App() {
  const [amount, setamount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertAmount] = useState(0);

  const CurrencyInfo = useCurrencyInfo(from)
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertAmount(amount)
    setamount(convertedAmount)
  }
  //Object.keys() returns an array whose elements are strings corresponding to the enumerable string-keyed property names found directly upon object
  const options = Object.keys(CurrencyInfo)
  console.log(options)
  const convert = () => {
    setConvertAmount(amount * CurrencyInfo[to])
  }
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: ``
      }}
    >
      <div className="w-full">
      <img class="h-15 w-20 max-w-full " src="https://images.pexels.com/photos/1872904/pexels-photo-1872904.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image description" />
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();   //when the form is submit it goes to on any url or addres thus to prevent this we using this
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setamount(amount)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setamount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button onClick={swap}
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert {from} to {to}
              </button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default App
