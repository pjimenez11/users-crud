import { Tag, Settings, Bookmark, SquarePen, LucideIcon } from 'lucide-react'

type Submenu = {
  href: string
  label: string
  active: boolean
}

type Menu = {
  href: string
  label: string
  active: boolean
  icon: LucideIcon
  submenus: Submenu[]
}

type Group = {
  groupLabel: string
  menus: Menu[]
}

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: 'Módulos',
      menus: [
        {
          href: '/example',
          label: 'Ejemplo',
          active: pathname.includes('/example'),
          icon: SquarePen,
          submenus: [],
        }
      ],
    },
    {
      groupLabel: 'Ajustes',
      menus: [
        {
          href: '/account',
          label: 'Cuenta',
          active: pathname.includes('/account'),
          icon: Settings,
          submenus: [],
        },
      ],
    },
  ]
}
