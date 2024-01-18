import { fetchData } from "@/lib/getShows";
import styles from '../styles.module.css';

export default async function BookTicket() {
    let bookShow = await fetchData();
    bookShow = bookShow.filter(show => !(show.seats < 5))
    let tickets =Array.from(Array(20).keys());

    return (
        <>
        <div className="flex flex-col align-middle w-1/2 mt-16 m-auto border-gray-900">
            <input type="text" className={styles.inputText} placeholder="Enter your name"/>
            <input type="email" className={styles.inputText} placeholder="Enter your email" />
            <input type="number" className={styles.inputText} placeholder="Enter your phone number" />

            <select id="showlist" className="p-4 mt-4 rounded-2xl w-1/2 m-auto">
                {bookShow.map(show => {
                    return <option key={show.id} value={show.name}>{show.name}</option>
                })}
            </select>
            <select className="p-4 m-auto mt-4 rounded-2xl w-1/4" id="tickets">
                {tickets.map(ticket => <option key={ticket} value={ticket}>{ticket}</option>)}
            </select>
            <button className="p-5 bg-green-500 rounded-full w-1/3 mt-4 m-auto text-center">Proceed</button>
        </div>
        </>
    )
}