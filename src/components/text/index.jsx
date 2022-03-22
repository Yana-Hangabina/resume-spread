import { Button } from "antd";
import { useDrag } from "react-dnd";
import styled from "styled-components";
const Text = ({ name, icon, Component }) => {
  const [{ offset, isDrag }, drager] = useDrag(
    () => ({
      type: "box",
      item: {
        type: Component,
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

  console.log(isDrag);

  return (
    <>
      <Box>
        <Button ref={drager} icon={icon}>
          {name}
        </Button>
        <Button
          style={{
            position: "absolute",
            left: 0,
            zIndex: -1,
          }}
          icon={icon}
        >
          {name}
        </Button>
      </Box>
    </>
  );
};

const Box = styled.div`
  position: relative;
`;

export default Text;
