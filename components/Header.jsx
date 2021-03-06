import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import logo from "../public/img/logo.png";

const Header = ({ isAuthenticated, isHome = false, isLoading = false }) => {
  return (
    <div className="relative bg-white shadow-md">
      <div className="max-w-full">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1 pl-32">
            <Image src={logo} height={50} width={200} />
          </div>
          <div
            className={`hidden md:flex items-center justify-end md:flex-1 lg:w-0 pr-32 ${
              isLoading ?? "animate-pulse"
            }`}
          >
            {isLoading && <div className="h-10 w-24 bg-gray-200 rounded" />}
            {!isLoading &&
              (isAuthenticated ? (
                <>
                  <Link href={isHome ? "/dashboard" : "/"}>
                    <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-yellow-400 rounded-md shadow-sm text-base font-medium text-yellow-400 bg-white hover:bg-yellow-400 hover:text-white">
                      {isHome ? "Dashboard" : "Home"}
                    </a>
                  </Link>
                  <a
                    href="/api/logout"
                    className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-400 hover:bg-yellow-500"
                  >
                    Logout
                  </a>
                </>
              ) : (
                <a
                  href="/api/login"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-400 hover:bg-yellow-500"
                >
                  Login
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isHome: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export { Header };
