/* eslint-disable no-unused-vars */
import React, { Suspense } from "react";
import "./App.css";
import "@fontsource/inter";
import "react-date-range/dist/styles.css"; // Main styles
import "react-date-range/dist/theme/default.css"; // Theme styles
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Loader } from "./shared/components/Loader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { navigationTo } from "./helper/helper";

const AllRoutes = React.lazy(() => import("./routes"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onSettled: (_data, error) => {
        if (error) {
          console.error("Query Settled Error:", error);
        }
      },
      onError: (error) => {
        console.error("Query Error:", error);
        if (error?.response?.status === 401) {
          console.warn("Unauthorized access. Redirecting to login...");
          navigationTo({ to: "/login", replace: true });
        }
      },
    },
  },
});

function App() {
  // useEffect(() => {
  //   console.log = function () {};
  // }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Suspense
          fallback={
            <div className="loader-container">
              <Loader animation="border" width="50px" height="50px" />
            </div>
          }
        >
          <AllRoutes />
        </Suspense>
      </Provider>
      {/* {import.meta.env.MODE === "development" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )} */}
    </QueryClientProvider>
  );
}

export default App;
