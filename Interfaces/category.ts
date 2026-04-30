export interface CategoryRes {
  results: number
  metadata: Metadata
  data: DataCategory[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
}

export interface DataCategory {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
}

export interface Subcategory {
  results: number
  metadata: Metadata
  data: DataSub[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
}

export interface DataSub {
  _id: string
  name: string
  slug: string
  category: string
  createdAt: string
  updatedAt: string
}
