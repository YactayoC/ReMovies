import moviesAPI from "api/moviesApi";

const api_key: string = "606c9a2f2fc3d159bef0d62a3c9299df";

export const getMoviesTheatresAPI = async () => {
  const { data } = await moviesAPI(
    `/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${api_key}`
  );
  return data;
};

export const getMoviesPopularAPI = async () => {
  const { data } = await moviesAPI(
    `/discover/movie?sort_by=popularity.desc&api_key=${api_key}`
  );
  return data;
};

export const getMoviesPopularKidsAPI = async () => {
  const { data } = await moviesAPI(
    `/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${api_key}`
  );
  return data;
};

export const getMovieDetailsAPI = async (uid: string) => {
  const { data } = await moviesAPI(`/movie/${uid}?api_key=${api_key}`);
  return data;
};
