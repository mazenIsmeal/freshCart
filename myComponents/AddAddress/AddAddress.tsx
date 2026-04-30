'use client'
import { addAddress } from "@/app/profile/profile.actions"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { FaPlus } from "react-icons/fa"

export interface ValuesAddress {
    name: string,
    details: string,
    phone: string,
    city: string
}

export function AddAddress() {
    const [open, setOpen] = useState(false)
    const {register, handleSubmit} = useForm({
        defaultValues: {
            name: "",
            details: "",
            phone: "",
            city: ""
        }
    })

    async function addressData(values: ValuesAddress) {
        console.log(values);
        try {
            const data = await addAddress(values);
            setOpen(false)
        } catch (error) {
            console.log(error);
            
        }
    }

  return (
    <>
    <button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/25">
        <FaPlus className="text-sm" />
        Add Address
    </button>

    <Dialog open={open} onOpenChange={setOpen}>
  <DialogContent className="sm:max-w-sm">
    
    <form onSubmit={handleSubmit(addressData)}>
      <DialogHeader>
        <DialogTitle>Add New Address</DialogTitle>
      </DialogHeader>

      <FieldGroup>
        <Field>
          <Label htmlFor="address">Address Name</Label>
          <Input {...register('name')} id="address" placeholder="Address Name" />
        </Field>

        <Field>
          <Label htmlFor="fullAddress">Full Address</Label>
          <Textarea {...register('details')} className="resize-none" id="fullAddress" placeholder="Full Address" />
        </Field>

        <div className="flex items-center gap-3">
          <Field>
            <Label htmlFor="phone">Phone Number</Label>
            <Input {...register('phone')} id="phone" placeholder="Phone Number" />
          </Field>

          <Field>
            <Label htmlFor="city">City</Label>
            <Input {...register('city')} id="city" placeholder="City" />
          </Field>
        </div>
      </FieldGroup>

      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" variant="outline">Cancel</Button>
        </DialogClose>

        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </form>

  </DialogContent>
</Dialog>
    </>
  )
}
