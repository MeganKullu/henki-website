'use client';
import { LIMITS } from '@framework/utils/limits';
import SupperCategoryList from "@components/suppercategory/suppercategory-popular-list";
import SupperCategoryContainer from "@components/suppercategory/suppercategory-popular-container";
import SectionHeader from "@components/common/section-header";
import BannerGrid from "@components/common/banner-grid";
import { homeFivePopularCategories as bannerHeroCategoies } from "@framework/static/banner";

interface CategoriesProps {
  className?: string;
  rowCarousel?: number;
  showBanner?: boolean;
}

// Mock category data
const mockCategories = [
  { id: 1, name: 'Smartphones', description: 'Latest smartphones available' },
  { id: 2, name: 'Laptops', description: 'High-performance laptops' },
  { id: 3, name: 'Headphones', description: 'Noise-cancelling headphones' },
  { id: 4, name: 'Smartwatches', description: 'Smartwatches with health tracking' },
  { id: 5, name: 'Cameras', description: 'Digital cameras for photography' },
];

// Mock products data
const mockProducts = [
  { id: 1, name: 'iPhone 13', price: 799, imageUrl: '/assets/images/products/iphone13.jpg' },
  { id: 2, name: 'MacBook Pro', price: 1299, imageUrl: '/assets/images/products/macbookpro.jpg' },
  { id: 3, name: 'Sony WH-1000XM4', price: 349, imageUrl: '/assets/images/products/sony_headphones.jpg' },
  { id: 4, name: 'Apple Watch Series 6', price: 399, imageUrl: '/assets/images/products/apple_watch.jpg' },
  { id: 5, name: 'Canon EOS R5', price: 3899, imageUrl: '/assets/images/products/canon_eos_r5.jpg' },
];

const SuppercategoryPopular: React.FC<CategoriesProps> = ({ className = '', rowCarousel = 1, showBanner }) => {
  // Use mock data instead of queries
  const category = mockCategories; // Mock category data
  const products = mockProducts; // Mock products data
  const isLoading = false; // Set to false since we're using mock data
  const error = null; // No error since we're using mock data

  const backgroundThumbnail = 'ltr' ? '/assets/images/collection/cate_1.jpg' : '/assets/images/collection/cate_1_rtl.jpg';

  return (
    <div className={className}>
      <SectionHeader
        sectionHeading="text-popular-category-this-month"
        className="mb-3"
      />
      <div className="xl:flex border border-black/10 rounded bg-white w-full">
        <div className={`xl:w-[300px] p-5`}>
          <SupperCategoryList className={`supper-category--list`} data={category} showBanner={showBanner} />
        </div>

        {showBanner && (
          <BannerGrid
            data={bannerHeroCategoies}
            grid={1}
            className="hidden xl:flex staticBanner--slider py-6"
          />
        )}
        <div className={`${showBanner ? 'banner-main-content' : 'popular-main-content'} p-2.5 grow`}>
          <SupperCategoryContainer data={products} isLoading={isLoading} error={error} rowCarousel={rowCarousel} showBanner={showBanner} />
        </div>
      </div>
    </div>
  );
}

export default SuppercategoryPopular;
