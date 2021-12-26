import { useUser } from "@auth0/nextjs-auth0";
import { Tab } from "@headlessui/react";
import { Layout } from "../components";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};
function Home() {
  const { user, error, isLoading } = useUser();

  // if (isLoading) return <div>Loading...</div>;

  return (
    <Layout isAuthenticated={user} isHome={true} isLoading={isLoading}>
      <h1 className="font-semibold text-3xl">Documentation</h1>

      <div className="w-full py-6">
        <Tab.Group>
          <Tab.List className="flex p-1 w-1/3 space-x-1 bg-blue-900/20">
            <Tab
              key={1}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-blue-700",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              Frontend
            </Tab>
            <Tab
              key={2}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 ",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              Backend
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel key={1} className={classNames("bg-white p-3")}>
              <h2 className="font-semibold text-xl mb-4">Technologies</h2>
              <table>
                <tbody>
                  <tr>
                    <td className="align-top px-2">React</td>
                    <td className="align-top px-2">:</td>
                    <td className="align-top px-2">
                      A JavaScript library for building user interfaces.{" "}
                      <a
                        className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                        href="https://reactjs.org/"
                      >
                        more
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top px-2">Nextjs</td>
                    <td className="align-top px-2">:</td>
                    <td className="align-top px-2">
                      The React Framework for Production Next.js gives you the
                      best developer experience with all the features you need
                      for production: hybrid static & server rendering,
                      TypeScript support, smart bundling, route pre-fetching,
                      and more. No config needed.{" "}
                      <a
                        className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                        href="https://nextjs.org/"
                      >
                        more
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top px-2">GraphQL</td>
                    <td className="align-top px-2">:</td>
                    <td className="align-top px-2">
                      GraphQL is a query language for APIs and a runtime for
                      fulfilling those queries with your existing data. GraphQL
                      provides a complete and understandable description of the
                      data in your API, gives clients the power to ask for
                      exactly what they need and nothing more, makes it easier
                      to evolve APIs over time, and enables powerful developer
                      tools.{" "}
                      <a
                        className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                        href="https://graphql.org/"
                      >
                        more
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top px-2">Tailwind</td>
                    <td className="align-top px-2">:</td>
                    <td className="align-top px-2">
                      A utility-first CSS framework packed with classes like
                      flex, pt-4, text-center and rotate-90 that can be composed
                      to build any design, directly in your markup.{" "}
                      <a
                        className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                        href="https://tailwindcss.com/"
                      >
                        more
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top px-2">Auth0</td>
                    <td className="align-top px-2">:</td>
                    <td className="align-top px-2">
                      Auth0 is an easy to implement, adaptable authentication
                      and authorization platform.{" "}
                      <a
                        className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                        href="https://auth0.com/"
                      >
                        more
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2 className="font-semibold text-xl mt-6 mb-4">Layers</h2>
              <table>
                <tbody>
                  <tr>
                    <td className="align-top px-2">Pages</td>
                    <td className="align-top px-2">:</td>
                    <td className="align-top px-2">
                      This layer is responsible for page layout and managing
                      business logic when server side rendering
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top px-2">Containers</td>
                    <td className="align-top px-2">:</td>
                    <td className="align-top px-2">
                      As the name implies, this layer is responsible for
                      containerizing components and placing business logic such
                      as fetching data from api, caching etc.
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top px-2">Components</td>
                    <td className="align-top px-2">:</td>
                    <td className="align-top px-2">
                      Layer responsible for presentation
                    </td>
                  </tr>
                </tbody>
              </table>
            </Tab.Panel>
            <Tab.Panel key={2} className={classNames("bg-white p-3")}>
              <h2 className="font-semibold text-xl mb-4">Technologies</h2>
              <table>
                <tbody>
                  <tr>
                    <td className="align-top px-2">NestJS</td>
                    <td className="align-top px-2">:</td>
                    <td className="align-top px-2">
                      A progressive Node.js framework for building efficient,
                      reliable and scalable server-side applications.
                      <a
                        className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                        href="https://nestjs.com/"
                      >
                        more
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top px-2">CQRS Pattern</td>
                    <td className="align-top px-2">:</td>
                    <td className="align-top px-2">
                      CQRS stands for Command and Query Responsibility
                      Segregation, a pattern that separates read and update
                      operations for a data store. Implementing CQRS in your
                      application can maximize its performance, scalability, and
                      security. The flexibility created by migrating to CQRS
                      allows a system to better evolve over time and prevents
                      update commands from causing merge conflicts at the domain
                      level.{" "}
                      <a
                        className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                        href="https://docs.microsoft.com/en-us/azure/architecture/patterns/cqrs"
                      >
                        more
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top px-2">GraphQL</td>
                    <td className="align-top px-2">:</td>
                    <td className="align-top px-2">
                      GraphQL is a query language for APIs and a runtime for
                      fulfilling those queries with your existing data. GraphQL
                      provides a complete and understandable description of the
                      data in your API, gives clients the power to ask for
                      exactly what they need and nothing more, makes it easier
                      to evolve APIs over time, and enables powerful developer
                      tools.{" "}
                      <a
                        className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                        href="https://graphql.org/"
                      >
                        more
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top px-2">Auth0</td>
                    <td className="align-top px-2">:</td>
                    <td className="align-top px-2">
                      Auth0 is an easy to implement, adaptable authentication
                      and authorization platform.{" "}
                      <a
                        className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                        href="https://auth0.com/"
                      >
                        more
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Layout>
  );
}

export default Home;
