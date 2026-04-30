import { Product } from '@/Interfaces/products.interface'
import { getRelatedProduct } from '@/services/category.service';
import React from 'react'
import SliderCategory from '../SliderCategory/SliderCategory';

export default async function CategoryWrapper({ data }: { data: Product }) {
    const related = await getRelatedProduct(data.category._id)
    console.log(related, 'related');

    return <>
        <SliderCategory data={related.data} />
    </>
}
