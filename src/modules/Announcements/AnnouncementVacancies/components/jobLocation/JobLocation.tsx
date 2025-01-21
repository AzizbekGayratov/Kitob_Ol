import LocationSelect from "Components/Common/LocationSelect/LocationSelect";
import {
  ComponentPropsTypeJob,
} from "modules/Announcements/types/Types";

export default function JobLocation({
  jobFormData,
  setJobFormData,
  reset,
}: ComponentPropsTypeJob) {
  return (
    <LocationSelect
      setSelectedLocation={(location) =>
        setJobFormData({ ...jobFormData, location })
      }
      reset={reset}
      stylesForLabel="font-Inter text-[24px] leading-[29px] inline-block"
      padding="p-10"
    />
  );
}
