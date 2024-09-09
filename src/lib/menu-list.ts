import { LucideIcon, User } from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "Módulos",
      menus: [
        {
          href: "/users",
          label: "Usuarios",
          active: pathname.includes("/users"),
          icon: User,
          submenus: [
            {
              href: "/users",
              label: "Listado",
              active: pathname === "/users",
            },
            {
              href: "/users/new",
              label: "Nuevo",
              active: pathname === "/users/new",
            },
          ],
        },
      ],
    },
  ];
}
