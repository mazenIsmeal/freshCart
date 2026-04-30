import { getUserId } from "@/app/allorders/order.action";
import ChangePassword from "@/myComponents/ChangePassword/ChangePassword";
import ChangesDataUser from "@/myComponents/ChangesDataUser/ChangesDataUser";
import Link from "next/link";
import React from "react";
import { FaChevronCircleRight, FaLock, FaUserAlt } from "react-icons/fa";
import { FaGear, FaLocationDot } from "react-icons/fa6";


export interface ValuesData {
  name: string,
  email: string,
  phone: string
}


export default async function page() {
  const dataUser = await getUserId();
  const {id, name, role} = dataUser.decoded





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
                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    href="/profile"
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-gray-100 text-gray-500 group-hover:bg-gray-200">
                      <FaLocationDot />
                    </div>
                    <span className="font-medium flex-1">My Addresses</span>
                    <FaChevronCircleRight className="text-xs transition-transform text-gray-400" />
                  </Link>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group bg-green-50 text-green-700"
                    href="/profile/settings"
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-green-500 text-white">
                      <FaGear />
                    </div>
                    <span className="font-medium flex-1">Settings</span>
                    <FaChevronCircleRight className="text-xs transition-transform text-green-500" />
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
          <main className="flex-1 min-w-0">
            {/*$*/}
            {/*/$*/}
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Account Settings
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Update your profile information and change your password
                </p>
              </div>
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 sm:p-8 border-b border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center">
                      <FaUserAlt className="text-2xl text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        Profile Information
                      </h3>
                      <p className="text-sm text-gray-500">
                        Update your personal details
                      </p>
                    </div>
                  </div>
                  <ChangesDataUser name={name} />
                </div>
                <div className="p-6 sm:p-8 bg-gray-50">
                  <h3 className="font-bold text-gray-900 mb-4">
                    Account Information
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">User ID</span>
                      <span className="font-mono text-gray-700">
                        {id}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Role</span>
                      <span className="px-3 py-1 rounded-lg bg-primary-100 text-primary-700 font-medium capitalize">
                        {role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center">
                      <FaLock className="text-2xl text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        Change Password
                      </h3>
                      <p className="text-sm text-gray-500">
                        Update your account password
                      </p>
                    </div>
                  </div>
                  <ChangePassword />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
