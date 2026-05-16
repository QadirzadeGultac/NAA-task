import type { NewsItemDTO } from "../ui/modules/table/TAddUpdate";

const news: NewsItemDTO[] = [
    {
      id: "1",
      title: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə hazırlanan “Research and Updates on the Use of Artificial Intelligence in Drone Technology” kitabı Springer Nature nəşriyyatında dərc olunub",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam corrupti recusandae veniam rerum quidem. Cupiditate repellendus minus quo impedit rerum, suscipit ullam dolorem corporis veritatis nulla labore itaque natus nisi ipsum maiores distinctio quasi voluptates odit voluptatum voluptas doloremque mollitia necessitatibus. Deleniti eligendi non nisi aperiam? Modi labore adipisci maxime!",
      url: "test",
      img: [
        "https://images.unsplash.com/photo-1778343303023-c6404b185480?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
        "https://example.com/image.jpg",
      ],
      category: 1,
      sharingTime: "10:00",
      status: 1,
      publishStatus: 1,
      author: "Admin",
    },
    {
      id: "2",
      title: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə hazırlanan “Research and Updates on the Use of Artificial Intelligence in Drone Technology” kitabı Springer Nature nəşriyyatında dərc olunub",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam corrupti recusandae veniam rerum quidem. Cupiditate repellendus minus quo impedit rerum, suscipit ullam dolorem corporis veritatis nulla labore itaque natus nisi ipsum maiores distinctio quasi voluptates odit voluptatum voluptas doloremque mollitia necessitatibus. Deleniti eligendi non nisi aperiam? Modi labore adipisci maxime!",
      url: "test",
      img: [
        "https://images.unsplash.com/photo-1778343303023-c6404b185480?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
        "https://example.com/image.jpg",
      ],
      category: 2,
      sharingTime: "10:00",
      status: 2,
      publishStatus: 2,
      author: "Admin",
    },
  ];
const KEY = 'news_data';
export const newsService = {
  getAll: async () => {
    const data = localStorage.getItem(KEY);
    if (!data) {
      localStorage.setItem(KEY, JSON.stringify(news));
      return news;
    }
    return JSON.parse(data);
  },
  create: async (newNews) => {
    const stored = localStorage.getItem(KEY);
    const currentList = stored ? JSON.parse(stored) : news;
    const itemToAdd = { ...newNews, id: Date.now().toString() };
    const updatedList = [itemToAdd, ...currentList];
    localStorage.setItem(KEY, JSON.stringify(updatedList));
    return itemToAdd;
  },
  update: async (id, updatedFields) => {
    const stored = localStorage.getItem(KEY);
    let currentList = stored ? JSON.parse(stored) : news;
    const updatedList = currentList.map(item => 
      item.id === id ? { ...item, ...updatedFields } : item
    );
    localStorage.setItem(KEY, JSON.stringify(updatedList));
    return updatedList.find(item => item.id === id);
  },
  delete: async (id) => {
    const stored = localStorage.getItem(KEY);
    let currentList = stored ? JSON.parse(stored) : news;
    const filteredList = currentList.filter(item => item.id !== id);
    localStorage.setItem(KEY, JSON.stringify(filteredList));
    return { success: true, id };
  }
};