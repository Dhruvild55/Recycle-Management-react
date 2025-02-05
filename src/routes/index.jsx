import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Router from "./Router";
import React, { Suspense } from "react";
import { Loader } from "../shared/components/Loader";

function AllRoutes() {
  function allPaths(children) {
    return children?.map(
      ({ path, Component, exact, props, children: child }, index) => {
        return child?.length ? (
          <Route element={<Component />} key={index}>
            {allPaths(child)}
          </Route>
        ) : (
          <Route
            key={path}
            path={path}
            element={
              <Suspense
                fallback={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100vh",
                    }}
                  >
                    <Loader animation="border" width="50px" height="50px" />
                  </div>
                }
              >
                <Component {...props} />
              </Suspense>
            }
            exact={exact}
          ></Route>
        );
      }
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {Router?.map(({ isPrivateRoute, children, Component }) => {
          return (
            <Route
              key={isPrivateRoute ? "private" : "public"}
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
