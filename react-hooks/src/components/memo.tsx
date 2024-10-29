import { useMemo, useState } from "react";

export default function MemoComp() {
  const [number, setnumber] = useState<number>(0);
  const [count, setcount] = useState<number>(0);

  const incNumber = () => setnumber(number + 1);
  const incCount = () => setcount(count + 1);

  const isNumberEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return number % 2 === 0;
  }, [number]);
  return (
    <div>
      <button onClick={incNumber}>number:{number}</button>
      <h1>{isNumberEven ? "Even" : "Odd"}</h1>
      <button onClick={incCount}>count:{count}</button>
    </div>
  );
}
