"use client";
import { LIMIT_MESSAGE } from "@/constants";
import { useMessageStore } from "@/hooks/useMessageStore";
import { Message } from "@/types";
import { User } from "@supabase/supabase-js";
import React, { useEffect, useRef } from "react";

function InitMessages({ messages }: { messages: Message[] }) {
  const initState = useRef(false);
  const hasMore = messages.length >= LIMIT_MESSAGE;

  useEffect(() => {
    if (!initState.current) {
      useMessageStore.setState({ messages, hasMore });
    }
    initState.current = true;
    // eslint-disable-next-line
  }, []);

  return null;
}

export default InitMessages;
