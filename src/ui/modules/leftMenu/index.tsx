import { Box, Button, Divider, Drawer, Image, NavLink, Paper, Stack } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import { sidebarData } from './page-data';
import '@mantine/core/styles.css';
import { useState } from 'react';
import maaIcon from "../../../assets/naa_logo_favicon 1.svg"
import settings from "../../../assets/setting-2.svg"
import admin from "../../../assets/admin.svg"
export const LeftMenu = () => {
  const location = useLocation();
  const [active, setActive] = useState("/");
  const [childActive, setChildActive] = useState("/website/post");
  return (
    <Paper className='relative!' component="aside" h="100vh" radius='none' shadow='md' >
      <Box className='flex!' p="md">
        <Image className='w-12! h-8!' alt='MAA icon' src={maaIcon}/>
        <span className='font-normal! text-lg!'>NAA Control Panel</span>
      </Box>
      <Divider className='w-full! text-gray-50!'/>
      <Stack p="md" gap="xs">
        {sidebarData.map((item) => (
          <div>
          <NavLink
            key={item.path}
            label={item.label}
            component={Link}
            to={item.path}
            onClick={()=>{setActive(item.path)}}
            active={location.pathname === item.path || location.pathname.startsWith(item.path + '/')}
            variant="light"
            className={`${active === item.path ? "!bg-blue-900 text-white! !p-3 rounded-xl" : "text-zinc-500! !p-3 rounded-xl"}`}
            childrenOffset={28} 
            leftSection={item.icon}
          >
            <Paper className='shadow-sm! -ml-7!'>
              {item.children?.map((child) => (
              <NavLink
                key={child.path}
                label={child.label}
                component={Link}
                to={child.path}
            onClick={()=>{setChildActive(child.path)}}

                className={`${childActive === child.path ? "text-blue-900! !bg-transparent" : "text-zinc-500!"} font-normal! p-3! text-sm!`}
                active={location.pathname === child.path}
              />
            ))}
            </Paper>
          </NavLink>
          </div>
        ))}
      </Stack>
      <Box className='flex! flex-col! gap-y-2! absolute! bottom-0! w-full!'>
      <Divider className='w-full! text-gray-50!'/>
        <Paper shadow='xs' className='p-4! mx-4! mt-5! text-sm text-zinc-500 flex! gap-2!'><Image alt='setting' w={20} src={settings}/>Settings</Paper>
        <Paper shadow='xs' className='p-4! mx-4! mb-6! text-sm text-white flex! gap-2! bg-blue-900!'><div className='flex gap-2'><Image className='w-9!' src={admin}/> <div className='flex flex-col'><span className='text-sm font-medium'>Khayal Ahmadli</span>
        <span className='text-[12px] font-normal'>khahmadli</span>
        </div></div></Paper>
      </Box>
    </Paper>
  );
};