import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Person2Icon from "@mui/icons-material/Person2";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import BookIcon from "@mui/icons-material/Book";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import ShareIcon from "@mui/icons-material/Share";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import {
  FireExtinguisher,
  FireExtinguisherOutlined,
} from "@mui/icons-material";
export const Links = [
  {
    id: 0,
    name: "feed",
    icon: <HomeIcon style={{ color: "#1760a5" }} />,
    path: "/dashboard",
    icon2: <HomeOutlinedIcon />,
  },
  {
    id: 1,
    name: "hot",
    icon: <LocalFireDepartmentIcon style={{ color: "#1760a5" }} />,
    path: "hot",
    icon2: <LocalFireDepartmentOutlinedIcon />,
  },
  {
    id: 2,
    name: "profile",
    icon: <Person2Icon style={{ color: "#1760a5" }} />,
    path: "profile",
    icon2: <Person2OutlinedIcon />,
  },
  {
    id: 3,
    name: "saved",
    icon: <BookIcon style={{ color: "#1760a5" }} />,
    path: "saved",
    icon2: <BookOutlinedIcon />,
  },
  {
    id: 4,
    name: "shared",
    icon: <ShareIcon style={{ color: "#1760a5" }} />,
    path: "shared",
    icon2: <ShareOutlinedIcon />,
  },
];
