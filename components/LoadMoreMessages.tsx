import { useMessageStore } from "@/hooks/useMessageStore";
import { Button } from "./ui/button";
import supabaseClient from "@/supabase/client";
import { getFromAndTo } from "@/lib/utils";
import { LIMIT_MESSAGE } from "@/constants";
import { toast } from "sonner";

function LoadMoreMessages() {
  const page = useMessageStore((state) => state.page);
  const setMesssages = useMessageStore((state) => state.setMesssages);
  const hasMore = useMessageStore((state) => state.hasMore);

  const fetchMore = async () => {
    const { from, to } = getFromAndTo(page, LIMIT_MESSAGE);
    const supabase = supabaseClient();
    const { data, error } = await supabase.from("messages").select("*,users(*)").range(from, to).order("created_at", { ascending: false });

    if (error) return toast.error(error.message);

    setMesssages(data.reverse());
  };

  if (hasMore) {
    return (
      <Button variant="outline" className="w-full" onClick={fetchMore}>
        Load More
      </Button>
    );
  }
  return null;
}

export default LoadMoreMessages;
