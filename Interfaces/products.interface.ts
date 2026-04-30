export interface AllProducts {
  results: number
  metadata: Metadata
  data: Product[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
  nextPage: number
}

export interface Product {
  reviews: any
  sold?: number
  images: string[]
  subcategory: Subcategory[]
  ratingsQuantity: number
  _id: string
  title: string
  slug: string
  description: string
  quantity: number
  price: number
  imageCover: string
  category: Category
  brand: Brand
  ratingsAverage: number
  createdAt: string
  updatedAt: string
  id: string
  priceAfterDiscount?: number
  availableColors?: any[]
}

export interface Subcategory {
  _id: string
  name: string
  slug: string
  category: string
}

export interface Category {
  _id: string
  name: string
  slug: string
  image: string
}

export interface Brand {
  _id: string
  name: string
  slug: string
  image: string
}

export interface Review {
  results: number
  metadata: Metadata
  data: DataReview[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
}

export interface DataReview {
  _id: string
  review: string
  rating: number
  product: string
  user: User
  createdAt: string
  updatedAt: string
}

export interface User {
  _id: string
  name: string
}
