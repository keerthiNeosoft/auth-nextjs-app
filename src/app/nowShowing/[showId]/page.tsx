import { Show } from "@/app/page";
import { fetchData } from "@/lib/getShows";
import Image from "next/image";

export default async function ShowName({
  params,
}: {
  params: {
    showId: number;
  };
}) {
  const nowShowing = await fetchData();
  const currentShow = nowShowing.find((show) => show.id === params.showId);

  if (!currentShow) {
    return null;
  }

  return (
    <>
      <div className="w-1/4 m-auto leading-10 text-center">
        <h1>About {currentShow?.name}</h1>
        <h2>Show at {new Date(currentShow?.createdAt).toLocaleTimeString()}</h2>
        <Image
          src={currentShow?.image}
          alt={currentShow?.name}
          height={500}
          width={400}
        />
        <h2>Number of remaining seats: {currentShow?.seats}</h2>
      </div>
    </>
  );
}
