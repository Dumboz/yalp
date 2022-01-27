import { CategoriesItem, CategoriesUl } from './CategoriesList.styled';
import { makeArray } from 'utils';
import { useLocation, useSearchParams } from 'react-router-dom';
import QueryString from 'qs';

export function CategoriesList({ size, children }) {
  const { search } = useLocation();
  const [, setSearchParams] = useSearchParams();
  const Categories = makeArray(children);

  const filterCategory = (e) => {
    e.preventDefault();

    setSearchParams({
      ...QueryString.parse(search.replace(/^\?/, '')),
      categories: encodeURI(e.target.textContent.toLowerCase()),
    });
  };

  return (
    <CategoriesUl>
      {Categories.map((Category) => (
        <CategoriesItem key={Category} size={size} onClick={filterCategory}>
          {Category}
        </CategoriesItem>
      ))}
    </CategoriesUl>
  );
}

CategoriesList.Categories = function Categories({ children }) {
  return <CategoriesItem>{children}</CategoriesItem>;
};
