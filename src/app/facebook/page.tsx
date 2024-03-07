"use client";
import { useRouter } from "next/navigation";

export default function Facebook() {
  const router = useRouter();
  return (
    <div>
      <div>Facebook</div>
      <button type="button" onClick={() => router.push("/")}>
        home
      </button>
    </div>
  );
}
