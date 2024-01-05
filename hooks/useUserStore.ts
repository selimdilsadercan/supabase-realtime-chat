import { User } from "@supabase/supabase-js";
import { create } from "zustand";

interface UserStore {
  user: User | undefined;
}

export const useUserStore = create<UserStore>()((set) => ({
  user: undefined
}));
