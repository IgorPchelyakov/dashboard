export type Banner = {
  id: string;
  title: string;
  imgUrl: string;
  block: string;
  publishAt: Date;
  endAt: Date;
  image?: File | null;
};
