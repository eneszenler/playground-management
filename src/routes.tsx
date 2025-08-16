import HomePage from "@/pages/home/page"
import SubscribersPage from "@/pages/subscribers/page"
import SettingsPage from "@/pages/settings/page"

export const routes = [
    {
        id: "home",
        path: "/",
        element: <HomePage/>
    },
    {
        id: "subscribers",
        path: "/subscribers",
        element: <SubscribersPage/>
    },
    {
        id: "settings",
        path: "/settings",
        element: <SettingsPage/>
    },
]