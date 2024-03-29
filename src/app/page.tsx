import Card from '@/components/card';
import styles from './styles.module.css';
import { fetchData } from '@/lib/getShows';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export type Show = {
  createdAt: Date,
  name: string,
  avatar: string,
  image: string,
  seats: number,
  price: string,
  id: string
}

export default async function Home() {
const data = await fetchData();

  return (
    <div className={styles.homepageDiv}>
      {data.map((show: Show) => {
        return (
         <Card key={show.id} show={show}/>
        )
      })}
    </div>
  );
}
