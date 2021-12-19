import { useState } from "react";
import { Layout } from "../components";
import {
  UserTable,
  ProfileCardContainer,
  StatsCardCointainer,
} from "../containers";
import auth0 from "../lib/auth0";
import { authMiddleware } from "../middlewares";

const Dashboard = () => {
  const [userCounter, setUserCounter] = useState(0);
  return (
    <Layout isAuthenticated={true}>
      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-3">
          <ProfileCardContainer />
        </div>
        <div className="col-span-7">
          <StatsCardCointainer userCounter={userCounter} />
          {/* <div class="flex flex-col flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
            <div class="w-1/3">
              <div class="widget w-full p-4 rounded-lg bg-white border-l-4 border-purple-400">
                <div class="flex items-center">
                  <div class="icon w-14 p-3.5 bg-purple-400 text-white rounded-full mr-3">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col justify-center">
                    <div class="text-lg">230k</div>
                    <div class="text-sm text-gray-400">Sales</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-1/3">
              <div class="widget w-full p-4 rounded-lg bg-white border-l-4 border-purple-400">
                <div class="flex items-center">
                  <div class="icon w-14 p-3.5 bg-purple-400 text-white rounded-full mr-3">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col justify-center">
                    <div class="text-lg">230k</div>
                    <div class="text-sm text-gray-400">Sales</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-1/3">
              <div class="widget w-full p-4 rounded-lg bg-white border-l-4 border-purple-400">
                <div class="flex items-center">
                  <div class="icon w-14 p-3.5 bg-purple-400 text-white rounded-full mr-3">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col justify-center">
                    <div class="text-lg">230k</div>
                    <div class="text-sm text-gray-400">Sales</div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <UserTable setUserCounter={setUserCounter} />
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ req, res }) {
  const session = await auth0.getSession(req, res);
  const resAuthMiddleware = await authMiddleware(session);
  if (resAuthMiddleware) return resAuthMiddleware;

  return { props: {} };
}

export default Dashboard;
