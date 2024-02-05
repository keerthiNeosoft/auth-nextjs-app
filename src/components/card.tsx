"use client";

import styles from "@/app/styles.module.css";
import { Show } from "@/app/page";
import { useState } from "react";
import { Modal } from "./modal";
import Image from "next/image";

const Card = ({ show }: { show: Show }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showName, setShowName] = useState("");
  let limitedSeats = 0;
  if (Number(show.seats) < 5) {
    limitedSeats = show.seats;
  }

  let tickets = Array.from(Array(20).keys());

  const handleBookBtn = (showName: string) => {
    setIsOpen(true);
    setShowName(showName);
  };

  return (
    <>
      <div className={styles.cardStyles}>
        <div className={styles.title}>{show.name}</div>
        <div className={styles.releaseDate}>
          Released on {new Date(show.createdAt).toDateString()}
        </div>
        <Image src={show.image} alt={show.name} width={270} height={270} />
        <div className={limitedSeats ? "text-red-800" : "text-green-800"}>
          No. of remaining seats {show.seats}
        </div>
        <div className={styles.price}>price: {show.price}</div>
        <button
          className={styles.bookButton}
          onClick={() => handleBookBtn(show.name)}
        >
          Book now
        </button>
      </div>
      <div>
        <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
          <p className="text-3xl font-bold text-center mb-5">
            Book ticket for {showName}
          </p>
          <input
            type="text"
            className="p-2 m-2 bg-gray-800 text-slate-50"
            placeholder="Enter your name"
          />
          <input
            type="email"
            className="p-2 m-2 bg-gray-800 text-slate-50"
            placeholder="Enter your email"
          />
          <input
            type="number"
            className="p-2 m-2 bg-gray-800 text-slate-50"
            placeholder="Enter your phone number"
          />
          <input
            type="text"
            className="p-2 m-2 bg-gray-800 text-slate-50"
            value={showName}
            readOnly
          />

          <select
            className="p-2 m-auto mt-4 mr-4 rounded-2xl w-1/4 bg-gray-800 text-slate-50"
            id="tickets"
          >
            {tickets.map((ticket) => (
              <option key={ticket} value={ticket}>
                {ticket}
              </option>
            ))}
          </select>
          <button className="p-3 bg-green-800 text-slate-50 font-bold rounded-full w-1/3 mt-4 m-auto text-center">
            Proceed
          </button>
        </Modal>
      </div>
    </>
  );
};

export default Card;
