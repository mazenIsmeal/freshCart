'use client'
import { changePasswordRes } from '@/app/profile/profile.actions'
import { passwordChangeSchema } from '@/Schema/registerSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { redirect } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { FaEye, FaLock } from 'react-icons/fa'
import { toast } from 'sonner'

export interface PasswordChangeValues {
    "currentPassword": string,
    "password": string,
    "rePassword": string
}

export default function ChangePassword() {
    const {register, handleSubmit, formState} = useForm({
        resolver: zodResolver(passwordChangeSchema),
        defaultValues: {
            currentPassword: '',
            password: '',
            rePassword: ''
        }
    })


    async function passwordChange(values:PasswordChangeValues) {
        console.log(values);
        try {
            const doneSend = await changePasswordRes(values);
            console.log(doneSend);
            if(doneSend) {
                toast.success('Done Change Password');
                redirect('/login')
            }
        } catch (error) {
            toast.error('Some Thing Wrong Pleas Try Again or Cheek your internet');
            console.log(error);
        }
    }


  return <>
  <form className="space-y-5" onSubmit={handleSubmit(passwordChange)}>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Password
                      </label>
                      <div className="relative">
                        <input
                          placeholder="Enter your current password"
                          className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                          
                          type="password"
                          {...register('currentPassword')}
                        />
                        <button
                          type="button"
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          <FaEye />
                        </button>
                        {formState.errors.currentPassword && <p className='text-red-600 text-sm my-2'>{formState.errors.currentPassword?.message}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        New Password
                      </label>
                      <div className="relative">
                        <input
                          placeholder="Enter your new password"
                          className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                          
                          type="password"
                          {...register('password')}
                        />
                        <button
                          type="button"
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          <FaEye />
                        </button>
                        {formState.errors.password && <p className='text-red-600 text-sm my-2'>{formState.errors.password?.message}</p>}
                      </div>
                      {/* <p className="text-xs text-gray-500 mt-1">
                        Must be at least 6 characters
                      </p> */}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm New Password
                      </label>
                      <div className="relative">
                        <input
                          placeholder="Confirm your new password"
                          className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                          
                          type="password"
                          {...register('rePassword')}
                        />
                        <button
                          type="button"
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          <FaEye />
                        </button>
                        {formState.errors.rePassword && <p className='text-red-600 text-sm my-2'>{formState.errors.rePassword?.message}</p>}
                      </div>
                    </div>
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors disabled:opacity-50 shadow-lg shadow-amber-600/25"
                      >
                        <FaLock />
                        Change Password
                      </button>
                    </div>
                  </form>
  </>
}
