import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"; //prettier-ignore
import { useMessageStore } from "@/hooks/useMessageStore";
import { MoreHorizontal } from "lucide-react";
import { useUserStore } from "@/hooks/useUserStore";
import { Message } from "@/types";
import Image from "next/image";

interface Props {
  message: Message;
}

function Message({ message }: Props) {
  const user = useUserStore((state) => state.user);

  return (
    <div className="flex gap-2">
      <div>
        <Image src={message.users?.avatar_url!} alt={message.users?.display_name!} width={40} height={40} className=" rounded-full ring-2" />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <h1 className="font-bold">{message.users?.display_name}</h1>
            <h1 className="text-sm text-gray-400">{new Date(message.created_at).toDateString()}</h1>
            {message.is_edit && <h1 className="text-sm text-gray-400">edited</h1>}
          </div>
          {message.users?.id === user?.id && <MessageMenu message={message} />}
        </div>
        <p className="text-gray-300">{message.text}</p>
      </div>
    </div>
  );
}

function MessageMenu({ message }: Props) {
  const setActionMessage = useMessageStore((state) => state.setActionMessage);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreHorizontal />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Action</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            document.getElementById("trigger-edit")?.click();
            setActionMessage(message);
          }}
        >
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            document.getElementById("trigger-delete")?.click();
            setActionMessage(message);
          }}
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Message;
