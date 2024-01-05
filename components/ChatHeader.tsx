"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";
import supabaseClient from "@/lib/supabase/client";
import ChatPresence from "./ChatPresence";

interface Props {
  user: User | undefined;
}

function ChatHeader({ user }: Props) {
  const router = useRouter();

  const handleLoginWithGoogle = () => {
    const supabase = supabaseClient();

    supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: location.origin + "/auth/callback" }
    });
  };

  const handleLogout = async () => {
    const supabase = supabaseClient();
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div className="h-20">
      <div className="p-5 border-b flex items-center justify-between h-full">
        <div>
          <h1 className="text-xl font-bold">Daily Chat</h1>
          <ChatPresence />
        </div>
        {user && <Button onClick={handleLogout}>Logout</Button>}
        {!user && <Button onClick={handleLoginWithGoogle}>Login</Button>}
      </div>
    </div>
  );
}

export default ChatHeader;
