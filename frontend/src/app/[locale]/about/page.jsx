import { redirect } from "next/navigation";

export default function AboutPage({ params }) {
  redirect(`/${params.locale}/about/general`);
}
