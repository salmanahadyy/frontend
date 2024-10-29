import { useEffect, useRef, useState } from "react";

function RefComp() {
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [show, setshow] = useState<boolean>(false);
  const handleShow = () => {
    setshow(!show);
    if(passwordRef.current){
        passwordRef.current.type = !show ? "text" : "password"
        
    }
  };

  useEffect(() => {
    passwordRef.current?.focus();
  }, []);
  return (
    <div>
      <input
        ref={passwordRef}
        type="password"
        placeholder="enter your password"
      />
      <button onClick={handleShow}>{show ? "hide" : "show"}</button>
    </div>
  );
}

export default RefComp;
