export default function Skeleton() {
  return (
    <div className="p-4 rounded-md border border-gray-200">
      <div className="h-4 w-5 mb-2 bg-gray-200 animate-pulse" />
      <div className="h-6 w-2/3 mb-2 bg-gray-200 animate-pulse" />
      <div className="h-4 w-3/4 mb-2 bg-gray-200 animate-pulse" />
      <div className="h-4 w-1/3 mb-2 bg-gray-200 animate-pulse" />

      <div className="flex justify-end">
        <div className="h-4 w-20 bg-gray-200 animate-pulse"></div>
      </div>
    </div>
  );
}
