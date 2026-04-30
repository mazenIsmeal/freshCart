import { AllProducts } from "@/Interfaces/products.interface";

export async function getAllProducts():Promise<AllProducts> {
    const req = await fetch('https://ecommerce.routemisr.com/api/v1/products', {
        cache: 'force-cache'
    });
    const res = await req.json();
    return res
  }

  export async function getProductDetails(id: string) {
        const req = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`, {
            next: {
                revalidate: 10
            }
        })
        if (!req) {
  throw new Error("Failed to fetch");
}
        const data = await req.json();
        return data;
    }

    export async function getReviewsProduct(id: string) {
        const req = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}/reviews`, {
            next: {
                revalidate: 10
            }
        })
        const data = await req.json();
        return data;
    }


    export async function getProductDataSubcategory(id: string) {
        const req = await fetch(`https://ecommerce.routemisr.com/api/v1/products?subcategory=${id}`, {
            next: {
                revalidate: 10
            }
        })
        const data = await req.json();
        return data;
    }
