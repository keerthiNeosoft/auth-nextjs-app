import { fetchData } from "@/lib/getShows";
import Link from "next/link";

export default async function NowShowing() {
  let nowShowing = await fetchData();
  nowShowing = nowShowing.filter(
    (show) =>
      new Date().toLocaleTimeString("en-US", {
        hour12: false,
      }) <
      new Date(show.createdAt).toLocaleTimeString("en-US", {
        hour12: false,
      })
  );

  return (
    <>
      <div className="flex flex-col justify-center w-1/2 mt-20 m-auto">
        {nowShowing.map((show) => {
          return (
            <>
              <Link href={`/nowShowing/${show.id}`}>
                <div
                  key={show.id}
                  className="flex flex-row text-center space-x-10 leading-8 border-b-2 m-1"
                >
                  <p className="bg-slate-100 text-red-600">Screen {show.id}</p>
                  <p>{show.name} </p>
                  <p className="text-blue-600">Starts at</p>
                  <p>{new Date(show.createdAt).toLocaleTimeString()}</p>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}
