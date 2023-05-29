export type Media = {
  id: string;
  imgUrl: string;
  desc: string;
  author: string;
  title: string;
  userId: string;
  onClick?: () => void;
  onSelect: (imageUrl: string) => void;
};
