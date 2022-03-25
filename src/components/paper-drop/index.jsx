import { useDrop } from "react-dnd";
import { connect } from "react-redux";
import styled from "styled-components";
import { appendComponent } from "../../redux/action/tree";

import { nanoid } from "nanoid";

const switchSettings = (name) => {
  switch (name) {
    case 'Skills': return [
      {
        name: "Skill",
        fid: nanoid(),
        $settings: {
          style: {  },
          $children: [{
            sid: nanoid(),
            text: "输入你的技能",
            isEditing: false
          }],
        },
      },
    ];
    default: return [
      {
        name: "Text",
        fid: nanoid(),
        $settings: {
          style: { color: "#1890ff" },
          $children: "",
        },
      },
    ]
  }
}
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
        appendComponent({
          cid: nanoid(),
          top: 0,
          settings: switchSettings(item.type),
          name: item.type,
        });
      },
    }),
    []
  );

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
