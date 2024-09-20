import { get } from "lodash";
import { Api } from "Services";
import { useMutation } from "@tanstack/react-query";

interface typeUseUpdate {
  path: string;
  queryKey: string;
  onError: (data: unknown) => void;
  onSuccess: (data: unknown) => void;
}

const usePut = ({
  path = "",
  onError = () => {},
  onSuccess = () => {},
}: typeUseUpdate) => {
  const response = useMutation({
    mutationFn: (data: unknown) => {
      return Api.put(path, data).then((response) => {
        return get(response, "data");
      });
    },
    onError: (error) => onError(error),
    onSuccess: (successData) => onSuccess(successData),
  });
  return response;
};

export default usePut;
