import { Subcategory } from "@/Interfaces/category";
import { getCategoryById, getSubcategory } from "@/services/category.service";
import Link from "next/link";
import { FaFolderOpen } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export default async function page({ params }) {
    const { data } = await getSubcategory();

    const { id } = await params;

    const categoryId = await getCategoryById(id);

    return (
        <>
            <div className="bg-gradient-to-br from-green-600 via-green-500 to-green-400 text-white">
                <div className="container mx-auto px-4 py-12 sm:py-16">
                    <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
                        <Link className="hover:text-white transition-colors" href="/">
                            Home
                        </Link>
                        <span className="text-white/40">/</span>
                        <Link
                            className="hover:text-white transition-colors"
                            href="/category"
                        >
                            Categories
                        </Link>
                        <span className="text-white/40">/</span>
                        <span className="text-white font-medium">{categoryId.data.name}</span>
                    </nav>
                    <div className="flex items-center gap-5">
                        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30 overflow-hidden">
                            <img
                                alt="Men's Fashion"
                                className="w-12 h-12 object-contain"
                                src={categoryId.data.image}
                            />
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                                {categoryId.data.name}
                            </h1>
                            <p className="text-white/80 mt-1">
                                Choose a subcategory to browse products
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {data.map((data: Subcategory) => (
                    <>
                        <Link
                            className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all duration-300 hover:-translate-y-1"
                            href={`/products/subcategory/${data._id}`}
                        >
                            <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                                <FaFolderOpen className="text-2xl text-green-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg group-hover:text-green-600 transition-colors mb-2">
                                {data.name}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span>Browse Products</span>
                                <FaArrowRight className="text-xs" />
                            </div>
                        </Link>
                    </>
                ))}
            </div>
        </>
    );
}
