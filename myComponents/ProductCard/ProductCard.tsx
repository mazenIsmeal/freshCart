import { Product } from '@/Interfaces/products.interface'
import {
  Card
} from "@/components/ui/card"
import Image from 'next/image';
import Link from 'next/link';;
import { FaStar } from 'react-icons/fa';
import { FiRefreshCw } from 'react-icons/fi';
import { IoEyeOutline } from 'react-icons/io5';
import AddProductToCartBtn from '../AddProductToCartBtn/AddProductToCartBtn';
import AddWishlist from '../AddWishlist/AddWishlist';


export default function ProductCard({ product, wishlistIds }: { product: Product }) {

  return (
    <Card className="relative w-full max-w-sm overflow-hidden rounded-2xl shadow-sm group">

      {/* Image */}
      <div className="relative  flex items-center justify-center p-6">
        <Image
          src={product.imageCover}
          alt={product.title}
          width={250}
          height={250}
          className="object-contain"
        />

        {/* Side Icons */}
        <div className="absolute right-3 top-3 flex flex-col gap-3">

          <AddWishlist id={product._id} isInWishlist={wishlistIds?.includes(product.id)} />
          <div className="iconCircle">
            <FiRefreshCw />
          </div>
          <Link href={`/products/${product._id}`} className="iconCircle">
            <IoEyeOutline />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">

        {/* Category */}
        <p className="text-sm text-gray-500">
          {product.category.name}
        </p>

        {/* Title */}
        <h3 className="text-lg font-medium">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 text-sm">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <span className="text-gray-500">
            {product.ratingsAverage} ({product.ratingsQuantity})
          </span>
        </div>

        {/* Price + Add Button */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-bold">
            {product.price} EGP
          </span>

          <AddProductToCartBtn productId={product._id} />

        </div>
      </div>
    </Card>
  );
}
