import { redirect } from 'next/navigation';

export default function ServicesPage({ params }) {
  // Redirect to /about/general while preserving the locale
  redirect(`/${params.locale}/services/paid_services`);
}