import { MenuIcon, MessageIcon, NotificationIcon } from "../icons";
import ButtonIcon from "./ButtonIcon";
import ProfileComponent from "./ProfileComponent";
import Button from "../Button";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import router from "next/router";

const Navigation = () => {
  const [isShowSidebar, setSidebar] = useState(false);
  const [dashboard, setDashboard] = useState(false)
  useEffect(() => {
    setDashboard(router?.route?.includes("dashboard"))
  }, [router])
  return (
    <>
      {dashboard && (
        <Sidebar state={isShowSidebar} set={(act) => setSidebar(act)} />
      )}
      <header className="w-full bg-white shadow z-40 relative h-20 flex items-center justify-center ">
        <div className="w-full max-w-screen-xl inset-x-0 mx-auto p-2 flex items-center justify-between ">
          {dashboard && (
            <ButtonIcon onClick={() => setSidebar(true)}>
              <MenuIcon />
            </ButtonIcon>
          )}

          <div className="flex items-center gap-2">
            <ButtonIcon>
              <MessageIcon className="w-6 h-6" />
            </ButtonIcon>
            <ButtonIcon>
              <NotificationIcon className="w-6 h-6" />
            </ButtonIcon>
            <ProfileComponent image={"/profile.jpg"} />

            {/* <Link href="/panel">
          <Button variant={"primary"}>
            Publicar
          </Button>
          </Link> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
