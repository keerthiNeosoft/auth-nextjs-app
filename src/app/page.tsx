import Card from "@/components/card";
import styles from "./styles.module.css";
import { fetchData } from "@/lib/getShows";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export type Show = {
  createdAt: Date;
  name: string;
  avatar: string;
  image: string;
  seats: number;
  price: string;
  id: number;
};

export default async function Home() {
  const session = await getServerSession(options);

  const data = await fetchData();

  return (
    <>
      <div className={styles.homepageDiv}>
        {data.map((show: Show) => {
          return <Card key={show.id} show={show} />;
        })}
      </div>
    </>
  );
}
