import { useState, useCallback,useEffect ,useRef} from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+{}|";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

useEffect(()=>{
  passwordgenerator();
},[length,numberAllowed,characterAllowed,passwordgenerator])

//use ref hook
const passwordRef=useRef(null)


const copyPasswordToclipboard=useCallback(()=>{
  passwordRef.current?Selection();
  passwordRef.current?.setSelectionRange(0,20);
window.navigator.clipboard.writeText(password)
},[password])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordRef}
        ></input>
        <button
        onClick={copyPasswordToclipboard} 
        className="outline bg-blue text-white px-3 py-0.5 shrink-0"></button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="curser-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            ></input>
            <label>Length : {length}</label>
          </div>
        </div>
        <div className="flex items-center gap-x-1 ">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          ></input>
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={characterAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          ></input>
          <label htmlFor="characterInput"></label>
        </div>
      </div>
    
  );
}
 
export default App;
