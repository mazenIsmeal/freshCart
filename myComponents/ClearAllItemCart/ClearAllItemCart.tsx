'use client'
import { deleteAllItemCart } from '@/app/cart/cart.action'
import React from 'react'
import { FaTrash } from 'react-icons/fa'

export default function ClearAllItemCart() {

    async function handleReomveAllItem() {
        deleteAllItemCart()
    }

    return <>
        <div onClick={handleReomveAllItem} className="flex items-center gap-1.5 cursor-pointer hover:text-red-600">
            <FaTrash className="text-sm text-red-500" />
            <p>Clear All</p>
        </div>
    </>
}
