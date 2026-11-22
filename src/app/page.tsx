import { HomePage } from "@/Components/Pages";

export default async function Home({ params }: { params: Promise<object> }) {
  const Query = Object.values(await params).map((Value) => String(Value));
  return <HomePage Query={Query} />;
}
