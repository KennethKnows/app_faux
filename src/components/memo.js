// import { useState, useMemo} from "react";

// const fib = (n) => {
//     return (
//         (n <= 1) ?
//         n:
//         fib(n-1) + fib(n-2)
//     )
// }

// const Memo = () => {
//     const [ positionalValue, setPositionalValue] = useState("");
//     const fibAns = useMemo(() => fib(positionalValue), [positionalValue])

//     return (
//         <>
//         <h1>useMemo Example</h1>
//         <div>
//             <input type="text" value={positionalValue} onChange={(e) => setPositionalValue(e.target.value)}/>
//             <p>Answer: {fibAns}</p>
//         </div>


//         </>
//     )
// }
// export default Memo;