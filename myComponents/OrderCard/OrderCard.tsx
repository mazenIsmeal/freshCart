"use client";

import { useState } from "react";
import { OrderRes } from "@/Interfaces/order.interface";
import { FaChevronDown } from "react-icons/fa";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Image from "next/image";

export default function OrderCard({ order }: { order: OrderRes }) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div className="bg-white rounded-2xl shadow-sm border p-4 mb-4">

        {/* 🔹 Header */}
        <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">
  {order.isDelivered ? "Delivered" : "Processing"}
</span>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-semibold text-lg">
              #{order.id}
            </h2>

            <p className="text-sm text-gray-500">
              {new Date(order.createdAt).toDateString()} •{" "}
              {order.cartItems.length} items • {order.shippingAddress.city}
            </p>

            <p className="font-bold text-xl mt-2">
              {order.totalOrderPrice} EGP
            </p>
          </div>

          <CollapsibleTrigger asChild>
            <button className="flex items-center gap-2 text-sm bg-gray-100 px-3 py-1 rounded-lg hover:bg-gray-200">
              {open ? "Hide ▲" : "Details ▼"}
            </button>
          </CollapsibleTrigger>
        </div>

        {/* 🔻 Details */}
        <CollapsibleContent>
  <div className="mt-4 border-t pt-4 space-y-6">

    {/* 🟢 Order Items */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-3">Order Items</h3>

      <div className="space-y-3">
        {order.cartItems.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between bg-gray-50 p-3 rounded-xl border"
          >
            <div className="flex items-center gap-3">
              <Image
                src={item.product.imageCover}
                className="w-12 h-12 rounded-lg object-cover"
                width={100}
                height={100}
                alt={item.product.title}
              />

              <div>
                <p className="text-sm font-medium">
                  {item.product.title}
                </p>

                <p className="text-xs text-gray-500">
                  {item.count} × {item.price} EGP
                </p>
              </div>
            </div>

            <p className="font-semibold text-sm">
              {item.price * item.count} EGP
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* 🟡 Address + Summary */}
    <div className="grid md:grid-cols-2 gap-4">

      {/* 📦 Delivery Address */}
      <div className="bg-gray-50 p-4 rounded-xl border">
        <h3 className="font-semibold mb-2 text-gray-800">
          Delivery Address
        </h3>

        <p className="text-sm text-gray-600">
          {order.shippingAddress.city}
        </p>

        <p className="text-sm text-gray-600">
          {order.shippingAddress.details}
        </p>

        <p className="text-sm text-gray-600">
          {order.shippingAddress.phone}
        </p>
      </div>

      {/* 💰 Order Summary */}
      <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
        <h3 className="font-semibold mb-3 text-gray-800">
          Order Summary
        </h3>

        <div className="flex justify-between text-sm mb-2">
          <span>Subtotal</span>
          <span>{order.totalOrderPrice} EGP</span>
        </div>

        <div className="flex justify-between text-sm mb-2">
          <span>Shipping</span>
          <span>{order.shippingPrice} EGP</span>
        </div>

        <div className="flex justify-between font-bold border-t pt-2">
          <span>Total</span>
          <span>{order.totalOrderPrice} EGP</span>
        </div>
      </div>

    </div>

  </div>
</CollapsibleContent>
      </div>
    </Collapsible>
  );
}