import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Fetching from "../../components/Loading/Fetching";
import RentalsSkeleton from "./skeleton";

function getRentals(page) {
  return fetch(`${import.meta.env.VITE_API_URL}/rentals?page=${page}`).then(
    (res) => res.json()
  );
}

export default function Rental() {
  const [searchParams, setSearchParams] = useSearchParams({});

  const page = searchParams.get("page") || "1";

  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ["rentals", page],
    queryFn: () => getRentals(page),
    keepPreviousData: true,
  });

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [page]);

  const onPrev = () => {
    setSearchParams({ page: parseInt(data.rentals.current_page) - 1 });
  };

  const onNext = () => {
    setSearchParams({ page: parseInt(data.rentals.current_page) + 1 });
  };

  const hasRentals =
    !isLoading &&
    !isError &&
    data.rentals &&
    data.rentals.data &&
    data.rentals.data.length > 0;

  return (
    <div>
      <Fetching isFetching={isFetching} />
      <h1 className="text-2xl pb-1">Rentals</h1>
      <div className="pb-6">
        <p className="max-w-5xl">Manage all your rentals in one place.</p>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        {isLoading
          ? [...Array(10).keys()].map((v) => <RentalsSkeleton key={v} />)
          : null}

        {isError ? <div>Error...</div> : null}

        {hasRentals &&
          data.rentals.data.map((rental) => (
            <div
              key={rental.id}
              className="p-4 rounded-md border border-gray-300"
            >
              <p className="text-xs text-gray-600">#{rental.id}</p>
              <h2 className="font-medium text-lg pb-1">
                <Link to={`${rental.id}`} className="hover:underline">
                  {rental.name}
                </Link>
              </h2>
              <p className="text-sm pb-1">{rental.full_address}</p>
              <p className="text-sm text-gray-600">
                {rental.max_capacity} guests | {rental.total_bedrooms} bedrooms
                | {rental.total_bathrooms} bathrooms{" "}
              </p>
              <div className="text-right">
                <Link className="text-sm hover:underline" to={`${rental.id}`}>
                  View Details
                </Link>
              </div>
            </div>
          ))}
      </div>
      {hasRentals && (
        <div className="flex items-center gap-10 justify-center py-10">
          <button
            disabled={data?.rentals?.current_page === 1}
            type="button"
            onClick={onPrev}
            className={`border border-gray-300 px-5 py-1 rounded-sm ${
              data?.rentals?.current_page === 1
                ? "cursor-not-allowed bg-gray-100"
                : ""
            }`}
          >
            Previous
          </button>

          <button
            disabled={
              data?.rentals?.last_page.toString() === searchParams.get("page")
            }
            type="button"
            onClick={onNext}
            className={`border border-gray-300 px-5 py-1 rounded-sm ${
              data?.rentals?.last_page.toString() === searchParams.get("page")
                ? "cursor-not-allowed bg-gray-100"
                : ""
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
