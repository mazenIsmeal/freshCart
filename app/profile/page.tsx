import { AddAddress } from "@/myComponents/AddAddress/AddAddress";
import Link from "next/link";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { getDataAddress } from "./profile.actions";
import { AddressItems } from "@/myComponents/AddressItems/AddressItems";

export interface AddressRes {
  results: number
  status: string
  data: DataAddress[]
}

export interface DataAddress {
  _id: string
  name: string
  details: string
  phone: string
  city: string
}


export default async function Page() {
  const {data}: {data: DataAddress[]} = await getDataAddress()

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <aside className="w-full lg:w-72 shrink-0">
            <nav className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h2 className="font-bold text-gray-900">My Account</h2>
              </div>
              <ul className="p-2">
                <li>
                  <Link
                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group bg-green-50 text-green-700"
                    href="/profile"
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-primary-500 text-white">
                      <MdLocationOn className="text-sm" />
                    </div>
                    <span className="font-medium flex-1">My Addresses</span>
                    <FaChevronCircleRight className="text-xs transition-transform text-green-500" />
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    href="/profile/settings"
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-gray-100 text-gray-500 group-hover:bg-gray-200">
                      <FaGear className="text-sm" />
                    </div>
                    <span className="font-medium flex-1">Settings</span>
                    <FaChevronCircleRight className="text-xs transition-transform text-gray-400" />
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
          <main className="flex-1 min-w-0">
            {/*$*/}
            {/*/$*/}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    My Addresses
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    Manage your saved delivery addresses
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-5 py-2.5">
                <AddAddress />
                </div>
                
              </div>
              {data.length == 0 ? <>
              <div className="bg-white rounded-3xl border border-gray-100 p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
                  <MdLocationOn className="text-3xl text-gray-400" />   
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  No Addresses Yet
                </h3>
                <p className="text-gray-500 mb-6 max-w-sm mx-auto">
                  Add your first delivery address to make checkout faster and
                  easier.
                </p>
                <div className="inline-flex items-center gap-2 px-5 py-2.5">
                <AddAddress />
                </div>
              </div>
              </> : <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                {data.map((item) =>  <AddressItems item={item} key={item._id} />)}
              </div>
              </>}
              
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
