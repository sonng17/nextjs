import Link from "next/link";
import x from "@/styles/app.module.css";
import y from "@/styles/hoidanit.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HomePage",
  description: "Description...",
};

export default function Home() {
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
    </div>
  );
}
