import { useDeleteNews } from "../../../app/api/news.api";

const DeleteModalVM = () => {
  const {mutate: deleteNews} = useDeleteNews();
  return {deleteNews };
};

export default DeleteModalVM;
