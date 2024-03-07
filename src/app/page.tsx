import Link from "next/link";
import x from "@/styles/app.module.css";
import y from "@/styles/hoidanit.module.css";

export default function Home() {
  return (
    <div>
      <div>Home</div>
      <Link className={x['red']} href="/facebook">facebook</Link>
      <Link className={y['red']}  href="/youtube">Youtube</Link>
    </div>
  );
}
