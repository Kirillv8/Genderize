import { createUrl } from '../utils/createUrl';

export const getData = async (name: string) => {
  const url = createUrl(name);
  const response = fetch(url);
  if (!(await response).ok) {
    throw new Error('Проверь статус');
  }

  const json = (await response).json();
  return json;
};
