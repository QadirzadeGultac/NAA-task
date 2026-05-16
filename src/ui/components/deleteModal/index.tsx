import { Badge, Button, Image, Modal } from "@mantine/core";
import { useNewsStore } from "../../modules/table/NewsStore";
import trash from "../../../assets/trash.svg";
import '@mantine/core/styles.css';
import DeleteModalVM from "./DeleteModalVM";
export const DeleteModal = () => {
  const { isDeleteModalOpen, setIsDeleteModalOpen, title, id } = useNewsStore();
  const { deleteNews } = DeleteModalVM()
  return (
    <Modal
      centered
        opened={isDeleteModalOpen}
      onClose={() => setIsDeleteModalOpen(false)}
    >
      <div className="flex flex-col items-center justify-center">
        <Badge className="bg-red-200! w-24! h-24! text-red-600! rounded-full!">
          <Image src={trash}/>
        </Badge>
        
        <div className="flex flex-col mt-6! mb-10 px-5 justify-center items-center">
          <h1 className="font-semibold text-2xl">Delete Post</h1>
          <div className="text-center">
            <span className="text-gray-400 ">
            Are you sure you want to delete the post -
          </span>
          <span>{title}?</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button className="bg-transparent! text-base! font-normal! text-black! w-50! border-2 border-gray-200!">No</Button>
        <Button onClick={() => {
    if (id) {
      deleteNews(id);
      setIsDeleteModalOpen(false);
    }
  }} className="bg-red-500! text-base! font-normal! w-50!">Yes</Button>
        </div>
      </div>
    </Modal>
  );
};
