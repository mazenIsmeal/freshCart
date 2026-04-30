'use client'
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { formOrderSchema } from "@/Schema/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { CiCreditCard1, CiLocationOn } from "react-icons/ci";
import { FaCheck, FaCity, FaMoneyBill, FaPhoneAlt, FaShieldAlt, FaWallet } from "react-icons/fa";
import { FaCircleInfo, FaHouse } from "react-icons/fa6";

export interface OrderCheekout {
    shippingAddress: ShippingAddress
}

export interface ShippingAddress {
    details: string
    phone: string
    city: string
}


export default function DetailsCheekOut({ register, paymentMethod, setPaymentMethod, formState }) {


    return (
        <>
            <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                    <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
                        <h2 className="text-lg font-bold text-white flex items-center gap-2">
                            <FaHouse />
                            Shipping Address
                        </h2>
                        <p className="text-primary-100 text-sm mt-1">
                            Where should we deliver your order?
                        </p>
                    </div>
                    <div className="p-6 space-y-5">
                        <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                <FaCircleInfo className="text-blue-600 text-sm" />
                            </div>
                            <div>
                                <p className="text-sm text-blue-800 font-medium">
                                    Delivery Information
                                </p>
                                <p className="text-xs text-blue-600 mt-0.5">
                                    Please ensure your address is accurate for smooth delivery
                                </p>
                            </div>
                        </div>
                        <form>
                            <div>
                                <label
                                    htmlFor="city"
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                >
                                    City <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                        <FaCity className="text-gray-500 text-sm" />
                                    </div>
                                    <input
                                        id="city"
                                        className="w-full px-4 py-3.5 pl-14 border-2 rounded-xl focus:outline-none transition-all border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                                        placeholder="e.g. Cairo, Alexandria, Giza"
                                        type="text"
                                        {...register('shippingAddress.city')}
                                    />
                                    {formState.errors.city && (
                                        <p className="text-sm text-red-500">
                                            {formState.errors.city.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="details"
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                >
                                    Street Address <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute left-4 top-4 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                        <CiLocationOn className="text-gray-500 text-sm" />
                                    </div>
                                    <textarea
                                        id="details"
                                        rows={3}
                                        className="w-full px-4 py-3.5 pl-14 border-2 rounded-xl focus:outline-none transition-all resize-none border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                                        placeholder="Street name, building number, floor, apartment..."
                                        {...register('shippingAddress.details')}
                                    />
                                    {formState.errors.details && (
                                        <p className="text-sm text-red-500">
                                            {formState.errors.details.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                >
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                        <FaPhoneAlt className="text-gray-500 text-sm" />
                                    </div>
                                    <input
                                        id="phone"
                                        className="w-full px-4 py-3.5 pl-14 border-2 rounded-xl focus:outline-none transition-all border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                                        placeholder="01xxxxxxxxx"
                                        type="tel"
                                        {...register('shippingAddress.phone')}
                                    />
                                    {formState.errors.phone && (
                                        <p className="text-sm text-red-500">
                                            {formState.errors.phone.message}
                                        </p>
                                    )}
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                                        Egyptian numbers only
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="bg-green rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                    <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
                        <h2 className="text-lg font-bold text-white flex items-center gap-2">
                            <FaWallet />
                            Payment Method
                        </h2>
                        <p className="text-green-100 text-sm mt-1">
                            Choose how you'd like to pay
                        </p>
                    </div>
                    <div className="p-6 space-y-4">
                        <button
                            type="button"
                            onClick={() => setPaymentMethod('cash')}
                            className={`w-full p-5 rounded-xl border-2 ${paymentMethod === 'cash'
                                ? 'border-green-500 bg-green-50'
                                : 'border-gray-200'
                                }`}
                        >
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-all bg-gradient-to-br from-green-500 to-primary-600 text-white shadow-lg shadow-green-500/30">
                                <FaMoneyBill className="text-xl" />
                            </div>
                            <div className="flex-1 text-left">
                                <h3 className="font-bold text-primary-700">Cash on Delivery</h3>
                                <p className="text-sm text-gray-500 mt-0.5">
                                    Pay when your order arrives at your doorstep
                                </p>
                            </div>
                            <div className="w-7 h-7 rounded-full flex items-center justify-center transition-all bg-green-600 text-white">
                                <FaCheck className="text-xs" />
                            </div>
                        </button>
                        <button
                            type="button"
                            onClick={() => setPaymentMethod('online')}
                            className={`w-full p-5 rounded-xl border-2 ${paymentMethod === 'online'
                                ? 'border-green-500 bg-green-50'
                                : 'border-gray-200'
                                }`}
                        >
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-all bg-gray-100 text-gray-400 group-hover:bg-gray-200">
                                <CiCreditCard1 className="text-xl" />
                            </div>
                            <div className="flex-1 text-left">
                                <h3 className="font-bold text-gray-900">Pay Online</h3>
                                <p className="text-sm text-gray-500 mt-0.5">
                                    Secure payment with Credit/Debit Card via Stripe
                                </p>
                                <div className="flex items-center gap-2 mt-2">
                                    <img
                                        alt="Visa"
                                        className="h-5"
                                        src="https://img.icons8.com/color/48/visa.png"
                                    />
                                    <img
                                        alt="Mastercard"
                                        className="h-5"
                                        src="https://img.icons8.com/color/48/mastercard.png"
                                    />
                                    <img
                                        alt="Amex"
                                        className="h-5"
                                        src="https://img.icons8.com/color/48/amex.png"
                                    />
                                </div>
                            </div>
                            <div className="w-7 h-7 rounded-full flex items-center justify-center transition-all border-2 border-gray-200" />
                        </button>
                        <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 mt-4">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                <FaShieldAlt className="text-green-500" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-green-800">
                                    Secure &amp; Encrypted
                                </p>
                                <p className="text-xs text-green-600 mt-0.5">
                                    Your payment info is protected with 256-bit SSL encryption
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
