import { HeaderOnly } from "~/components/Layout";
import { FollowingPage } from "~/pages/Following";
import { HomePage } from "~/pages/Home";
import { ProfilePage } from "~/pages/Profile";
import { SearchPage } from "~/pages/Search";
import { UploadPage } from "~/pages/Upload";

export interface RouteProps {
  path: string;
  component: any;
  layout?: any;
}

// public routes
const publicRoutes: RouteProps[] = [
  { path: "/", component: HomePage },
  { path: "/following", component: FollowingPage },
  { path: "/profile", component: ProfilePage },
  { path: "/upload", component: UploadPage, layout: HeaderOnly },
  { path: "/search", component: SearchPage, layout: null },
];

// private routes
const privateRoutes = {};

export { publicRoutes, privateRoutes };
