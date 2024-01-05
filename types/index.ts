export type Message = {
  id: string;
  is_edit: boolean;
  send_by: string;
  text: string;
  user: User | null;
  created_at: string;
};

export type User = {
  id: string;
  display_name: string;
  avatar_url: string;
  created_at: string;
};
