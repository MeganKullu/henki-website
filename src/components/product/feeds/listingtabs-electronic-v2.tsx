"use client";
import { LIMITS } from '@framework/utils/limits';
import ListingTabsList from "@components/product/listingtabs/listingtabs-list-v2";
import ListingTabsContainer from "@components/product/listingtabs/listingtabs-container-v2";

type BoxProps = {
  showBanner?: string;
};

// Mock category data
const mockCategory = {
  id: 1,
  name: 'Electronics',
  description: 'Latest electronic gadgets and devices',
};

// Mock electronic products data
const mockProducts = [
  { id: 1, name: 'Smartphone', price: 699, imageUrl: '/assets/images/products/smartphone.jpg' },
  { id: 2, name: 'Laptop', price: 999, imageUrl: '/assets/images/products/laptop.jpg' },
  { id: 3, name: 'Headphones', price: 199, imageUrl: '/assets/images/products/headphones.jpg' },
  { id: 4, name: 'Smartwatch', price: 299, imageUrl: '/assets/images/products/smartwatch.jpg' },
  { id: 5, name: 'Camera', price: 499, imageUrl: '/assets/images/products/camera.jpg' },
  // Add more mock products as needed
];

export default function ListingTabsElectronicFeed(props: BoxProps) {
  const { showBanner } = props;
  const banner_url = '/assets/images/collection/banner_cate_home7_3.jpg';

  return (
    <div className="mb-8 lg:mb-12">
      <div className="listing-tabs">
        <ListingTabsList className={`ltabs-heading`} data={mockCategory} />
        <ListingTabsContainer 
          data={mockProducts} 
          category={mockCategory} 
          isLoading={false} // Set to false since we're using mock data
          error={null} // No error since we're using mock data
          showBanner={showBanner} 
          banner_url={banner_url} 
        />
      </div>
    </div>
  );
}
