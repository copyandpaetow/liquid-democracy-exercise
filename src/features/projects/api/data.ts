const TAGS = ["tag1", "tag2", "tag3", "tag4"];
const ENTRIES = 300;
const AMOUNT_PER_PAGE = 6;
const TIMEOUT_IN_MS = 2000;

type Entry = {
  headline: string;
  subHeadline: string;
  copy: string;
  tags: string[];
  progress: Progress;
  image: Image;
};

type Progress = {
  description: string;
  duration: number;
  current: number;
};

type Image = {
  url: string;
  description: string;
  attribution: string;
};

export type Data = {
  entries: number;
  amountPerPage: number;
  data: Entry[];
};

const buildEntry = (): Entry => ({
  subHeadline: "subheadline",
  headline: "your headline here",
  copy: "more copy here. Could be longer or not. Nobody nows",
  tags: TAGS.filter(() => Math.random() > 0.5),
  progress: {
    description: "days left",
    current: Math.random() * 10,
    duration: 70,
  },
  image: {
    url: "/image1.png",
    description: "view of a beautiful city",
    attribution: "copyright by photograph",
  },
});

const data: Data = {
  entries: ENTRIES,
  amountPerPage: AMOUNT_PER_PAGE,
  data: Array.from({ length: AMOUNT_PER_PAGE }).map(buildEntry),
};

export const getData = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.25
        ? resolve(JSON.stringify(data))
        : reject("couldnt connect");
    }, TIMEOUT_IN_MS);
  });
