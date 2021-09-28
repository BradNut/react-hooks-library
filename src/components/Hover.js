import { Card } from '../Elements';
import black from "../black.png"
import { useHover, useWindowWidth, useMeasure } from '../hooks';

export const Hover = () => {
  const [ isHovered, bind ] = useHover();
  const width = useWindowWidth();
  // const [{ref}, bounds] = useMeasure();
  // console.log('bounds', bounds);

  if (width < 500) return null;

  return (
    <div>
        <Card 
          // ref={ref}
          {...bind}
          style={{ background: isHovered ? "var(--purp)" : "var(--black)" }}
        >
          <h3>Some card</h3>
          <img src={black} />
        </Card>
    </div>
  )
}

export default Hover;