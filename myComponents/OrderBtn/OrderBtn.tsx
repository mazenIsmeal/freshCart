'use client'
import { FaBox } from 'react-icons/fa'

export default function OrderBtn({ paymentMethod }: any) {
    console.log(paymentMethod);

    return <>
        <button
            type="submit"
            className="w-full mt-6 bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-bold hover:from-green-700 hover:to-green-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-primary-600/20 active:scale-[0.98]"
        >
            <FaBox />
            {paymentMethod === 'online'
                ? 'Pay Online Now'
                : 'Place Order (Cash)'}
        </button>
    </>
}
