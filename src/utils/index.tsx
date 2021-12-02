export const ascendingOrder = (list: any[], key: string) => {
  return list.sort((a, b) => a[key] - b[key]);
}

export const descendingOrder = (list: any[], key: string) => {
  return list.sort((a, b) => a[key] - b[key]);
}