"use client";

import { Input } from "./ui/input";
import { useMessageStore } from "@/hooks/useMessageStore";
import { useUserStore } from "@/hooks/useUserStore";
import { Message } from "@/types";
import { toast } from "sonner";
import { v4 as uuid } from "uuid";
import supabaseClient from "@/supabase/client";

function ChatInput() {
  const user = useUserStore((state) => state.user);
  const addMessage = useMessageStore((state) => state.addMessage);
  const setOptimisticIds = useMessageStore((state) => state.setOptimisticIds);
  const supabase = supabaseClient();

  if (!user) return null;

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return toast.error("Message can not be empty!!");

    const id = uuid();

    const { error } = await supabase.from("messages").insert({ id, text, send_by: user?.id });
    if (error) return toast.error(error.message);

    const newMessage: Message = {
      id,
      text,
      send_by: user?.id,
      is_edit: false,
      created_at: new Date().toISOString(),
      users: {
        id: user?.id,
        avatar_url: user?.user_metadata.avatar_url,
        created_at: new Date().toISOString(),
        display_name: user?.user_metadata.user_name
      }
    };

    addMessage(newMessage);
    setOptimisticIds(newMessage.id);
  };

  return (
    <div className="p-5">
      <Input
        placeholder="Send message"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSendMessage(e.currentTarget.value);
            e.currentTarget.value = "";
          }
        }}
      />
    </div>
  );
}

export default ChatInput;
