import {ForwardRefExoticComponent, RefAttributes} from "react"

import {Building2, LucideProps} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import {useLocation, useNavigate} from "react-router-dom";

type Props = {
    menu: {
        title: string
        url: string
        icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
        type: 'Main' | 'Secondary'
    }[]
}

export function AppSidebar(props: Props) {
    const {menu} = props

    const location = useLocation()
    const navigate = useNavigate()

    const activeKey = menu.find(item => item.url === location.pathname)?.url

    const handleClick = (key: string) => {
        const item = menu.find(item => item.url === key)
        if (item) {
            navigate(item.url)
        }
    }

    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:!p-1.5 cursor-pointer"
                        >
                            <div>
                                <Building2/>
                                <span className="text-base font-semibold">Company Name</span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menu.filter(item => item.type === 'Main').map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        onClick={() => handleClick(item.url)}
                                        isActive={item.url === activeKey}
                                        className="cursor-pointer"
                                    >
                                        <div>
                                            <item.icon/>
                                            <span>{item.title}</span>
                                        </div>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup className="mt-auto">
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menu.filter(item => item.type === 'Secondary').map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        onClick={() => handleClick(item.url)}
                                        isActive={item.url === activeKey}
                                        className="cursor-pointer"
                                    >
                                        <div>
                                            <item.icon/>
                                            <span>{item.title}</span>
                                        </div>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}