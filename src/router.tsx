import { lazy } from "react"
import { createBrowserRouter } from "react-router-dom"
import { Routes } from "./constants/routes.ts"

const App = lazy(() => import("./App.tsx"))
const MainPage = lazy(() => import("./pages/MainPage.tsx"))

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <App />,
    errorElement: <p>Error</p>,
    children: [
      {
        path: Routes.HOME,
        element: <MainPage />,
      },
    ],
  },
])

export default router
