"use client";
import Link from "next/link";
import x from "@/styles/app.module.css";
import y from "@/styles/hoidanit.module.css";
import AppTable from "@/components/app.table";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8000/blogs");
      const data = await res.json();
      console.log("checkresponse: ", data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div>Home</div>
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
      <AppTable />
    </div>
  );
}
