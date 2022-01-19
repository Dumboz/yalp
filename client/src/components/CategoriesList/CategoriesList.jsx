import { CategoriesItem, CategoriesUl } from './CategoriesList.styled';
import { makeArray } from 'utils';
export function CategoriesList({ size, children }) {
  const Categories = makeArray(children);

  return (
    <CategoriesUl>
      {Categories.map((Category) => (
        <CategoriesItem size={size}>{Category}</CategoriesItem>
      ))}
    </CategoriesUl>
  );
}

CategoriesList.Categories = function Categories({ children }) {
  return <CategoriesItem>{children}</CategoriesItem>;
};
