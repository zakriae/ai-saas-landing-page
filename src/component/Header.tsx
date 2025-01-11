import brainwave from "../assets/brainwave.svg";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import { HamburgerMenu } from "./design/Header";
import MenuSvg from "../assets/svg/MenuSvg";
import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';


const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState<boolean>(false);
  const onMenuClcik = () => {
    if(openNavigation){
      setOpenNavigation(false);
      enablePageScroll()
    }
    else{
      setOpenNavigation(true);
      disablePageScroll()
    }
  }
  const onNavLinkClick = () => {
    if(!openNavigation) return
    enablePageScroll()
    setOpenNavigation(false);
  }

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-n-8/95  border-b border-n-6 lg:backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 ">
        <a className="Block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="brainwave" />
        </a>
        <nav className={`${openNavigation ? "flex" :"hidden"} z-1 fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                id={item.id}
                href={item.url}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 
                    ${
                      item.onlyMobile ? "lg:hidden" : ""
                    } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                onClick={onNavLinkClick}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a
          href="#Signup"
          className="button hidden mr-8 transition-colors text-n-1/50 hover:text-n-1 lg:block"
        >
          New Account
        </a>
        <Button className="hidden lg:block">Sign In</Button>

        <Button className="lg:hidden ml-auto max-w-1" onClick={onMenuClcik}>
          {" "}
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    
    </div>
  );
};

export default Header;