import React, { createContext, useMemo, useState } from "react";
import useFirestore from "../hooks/useFirestore";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState("");

  const {
    user: { uid },
  } = useContext(AuthContext);

  const conditionRooms = useMemo(() => {
    return {
      fieldName: "members",
      operator: "array-contains",
      compareValue: uid,
    };
  }, [uid]);

  const rooms = useFirestore("rooms", conditionRooms);

  const selectedRoom = React.useMemo(
    () => rooms.find((room) => room.id === selectedRoomId) || {},
    [rooms, selectedRoomId]
  );

  const conditionUsers = useMemo(() => {
    return {
      fieldName: "uid",
      operator: "in",
      compareValue: selectedRoom.members,
    };
  }, [selectedRoom.members]);

  const members = useFirestore("users", conditionUsers);

  console.log({ members, selectedMembers: selectedRoom.members });

  console.log({ rooms });
  return (
    <AppContext.Provider
      value={{
        members,
        rooms,
        isAddRoomVisible,
        setIsAddRoomVisible,
        selectedRoomId,
        setSelectedRoomId,
        selectedRoom,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
