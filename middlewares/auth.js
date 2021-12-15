const authMiddleware = async (session) => {
  if (!session || !session.user) {
    return {
      redirect: {
        destination: "/api/login",
        permanent: false,
      },
    };
  }

  if (!session.user.email_verified) {
    return {
      redirect: {
        destination: "/please-verify-email",
        permanent: false,
      },
    };
  }
  return null;
};

export { authMiddleware };
