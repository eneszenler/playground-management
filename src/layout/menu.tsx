import {ForwardRefExoticComponent, RefAttributes} from "react"
import {Home, User, Settings, LucideProps} from "lucide-react"

type MenuType = {
    title: string
    url: string
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
    type: 'Main' | 'Secondary'
}

export const menu: MenuType[] = [
    {title: "Home", url: "/", icon: Home, type: 'Main'},
    {title: "Subscribers", url: "/subscribers", icon: User, type: 'Main'},
    {title: "Settings", url: "/settings", icon: Settings, type: 'Secondary'}
]
