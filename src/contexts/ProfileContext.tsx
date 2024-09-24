import { createContext, useState, type ReactNode } from "react";

export const ProfileContext = createContext({
  data: null as any,
  setData: (data: any) => {},
  repository: null as any,
  setRepository: (data: any) => {},
  setIsClicked: (data: boolean) => {},
  isClicked: false,
});

const ProfileContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<unknown | any>(null);
  const [repository, setRepository] = useState<unknown | any>(null);
  const [isClicked, setIsClicked] = useState(false);
  return (
    <ProfileContext.Provider
      value={{
        data,
        setData,
        isClicked,
        setIsClicked,
        repository,
        setRepository,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
