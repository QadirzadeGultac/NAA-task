import type { ReactNode } from "react";

export type NewsItemDTO = {
  id: string;
  title: string;
  url: string;
  category: number;
  description: string;
  img: {
  url: string;
}[];
  sharingTime: string;
  status: number;
  publishStatus: number;
  author: string;
};

export type TColumn<T> = {
  field: keyof T;
  label: ReactNode;
  className?: string;
  headerClassName?: string;
  render?: (data: T) => ReactNode;
  width?: number;
  fixed?: boolean;
  isAction?: boolean;
};

export type TModalState = {
  title: string | null;
  id: string | null;
  isDeleteModalOpen: boolean;
  isSuccessModalOpen: boolean;
  isAddModalOpen: boolean;
};

export type TModalActions = {
  setTitle: (val: string | null) => void;
  setId: (val: string | null) => void;
  setIsDeleteModalOpen: (val: boolean) => void;
  setIsSuccessModalOpen: (val: boolean) => void;
  setIsAddModalOpen: (val: boolean) => void;
};