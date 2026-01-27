import { createContext, useState } from "react";

export const UserContext = createContext();

//UserProvider成為外殼 內層組件被打包成children屬性傳到此函數中
export const UserProvider = ({ children }) => {
  //共享資料設定
  const [user, setUser] = useState({ name: "John Doe" });
  const updateUser = (newName) => {
    setUser({ name: newName });
  };

  return (
    //所有放進children的組件都會包在UserProvider 可共享user與updateUser函數
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
