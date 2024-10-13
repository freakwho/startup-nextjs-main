import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home Page",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Services",
    path: "/service",
    newTab: false,
  },
  {
    id: 4,
    title: "Our Team",
    path: "/team",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 6,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
      {
        id: 62,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 63,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 64,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 65,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
      },
    ],
  },
];
export default menuData;
