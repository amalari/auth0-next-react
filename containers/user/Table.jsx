import Table from "react-tailwind-table";
import { useEffect } from "react";
import { DateTime } from "luxon";
import "react-tailwind-table/dist/index.css";
import { useUsers } from "./graphql";

export const UserTable = ({ setUserCounter, setActiveUserCounter }) => {
  const { data, loading, error } = useUsers();
  useEffect(() => {
    if (data) {
      setUserCounter(data.users.length);
      let activeUserToday = 0;
      let currentDate = DateTime.now().toUTC();

      for (const user of data.users) {
        const diffNow = currentDate
          .diff(DateTime.fromISO(user.last_login), "days")
          .toObject();
        console.log(diffNow);
        if (diffNow.days < 1) activeUserToday += 1;
      }
      setActiveUserCounter(activeUserToday);
    }
  }, [data]);
  if (loading) return <p>Loading ...</p>;

  const rowcheck = (row, column, display_value) => {
    if (column.field === "picture") {
      return (
        <img
          className="h-12 w-12 bg-white rounded-full"
          src={display_value}
          alt=""
        />
      );
    }

    if (column.field === "email_verified") {
      const labelClass =
        "whitespace-nowrap rounded-full inline-flex items-center justify-center px-2 py-1 border border-transparent shadow-sm text-sm font-medium text-white";
      return display_value ? (
        <span className={`${labelClass} bg-green-400`}>Verified</span>
      ) : (
        <span className={`${labelClass} bg-amber-400`}>Pending</span>
      );
    }

    if (column.field === "created_at") {
      return DateTime.fromISO(display_value).toFormat("ff");
    }

    if (column.field === "last_login") {
      return DateTime.fromISO(display_value).toFormat("ff");
    }

    return display_value;
  };
  return (
    <Table
      styling={{ main: "shadow-none" }}
      columns={[
        {
          // use_in_display: false,
          field: "picture", //Object destructure
          use: "Picture",
        },
        {
          // use_in_display: false,
          field: "email", //Object destructure
          use: "Email",
        },
        {
          // use_in_display: false,
          field: "name", //Object destructure
          use: "Name",
        },
        {
          // use_in_display: false,
          field: "email_verified", //Object destructure
          use: "Email Verified",
        },
        {
          field: "created_at",
          use: "Sign Up At",
          // use_in_search:false
        },
        {
          field: "logins_count",
          use: "Logins Count",
          // use_in_search:false
        },
        {
          field: "last_login",
          use: "Last Login",
          // use_in_search:false
        },
      ]}
      rows={data.users}
      row_render={rowcheck}
    />
  );
};
