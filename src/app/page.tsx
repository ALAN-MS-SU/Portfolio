import { HomePage } from "@/Components/Pages";

export default async function Home({ searchParams }: { searchParams: Promise<object> }) {
  const Query = Object.values(await searchParams).map((Value) => String(Value));
  return <HomePage Query={Query} />;
}
