"use client";

import { authenticate } from "@/actions";
import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";
import { IoIosInformation } from "react-icons/io";
import { IoInformationOutline } from "react-icons/io5";
import clsx from "clsx";

export const LoginForm = () => {
  const [state, dispatch] = useFormState(authenticate, undefined);
  console.log({ state });
  return (
    <form action={dispatch} className="flex flex-col">
      <label htmlFor="email">Email</label>
      <input
        className="px-5 py-2 border bg-gray-300 rounded mb-5"
        type="email"
        name="email"
      />

      <label htmlFor="email">Password</label>
      <input
        className="px-5 py-2 border bg-gray-300 rounded mb-5"
        type="password"
        name="password"
      />

      {state == "CredentialsSignin" && (
        <div className="mb-2 flex flex-row">
          <IoInformationOutline className="text-red-500" />
          <p className="text-red-500">Invalid credentials.</p>
        </div>
      )}

      <LoginButton />

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/new-account" className="btn-secondary text-center">
        Create new account
      </Link>
    </form>
  );
};

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={clsx({"btn-primary" : !pending, "btn-disabled" : pending})} disabled={pending}>
      Log In
    </button>
  );
}

export default LoginForm;
