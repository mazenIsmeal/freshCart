import { Category } from "@/Interfaces/category";

export async function getAllCategory():Promise<Category> {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/categories')
    const data = await res.json();
    return data
}

export async function getRelatedProduct(id:string) {
    const req = await fetch(`https://ecommerce.routemisr.com/api/v1/products?category[in]=${id}`, {
            next: {
                revalidate: 10
            }
        })
        const data = await req.json();
        return data;
}

export async function getSubcategory() {
    const req = await fetch(`https://ecommerce.routemisr.com/api/v1/subcategories`, {
            next: {
                revalidate: 10
            }
        })
        const data = await req.json();
        return data;
}


export async function getCategoryById(id: string) {
    const req = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${id}`, {
            next: {
                revalidate: 10
            }
        })
        const data = await req.json();
        return data;
}
export async function getSubcategoryById(id: string) {
    const req = await fetch(`https://ecommerce.routemisr.com/api/v1/subcategories/${id}`, {
            next: {
                revalidate: 10
            }
        })
        const data = await req.json();
        return data;
}