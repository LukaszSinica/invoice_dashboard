import { auth } from "@/auth";
import { SignIn } from "@/components/signIn";
import { SignOut } from "@/components/signOut";

export default async function Home() {
  const session = await auth()

  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-24 w-5/6">
      dashboard
    </main>
  );
}
