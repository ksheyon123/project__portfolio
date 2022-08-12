export const ascendingOrder = (list: any[], key: string) => {
  return list.sort((a, b) => a[key] - b[key]);
}

export const descendingOrder = (list: any[], key: string) => {
  return list.sort((a, b) => a[key] - b[key]);
}

export const dateToLocaleString = (date: number) => {
  return new Date(date).toISOString().substring(0, 10);
}

export const classNameBinder = (prefix: string, suffix: string, cond: any) => {
  const space = " ";
  if (cond) {
    return prefix + space + suffix;
  }

  return prefix;
}