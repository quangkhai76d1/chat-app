import React, { useContext, useMemo } from "react";
import { Collapse, Typography, Button } from "antd";
import styled from "styled-components";
import { PlusSquareOutlined } from "@ant-design/icons";
import useFirestore from "../../hooks/useFirestore";
import { AuthContext } from "../../Context/AuthProvider";
import { AppContext } from "../../Context/AppProvider";

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
  /*
  name:'room name'
  description:'mo ta room'
  members:[uid1,uid2,...]
  */

  // const {
  //   user: { uid },
  // } = useContext(AuthContext);

  // const conditionRooms = useMemo(() => {
  //   return {
  //     fieldName: "members",
  //     operator: "array-contains",
  //     compareValue: uid,
  //   };
  // }, [uid]);

  // const rooms = useFirestore("rooms", conditionRooms);

  // console.log({ rooms });

  const { rooms, setIsAddRoomVisible } = useContext(AppContext);
  console.log({ rooms });

  const handleAddRoom = () => {
    setIsAddRoomVisible(true);
  };

  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <PanelStyled header='Danh sách các phòng' key='1'>
        {rooms.map((room) => (
          <LinkStyled key={room.id}>{room.name}</LinkStyled>
        ))}

        <Button
          type='text'
          icon={<PlusSquareOutlined />}
          className='add-room'
          onClick={handleAddRoom}
        >
          Thêm phòng
        </Button>
      </PanelStyled>
    </Collapse>
  );
};

export default RoomList;
