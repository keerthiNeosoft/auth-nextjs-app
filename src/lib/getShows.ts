import { Show } from "@/app/page"

export const fetchData = async (): Promise<Show[]> => {
    const result = await fetch("https://65a5192852f07a8b4a3e59ba.mockapi.io/api/entertainment/v1/shows")
        .then(res => res.json())
        .catch(err => console.log(err))

    return result
}