import React from "react";
import { useNewsStore } from "../../modules/table/NewsStore";

const SuccessModalVM = () => {
  const { isSuccessModalOpen, setIsSuccessModalOpen } = useNewsStore();

  return { isSuccessModalOpen, setIsSuccessModalOpen };
};

export default SuccessModalVM;
