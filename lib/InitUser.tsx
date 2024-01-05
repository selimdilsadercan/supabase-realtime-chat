"use client";

import { useUserStore } from "@/hooks/useUserStore";
import { User } from "@supabase/supabase-js";
import { useEffect, useRef } from "react";

interface Props {
  user: User | undefined;
}

function InitUser({ user }: Props) {
  const initState = useRef(false);

  useEffect(() => {
    if (!initState.current) {
      useUserStore.setState({ user });
    }

    initState.current = true;
    // eslint-disable-next-line
  }, []);

  return null;
}

export default InitUser;
