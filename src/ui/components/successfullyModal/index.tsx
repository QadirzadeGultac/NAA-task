import { Button, Modal } from "@mantine/core";
import SuccessModalVM from "./SuccessModalVM";

export const SuccessFully = () => {
  const { isSuccessModalOpen, setIsSuccessModalOpen } = SuccessModalVM();
  return (
    <Modal
      opened={isSuccessModalOpen}
      onClose={() => {
        setIsSuccessModalOpen(false);
      }}
      centered
    >
      <div className="flex flex-col gap-5">
        <div className="p-7 flex flex-col items-center gap-6">
        <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center">
          <div className="bg-white rounded-full">
            <i className="text-7xl fa-solid fa-circle-check text-green-500 "></i>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-2xl">Added Successfully!</h1>
        <span className="text-sm font-normal text-gray-500">Your news added successfully</span>
        </div>
        
      </div>
      <Button onClick={()=>setIsSuccessModalOpen(false)} className="bg-blue-900! w-full! h-full! p-3! rounded-xl! text-[16px]!">Ok</Button>
      </div>
    </Modal>
  );
};
