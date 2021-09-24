import { useCookies } from "../hooks";

const Cookie = () => {
  const [ cookie, setCookie ] = useCookies({ key: "tester" });

  return (
    <div>
      <h1>{cookie || ''}</h1>
      <input type="text" value={cookie} onChange={(e) => setCookie(e.target.value)} />
    </div>
  )
}

export default Cookie;

// Different types of api
// const { value, get, set } = useCookie({key, value})
// value
// const { value, get, set } = useCookie({key: anotherKey, value})

// const { get, set } = useCookie()
// get("theme")