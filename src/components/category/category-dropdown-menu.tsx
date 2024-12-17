import Alert from '@components/ui/alert';
import CategoryListCardLoader from '@components/ui/loaders/category-list-card-loader';
import cn from 'classnames';
import CategoryMenu from '@components/ui/category-menu';

interface CategoryDropdownProps {
  className?: string;
  categoriesLimit?: number;
}

// Define fake categories
const fakeCategories = [
  { id: 1, name: 'Electronics' },
  { id: 2, name: 'Books' },
  { id: 3, name: 'Clothing' },
  { id: 4, name: 'Home & Kitchen' },
  { id: 5, name: 'Sports & Outdoors' },
  { id: 6, name: 'Toys & Games' },
  { id: 7, name: 'Health & Beauty' },
  { id: 8, name: 'Automotive' },
  { id: 9, name: 'Grocery' },
  { id: 10, name: 'Pet Supplies' },
  { id: 11, name: 'Office Supplies' },
  { id: 12, name: 'Music' },
];

export default function CategoryDropdownMenu({
  className,
  categoriesLimit = 12,
}: CategoryDropdownProps) {
  return (
    <div className={cn('absolute z-30 w-72 lg:w-full', className)}>
      <div className="max-h-full">
        <CategoryMenu
          items={fakeCategories.slice(0, categoriesLimit)}
          categoriesLimit={categoriesLimit}
        />
      </div>
    </div>
  );
}
