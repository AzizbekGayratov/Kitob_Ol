import ListOfAnnouncements from "./ListOfAnnouncements";

interface ListItemProps {
  name: string;
  image: string;
  data: string;
  id: number;
}

const data: ListItemProps[] = [
  {
    name: "Kitoblar",
    image: "https://picsum.photos/200",
    data: "04.09.2024 12:00",
    id: 1,
  },
  {
    name: "Xamsa",
    image: "https://picsum.photos/200",
    data: "04.09.2024 12:00",
    id: 2,
  },
  {
    name: "Harry Potter",
    image: "https://picsum.photos/200",
    data: "04.09.2024 12:00",
    id: 3,
  },
];

export default function AnnouncementMain() {
  return (
    <div className="md:pt-10 pt-5 md:pl-20 pl-4 md:pb-[90px] pb-[60px] md:pr-[100px] pr-4">
      <ul className="flex flex-col gap-4 sm:gap-5">
        {data.map((item: ListItemProps) => (
          <ListOfAnnouncements key={item.id} data={item} />
        ))}
      </ul>
    </div>
  );
}
