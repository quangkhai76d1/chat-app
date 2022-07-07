import React from "react";
import { Collapse, Typography, Button } from "antd";
import styled from "styled-components";
import { PlusSquareOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }
    .ant-collapse-content-box {
      padding: 0 40px;
    }
    .add-room {
      color: white;
      padding: 0;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`;

const RoomList = () => {
  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <PanelStyled header='Danh sách các phòng' key='1'>
        <LinkStyled style={{ color: "white" }}>Room 1</LinkStyled>
        <LinkStyled style={{ color: "white" }}>Room 2</LinkStyled>
        <LinkStyled style={{ color: "white" }}>Room 3</LinkStyled>
        <Button type='text' icon={<PlusSquareOutlined />} className='add-room'>
          Thêm phòng
        </Button>
      </PanelStyled>
    </Collapse>
  );
};

export default RoomList;
