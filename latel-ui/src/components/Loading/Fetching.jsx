import { useState, useEffect } from "react";

export default function Fetching({ isFetching }) {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(isFetching);
    }, 700);

    return () => {
      clearTimeout(timeout);
    };
  }, [isFetching])
  
  return (
    <>
      {show && (
        <div className="fixed flex justify-center bottom-10 w-full">
          <div className="flex flex-row items-center justify-center bg-gray-900 rounded-md p-2">
            <div className="m-auto animate-spin h-5 w-5 border-l-4 border-r-4 border-t-4 border-b-4 border-b-gray-200 border-gray-400 rounded-full " />
            <p className="text-xs font-bold text-gray-200 px-1">Fetching</p>
          </div>
        </div>
      )}
    </>
  );
}
