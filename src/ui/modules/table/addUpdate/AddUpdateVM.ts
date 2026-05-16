import { useEffect, useState } from 'react'
import { useNewsStore } from '../NewsStore'
import type { NewsItemDTO } from '../TAddUpdate';
import { useForm } from 'react-hook-form';
import { useCreateNews, useGetNews, useUpdateNews } from '../../../../app/api/news.api';
import slugify from 'slugify';
const convertToSlug = (text: string): string => {
  if (!text) return '';
  return slugify(text, {
    replacement: '-',  
    remove: /[*+~.()'"!:@]/g, 
    lower: true,       
    strict: true,      
    locale: 'az'
  });
};
const AddUpdateVM = () => {
    const {isAddModalOpen, setIsAddModalOpen, setIsSuccessModalOpen, id} = useNewsStore();
const [lang, setLang] = useState('az');
  const [step, setStep] = useState(1);
  const form = useForm <NewsItemDTO>({
    defaultValues: {
      id: "",
      title: "",
      url: "",
      category: 1,
      description: "",
      img: [], 
      sharingTime: "",
      status: 1,
      publishStatus: 1,
      author: ""
    }
  });
  const images = form.watch("img");
  const { mutate: create } = useCreateNews();
  const {mutate: update} = useUpdateNews()
  const {data: news} = useGetNews();
  const idNews = news?.find((item: any) => item?.id === id)
  const watchedTitle = form.watch("title");
  useEffect(() => {
  if (id && idNews) {
    form.reset({
      id: idNews.id,
      title: idNews.title,
      url: idNews.url,
      category: idNews.category,
      description: idNews.description,
      img: idNews.img,
      sharingTime: idNews.sharingTime,
      status: idNews.status,
      publishStatus: idNews.publishStatus,
      author: idNews.author,
    });
  } else {
    form.reset({
      id: "",
      title: "",
      url: "",
      category: 1,
      description: "",
      img: [],
      sharingTime: "",
      status: 1,
      publishStatus: 1,
      author: "",
    });
  }
}, [id, idNews]);

useEffect(() => {
    if (!id && watchedTitle) {
      const generatedSlug = convertToSlug(watchedTitle);
      form.setValue("url", generatedSlug);
    }
  }, [watchedTitle, id, form]);
const onSubmit = (data: NewsItemDTO) => {
  if (id) {
    update({
      id: id,
      payload: {
        ...data,
        sharingTime: data.sharingTime || new Date().toISOString(),
        author: "Admin"
      },
    },
    {
        onSuccess: () => {
          setIsAddModalOpen(false);
          setStep(1);
          form.reset();
        },
      }
     
  );
  } else {
    create({...data, sharingTime: new Date().toISOString(), author: "Admin"},{
    onSuccess: () => {
      setIsAddModalOpen(false);
      setStep(1);
      form.reset();
    }
  });;
  }
  
};
const category = form.watch("category");
  return {
    isAddModalOpen,
    setIsAddModalOpen,
    lang, setLang,
    step, setStep,
    form, onSubmit,
    setIsSuccessModalOpen,
    images,
    id,
    idNews,
    category,
  }
}

export default AddUpdateVM
