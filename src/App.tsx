import Routes from "Routes";
import { Suspense } from "react";
import { Loader } from "Components";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={Routes} />
    </Suspense>
  );
};

export default App;
