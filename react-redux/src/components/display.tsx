import { useSelector } from "react-redux"
import { RootState } from "../store/store"

export default function DisplayCounter(){
   const count = useSelector((state: RootState)=> state.counter.value)
    return(
        <h1>
            {count}
        </h1>
    )
}