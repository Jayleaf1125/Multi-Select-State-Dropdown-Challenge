import { states } from "../Data/StatesData";
import Checkboxes from "./Checkboxes";

export default function SelectStates() {
  return (
    <div>
        {
            states.map((state, i) => (
                <Checkboxes key={i} id={i} value={state} />
            ))
        }
    </div>
  )
}
