export type Work = {
  name: string;
  description: string;
  workImage: WorkImage;
  skills: Array<string>;
};

type WorkImage = {
  image: string;
};
