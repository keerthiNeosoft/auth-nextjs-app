import { fetchData } from "@/lib/getShows"

export default async function NowShowing() {
    let nowShowing = await fetchData();
    nowShowing = nowShowing.filter(show => (show.seats < 5))

    return (
        <>
            <div className="flex flex-col justify-center w-1/2 mt-20 m-auto">
                {nowShowing.map(show => {
                    return <div key={show.id} className="flex flex-row text-center space-x-10 leading-8 border-b-2 m-1">
                        <p className="bg-slate-100 text-red-600">Screen {show.id}</p>
                        <p>{show.name} </p>
                        <p className="text-blue-600">Starts at</p>
                        <p>{new Date(show.createdAt).toLocaleTimeString()}</p>
                    </div>
                })}
            </div>
        </>
    )
}