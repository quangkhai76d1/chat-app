import React from "react";
import SideBar from "./SideBar";
import ChatWindow from "./ChatWindow";
import { Col, Row } from "antd";

const ChatRoom = () => {
  return (
    <Row>
      <Col span={6}>
        <SideBar />
      </Col>
      <Col span={18}>
        <ChatWindow />
      </Col>
    </Row>
  );
};

export default ChatRoom;
