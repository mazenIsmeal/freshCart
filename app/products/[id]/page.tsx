import { Product, Review } from "@/Interfaces/products.interface";
import QuantityState from "@/myComponents/QuantityState/QuantityState";
import SliderProductDetails from "@/myComponents/SliderProductDetails/SliderProductDetails";
import { getProductDetails, getReviewsProduct } from "@/services/allProducts.service";
import Link from "next/link";
import {  FaStar } from "react-icons/fa";
import { ProductDetailsTabs } from './../../../myComponents/ProductDetailsTabs/ProductDetailsTabs';
import CategoryWrapper from "@/myComponents/CategoryWrapper/CategoryWrapper";

type Params = {
  id: string;
};

export default async function DetailsProduct({
  params,
}: {params: Params}) {
  const { id } = await params;

  
  const { data }: { data: Product } = await getProductDetails(id);
  console.log(data.title, 'form product Details');
  
  const reviews: Review = await getReviewsProduct(data._id);

  return (
    <>
      <div className="container">
        {/* <nav aria-label="Breadcrumb" className="py-4">
          <div className="container mx-auto px-4">
            <ol className="flex items-center flex-wrap gap-1 text-sm">
              <li className="flex items-center">
                <Link
                  className="text-gray-500 hover:text-primary-600 transition flex items-center gap-1.5"
                  href="/"
                >
                  <IoIosArrowForward />
                  Home
                </Link>
                <IoIosArrowForward />
              </li>
              <li className="flex items-center">
                <Link
                  className="text-gray-500 hover:text-primary-600 transition flex items-center gap-1.5"
                  href={`/category/${data.category._id}`}
                >
                  Women's Fashion
                </Link>
                <IoIosArrowForward />
              </li>
              <li className="flex items-center">
                <Link
                  className="text-gray-500 hover:text-primary-600 transition flex items-center gap-1.5"
                  href={`/products/subcategory/${data.category._id}`}
                >
                  {data.category.slug}
                </Link>
                <IoIosArrowForward />
              </li>
              <li className="text-gray-900 font-medium truncate max-w-xs">
                {data.category.name}
              </li>
            </ol>
          </div>
        </nav> */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm p-4 sticky top-4">
              <SliderProductDetails images={data.images} />
            </div>
          </div>
          <div className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <Link
                  className="bg-primary-50 text-primary-700 text-xs px-3 py-1.5 rounded-full hover:bg-primary-100 transition"
                  href="/categories"
                >
                  {data.category.name}
                </Link>
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full">
                  {data.brand.name}
                </span>
              </div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {data.title}
              </h1>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex text-yellow-400">
                  {Array.from({ length: Math.round(data.ratingsAverage) }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <span className="text-sm text-gray-600">{data.ratingsAverage} ({data.reviews.length} reviews)</span>
              </div>
              <div className="flex items-center flex-wrap gap-3 mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  {data.price} EGP
                </span>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <span className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-green-50 text-green-700">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  In Stock
                </span>
              </div>
              <div className="border-t border-gray-100 pt-5 mb-6">
                <p className="text-gray-600 leading-relaxed">
                  {data.description}
                </p>
              </div>
              <QuantityState data={data} />
              <div className="border-t border-gray-100 pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                      <svg
                        data-prefix="fas"
                        data-icon="truck-fast"
                        className="svg-inline--fa fa-truck-fast"
                        role="img"
                        viewBox="0 0 640 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M64 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L621.3 192c12 12 18.7 28.3 18.7 45.3L640 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-3.3 0c-35.3 0-64-28.7-64-64l0-48-40 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 240c-13.3 0-24-10.7-24-24s10.7-24 24-24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 144c-13.3 0-24-10.7-24-24S10.7 96 24 96l40 0zM576 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM256 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">
                        Free Delivery
                      </h4>
                      <p className="text-xs text-gray-500">Orders over $50</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                      <svg
                        data-prefix="fas"
                        data-icon="arrow-rotate-left"
                        className="svg-inline--fa fa-arrow-rotate-left"
                        role="img"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M256 64c-56.8 0-107.9 24.7-143.1 64l47.1 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 192c-17.7 0-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0S64 14.3 64 32l0 54.7C110.9 33.6 179.5 0 256 0 397.4 0 512 114.6 512 256S397.4 512 256 512c-87 0-163.9-43.4-210.1-109.7-10.1-14.5-6.6-34.4 7.9-44.6s34.4-6.6 44.6 7.9c34.8 49.8 92.4 82.3 157.6 82.3 106 0 192-86 192-192S362 64 256 64z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">
                        30 Days Return
                      </h4>
                      <p className="text-xs text-gray-500">Money back</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                      <svg
                        data-prefix="fas"
                        data-icon="shield-halved"
                        className="svg-inline--fa fa-shield-halved"
                        role="img"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">
                        Secure Payment
                      </h4>
                      <p className="text-xs text-gray-500">100% Protected</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductDetailsTabs data={data} reviews={reviews} />
        <CategoryWrapper data={data} />
      </div>
    </>
  );
}
