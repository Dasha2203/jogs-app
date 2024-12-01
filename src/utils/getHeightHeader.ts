export const getHeightHeader = () => {
  const header = document.querySelector('header');

  return header?.clientHeight || 0;
}