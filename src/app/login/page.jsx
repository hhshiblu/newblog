import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-6 sm:px-6 lg:px-8 z-50">
      <div className=" sm:mx-auto sm:w-full sm:max-w-md ">
        {/* <div className="flex justify-center text-center">
          <Link href="/" className="text-center">
            <Image
              src="/rajdhola_title_logo.svg"
              alt=""
              className="h-full "
              width={160}
              height={100}
            />
          </Link>
        </div> */}
        <h2 className="pt-3 text-center text-xl font-semibold text-gray-900">
          Login on your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            className="space-y-3"
            // action={HandelSubmit}
          >
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  // ref={number}
                  type="number"
                  name="phoneNumber"
                  autoComplete="phoneNumber"
                  placeholder="+880 000000"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  // ref={passwords}
                  // type={showPassword1 ? "text" : "password"}
                  name="password"
                  autoComplete="curent-password"
                  placeholder="*****"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-500 sm:text-sm"
                />
                {/* {showPassword1 ? (
                  <AiOutlineEye
                    className=" absolute right-3 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setShowPassword1(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className=" absolute right-3 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setShowPassword1(true)}
                  />
                )} */}
              </div>
            </div>

            <div className="text-[14px] text-[#00453e] font[500] text-right   ">
              <Link href="/login/forgot-password"> Forgotten password? </Link>
            </div>
            <div>{/* <SubmitButton name="Login" type="loading..." /> */}</div>
            <div className={`flex items-center w-full`}>
              <h4> Not have any account?</h4>
              <Link
                href="/signup-account"
                className="text-[#00453e] hover:underline  p-2"
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center text-center font-semibold pt-8 text-gray-600 gap-4 w-full mx-auto text-[14px]">
        <span>
          <Link href="#">© Rajdhola</Link>
        </span>
        <span>
          <Link href="#">Contact</Link>
        </span>
        <span>
          <Link href="#">Privacy & terms</Link>
        </span>
      </div>
    </div>
  );
}

export default page;
