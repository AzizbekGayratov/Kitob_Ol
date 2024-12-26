import "./loading.css";

export default function Loading() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="loading ">
        <p className="mr-2">Loading</p>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  );
}
