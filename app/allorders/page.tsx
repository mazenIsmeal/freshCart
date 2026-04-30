import React from "react";
import { getAllOrder, getUserId } from "./order.action";
import { MainOrderRes, OrderRes } from "@/Interfaces/order.interface";
import Link from "next/link";
import { FaBox, FaShoppingBag } from "react-icons/fa";
import OrderCard from "@/myComponents/OrderCard/OrderCard";

export default async function Orders() {
  const dataUserId = await getUserId();
  const data: MainOrderRes = await getAllOrder(dataUserId.decoded.id);

  return (
    <>
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link className="hover:text-green-600 transition" href="/">
          Home
        </Link>
        <span className="text-gray-300">/</span>
        <span className="text-gray-900 font-medium">My Orders</span>
      </nav>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/25">
            <FaBox className="text-2xl text-white" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              My Orders
            </h1>
            <p className="text-gray-500 text-sm mt-0.5">
              Track and manage your 2 orders
            </p>
          </div>
        </div>
        <Link
          className="self-start sm:self-auto text-primary-600 hover:text-green-700 font-medium flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-green-50 transition-all text-sm"
          href="/"
        >
          <FaShoppingBag className="text-xs" />
          Continue Shopping
        </Link>
      </div>
      <div className="mt-6">
      {data.map((order) => (
        <OrderCard key={order._id} order={order} />
      ))}
    </div>
    </>
  );
}
