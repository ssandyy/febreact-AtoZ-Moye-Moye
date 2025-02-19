import { useState } from "react";
import "../style/signup.css";

// Use of Hooks (useEffect(), useState(), useMemo(), useId(), useCallback())
// external css 
// 

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup clicked..!");
  }
console.log(email);

  return (
    <>
    <div>Signup</div>
    <form>
      <input 
        className="input-box" 
        type="email" 
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}

      />
      <input 
        className="input-box" 
        type="password" 
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
      
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
    </>
    
  )
}

export default Signup