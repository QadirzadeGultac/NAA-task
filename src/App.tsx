import './index.css'
import { Route, Routes } from 'react-router-dom'
import { AdminLayout } from './ui/modules/adminLayout'
import { NewsTable } from './ui/modules/table'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="website/post" element={<NewsTable />} />
        <Route path="website/media" element={<div>Media Səhifəsi</div>} />
        <Route path="website/settings" element={<div>Setting Səhifəsi</div>} />
      </Route>
    </Routes>
    </QueryClientProvider>
  );
}

export default App
