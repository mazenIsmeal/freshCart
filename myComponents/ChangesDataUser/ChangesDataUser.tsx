'use client'
import { updateDataUser } from '@/app/profile/profile.actions';
import { ValuesData } from '@/app/profile/settings/page';
import React from 'react'
import { useForm } from 'react-hook-form';
import { FaFloppyDisk } from 'react-icons/fa6';
import { toast } from 'sonner';

export default function ChangesDataUser({name}: {name: string}) {
    console.log(name)
      const {register, handleSubmit} = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: ''
    }
  })

  async function saveChangesDataUser(values: ValuesData) {
    console.log(values);
    try {
        await updateDataUser(values);
        toast.success('Change info user data done')
    } catch (error) {
        toast.error('some thing wrong pleas try again')
        console.log(error);
    }
  }


  return <>
  <form className="space-y-5" onSubmit={handleSubmit(saveChangesDataUser)}>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          placeholder="Enter your name"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                          required
                          type="text"
                          defaultValue={name}
                          {...register('name')}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          placeholder="Enter your email"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                          required
                          type="email"
                          defaultValue=''
                          {...register('email')}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          placeholder="01xxxxxxxxx"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                          required
                          type="tel"
                          defaultValue=''
                          {...register('phone')}
                        />
                      </div>
                      <div className="pt-4">
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 shadow-lg shadow-green-600/25"
                        >
                          <FaFloppyDisk />
                          Save Changes
                        </button>
                      </div>
                    </form>
  </>
}
