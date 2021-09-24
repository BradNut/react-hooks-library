import { useState } from "react";

export const useToggle = ({ initialValue }) => {
  const [isToggled, setToggle] = useState(initialValue);
  const toggle = () => setToggle(prevState => !prevState);
  // return [isToggled, setToggle, toggle];
  return { isToggled, setToggle, toggle };
};
