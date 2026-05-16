import AddUpdateVM from './AddUpdateVM'
import { Badge, Box, Button, Grid, Group, Image, InputLabel, Modal, Paper, Stack, Text, TextInput } from '@mantine/core'
import az from "../../../../assets/AZ flag.svg"
import en from "../../../../assets/UK flag.svg"
import news from "../../../../assets/Vector.svg"
import newsWhite from "../../../../assets/VectorWhite.svg"
import announcement from "../../../../assets/announcement.svg"
import announcementWhite from "../../../../assets/announcementWhite.svg"
import gallery from "../../../../assets/gallery.svg"
import trash from "../../../../assets/trash.svg"
import imagesGalery from "../../../../assets/Icon.svg"
import { TextEditor } from '../../../components/richTextEditor'
import { Controller } from 'react-hook-form'
export const AddUpdate = () => {
  const {
    isAddModalOpen,
    setIsAddModalOpen,
    lang,
    setLang,
    step,
    setStep,
    form,
    onSubmit,
    setIsSuccessModalOpen,
    images,
    id,
    idNews,
    category,
  } = AddUpdateVM()
  return (
    
    <Modal size={"lg"} opened={isAddModalOpen} onClose={()=>{setIsAddModalOpen(false)}}>
        <Stack gap="md">
        <Group justify="flex-start">
          <div className='flex gap-2'>
        <div onClick={()=>{setLang("az")}} className={`border ${lang === "az" ? "border-blue-900" : "border-neutral-200"} w-16 flex items-center justify-center gap-2 rounded-2xl`}>
          <Image className='w-4! h-4!' src={az}/>AZ
      </div>
        <div onClick={()=>{setLang("en")}} className={`border ${lang === "en" ? "border-blue-900" : "border-neutral-200"} w-16 flex items-center justify-center gap-2 rounded-2xl`}>
          <Image className='w-4! h-4!' src={en}/>EN
        </div>
      </div>
        </Group>
        <Group justify="space-between" align="flex-end" mt="xs">
          <Text className='font-medium! text-[28px]!' >
            Create News / Announcement
          </Text>
          <Text size="lg" c="black" className='font-medium! text-2xl!'>
            <Text component="span" className='font-medium! text-2xl!' ><span className='text-blue-900'>{step}</span></Text>/2
          </Text>
        </Group>
        <Grid>
          <Grid.Col span={6}>
            <Box 
              h={4} 
             className={`bg-blue-900! rounded-xs transition-colors duration-300 ease-out`} 
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Box 
              h={4} 
             className={`
                ${step === 2 ? 'bg-blue-900' : 'bg-slate-200'}
                rounded-xs transition-colors duration-300 ease-out`}  
            />
          </Grid.Col>
        </Grid>
        {step ===1 ? (
        <Stack gap="sm" mt="md">
          <TextInput
            label="Title"
            placeholder="Enter title"
            classNames={{
              label: 'text-gray-700 font-medium mb-1',
              input: 'focus:border-blue-500'
            }}
            {...form.register("title")}
          />
          
          <TextInput
            label={id ? "Url" : "Slug"}
            placeholder="naa.edu.az/"
            mt="xs"
            classNames={{
              label: 'text-gray-700 font-medium mb-1',
            }}
            {...form.register("url")}
          />
          <InputLabel className='text-gray-700! font-medium! mb-1!'>Category</InputLabel>
          <div className='flex gap-2 mb-2'>
            <Button
            onClick={() => form.setValue("category", 1)}
            className={`${ category === 1 ? "bg-blue-700! text-white" : "bg-transparent! text-blue-700!"}  border! border-blue-600! font-normal! rounded-full!`}>
              <Image src={category===2 ? news : newsWhite}/>
              <span>News</span>
            </Button>
            <Button 
            onClick={() => form.setValue("category", 2)}
            className={`${ category === 2 ? "bg-blue-700! text-white" : "bg-transparent! text-blue-700!"} border! border-blue-600! text-[16px]! font-normal! rounded-full!`}>
              <Image src={category===1 ? announcement: announcementWhite}/>
              <span>Announcement</span>
            </Button>
          </div>
          <InputLabel className='text-gray-700! font-medium!'>Cover Image</InputLabel>
          <Paper shadow='xs' className='flex! py-3! items-center! justify-center! gap-3!'>
            {id ? (
              <div className='w-full px-3'>{idNews?.img?.map((item, index)=>(
                <div key={index}>
                <Image className='w-30! rounded-[10px]!' src={item.url}/>
                <Badge>{item?.url?.slice(27)}</Badge>
                </div>
              ))}</div>
            ):(<div><Image className='w-5!' src={gallery}/> <span className='text-[16px] text-zinc-500'>Upload Cover Image</span></div>)}
          </Paper>
          <Paper className='flex! flex-col! gap-4!' p={'sm'} shadow='xs'>
            <div className='flex flex-col'>
              <h1 className='text-sm font-medium'>HTML Content</h1>
            <span className='text-sx font-normal text-zinc-500'>Use the toolbar to format your text with bold, italic, headers, lists, and more.</span>
            </div>
            <Controller
  control={form.control}
  name="description"
  render={({ field: { value, onChange } }) => (
    <TextEditor
      value={value || ""} 
      onChange={(val) => {
        if (val !== value) {
          onChange(val);
        }
      }}
    />
  )}
/>
          </Paper>
          <Button onClick={()=>{setStep(2)}} className='bg-blue-900! font-medium! text-sm! rounded-[10px]!'>Next</Button>
        </Stack>
      
      ) : (<Stack className='h-120! flex! flex-col! justify-between!'><Paper shadow='sm'className='p-4!'>
        <h1 className='font-medium text-sm'>Gallery Images</h1>
        <span className='text-sm text-zinc-500'>JPG/PNG, multiple allowed</span>
        <input
  type="file"
  multiple
  hidden
  id="gallery-upload"
  onChange={(e) => {
  const files = Array.from(e.target.files || []);

  const newImages = files.map(file => ({
    file,
    url: URL.createObjectURL(file),
  }));

  const prevImages = form.getValues("img") || [];

  form.setValue("img", [...prevImages, ...newImages]);
}}
/>

<label htmlFor="gallery-upload">
  <Paper
    withBorder
    className='p-15! flex! flex-col! items-center justify-center gap-4! cursor-pointer!'
  >
    <Image className='w-7!' src={imagesGalery}/>
    <span className='text-sm font-normal text-zinc-500'>
      Upload an image
    </span>
  </Paper>
  <div className="flex gap-2 mt-3">
  {images?.map((item, index) => (
    <div key={index} className="relative w-25 h-25">
      {/* Sil düyməsi */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          if (item.url.startsWith('blob:')) {
            URL.revokeObjectURL(item.url);
          }
          
          const prevImages = form.getValues("img") || [];
          form.setValue("img", prevImages.filter((_, i) => i !== index));
        }}
        className="absolute top-2 right-1 text-white bg-white rounded-full w-7 h-7 flex items-center justify-center text-xs z-10 cursor-pointer shadow-md transition-colors"
      >
        <Image w={15} src={trash}/>
      </button>
      <img
        src={item.url}
        className="w-full h-full object-cover rounded-[10px]"
      />
    </div>
  ))}
</div>
</label>
        </Paper>
        <Paper shadow='xs' className='flex! justify-between! px-7 py-3!'>
          <Button onClick={()=>{setStep(1)}} className='bg-transparent! text-zinc-500! text-sm! font-medium!'>Cancel</Button>
          <Button onClick={form.handleSubmit(onSubmit)} className='bg-blue-900! text-sm! font-medium!'>Submit</Button>
         </Paper>
        </Stack>)}</Stack>
    </Modal>
  )
}