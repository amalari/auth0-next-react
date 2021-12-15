import auth0 from "../../lib/auth0";

export default async function login(req, res) {
  try {
    await auth0.handleLogin(req, res, {
      returnTo: `${process.env.AUTH0_BASE_URL}/dashboard`,
    });
  } catch (error) {
    console.error("login error");
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
