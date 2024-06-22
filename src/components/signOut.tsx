import { signOut } from "@/auth"
 
export function SignOut() {

  return (
    <div className="w-full flex h-16">
      <form
        action={async () => {
          "use server"
          await signOut()
        }}
        className="w-full h-full hover:bg-slate-200 rounded-xl flex items-center pl-4"
      >
        <button type="submit" className="w-full h-full hover:bg-slate-200 flex rounded-xl items-center font-medium text-lg">Sign out</button>
      </form>
    </div>
  )
}