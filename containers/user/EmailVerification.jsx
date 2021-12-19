import { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Router from "next/router";
import { EmailVerification } from "../../components";
import { useResendEmailVerif } from "./graphql";

export const EmailVerificationContainer = ({ isOpen = false }) => {
  const { user, error, isLoading, checkSession } = useUser();
  const [countdown, setCountdown] = useState(0);
  const [resendEmailVerif, { data, loading, error: emailVerifError }] =
    useResendEmailVerif();

  useEffect(async () => {
    if (countdown > 0) {
      if (countdown === 1) {
        checkSession();
      }
      setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }
  }, [countdown]);

  if (isLoading) {
    return <p>Loading . . .</p>;
  }
  if (user.email_verified) {
    Router.push("/dashboard");
  }

  const handleResend = async () => {
    setCountdown(60);
    await resendEmailVerif({
      variables: {},
    });
  };
  return (
    <EmailVerification
      onResend={handleResend}
      countdown={countdown}
      isOpen={isOpen}
      email={user.email}
    />
  );
};
