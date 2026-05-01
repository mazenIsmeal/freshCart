'use client'
import {
  Card
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaCheck, FaStar, FaTruck } from "react-icons/fa";
import { Product, Review } from "@/Interfaces/products.interface";

export function ProductDetailsTabs({ data, reviews }: { data: Product, reviews: Review }) {


  const ratingsCount = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };

  reviews.data.forEach((review) => {
    ratingsCount[review.rating as 1 | 2 | 3 | 4 | 5]++;
  });

  const total = reviews.results;

  const getPercentage = (count: number) => {
    return total ? Math.round((count / total) * 100) : 0;
  };

  return (
    <Tabs
      defaultValue="overview"
      className="mt-5 bg-white rounded-lg shadow-sm overflow-hidden gap-0"
    >
      <TabsList className="border-b border-gray-200 mb-0">
        <TabsTrigger
          value="overview"
          className="px-6 py-5 rounded-none font-medium whitespace-nowrap transition-all duration-200 text-gray-600 hover:text-green-600 hover:bg-gray-50"
        >
          Product Details
        </TabsTrigger>
        <TabsTrigger
          value="analytics"
          className="px-6 py-4 rounded-none font-medium whitespace-nowrap transition-all duration-200 text-gray-600 hover:text-green-600 hover:bg-gray-50"
        >
          Reviews({reviews.results})
        </TabsTrigger>
        <TabsTrigger
          value="reports"
          className="px-6 py-4 rounded-none font-medium whitespace-nowrap transition-all duration-200 text-gray-600 hover:text-green-600 hover:bg-gray-50"
        >
          Shipping & Returns
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card className="rounded-0">
          <div className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  About this Product
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {data.description}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">
                    Product Information
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between text-sm">
                      <span className="text-gray-500">Category</span>
                      <span className="text-gray-900 font-medium">
                        {data.category.name}
                      </span>
                    </li>
                    <li className="flex justify-between text-sm">
                      <span className="text-gray-500">Subcategory</span>
                      <span className="text-gray-900 font-medium">
                        {data.subcategory.name}
                      </span>
                    </li>
                    <li className="flex justify-between text-sm">
                      <span className="text-gray-500">Brand</span>
                      <span className="text-gray-900 font-medium">{data.brand.name}</span>
                    </li>
                    <li className="flex justify-between text-sm">
                      <span className="text-gray-500">Items Sold</span>
                      <span className="text-gray-900 font-medium">
                        {data.sold}+ sold
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <svg
                        data-prefix="fas"
                        data-icon="check"
                        className="svg-inline--fa fa-check text-primary-600 mr-2 w-4"
                        role="img"
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"
                        />
                      </svg>
                      Premium Quality Product
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <svg
                        data-prefix="fas"
                        data-icon="check"
                        className="svg-inline--fa fa-check text-primary-600 mr-2 w-4"
                        role="img"
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"
                        />
                      </svg>
                      100% Authentic Guarantee
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <svg
                        data-prefix="fas"
                        data-icon="check"
                        className="svg-inline--fa fa-check text-primary-600 mr-2 w-4"
                        role="img"
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"
                        />
                      </svg>
                      Fast &amp; Secure Packaging
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <svg
                        data-prefix="fas"
                        data-icon="check"
                        className="svg-inline--fa fa-check text-primary-600 mr-2 w-4"
                        role="img"
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"
                        />
                      </svg>
                      Quality Tested
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </TabsContent>
      <TabsContent value="analytics">
        <Card>
          <div className="p-6">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-gray-900 mb-2">5</div>
                  <div className="flex text-yellow-400">
                    <FaStar />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Based on {reviews.results} reviews
                  </p>
                </div>
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm text-gray-600 w-8">5 star</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                        style={{ width: `${getPercentage(ratingsCount[5])}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-500 w-10">{getPercentage(ratingsCount[5])}%</span>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm text-gray-600 w-8">4 star</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                        style={{ width: `${getPercentage(ratingsCount[4])}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-500 w-10">{getPercentage(ratingsCount[4])}%</span>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm text-gray-600 w-8">3 star</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                        style={{ width: `${getPercentage(ratingsCount[3])}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-500 w-10">{getPercentage(ratingsCount[3])}%</span>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm text-gray-600 w-8">2 star</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                        style={{ width: `${getPercentage(ratingsCount[2])}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-500 w-10">{getPercentage(ratingsCount[2])}%</span>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm text-gray-600 w-8">1 star</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                        style={{ width: `${getPercentage(ratingsCount[1])}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-500 w-10">{getPercentage(ratingsCount[1])}%</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <div className="text-center py-8 ">
                  <FaStar className="text-4xl text-gray-300 mb-3 " />
                  <p className="text-gray-500">
                    Customer reviews will be displayed here.
                  </p>
                  <button className="mt-4 text-primary-600 hover:text-primary-700 font-medium">
                    Write a Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </TabsContent>
      <TabsContent value="reports">
        <Card>
          <div className="p-6">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-linear-to-br from-primary-50 to-green-100 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                      <FaTruck />
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      Shipping Information
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <FaCheck />
                      <span>Free shipping on orders over $50</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <FaCheck />
                      <span>Standard delivery: 3-5 business days</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <FaCheck />
                      <span>
                        Express delivery available (1-2 business days)
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <FaCheck />
                      <span>Track your order in real-time</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                      <FaCheck />
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      Returns &amp; Refunds
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <FaCheck />
                      <span>30-day hassle-free returns</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <FaCheck />
                      <span>Full refund or exchange available</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <FaCheck />
                      <span>Free return shipping on defective items</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <FaCheck />
                      <span>Easy online return process</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 flex items-center gap-4">
                <div className="h-14 w-14 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center shrink-0">
                  <FaCheck />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Buyer Protection Guarantee
                  </h4>
                  <p className="text-sm text-gray-600">
                    Get a full refund if your order doesn't arrive or isn't as
                    described. We ensure your shopping experience is safe and
                    secure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
