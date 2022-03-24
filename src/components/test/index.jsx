import { Input } from "antd";
import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { updateComponentSettings } from "../../redux/action/tree";

const Div = (props) => <div {...props}>点击添加一段文字</div>;
const Div2 = (props) => {
  const [state, setState] = useState({
    isEditing: false,
    text: "",
  });

  const { isEditing, text } = state;

  if (isEditing) {
    return (
      <Input
        autoFocus
        key={nanoid()}
        {...props}
        onBlur={() => {
          setState({
            isEditing: false,
            text,
          });
        }}
        value={text}
        onChange={(e) => {
          setState({
            isEditing,
            text: e.target.value,
          });
        }}
      />
    );
  }
  return (
    <div
      onClick={() => {
        setState({
          isEditing: true,
          text,
        });
      }}
      {...props}
    >
      {text || "点击添加一段文字"}
    </div>
  );
};

export default function Test({ isShot, id }) {
  const dispatch = useDispatch();

  const shotSetting = [
    {
      id: 1,
      component: Div,
      $settings: {
        style: {
          color: "#1890ff",
        },
        children: "点击添加一行文字",
      },
    },
  ];

  const [settings, setSettings] = useState([
    {
      id: 1,
      component: Div2,
      $settings: {
        style: {
          color: "#1890ff",
        },
      },
    },
  ]);

  useEffect(() => {
    if (!isShot) {
      dispatch(
        updateComponentSettings({
          id,
          settings,
        })
      );
    }
  }, [settings]);

  if (isShot) {
    return shotSetting.map((Item, index) => {
      return <Item.component key={nanoid()} {...Item.$settings} />;
    });
  }

  return settings.map((Item, index) => {
    return <Item.component key={nanoid()} {...Item.$settings} />;
  });
}
