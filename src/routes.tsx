import ActiveSessionsPage from "@/pages/active-sessions/page"
import SubscribersPage from "@/pages/subscribers/page"
import SettingsPage from "@/pages/settings/page"

export const routes = [
    {
        id: "active-sessions",
        path: "/",
        element: <ActiveSessionsPage/>
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