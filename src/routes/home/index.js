import { lazy } from "react";
import MainLayout from "../../layout/MainLayout";
import { pageLoader } from "../../utils/lazyImport";
import { PATHS } from "../../constants/paths";

export default [
  {
    exact: true,
    path: "/twp/home",
    component: lazy(
      pageLoader(() =>
        Promise.all([import("../../pages/Home")]).then(
          ([moduleExports]) => moduleExports
        )
      )
    ),

    layout: MainLayout,
  },
  {
    exact: true,
    path: "",
    component: lazy(
      pageLoader(() =>
        Promise.all([import("../../pages/Home")]).then(
          ([moduleExports]) => moduleExports
        )
      )
    ),

    layout: MainLayout,
  },
];
