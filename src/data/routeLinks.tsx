import {RouteLink} from "@/types";
import {IoHomeOutline, IoMailOutline, IoNavigate, IoPencilOutline} from "react-icons/io5";
import {MdOutlineMapsHomeWork} from "react-icons/md";
import {FaRegUserCircle} from "react-icons/fa";

const links: RouteLink[] = [
  {
    path: "/",
    name: "Home",
    icon: <IoHomeOutline/>
  },
  {
    path: "/projects",
    name: "Projects",
    icon: <IoNavigate/>
  },
  {
    path: "/experience",
    name: "Experience",
    icon: <MdOutlineMapsHomeWork/>
  },
  {
    path: "/blogs",
    name: "Blogs",
    icon: <IoPencilOutline/>
  },
  {
    path: "/about",
    name: "About",
    icon: <FaRegUserCircle/>
  },
  {
    path: "/contact",
    name: "Contact",
    icon: <IoMailOutline/>
  },
];

export default links;
