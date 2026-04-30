'use client'
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowLeft, FaEnvelope, FaKey, FaLock, FaShieldAlt } from "react-icons/fa";
import { forgetPassword, resetPassword, verifyResetCode } from "./forgetPassword.action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export interface ValuesPassword {
  email: string,
  code: string,
  password: string
}

export default function Page() {
    const [step, setStep] = useState<'email' | 'code' | 'password'>('email');
    const router = useRouter()

    const {register, handleSubmit} = useForm({
        defaultValues: {
            email: '',
            code: '',
            password: ''
        }
    })

    async function restPassword(values: ValuesPassword) {

  if (step === 'email') {
    const sentMail = await forgetPassword({email: values.email})
    console.log(sentMail.message)
    toast.success(sentMail.message || 'Pleas cheek your email')
    setStep('code');
  } else if (step === 'code') {
    console.log(values.code);
    const resetCode = await verifyResetCode({resetCode: values.code})
    console.log(resetCode);
    setStep('password');
  } else {
    const resetPasswordValue = await resetPassword({
      email: values.email,
      newPassword: values.password
    })
    console.log(resetPasswordValue);
    router.push('/login');
  }
}

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div className="hidden lg:block">
          <div className="text-center space-y-6">
            <div className="w-full h-96 bg-gradient-to-br from-primary-50 via-green-50 to-emerald-50 rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-primary-100/50" />
              <div className="absolute bottom-12 right-10 w-32 h-32 rounded-full bg-green-100/50" />
              <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-emerald-100/50" />
              <div className="relative flex flex-col items-center gap-6 z-10">
                <div className="w-28 h-28 rounded-3xl bg-white shadow-xl flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-20 h-20 rounded-2xl bg-primary-100 flex items-center justify-center">
                    <FaLock className="text-green-600 text-4xl" />
                  </div>
                </div>
                <div className="absolute -left-16 top-4 w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center -rotate-12">
                  <FaEnvelope className="text-green-500 text-xl" />
                </div>
                <div className="absolute -right-16 top-8 w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center rotate-12">
                  <FaShieldAlt className="text-green-500 text-xl" />
                </div>
                <div className="flex gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary-400 animate-pulse" />
                  <div className="w-3 h-3 rounded-full bg-primary-500 animate-pulse [animation-delay:150ms]" />
                  <div className="w-3 h-3 rounded-full bg-primary-600 animate-pulse [animation-delay:300ms]" />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">
                Reset Your Password
              </h2>
              <p className="text-lg text-gray-600">
                Dont worry, it happens to the best of us. Well help you get
                back into your account in no time.
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <FaEnvelope className="text-green-600 mr-2" />
                  Email Verification
                </div>
                <div className="flex items-center">
                  <FaShieldAlt className="text-green-600 mr-2" />
                  Secure Reset
                </div>
                <div className="flex items-center">
                  <FaLock className="text-green-600 mr-2" />
                  Encrypted
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-primary-600">
                  Fresh<span className="text-gray-800">Cart</span>
                </span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                {step === 'email' && "Forgot Password?"}
                {step === 'code' && "Enter Verification Code"}
                {step === 'password' && "Set New Password"}
              </h1>
              <p className="text-gray-600">
                No worries, well send you a reset code
              </p>
            </div>
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-green-600 text-white ring-4 ring-primary-100">
                  <FaEnvelope className="text-xs" />
                </div>
                <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-gray-200" />
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-gray-100 text-gray-400">
                  <FaKey className="text-xs" />
                </div>
                <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-gray-200" />
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-gray-100 text-gray-400">
                  <FaLock className="text-xs" />
                </div>
              </div>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit(restPassword)}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  {step === 'email' && "Forgot Password?"}
                  {step === 'code' && "Enter Verification Code"}
                  {step === 'password' && "Set New Password"}
                </label>
                <div className="relative">
                {step === 'email' && (
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                    {...register('email')}
                  />
                )}

                {step === 'code' && (
                  <input
                    type="text"
                    placeholder="Enter verification code"
                    className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                    {...register('code')}
                  />
                )}

                {step === 'password' && (
                  <>
                    <input
                      type="password"
                      placeholder="New password"
                      className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                      {...register('password')}
                    />
                  </>
                )}
                  {/* <input
                    id="email"
                    className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                    placeholder="Enter your email address"
                    type="email"
                    name="email"
                  /> */}
                 <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {step === 'email' && "Send Code"}
  {step === 'code' && "Verify Code"}
  {step === 'password' && "Reset Password"}
              </button>
              <div className="text-center">
                <Link
                  className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  href="/login"
                >
                  <FaArrowLeft className="text-xs" />
                  Back to Sign In
                </Link>
              </div>
            </form>
            <div className="text-center mt-8 pt-6 border-t border-gray-100">
              <p className="text-gray-600">
                Remember your password?{" "}
                <Link
                  className="text-green-600 hover:text-green-700 font-semibold transition-colors"
                  href="/login"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
