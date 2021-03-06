import React from 'react'
import { useToggle } from '../hooks';

export default function Toggle() {
  const { isToggled, toggle } = useToggle(false);

  return (
    <div>
      <button type="button" onClick={toggle}>
        Toggle
      </button>
      { isToggled && <p>To be toggled</p> }
    </div>
  )
}