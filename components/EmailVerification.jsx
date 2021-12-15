import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import emailVerifPic from "../public/img/email-verification.jpg";

export const EmailVerification = ({
  isOpen = false,
  email = "",
  resendIn = 60,
}) => {
  const [countdown, setCountdown] = useState(0);
  useEffect(() => {
    if (countdown > 0) {
      setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }
  }, [countdown]);
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto h-full"
        onClose={() => {}}
      >
        <div className="min-h-screen px-4 text-center h-full">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed h-full inset-0 bg-black opacity-70" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              style={{ height: "90%" }}
              className="inline-block w-full max-w-full p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl "
            >
              <div className="mt-2 flex items-center justify-center">
                <div className="flex-auto">
                  <div className="text-center">
                    <h2 className="text-black text-2xl font-bold mb-4">
                      Verify Email
                    </h2>
                    <p className="text-sm text-gray-500">
                      Follow link to <b>{email}</b> to complete signup. If you
                      don’t see it, you may need to check your{" "}
                      <b>spam folder.</b> Please reload periodically if you have
                      successfully verified your email.
                    </p>
                    <div className="mt-20">
                      {countdown === 0 ? (
                        <>
                          <Link href="/">
                            <a className="inline-flex mr-4 justify-center px-4 py-2 text-sm font-medium text-yellow-400 bg-white border border-yellow-400 rounded-md focus-visible:ring-2 focus-visible:ring-offset-2">
                              Back to Home
                            </a>
                          </Link>
                          <button
                            type="button"
                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-yellow-900 bg-yellow-200 border border-transparent rounded-md hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-600"
                            onClick={() => setCountdown(60)}
                          >
                            Resend
                          </button>
                        </>
                      ) : (
                        <button
                          disabled={true}
                          type="button"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-200 border border-transparent rounded-md"
                          onClick={() => {}}
                        >
                          {resendIn}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex-none pt-12">
                  <Image src={emailVerifPic} width={500} height={500} />
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
