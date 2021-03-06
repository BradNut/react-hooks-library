import { useLocalStorage } from "../hooks";

const Local = () => {
  const [ value, setValue ] = useLocalStorage("tester", "I am initial");

  return (
    <div>
      <h1>{value || ''}</h1>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  )
}

export default Local;