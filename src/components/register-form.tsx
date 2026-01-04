/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useActionState, useEffect } from "react";
import { Button } from "./ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { registerClient } from "@/services/auth/registerClient";
import { toast } from "sonner";



const RegisterForm = () => {
const [state, formAction, isPending] = useActionState(registerClient, null);
  // console.log(state, "state");
  const getFieldError = (fieldName: string) => {
    if (state && state.errors) {
      const error = state.errors.find((err: any) => err.field === fieldName);
      if (error) {
        return error.message;
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

   useEffect(() => {
       if(state && !state.success && state.message){
          toast.error(state.message)
       }
    }, [state]);
  return (
    <form action={formAction}>
      <FieldGroup>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <Field>
            <FieldLabel htmlFor="name">Full Name</FieldLabel>
            <Input id="name" name="name" type="text" placeholder="Your Name" />
            {/* {getFieldError("name") && (
              <FieldDescription className="text-red-600">
                {getFieldError("name")}
              </FieldDescription>
            )} */}
          </Field>
          {/* Address */}
          <Field>
            <FieldLabel htmlFor="address">Address</FieldLabel>
            <Input
              id="address"
              name="address"
              type="text"
              placeholder="Your Address"
            />

            {/* {getFieldError("address") && (
              <FieldDescription className="text-red-600">
                {getFieldError("address")}
              </FieldDescription>
            )} */}
          </Field>
          <Field>
            <FieldLabel htmlFor="phone">Phone</FieldLabel>
            <Input
              id="phone"
              name="phone"
              type="text"
              placeholder="Your Phone"
            />

            {/* {getFieldError("address") && (
              <FieldDescription className="text-red-600">
                {getFieldError("address")}
              </FieldDescription>
            )} */}
          </Field>
          {/* Email */}
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
            />

            {/* {getFieldError("email") && (
              <FieldDescription className="text-red-600">
                {getFieldError("email")}
              </FieldDescription>
            )} */}
          </Field>
          {/* Password */}
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input id="password" name="password" type="password" placeholder="**************" />

            {/* {getFieldError("password") && (
              <FieldDescription className="text-red-600">
                {getFieldError("password")}
              </FieldDescription>
            )} */}
          </Field>
          {/* Confirm Password */}
          <Field>
            <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="**************"
            />

            {/* {getFieldError("confirmPassword") && (
              <FieldDescription className="text-red-600">
                {getFieldError("confirmPassword")}
              </FieldDescription>
            )} */}
          </Field>
        </div>
        <FieldGroup className="mt-4">
          <Field>
            <Button className="bg-[#c73450] text-white cursor-pointer" type="submit">
              {isPending ? "Creating Account..." : "Create Account"}
              Create Account
            </Button>

            <FieldDescription className="px-6 text-center">
              Already have an account?{" "}
              <a href="/login" className="text-[#c73450] hover:underline">
                Sign in
              </a>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldGroup>
    </form>
  );
};

export default RegisterForm;