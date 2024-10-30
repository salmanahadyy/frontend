import { useEffect, useState } from "react";

export default function CountDown() {
  const [time, setTime] = useState<number>(60);
  useEffect(() => {
    if (time <= 0) return;
    setTimeout(() => {
      setTime(time - 1);
    }, 1000);
  }, [time]);

  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
}
