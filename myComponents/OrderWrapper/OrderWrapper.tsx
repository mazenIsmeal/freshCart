'use client'
import { useState } from 'react';
import DetailsCheekOut, { OrderCheekout } from '../DetailsCheekOut/DetailsCheekOut'
import OrderSummary from '../OrderSummary/OrderSummary'
import { Product } from '@/Interfaces/getCartLogged.interface'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formOrderSchema } from '@/Schema/registerSchema';
import { useParams } from 'next/navigation';
import { cashOrder, vaisOrder } from '@/app/cart/cart.action';
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation';

export default function OrderWrapper({ products, totalCartPrice }: { products: Product[], totalCartPrice: number }) {
    const { cartId } = useParams();
    const router = useRouter();

    const methods = useForm<OrderCheekout>({
        resolver: zodResolver(formOrderSchema),
        defaultValues: {
            shippingAddress: {
                city: "",
                details: "",
                phone: ''
            }
        },
    });
    const [paymentMethod, setPaymentMethod] = useState<'cash' | 'online'>('cash');

    const onSubmit = async (data: OrderCheekout) => {
        console.log("ORDER DATA:", data);
        console.log(paymentMethod);

        if (paymentMethod === 'cash') {
            cashOrder(cartId as string, data);
            router.push('/');
        } else if (paymentMethod === 'online') {
            const redirectUrl = await vaisOrder(cartId as string, data)
            if (redirectUrl) {
                redirect(redirectUrl)
            }
        }

    };
    return <>
        {products.length === 0 ? <>
            <p className='text-center my-5 font-bold'>No Product in cart go to shop</p>
        </> : <>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <DetailsCheekOut register={methods.register} formState={methods.formState} paymentMethod={paymentMethod}
                        setPaymentMethod={setPaymentMethod} />
                    <OrderSummary products={products} totalCartPrice={totalCartPrice} paymentMethod={paymentMethod} />
                </div>
            </form>
        </>}

    </>
}
