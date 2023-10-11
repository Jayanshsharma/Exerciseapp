export const exerciseOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Key": "93f81450b8mshf66ce88be87e39fp14a876jsnc02d5a785598",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const Data = await response.json();

  return Data;
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "93f81450b8mshf66ce88be87e39fp14a876jsnc02d5a785598",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
