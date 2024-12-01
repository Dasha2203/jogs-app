export const getDate = (isoDate: string) => {
  const date = new Date(isoDate);

  const formatter = new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })

  return formatter.format(date);
};
