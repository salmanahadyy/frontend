/* import EffectComp from "./components/effect" */
import { createContext, useState } from "react";
/* import ContextComp from "./components/context"; */
/* import ReducerComp from "./components/reducer"; */
import CallbackComp from "./components/callback";
/* import MemoComp from "./components/memo" */
/* import RefComp from "./components/ref" */
/*import StateComp from "./components/state" */

export const UserContext = createContext<string>("");

function App() {
  const [user] = useState<string>("salman");
  return (
    <div>
      <UserContext.Provider value={user}>
        {/*<StateComp /> */}
        {/*<EffectComp /> */}
        {/* <RefComp /> */}
        {/* <MemoComp /> */}
        {/*<ContextComp /> */}
        {/*<ReducerComp /> */}
        <CallbackComp />
      </UserContext.Provider>
    </div>
  );
}

export default App;
