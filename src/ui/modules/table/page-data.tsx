import { Badge, Button, Image, Select } from "@mantine/core";
import type { NewsItemDTO, TColumn } from "./TAddUpdate";
import { useNewsStore } from "./NewsStore";
import trash from "../../../assets/trash.svg";
import edit from "../../../assets/edit.svg"

const useNewsColumn = () => {
  const { setIsDeleteModalOpen, setTitle,setIsAddModalOpen, setId } =
    useNewsStore();
  const columns: TColumn<NewsItemDTO>[] = [
    {
      label: "Post",
      field: "title",
      render: (rowData) => (
        <div className="flex gap-2 min-w-50">
          <div className="leading-40!">
            <Image alt='img' className="w-25!" src={rowData.img?.[0]?.url} />
          </div>
          <div className="max-w-50">
            <h1 className="font-semibold text-xl truncate">{rowData.title}</h1>
            <span className="text-gray-600 overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]"
           dangerouslySetInnerHTML={{ __html: rowData.description || "" }}
  />
          </div>
        </div>
      ),
    },
    {
      label: "Type",
      field: "category",
      render: (rowData) => (
        <div>
          <Badge
            className={`${rowData.category === 1 ? "bg-blue-200! text-blue-700!" : "bg-purple-100! text-purple-700!"} rounded-md! font-medium!`}
          >
            {rowData.category === 1 ? "News" : "Announcement"}
          </Badge>
        </div>
      ),
    },
    {
      label: "Sharing Time",
      field: "sharingTime",
      render: (rowData) => {if (!rowData.sharingTime) return <div>-</div>;
    const onlyDate = rowData.sharingTime.split('T')[0]; 
    const [year, month, day] = onlyDate.split('-');
    return <div className="flex flex-col"><span className="text-[16px] font-medium text-neutral-800">{`${day}/${month}/${year}`}</span> <span className="ml-5 text-[12px] font-normal text-neutral-400">{rowData.sharingTime?.split('T')[1].slice(0,5)}</span></div>}
    },
    {
      label: "Status",
      field: "status",
      render: (rowData) => (
        <div><Badge className={`${rowData.status === 1 ? "bg-lime-100! text-lime-800!" : "bg-red-200! text-red-700!"}`}>{rowData.status === 1 ? "Active" : "Inactive"}</Badge></div>
      ),
    },
    {
      label: "Publish Status",
      field: "publishStatus",
      render: (rowData) => (
        <div className="max-w-30">
        <Select
        data={[{value: 1, label: "Publish"},
          {value: 2, label: "Draft"}
        ]}
        value={rowData.publishStatus}/></div>
      ),
    },
    {
      label: "Author",
      field: "author",
      render: (rowData) => <div>{rowData.author}</div>,
    },
    {
      label: "Actions",
      field: "id",
      render: (rowData) => (
        <div>
          <Button
            onClick={() => {
              setId(rowData.id)
              setIsAddModalOpen(true)
            }}
            className="bg-transparent! p-1!"
          >
            <Image w={18} src={edit}/>
          </Button>
          <Button
            onClick={() => {
              setIsDeleteModalOpen(true);
              setTitle(rowData.title);
              setId(rowData.id)
            }}
            className="bg-transparent! p-1!"
          >
            <Image w={18} src={trash}/>
          </Button>
        </div>
      ),
    },
  ];

  return { columns };
};

export default useNewsColumn;
