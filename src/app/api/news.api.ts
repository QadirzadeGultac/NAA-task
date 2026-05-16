import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { notifications } from "@mantine/notifications";
import { newsService } from "../moctData";

export const useGetNews = () => {
  return useQuery({
    queryKey: ["news_list"],
    queryFn: newsService.getAll,
  });
};
export const useCreateNews = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: any) => newsService.create(payload),
    onSuccess: () => {
      notifications.show({
        title: "Uğurlu",
        message: "Yeni xəbər siyahıya əlavə edildi ✅",
        color: "green",
      });
      queryClient.invalidateQueries({ queryKey: ["news_list"] });
    },
    onError: () => {
      notifications.show({
        title: "Xəta",
        message: "Xəbər yaradılarkən xəta baş verdi ❌",
        color: "red",
      });
    }
  });
};
export const useUpdateNews = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: any }) => 
      newsService.update(id, payload),
    onSuccess: () => {
      notifications.show({
        title: "Yeniləndi",
        message: "Xəbər məlumatları uğurla dəyişdirildi ✅",
        color: "blue",
      });
      queryClient.invalidateQueries({ queryKey: ["news_list"] });
    },
  });
};
export const useDeleteNews = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => newsService.delete(id),
    onSuccess: () => {
      notifications.show({
        title: "Silindi",
        message: "Xəbər uğurla silindi 🗑️",
        color: "gray",
      });
      queryClient.invalidateQueries({ queryKey: ["news_list"] });
    },
  });
};