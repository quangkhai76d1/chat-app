import React, { createContext, useMemo, useState } from "react";
import useFirestore from "../hooks/useFirestore";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isAddRoomvisible, setIsAddRoomVisible] = useState(false);

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

  console.log({ rooms });
  return (
    <AppContext.Provider
      value={{ rooms, isAddRoomvisible, setIsAddRoomVisible }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
