import { CategoriesItem, CategoriesUl } from './CategoriesList.styled';
import { makeArray } from 'utils';
export function CategoriesList({ children }) {
  const Categories = makeArray(children);

  return (
    <CategoriesUl>
      {Categories.map((Category) => (
        <CategoriesItem>{Category}</CategoriesItem>
      ))}
    </CategoriesUl>
  );
}

CategoriesList.Categories = function Categories({ children }) {
  return <CategoriesItem>{children}</CategoriesItem>;
};
