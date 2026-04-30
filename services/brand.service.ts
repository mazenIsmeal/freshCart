export async function getAllBrands() {
    const req = await fetch('https://ecommerce.routemisr.com/api/v1/brands', {
            next: {
                revalidate: 10
            }
        })
        const data = await req.json();
        return data;
}

export async function getBrandsById(id: string) {
    const req = await fetch(`https://ecommerce.routemisr.com/api/v1/brands/${id}`, {
            next: {
                revalidate: 10
            }
        })
        const data = await req.json();
        return data;
}

export async function getDataBrand(id: string) {
    const req = await fetch(`https://ecommerce.routemisr.com/api/v1/products?brand=${id}`, {
            next: {
                revalidate: 10
            }
        })
        const data = await req.json();
        return data;
}