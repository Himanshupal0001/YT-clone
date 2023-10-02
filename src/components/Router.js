import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import Layout from "./Layout";
//import MainContainer from "./MainContainer";
import Body from "./Body";
import WatchPage from './WatchPage'
import SearchResults from "./SearchResults";
import Shimmer from "./Shimmers/Shimmer";
import LivePageContainer from "./LiveFeature/LivePageContainer";
import LiveWatchPage from "./LiveFeature/LiveWatchPage";

function Router() {

    const BrowserRouter = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Body />
                },
                {
                    path: 'watch',
                    element: <WatchPage />
                },
                {
                    path: 'results',
                    element: <SearchResults />
                },
                {
                    path: 'liveVideos',
                    element: <LivePageContainer />
                },
                {
                    path: 'watchlive',
                    element: <LiveWatchPage />
                },
                {
                    path: 'shimmer',
                    element: <Shimmer />
                },
                {
                    path: '*',
                    element: <p>page not found</p>,
                }

            ]
        }
    ])

    return (
        <RouterProvider router={BrowserRouter} />
    )

}

export default Router;