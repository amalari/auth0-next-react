import {
  UsersIcon,
  CalendarIcon,
  CalculatorIcon,
} from "@heroicons/react/solid";
import { DateTime } from "luxon";
import { useState, useEffect } from "react";
import { StatsCard } from "../../components";
import { useDailyStats } from "./graphql";

export const StatsCardCointainer = ({ userCounter }) => {
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
      stat: 0,
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
  const { data, loading, error } = useDailyStats({
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
    if (data?.dailyStats) {
      if (data.dailyStats.length > 0) {
        const firstStats = data.dailyStats[data.dailyStats.length - 1];
        console.log(DateTime.now().toISO());
        console.log(DateTime.now().toUTC().toISO());
        const diffNow = DateTime.now()
          .toUTC()
          .diff(DateTime.fromISO(firstStats.date), "days")
          .toObject();
        if (diffNow.days < 1) {
          newStats[1] = {
            stat: firstStats.logins,
            label: "Active Users Today",
            icon: <CalendarIcon />,
            color: "blue",
          };
        }

        // avg calculations
        let totalLogins = 0;
        for (const dailyStat of data.dailyStats) {
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
  }, [userCounter, data]);

  if (loading) return <></>;
  return (
    <div className="flex flex-row mb-6 space-x-4">
      {stats.map((item) => (
        <div className="w-1/3" key={item.label}>
          <StatsCard {...item} />
        </div>
      ))}
    </div>
  );
};
