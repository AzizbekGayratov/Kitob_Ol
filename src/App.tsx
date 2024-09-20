import Routes from "./Routes/index";
import { Suspense } from "react";
import { Loader } from "./Components/index.ts";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={Routes} />
    </Suspense>
  );
};

export default App;
