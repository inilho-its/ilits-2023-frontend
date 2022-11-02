export const getUrlShortener = async (alias: string) => {
  const res = await fetch(`https://inilho.its.ac.id/api/shortener/${alias}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return res;
};

export default getUrlShortener;
