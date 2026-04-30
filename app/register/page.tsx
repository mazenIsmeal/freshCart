"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa6";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { formSchema } from "@/Schema/registerSchema";
import { Register } from "@/Interfaces/auth.interface";
import { register } from "./register.action";
import { redirect } from "next/navigation";
import { useState } from "react";
import { Loader } from "lucide-react";
import Image from "next/image";
import { IoPersonAdd } from "react-icons/io5";
import Link from "next/link";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
  });

  async function onSubmit(values: Register) {
    setLoading(true);
    try {
      console.log(values);
      const registerReturn = await register(values);
      if (registerReturn === true) {
        toast.success("Register is Done", {
          duration: 2000,
          position: "top-right",
        });
        setTimeout(() => {
          redirect("/login");
        }, 2000);
      } else {
        toast.error(registerReturn, { duration: 2000, position: "top-right" });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="container">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 p-4">
          <div>
            <h1 className="text-4xl font-bold">
              Welcome to <span className="text-primary-600">FreshCart</span>
            </h1>
            <p className="text-xl mt-2 mb-4">
              Join thousands of happy customers who enjoy fresh groceries
              delivered right to their doorstep.
            </p>
            <ul className="flex items-start gap-4 space-y-6 my-8">
              <li>
                <div className="icon size-12 text-lg bg-primary-200 text-primary-600 rounded-full flex justify-center items-center">
                  <svg
                    data-prefix="fas"
                    data-icon="star"
                    className="svg-inline--fa fa-star"
                    role="img"
                    viewBox="0 0 576 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"
                    />
                  </svg>
                </div>
                <div className="content">
                  <h2 className="text-lg font-semibold">Premium Quality</h2>
                  <p className="text-gray-600">
                    Premium quality products sourced from trusted suppliers.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon size-12 text-lg bg-primary-200 text-primary-600 rounded-full flex justify-center items-center">
                  <svg
                    data-prefix="fas"
                    data-icon="truck-fast"
                    className="svg-inline--fa fa-truck-fast"
                    role="img"
                    viewBox="0 0 640 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M64 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L621.3 192c12 12 18.7 28.3 18.7 45.3L640 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-3.3 0c-35.3 0-64-28.7-64-64l0-48-40 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 240c-13.3 0-24-10.7-24-24s10.7-24 24-24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 144c-13.3 0-24-10.7-24-24S10.7 96 24 96l40 0zM576 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM256 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                    />
                  </svg>
                </div>
                <div className="content">
                  <h2 className="text-lg font-semibold">Fast Delivery</h2>
                  <p className="text-gray-600">
                    Same-day delivery available in most areas
                  </p>
                </div>
              </li>
              <li>
                <div className="icon size-12 text-lg bg-primary-200 text-primary-600 rounded-full flex justify-center items-center">
                  <svg
                    data-prefix="fas"
                    data-icon="shield-halved"
                    className="svg-inline--fa fa-shield-halved"
                    role="img"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"
                    />
                  </svg>
                </div>
                <div className="content">
                  <h2 className="text-lg font-semibold">Secure Shopping</h2>
                  <p className="text-gray-600">
                    Your data and payments are completely secure
                  </p>
                </div>
              </li>
            </ul>
            <div className="review bg-white shadow-sm p-4 rounded-md">
              <div className="author flex items-center gap-4 mb-4">
                {/* <Image
                  alt="register"
                  loading="lazy"
                  width={512}
                  height={512}
                  decoding="async"
                  data-nimg={1}
                  className="size-12 rounded-full"
                  srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freview-author.04728971.png&w=640&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freview-author.04728971.png&w=1080&q=75 2x"
                  src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freview-author.04728971.png&w=1080&q=75"
                  style={{ color: "transparent" }}
                /> */}
                <div>
                  <h3>Sarah Johnson</h3>
                  <div className="rating text-yellow-300 flex items-center gap-2">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <blockquote>
                <p className="italic text-gray-600">
                  FreshCart has transformed my shopping experience. The quality
                  of the products is outstanding, and the delivery is always on
                  time. Highly recommend!
                </p>
              </blockquote>
            </div>
          </div>
          <div>
            <Card className="w-full sm:max-w-md bg-white rounded-2xl shadow-lg px-6 py-10">
              <CardHeader>
                <CardTitle className="text-center my-2">
                  <h1 className="text-2xl font-bold">Create Your Account</h1>
                  <p>Start your fresh journey with us today</p>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
                  <FieldGroup>
                    <Controller
                      name="name"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor="form-rhf-demo-title">
                            Name
                          </FieldLabel>
                          <Input
                            {...field}
                            id="form-rhf-demo-title"
                            aria-invalid={fieldState.invalid}
                            placeholder="enter your name"
                            autoComplete="off"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
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
                          <FieldLabel htmlFor="form-rhf-demo-title">
                            password
                          </FieldLabel>
                          <Input
                            {...field}
                            id="form-rhf-demo-title"
                            aria-invalid={fieldState.invalid}
                            placeholder="enter your password"
                            autoComplete="off"
                            type="password"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                    <Controller
                      name="rePassword"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor="form-rhf-demo-title">
                            rePassword
                          </FieldLabel>
                          <Input
                            {...field}
                            id="form-rhf-demo-title"
                            aria-invalid={fieldState.invalid}
                            placeholder="enter your rePassword"
                            autoComplete="off"
                            type="password"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                    <Controller
                      name="phone"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor="form-rhf-demo-title">
                            phone
                          </FieldLabel>
                          <Input
                            {...field}
                            id="form-rhf-demo-title"
                            aria-invalid={fieldState.invalid}
                            placeholder="enter your password"
                            autoComplete="off"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                  </FieldGroup>
                  <Field
                    orientation="horizontal"
                    className="my-5 text-center flex items-center justify-center"
                  >
                    <Button
                      type="submit"
                      form="form-rhf-demo"
                      disabled={loading}
                      className="w-full py-5 text-xl px-2 cursor-pointer bg-green-500 hover:bg-green-400 text-white"
                    >
                      <IoPersonAdd />
                      {loading && <Loader />}Create My Account
                    </Button>
                  </Field>
                </form>
              </CardContent>
              <p className="border-t pt-10 border-gray-300/30 my-4 text-center">
                Already have an account?{" "}
                <Link
                  className="text-primary-600 hover:underline font-medium"
                  href="/login"
                >
                  Sing in
                </Link>
              </p>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
