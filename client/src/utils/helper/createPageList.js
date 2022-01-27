export const createPageList = ({ currentPage, lastPage }) => {
  const pageList = [currentPage];

  let i = 1;
  while (pageList.length < 9) {
    if (currentPage + i <= lastPage) pageList.push(currentPage + i);
    if (pageList.length >= lastPage) break;
    if (currentPage - i > 0) pageList.unshift(currentPage - i);
    if (pageList.length >= lastPage) break;
    i++;
  }

  return pageList;
};
