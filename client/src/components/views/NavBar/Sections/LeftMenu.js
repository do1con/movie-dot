import React from "react";
import { Menu } from "antd";
import { LikeOutlined } from "@ant-design/icons";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="favorite" style={{ marginLeft: "10px" }}>
        <a href="/favorite" style={{ lineHeight: "49px" }}>
          <LikeOutlined />
          좋아요를 표시한 영화
        </a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
