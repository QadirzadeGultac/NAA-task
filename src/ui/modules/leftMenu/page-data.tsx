import type { TSidebarItem } from "./TMenu";
import { Image } from "@mantine/core";
import home from "../../../assets/home-2.svg"
import book from "../../../assets/book.svg"
import museum from "../../../assets/museum.svg"
import meteorology from "../../../assets/weather-icons-17-svgrepo-com 1.svg"
export const sidebarData: TSidebarItem[] = [
  {
    label: 'NAA Website',
    path: '/',
    icon: <Image src={home}/>,
    children: [
      {
        label: 'Post',
        path: '/website/post',
      },
      {
        label: 'Media Library',
        path: '/website/media',
      },
      {
        label: 'System Settings',
        path: '/website/settings',
      },
    ],
  },

  {
    label: 'Library',
    path: '/library',
    icon: <Image src={book}/>,
  },

  {
    label: 'Meteorology',
    path: '/meteorology',
    icon: <Image src={meteorology}/>,
  },

  {
    label: 'Museum',
    path: '/museum',
    icon: <Image src={museum}/>,
  },
];