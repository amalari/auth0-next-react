import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import auth0 from "../../lib/auth0";

export default withApiAuthRequired(async function users(req, res) {
  try {
    const { idToken } = await auth0.getSession(req, res);

    if (idToken) res.send(idToken);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
});
