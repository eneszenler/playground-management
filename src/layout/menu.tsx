import {ForwardRefExoticComponent, RefAttributes} from "react"
import {Home, User, Settings, LucideProps} from "lucide-react"

export type MenuType = {
    title: string
    url: string
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
    type: 'Main' | 'Secondary'
    children?: MenuType[]
}

export const menu: MenuType[] = [
    {title: "Active Sessions", url: "/", icon: Home, type: 'Main'},
    {title: "Subscribers", url: "/subscribers", icon: User, type: 'Main'},
    {title: "Settings", url: "/settings", icon: Settings, type: 'Secondary'}
]
