"use client";
import Link from "next/link";
import x from "@/styles/app.module.css";
import y from "@/styles/hoidanit.module.css";
import AppTable from "@/components/app.table";
import { useEffect } from "react";
import useSWR from "swr";

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (!data) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <div>Home</div>
      {data?.length}
      <ul>
        <li>
          <Link className={x["red"]} href="/facebook">
            facebook
          </Link>
        </li>
        <li>
          <Link className={y["red"]} href="/youtube">
            Youtube
          </Link>
        </li>
        <li>
          <Link className={y["red"]} href="/tiktok">
            Tiktok
          </Link>
        </li>
      </ul>
      <AppTable blogs={data?.sort((a: any, b: any) => b.id - a.id)} />
    </div>
  );
}
