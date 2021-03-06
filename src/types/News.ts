// export type News = {
//   articles: [
//     {
//       source: {
//         id: null;
//         name: string;
//       };
//       author: null;
//       title: string;
//       description: string;
//       url: string;
//       urlToImage: string;
//       publishedAt: string;
//       content: string;
//     },
//   ];
// };

export type News = {
  title: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  description: string;
  content: string;
};

export type Dummy = {
  id: string;
  title: string;
  desc: string;
  thumbnail: string;
  category: string;
};

export type ArticleResponse = {
  status: string;
  totalResults: number;
  articles: {
    title: string;
    url: string;
    publishedAt: string;
    description: string;
    content: string;
    urlToImage: string;
  }[];
};
