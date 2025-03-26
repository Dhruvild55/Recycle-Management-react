import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Router from "./Router";
import React, { Suspense } from "react";
import { Loader } from "../shared/components/Loader";

function AllRoutes() {
  function allPaths(children) {
    return children?.map(
      ({ path, Component, exact, props, children: child }) => {
        return child?.length ? (
          <Route element={<Component />} key={path || Math.random()}>
            {allPaths(child)}
          </Route>
        ) : (
          <Route
            key={path || Math.random()} // Ensure a unique key
            path={path}
            element={
              <Suspense
                fallback={
                  <div className="loader-container">
                    <Loader animation="border" width="50px" height="50px" />
                  </div>
                }
              >
                <Component {...props} />
              </Suspense>
            }
            exact={exact}
          />
        );
      }
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {Router?.map(({ isPrivateRoute, children, Component }, index) => {
          return (
            <Route
              key={isPrivateRoute ? `private-${index}` : `public-${index}`} // Ensure unique keys
              element={<Component />}
            >
              {allPaths(children)}
            </Route>
          );
        })}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default React.memo(AllRoutes);
