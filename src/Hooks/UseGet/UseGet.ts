import { get } from "lodash";
import { Api } from "Services";
import { useQuery } from "@tanstack/react-query";

type typeUseGet = {
  path: string;
  queryKey: string;
};

const useGet = ({ path = "/", queryKey }: typeUseGet) => {
  const data = useQuery({
    queryKey: [queryKey],
    queryFn: () => Api.get(path).then((response) => get(response, "data")),
  });

  return data;
};

export default useGet;
