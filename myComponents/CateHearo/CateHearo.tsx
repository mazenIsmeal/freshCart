'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

export default function CateHearo() {
    const pathName = usePathname()
    console.log(pathName)
  return <>
  {pathName !== '/category' ? 
  <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8">
                    <div className="flex items-center gap-3 my-8">
                        <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full" />
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                            Shop By <span className="text-emerald-600">Category</span>
                        </h2>
                    </div>

                    <Link
                        className="text-green-600 self-end sm:self-auto hover:text-primary-700 font-medium flex items-center cursor-pointer"
                        href="/category"
                    >
                        View All Categories
                        <FaLongArrowAltRight />
                    </Link>
                </div>
  : ''}
  
  </>
}
