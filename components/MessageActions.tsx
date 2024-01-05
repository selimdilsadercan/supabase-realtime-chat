"use client";

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"; //prettier-ignore
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import { useMessageStore } from "@/hooks/useMessageStore";
import { Message } from "@/types";
import { toast } from "sonner";
import supabaseClient from "@/supabase/client";

export function DeleteAlert() {
  const actionMessage = useMessageStore((state) => state.actionMessage);
  const optimisticDeleteMessage = useMessageStore((state) => state.optimisticDeleteMessage);

  const handleDeleteMessage = async () => {
    const supabase = supabaseClient();
    optimisticDeleteMessage(actionMessage?.id!);
    const { error } = await supabase.from("messages").delete().eq("id", actionMessage?.id!);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Successfully delete a message");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button id="trigger-delete"></button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteMessage}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function EditAlert() {
  const actionMessage = useMessageStore((state) => state.actionMessage);
  const optimisticUpdateMessage = useMessageStore((state) => state.optimisticUpdateMessage);

  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleEdit = async () => {
    const supabase = supabaseClient();
    const text = inputRef.current.value.trim();

    if (!text) {
      document.getElementById("trigger-edit")?.click();
      document.getElementById("trigger-delete")?.click();
      return;
    }

    optimisticUpdateMessage({
      ...actionMessage,
      text,
      is_edit: true
    } as Message);
    const { error } = await supabase.from("messages").update({ text, is_edit: true }).eq("id", actionMessage?.id!);

    if (error) return toast.error(error.message);
    toast.success("Update Successfully");

    document.getElementById("trigger-edit")?.click();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button id="trigger-edit"></button>
      </DialogTrigger>
      <DialogContent className="w-full">
        <DialogHeader>
          <DialogTitle>Edit Message</DialogTitle>
        </DialogHeader>
        <Input defaultValue={actionMessage?.text} ref={inputRef} />
        <DialogFooter>
          <Button type="submit" onClick={handleEdit}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
