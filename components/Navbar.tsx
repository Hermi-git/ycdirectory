import Link from "next/link"
import Image from "next/image"
import { auth, signIn, signOut} from "@/auth";
import { Button } from "./ui/button";

const Navbar = async() => {
  const session = await auth();
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
        <nav className="flex justify-between items-center">
            <Link href={"/"}> 
                <Image src="/logo.png" alt="logo" width={144} height={30}/>
            </Link>

            <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span className="max-sm:hidden">Create</span>
                {/* <BadgePlus className="size-6 sm:hidden" /> */}
              </Link>

              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <Button type="submit">
                  <span className="max-sm:hidden">Logout</span>
                </Button>
              </form>

            </>
          ) : (
            <form
              action={async () => {
                "use server";

                await signIn("github");
              }}
            >
              <Button type="submit">Login</Button>
            </form>
          )}
        </div>
        </nav>

    </header>
  )
}

export default Navbar