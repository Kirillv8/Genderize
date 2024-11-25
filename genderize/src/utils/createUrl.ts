export const createUrl = (param: string) => {
  const DOMAIN = 'https://api.genderize.io';
  const URL = `${DOMAIN}?name=${param}`;
  return URL;
};


