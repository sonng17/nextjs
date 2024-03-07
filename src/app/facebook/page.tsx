"use client";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";

export default function Facebook() {
  const router = useRouter();
  return (
    <div>
      <div>Facebook</div>
      <Button variant="success">Hoi Dan It</Button>
      <button type="button" onClick={() => router.push("/")}>
        home
      </button>
    </div>
  );
}
