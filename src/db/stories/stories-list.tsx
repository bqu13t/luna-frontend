type StoryItem = {
  id: string
  linkName: string
  title: string
  description: string
  title_img_src: string
  title_img_width: string
  title_img_height: string
  content_img_src: string
  content_img_width: string
  content_img_height: string
}

const storiesList: StoryItem[] = [
  {
    id: "story-6",
    linkName: "Время выбирать сторону",
    title: "Мы сделали темную тему",
    description: "Она включится автоматически, если на вашем устройстве активирован темный режим",
    title_img_src: "/stories/titles/hot-chocolate-delivery-title.png",
    title_img_width: "90",
    title_img_height: "135",
    content_img_src: "/stories/content/hot-chocolate-delivery-content.png",
    content_img_width: "360",
    content_img_height: "540",
  },
  {
    id: "story-5",
    linkName: "Время выбирать сторону",
    title: "Мы сделали темную тему",
    description: "Она включится автоматически, если на вашем устройстве активирован темный режим",
    title_img_src: "/stories/titles/dark-theme-title.png",
    title_img_width: "90",
    title_img_height: "135",
    content_img_src: "/stories/content/dark-theme-content.png",
    content_img_width: "360",
    content_img_height: "540",
  },
  {
    id: "story-4",
    linkName: "В ожидании заказа)",
    title: "Когда думаешь что курьер что-то напутал",
    description: "Космонавт на Луне смотрит на пиццу пепперони",
    title_img_src: "/stories/titles/astronauts-with-pizza-title.png",
    title_img_width: "90",
    title_img_height: "135",
    content_img_src: "/stories/content/astronauts-with-pizza.png",
    content_img_width: "360",
    content_img_height: "540",
  },
  {
    id: "story-3",
    linkName: "история 3 - шоколадный молочный коктейль",
    title: "шоколадный молочный коктейль со взбитыми сливками и печеньем орео",
    description: "шоколадный молочный коктейль со взбитыми сливками и печеньем орео",
    title_img_src: "/stories/titles/story-2.png",
    title_img_width: "90",
    title_img_height: "135",
    content_img_src: "/stories/content/story-2.png",
    content_img_width: "360",
    content_img_height: "540",
  },
  {
    id: "story-2",
    linkName: "История 2 - Пицца",
    title: "Процесс приготовления пиццы",
    description: "пицца ЛунаФуд",
    title_img_src: "/stories/titles/story-3.png",
    title_img_width: "90",
    title_img_height: "135",
    content_img_src: "/stories/content/story-3.png",
    content_img_width: "360",
    content_img_height: "540",
  },
  {
    id: "story-1",
    linkName: "Шоколадные кексы",
    title: "Шоколадные кексы",
    description: "Посмотрите на наши кексики, аппетитныу, нежные, с густой шоколадной начинкой",
    title_img_src: "/stories/titles/story-4.png",
    title_img_width: "90",
    title_img_height: "135",
    content_img_src: "/stories/content/story-4.png",
    content_img_width: "360",
    content_img_height: "540",
  },
]

export default storiesList
