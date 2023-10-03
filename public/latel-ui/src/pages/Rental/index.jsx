import { useQuery } from "@tanstack/react-query";
import Fetching from "../../components/Loading/Fetching";
import { useParams, Link } from "react-router-dom";
import { HiCheckBadge, HiXCircle } from "react-icons/hi2";

function getRental(id) {
  return fetch(`${import.meta.env.VITE_API_URL}/rentals/${id}`).then((res) =>
    res.json()
  );
}

export default function Rental() {
  const { id } = useParams();

  const {
    data: rental,
    isLoading,
    isError,
    isFetching,
  } = useQuery({
    queryKey: ["rental", id],
    queryFn: () => getRental(id),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  const amenities = [
    { has: rental.has_full_kitchen, name: "Full Kitchen" },
    { has: rental.has_air_conditioning, name: "Air Conditioning" },
    { has: rental.has_free_WiFi, name: "Free WiFi" },
    { has: rental.has_tv, name: "TV" },
    { has: rental.has_baby_bed, name: "Baby Bed" },
    { has: rental.has_room_service, name: "Room Service" },
    { has: rental.has_free_breakfast, name: "Free Breakfast" },
    { has: rental.has_fridge, name: "Fridge" },
    { has: rental.has_balcony, name: "Balcony" },
    { has: rental.has_private_pool, name: "Private Pool" },
    { has: rental.has_hot_tub, name: "Hot Tub" },
    { has: rental.has_microwave, name: "Microwave" },
    { has: rental.has_fireplace, name: "Fireplace" },
  ];

  console.log(rental);

  return (
    <div>
      <Fetching isFetching={isFetching} />
      <div className="flex flex-row font-bold pb-12 w-full">
        <Link className="block underline" to="/rentals">All Rentals</Link>
        <div className="ml-auto">
          <Link className="border bg-blue-600 rounded-md text-white text-sm font-semibold px-4 py-2" to={`/rentals/${rental.id}/edit`}>Edit</Link>
        </div>
      </div>
      <div className="max-w-3xl">
        <div className="pb-12">
          <p className="text-xs text-gray-600">#{rental.id}</p>
          <div className="pb-2 flex md:items-center md:justify-between md:flex-row flex-col">
            <h2 className="text-4xl font-medium">{rental.name}</h2>
            <div className="flex flex-col md:items-center md:justify-center pb-4 lg:pb-0">
              <p className="text-4xl lg:text-5xl font-bold">
                {rental.usd_price_per_night}
              </p>
              <p>USD Per Night</p>
            </div>
          </div>

          <p className="text-sm pb-1">{rental.full_address}</p>
          <p className="text-sm text-gray-600">
            {rental.max_capacity} guests | {rental.total_bedrooms} bedrooms |{" "}
            {rental.total_bathrooms} bathrooms{" "}
          </p>
        </div>

        <div className="pb-12">
          <h3 className="font-medium text-3xl pb-6">About this rental</h3>
          <p className="max-w-4xl text-gray-600 pb-5">{rental.description}</p>
          <div className="grid grid-cols-3 gap-5">
            <div>
              <h4 className="font-bold">Total Beds</h4>
              <p className="text-gray-600">{rental.total_beds}</p>
            </div>
            <div>
              <h4 className="font-bold">Square Feet</h4>
              <p className="text-gray-600">{rental.square_feet}</p>
            </div>
            <div>
              <h4 className="font-bold">View</h4>
              <p className="text-gray-600">{rental.view}</p>
            </div>
          </div>
        </div>

        <div className="pb-12">
          <h3 className="font-medium text-3xl pb-6">Amenities</h3>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {amenities.map((amenity) => (
              <div
                key={amenity.name}
                className="flex items-center border-gray-300 rounded-md py-1"
              >
                {amenity.has ? (
                  <HiCheckBadge className="text-green-500 h-6 w-6" />
                ) : (
                  <HiXCircle className="text-red-500 h-6 w-6" />
                )}
                <p className="text-gray-600 font-bold pl-2">{amenity.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
