export type News = {
  articles: [
    {
      source: {
        id: null;
        name: string;
      };
      author: null;
      title: string;
      description: string;
      url: string;
      urlToImage: string;
      publishedAt: string;
      content: string;
    },
  ];
};

export type descriptionNews = {
  source: {
    id: null;
    name: string;
  };
  author: null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type Dummy = {
  id: string;
  title: string;
  desc: string;
  thumbnail: string;
  category: string;
};
