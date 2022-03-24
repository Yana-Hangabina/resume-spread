import { useDrop } from "react-dnd";
import { connect } from "react-redux";
import styled from "styled-components";
import { appendComponent } from "../../redux/action/tree";

import { nanoid } from "nanoid";
const PaperDorp = ({ wh, $tree, selector, menuItems, appendComponent }) => {
  const { tree } = $tree;
  const HitComponent = (name) => {
    return menuItems.filter((item) => item.name === name)[0];
  };

  const [{ isOver, item }, dropContainer] = useDrop(
    () => ({
      accept: "box",
      collect: (monitor) => ({
        isOver: monitor.isOver({ shallow: true }),
        item: monitor.getItem(),
      }),
      drop: (item, monitor) => {
<<<<<<< HEAD
        console.log("19--", item, monitor.isOver({ shallow: true }));
=======
        console.log(item);
>>>>>>> 845b2735187938bedd4104f392e71868c0088587
        appendComponent({
          id: nanoid(),
          top: 0,
          settings: [],
          name: item.type,
        });
      },
    }),
    []
  );

  console.log("31--", tree, item);

  return (
    <Canvas wh={wh} ref={dropContainer}>
      {tree.map((item) => {
        const { Component } = HitComponent(item.name);
        return <Component key={nanoid()} {...item}></Component>;
      })}
    </Canvas>
  );
};

export default connect(
  (state) => {
    return {
      $tree: state.tree,
      selector: state.selector,
    };
  },
  (dispatch) => ({
    appendComponent: (data) => dispatch(appendComponent(data)),
  })
)(PaperDorp);

const Canvas = styled.div`
  width: ${({ wh }) => (wh.width ? wh.width : "450px")};
  height: ${({ wh }) => (wh.height ? wh.height : "800px")};
  box-shadow: 10px 10px 30px #cecece, -10px -10px 30px #ffffff;
  background-clip: #fff;
  padding: 10px 15px;
  margin: 20px 0;
`;
