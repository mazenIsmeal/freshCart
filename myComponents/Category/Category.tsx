import { getAllCategory } from "@/services/category.service";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import CateHearo from "../CateHearo/CateHearo";
import { CategoryRes, DataCategory } from "@/Interfaces/category";

export default async function Category() {
    let categories: any = [];

    try {
        const data = await getAllCategory();
        categories = data?.data || [];
    } catch (error) {
        console.log("Category API Error:", error);
    }

    return (
        <section id="categories" className="py-10">
            <div className="container mx-auto px-4">

                {/* 🔥 Header static */}
                <CateHearo />

                {/* 🔥 Dynamic part */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

                    {categories.length === 0 ? (
                        <p className="col-span-full text-center font-semibold text-gray-500">
                            No categories available right now 👀
                        </p>
                    ) : (
                        categories.map((cate: any) => (
                            <Link
                                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition group cursor-pointer"
                                href={`/category/${cate._id}`}
                                key={cate._id}
                            >
                                <div className="h-20 w-20 overflow-hidden bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-200 transition">
                                    <Image
                                        src={cate.image}
                                        width={300}
                                        height={300}
                                        alt={cate.name}
                                    />
                                </div>
                                <h3 className="font-medium">{cate.name}</h3>
                            </Link>
                        ))
                    )}

                </div>
            </div>
        </section>
    );
}
