'use client'
import { deleteAllItemCart, deleteItemCart, updateCountProductCart } from "@/app/cart/cart.action";
import { Product } from "@/Interfaces/getCartLogged.interface";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FaCheck, FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import TotalCart from "../TotalCart/TotalCart";
import { CartContext } from "@/Context/CartAndWishlist";

export default function CartItem({ product }: { product: Product }) {
    const {
        count,
        price,
        product: { imageCover, title, category, _id },
    } = product;

    console.log(_id);


    const [loading, setLoading] = useState<{ id: string; type: "inc" | "dec" } | null>(null);
    const [removing, setRemoving] = useState(false);
    const { cartItem, setCartItem } = useContext(CartContext)

    const handleUpdate = async (id: string, newCount: number, type: "inc" | "dec") => {
        try {
            setLoading({ id, type });
            await updateCountProductCart(id, newCount);
        } finally {
            setLoading(null);
        }
    };

    async function handleReomveItem() {
        try {
            const data = await deleteItemCart(_id)
            setRemoving(true);
            setCartItem(cartItem - 1)
        } catch (err) {
            console.log(err);
        } finally {
            setRemoving(false);
        }

    }




    return (
        <>
            {removing ? <>
                <p>Loading</p>
            </> : <>
                <div className="relative bg-white mb-4 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 ">
                    <div className="p-4 sm:p-5">
                        <div className="flex gap-4 sm:gap-6">
                            <Link
                                className="relative shrink-0 group"
                                href="/products"
                            >
                                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-gradient-to-br from-gray-50 via-white to-gray-100 p-3 border border-gray-100 overflow-hidden">
                                    <Image src={imageCover} alt={title} width={100} height={100} />
                                </div>
                                <div className="absolute -bottom-1 -right-1 my-2 bg-green-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                                    <FaCheck className="text-[8px]" />
                                    In Stock
                                </div>
                            </Link>
                            <div className="flex-1 min-w-0 flex flex-col">
                                <div className="mb-3">
                                    <Link
                                        className="group/title"
                                        href="/products"
                                    >
                                        <h3 className="font-semibold text-gray-900 group-hover/title:text-primary-600 transition-colors leading-relaxed text-base sm:text-lg">
                                            {title}
                                        </h3>
                                    </Link>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="inline-block px-2.5 py-1 bg-gradient-to-r from-primary-50 to-emerald-50 text-primary-700 text-xs font-medium rounded-full">
                                            {category.name}
                                        </span>
                                        <span className="text-xs text-gray-400">•</span>
                                        <span className="text-xs text-gray-500">SKU: {product._id.slice(18)}</span>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-primary-600 font-bold text-lg">
                                            {price} EGP
                                        </span>
                                        <span className="text-xs text-gray-400">per unit</span>
                                    </div>
                                </div>
                                <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex items-center">
                                        <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">
                                            <button
                                                className="h-8 w-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none transition-all"
                                                disabled={loading?.id === _id && loading?.type === "dec"}
                                                onClick={() => handleUpdate(_id, count - 1, "dec")}
                                            >
                                                {loading?.id === _id && loading?.type === "dec" ? (
                                                    <Loader2 className="animate-spin w-4 h-4" />
                                                ) : (
                                                    <FaMinus className="text-xs" />
                                                )}
                                            </button>

                                            <span className="w-12 text-center font-bold text-gray-900">
                                                {count}
                                            </span>

                                            <button
                                                className="h-8 w-8 rounded-lg bg-green-600 shadow-sm shadow-primary-600/30 flex items-center justify-center text-white hover:bg-primary-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                                                disabled={loading?.id === _id && loading?.type === "inc"}
                                                onClick={() => handleUpdate(_id, count + 1, "inc")}
                                            >
                                                {loading?.id === _id && loading?.type === "inc" ? (
                                                    <Loader2 className="animate-spin w-4 h-4" />
                                                ) : (
                                                    <FaPlus className="text-xs" />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="text-right">
                                            <p className="text-xs text-gray-400 mb-0.5">Total</p>
                                            <p className="text-xl font-bold text-gray-900">
                                                {price * count}
                                                <span className="text-sm font-medium text-gray-400">
                                                    EGP
                                                </span>
                                            </p>
                                        </div>
                                        <button
                                            className="h-10 w-10 rounded-xl border border-red-200 bg-red-100  hover:bg-red-500 hover:text-red-600 hover:border-red-500 flex items-center justify-center disabled:opacity-40 transition-all duration-200"
                                            title="Remove item"
                                            aria-label="Remove from cart"
                                            onClick={handleReomveItem}
                                        >
                                            <FaTrash className="text-sm text-red-500" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </>}

        </>
    );
}
