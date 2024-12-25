import { Loading } from "Components/Common/Loading";
import Routes from "./Routes/index";
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";


const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={Routes} />
    </Suspense>
  );
};

export default App;
