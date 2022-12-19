import jwtDecode from "jwt-decode";
import { useState } from "react";

function useDecodeJwtToken(token) {
  let data = jwtDecode(token);
}

export default useDecodeJwtToken;

// export default function decodedToken(token){
//     const[email, setEmail] = useState(()=>{
//         return
//     })
// };
