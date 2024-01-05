import supabaseServer from "@/supabase/server";
import ChatAbout from "@/components/ChatAbout";
import ChatHeader from "@/components/ChatHeader";
import ChatInput from "@/components/ChatInput";
import ChatMessages from "@/components/ChatMessages";
import InitUser from "@/lib/InitUser";

async function Page() {
  const supabase = supabaseServer();
  const { data } = await supabase.auth.getSession();
  const user = data.session?.user;

  return (
    <>
      <div className="max-w-3xl mx-auto md:py-10 h-screen">
        <div className=" h-full border rounded-md flex flex-col relative">
          <ChatHeader user={user} />

          {user && (
            <>
              <ChatMessages />
              <ChatInput />
            </>
          )}
          {!user && (
            <>
              <ChatAbout />
            </>
          )}
        </div>
      </div>
      <InitUser user={user} />
    </>
  );
}

export default Page;
