import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import {QueryClientProvider} from '@tanstack/react-query'

import {ThemeProvider} from "@/components/theme-provider"

import {router} from './router'
import {queryClient} from './api/client'
import './i18n'

import './style.tailwind.css'

export default async function render() {
    const root = ReactDOM.createRoot(document.getElementById('root')!)

    root.render(
        <React.StrictMode>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                    <RouterProvider router={router}/>
                </ThemeProvider>
            </QueryClientProvider>
        </React.StrictMode>
    )
}