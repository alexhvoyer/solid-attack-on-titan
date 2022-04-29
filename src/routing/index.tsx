import { useRoutes } from "solid-app-router";
import { lazy } from "solid-js";
import Layout from "@/layout";

const routes = [
    {
        path: '/',
        component: lazy(() => import("@/pages/main"))
    },
    {
        path: '/persons',
        component: lazy(() => import('@/pages/persons'))
    },
    {
        path: '/persons/:id',
        component: lazy(() => import('@/pages/person'))
    }
];

export const Routing = () => {
    const Routing = useRoutes(routes);
    return (
        <Layout>
            <Routing />
        </Layout>
    );
};
