import { Pagination, Select, Table } from "@mantine/core";
import NewsVM from "./NewsVM";
import { Header } from "../header";
import { FilterBar } from "../filterBar";
import { DeleteModal } from "../../components/deleteModal";
import { SuccessFully } from "../../components/successfullyModal";
import { AddUpdate } from "./addUpdate";

export const NewsTable = () => {
  const { columns,
    paginatedData,
    totalPages,
    activePage,
    setActivePage,
    itemsPerPage,
    handleItemsPerPageChange,
    categoryFilter,
    setCategoryFilter,
    statusFilter,
    setStatusFilter,
    searchQuery,
    setSearchQuery
   } = NewsVM();


  return (
    <div className="max-w-[80vw] flex flex-col gap-3">
      <DeleteModal/>
      <SuccessFully/>
     <Header/>
     <AddUpdate/>
     <FilterBar categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}/>
      <Table>
        <Table.Thead>
          <Table.Tr>
            {columns?.map((item: any) => (
              <Table.Th className="text-blue-900! font-semibold! text-base!" key={item.field}>{item.label}</Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {paginatedData?.map((row: any) => (
            <Table.Tr key={row.id}>
              {columns?.map((col) => (
                <Table.Td className="" key={col.field}>
                  {col?.render(row)}
                </Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
      <div className="flex justify-center items-center mt-4 gap-3">{totalPages > 1 && (
        <div className="flex">
          <Pagination
            total={totalPages}
            value={activePage}
            onChange={setActivePage}
            color="#243C7B"
            radius={"lg"}
          />
        </div>
      )}
      <Select w={95} radius={"lg"} value={String(itemsPerPage)}
            onChange={handleItemsPerPageChange} 
            data={[
              { value: "5", label: "5/Page" },
              { value: "10", label: "10/Page" },
              { value: "15", label: "15/Page" },
              { value: "20", label: "20/Page" }
            ]}
             withCheckIcon={false}/></div>
    </div>
  );
};