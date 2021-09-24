import React from 'react'
import { useMount, useUnmount, useToggle } from '../hooks';

export const Mount = () => {
  const { isToggled, toggle } = useToggle(false);
  return (
    <div>
      <buttom onClick={toggle}>Toggle</buttom>
      {isToggled && <UnMount />}
    </div>
  )
}

export const UnMount = () => {
  useMount(() => {
    console.log('I Mounted!');
  });
  useUnmount(() => {
    console.log('I Unmounted!');
  });
  return <div>Unmount Me</div>;
}


export default Mount;
