import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function users(req, res) {
  try {
    const { accessToken } = await getAccessToken(req, res);

    if (accessToken) res.send(accessToken);
    res.status(500).end(accessToken);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
});
