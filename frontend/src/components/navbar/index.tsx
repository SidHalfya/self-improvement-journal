"use client";
import Link from "next/link";
import { NavButton } from "./Navbutton";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

const ROUTES = [
  { title: "Home", href: "/", icon: "home" as const, id: uuidv4() },
  {
    title: "My Team",
    href: "/my-team",
    icon: "team" as const,
    id: uuidv4(),
  },
  {
    title: "Gameweeks",
    href: "/gameweeks",
    icon: "gameWeek" as const,
    id: uuidv4(),
  },
  {
    title: "All players",
    href: "/all-players",
    icon: "players" as const,
    id: uuidv4(),
  },
  {
    title: "Leaderboards",
    href: "/leaderboards",
    icon: "leaderboard" as const,
    id: uuidv4(),
  },
];

export default function NavBar() {
  const [selectedTab, setSelectedTab] = useState(ROUTES[0].id);
  return (
    <div className="flex h-16 px-3 py-2 bg-cream">
      <Link className="flex items-center p-2 mr-8" href="/">
        <SportsSoccerIcon
          className="text-coffeeDark"
          style={{ height: 40, width: 40 }}
        />
        <div className="flex font-avenir text-2xl tracking-wide">
          <p className="font-normal text-coffeeDark">
            My <span className="text-coffeeDarkest font-semibold">FPL</span>
          </p>
        </div>
      </Link>
      <div className="flex gap-2 mx-4">
        {ROUTES.map((route) => (
          <NavButton
            key={route.id}
            route={route}
            isSelected={selectedTab === route.id}
            onClick={() => setSelectedTab(route.id)}
          />
        ))}
      </div>
      <div className="ml-auto mr-12 flex items-center">
        <NavButton
          route={{
            title: "Logout",
            href: "/logout",
            icon: "logout" as const,
            id: "logout",
          }}
          isSelected={selectedTab === "logout"}
          onClick={() => {}}
        />
      </div>
    </div>
  );
}
