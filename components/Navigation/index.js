import { MessageIcon, NotificationIcon } from "../icons";
import ButtonIcon from "./ButtonIcon";
import ProfileComponent from "./ProfileComponent";
import Image from 'next/image'
import Button from "../Button";
import router from "next/router";
import Link from 'next/link'

const Navigation = () => {
  return (
    <header className="w-full bg-white shadow z-20 relative ">
      <div className="max-w-screen-xl inset-x-0 mx-auto p-2 flex justify-between">
        <button onClick={() => router.push("/")}>
        <Image src={"/logo.png"} layout={"fixed"} width={200} height={60} objectFit={"contain"} objectPosition={"center"} />
        </button>
        <div className="flex items-center gap-2">
          <ButtonIcon>
            <MessageIcon className="w-6 h-6" />
          </ButtonIcon>
          <ButtonIcon>
            <NotificationIcon className="w-6 h-6" />
          </ButtonIcon>
          <ProfileComponent image={"/profile.jpg"} />
          
          <Link href="/panel">
          <Button variant={"primary"}>
            Publicar departamento
          </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
