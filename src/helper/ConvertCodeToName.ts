import { data } from '../data';

export const ACodeToName = (Alphacode: string) => {
  const NameFilter = data.filter(
    (element) => element?.alpha3Code === Alphacode
  );
  const NewName = NameFilter[0]?.name;
  return NewName;
};
