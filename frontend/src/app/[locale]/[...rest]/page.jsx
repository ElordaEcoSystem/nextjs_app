import { notFound } from "next/navigation";

// Любой неизвестный адрес внутри /kk или /ru показывает not-found.jsx с шапкой и подвалом
export default function CatchAll() {
  notFound();
}
