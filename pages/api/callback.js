import auth0 from "../../lib/auth0";
import cookie from "cookie";

export default async function callback(req, res) {
  try {
    await auth0.handleCallback(req, res);
  } catch (error) {
    console.error("callback error");
    console.error(error);
    res.setHeader(
      "Set-Cookie",
      cookie.serialize(
        "metax-alert",
        JSON.stringify({ type: "error", message: error.message }),
        { path: "/" }
      )
    );
    res.redirect("/");
    // res.status(error.status || 500).end(error.message);
  }
}
