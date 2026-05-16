import { Button } from '@mantine/core'
import { useNewsStore } from '../table/NewsStore'

export const Header = () => {
  const {setIsAddModalOpen} = useNewsStore();
  return (
    <div>
       <header className="flex justify-between">
              <div>
              <h1 className="font-medium text-2xl">News & Announcements</h1>
              <span className="text-zinc-500">Say Post</span>
              </div>
              <Button onClick={()=>{setIsAddModalOpen(true)}} className="text-base! font-medium! rounded-full! bg-blue-900! leading-6!">
                <div className="flex gap-1">
                  <span className="rounded-full bg-[#3d5db2] w-6 h-6">
                    <i className="fa-solid fa-plus font-thin!"></i>
                  </span>
                  <span>Add News or Announcement</span>
                </div>
              </Button>
            </header>
    </div>
  )
}
