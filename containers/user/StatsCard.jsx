import {
  UsersIcon,
  CalendarIcon,
  CalculatorIcon,
} from "@heroicons/react/solid";
import { DateTime } from "luxon";
import { useState, useEffect } from "react";
import { StatsCard, StatsCardLoading } from "../../components";
import { useDailyUserActiveLogs } from "./graphql";

export const StatsCardCointainer = ({ userCounter, activeUserCounter }) => {
  const from = DateTime.now().minus({ days: 7 }).toFormat("yyyyMMdd");
  const to = DateTime.now().toFormat("yyyyMMdd");

  const [stats, setStats] = useState([
    {
      stat: userCounter,
      label: "Signed Up User",
      icon: <UsersIcon />,
      color: "purple",
    },
    {
      stat: activeUserCounter,
      label: "Active Users Today",
      icon: <CalendarIcon />,
      color: "blue",
    },
    {
      stat: 0,
      label: "Avg Active Users 7 Days",
      icon: <CalculatorIcon />,
      color: "green",
    },
  ]);
  const { data, loading, error } = useDailyUserActiveLogs({
    variables: { from, to },
  });
  useEffect(() => {
    const newStats = [...stats];
    if (userCounter !== newStats[0].stat) {
      newStats[0] = {
        stat: userCounter,
        label: "Signed Up User",
        icon: <UsersIcon />,
        color: "purple",
      };
    }
    if (activeUserCounter !== newStats[1].stat) {
      newStats[1] = {
        stat: activeUserCounter,
        label: "Active Users Today",
        icon: <CalendarIcon />,
        color: "blue",
      };
    }
    if (data?.dailyUserActiveLogs) {
      if (data.dailyUserActiveLogs.length > 0) {
        // avg calculations
        let totalLogins = 0;
        for (const dailyStat of data.dailyUserActiveLogs) {
          totalLogins += dailyStat.logins;
        }
        newStats[2] = {
          stat: (totalLogins / 7).toFixed(2),
          label: "Avg Active Users 7 Days",
          icon: <CalculatorIcon />,
          color: "green",
        };
      }
    }
    setStats(newStats);
  }, [userCounter, activeUserCounter, data]);

  return (
    <div className="flex flex-row mb-6 space-x-4">
      {stats.map((item) => (
        <div className="w-1/3" key={item.label}>
          {loading ? <StatsCardLoading /> : <StatsCard {...item} />}
        </div>
      ))}
    </div>
  );
};
