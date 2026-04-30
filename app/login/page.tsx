'use client'
import Image from "next/image";
import React, { useState } from "react";
import imgLogin from "@/public/images/2e5810ff3e-e750761ebcd4ae5907db.png";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaClock } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { Controller, useForm } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { formLoginSchema } from "@/Schema/registerSchema";
import z from "zod";
import { LoginType } from "@/Interfaces/auth.interface";
import { signIn } from "next-auth/react";
import { Loader } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formLoginSchema>>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function login(values: LoginType) {
    console.log(values);
    setLoading(true)
    try {
      const res = await signIn('credentials', {
        email: values.email,
        password: values.password,
        redirect: true,
        callbackUrl: '/'
      })
      if (res?.ok) {
        toast.success('Login Success')
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }

  }
  return (
    <>
      <div className="container py-16 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mt-30">
          <div className="hidden lg:block">
            <div className="text-center space-y-6">
              <Image
                src={imgLogin}
                alt="this is login image"
                width={500}
                height={500}
              />
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-800">
                  FreshCart - Your One-Stop Shop for Fresh Products
                </h2>
                <p className="text-lg text-gray-600">
                  Join thousands of happy customers who trust FreshCart for
                  their daily grocery needs
                </p>
                <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                  <div className="flex items-center">
                    <CiDeliveryTruck className="text-green-500 text-lg mx-1" />
                    Free Delivery
                  </div>
                  <div className="flex items-center">
                    <RiSecurePaymentLine className="text-green-500 text-lg mx-1" />
                    Secure Payment
                  </div>
                  <div className="flex items-center">
                    <FaClock className="text-green-500 text-lg mx-1" />
                    24/7 Support
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-green-600">
                    Fresh<span className="text-gray-800">Cart</span>
                  </span>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  Welcome Back!
                </h1>
                <p className="text-gray-600">
                  Sign in to continue your fresh shopping experience
                </p>
              </div>
              <div className="space-y-3 mb-6">
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all duration-200"
                >
                  <FaGoogle className="text-red-600 text-lg" />
                  <span className="font-medium text-gray-700">
                    Continue with Google
                  </span>
                </button>
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all duration-200"
                >
                  <FaFacebook className="text-blue-600 text-lg" />
                  <span className="font-medium text-gray-700">
                    Continue with Facebook
                  </span>
                </button>
              </div>
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-medium">
                    OR CONTINUE WITH EMAIL
                  </span>
                </div>
              </div>
              <form className="space-y-6" onSubmit={form.handleSubmit(login)}>
                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-rhf-demo-title">
                        email
                      </FieldLabel>
                      <Input
                        {...field}
                        id="form-rhf-demo-title"
                        aria-invalid={fieldState.invalid}
                        placeholder="enter your email"
                        autoComplete="off"
                        type="email"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>

                  )}
                />
                <Controller
                  name="password"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <div className="flex items-center justify-between">
                      <FieldLabel htmlFor="form-rhf-demo-title">
                        password
                      </FieldLabel>
                      <Link
                      className="text-sm text-primary-600 hover:text-primary-700 cursor-pointer font-medium"
                      href="/forget-password"
                    >
                      Forgot Password?
                    </Link>
                      </div>
                      <Input
                        {...field}
                        id="form-rhf-demo-title"
                        aria-invalid={fieldState.invalid}
                        placeholder="enter your password"
                        autoComplete="off"
                        type="password"
                        className="relative"
                      />
                      {/* <TbLockPassword className="absolute top-[30%] left-[3%] text-2xl" /> */}
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}

                    </Field>
                  )}
                />
                {/* <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                      placeholder="Enter your email"
                      id="email"
                      type="email"
                      name="email"
                    />
                    <MdOutlineMail className="absolute top-[30%] left-[3%] text-2xl" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Password
                    </label>
                    <a
                      className="text-sm text-primary-600 hover:text-primary-700 cursor-pointer font-medium"
                      href="/forget-password"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      className="w-full px-4 py-3 pl-12 pr-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                      placeholder="Enter your password"
                      type="password"
                      name="password"
                    />
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <FaEye />
                    </button>
                    <TbLockPassword className="absolute top-[30%] left-[3%] text-2xl" />
                  </div>
                </div> */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      className="h-4 w-4 text-primary-600 accent-primary-600 border-2 border-gray-300 rounded focus:ring-primary-500"
                      type="checkbox"
                      name="rememberMe"
                    />
                    <span className="ml-3 text-sm text-gray-700">
                      Keep me signed in
                    </span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-3 px-4 rounded-xl hover:bg-primary-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading && <Loader />} Sign In
                </button>
              </form>
              <div className="text-center mt-8 pt-6 border-t border-gray-100">
                <p className="text-gray-600">
                  New to FreshCart?
                  <a
                    className="text-primary-600 hover:text-primary-700 ms-2 font-semibold cursor-pointer"
                    href="/signup"
                  >
                    Create an account
                  </a>
                </p>
              </div>
              <div className="flex items-center justify-center space-x-6 mt-6 text-xs text-gray-500">
                <div className="flex items-center">

                  SSL Secured
                </div>
                <div className="flex items-center">

                  50K+ Users
                </div>
                <div className="flex items-center">

                  4.9 Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
