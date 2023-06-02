export type TResult = {
  extract: string;
  index: number;
  pageimage: string;
  pageid: number;
  ns: number;
  title: string;
  thumbnail: {
    height: number;
    width: number;
    source: string;
  };
};
export type TResponse = {
  query: {
    pages: {
      [key: string]: TResult;
    };
  };
};
