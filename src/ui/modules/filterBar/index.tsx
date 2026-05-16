import { Input, Select } from '@mantine/core';

export const FilterBar = ({
  categoryFilter,
  setCategoryFilter,
  statusFilter,
  setStatusFilter,
  searchQuery,
  setSearchQuery,
}: any) => {
  return (
    <div className='bg-white flex gap-3 py-6 px-6 rounded-xl shadow-2xs border border-gray-50'>
      <Select
        withCheckIcon={false}
        data={[
          { value: "all", label: "All Posts" },
          { value: "1", label: "News" },
          { value: "2", label: "Announcements" },
        ]}
        value={categoryFilter}
        onChange={(val) => setCategoryFilter(val || "all")}
        className='data-[selected]:text-blue-900!'
      />
      
      <Select
        withCheckIcon={false}
        data={[
          { value: "all", label: "All Status" },
          { value: "1", label: "Active" },
          { value: "2", label: "Inactive" }
        ]}
        value={statusFilter}
        onChange={(val) => setStatusFilter(val || "all")}
      />
      
      <Input 
        placeholder='Search' 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};