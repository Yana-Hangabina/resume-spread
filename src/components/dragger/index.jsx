import { useDrag } from "react-dnd";
import styled from "styled-components";
const Dragger = ({ Component, name }) => {
  const [{ offset, isDrag }, drager] = useDrag(
    () => ({
      type: "box",
      item: {
        type: name,
      },
      collect: (monitor) => ({
        offset: monitor.getClientOffset(),
        isDrag: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        console.log(item, monitor);
      },
    }),
    []
  );

  return (
    <>
      <Box>
        <div ref={drager}>
          <Component />
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            zIndex: -1,
            top: 0,
          }}
        >
          <Component />
        </div>
      </Box>
    </>
  );
};

const Box = styled.div`
  position: relative;
`;

export default Dragger;
