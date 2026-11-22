import {
  Header,
  HR,
  SocialMedia,
  Stack,
  UserSection,
  ViewProjects,
} from "@/Components/Pieces";
export async function HomePage({Query}:{Query:string[]}) {
  
  return (
    <>
      <Header />
      <UserSection />
      <HR />
      <Stack />
      <HR />
      <ViewProjects Query={Query} />
      <HR />
      <SocialMedia />
    </>
  );
}
