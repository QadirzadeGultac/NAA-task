import { useDeleteNews } from "../../../app/api/news.api";
import { useNewsStore } from "../../modules/table/NewsStore";

const DeleteModalVM = () => {
  const {mutate: deleteNews} = useDeleteNews();
  return {deleteNews };
};

export default DeleteModalVM;
