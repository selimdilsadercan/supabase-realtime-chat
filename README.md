- database: supabase, password: y64XEc2xpw8qIlqV

- [x] "npx create-next-app@latest {project-name}" to initialize nextjs
- [x] change /app/layout, delete assets in /public, change metadata
- [x] remove /app/page.tsx with balance page
- [x] create /.env file, add .env to /.gitignore
- [x] copy /.prettierrc

- [x] "npx shadcn-ui@latest init" to initialize shadcn
- [x] html, body, :root { height: 100% } thing at /app/globals.css
- [x] "npx shadcn-ui@latest add button" to add elements
- [x] choose a color palette from shadcn and change /app/globals.css

- [x] "npm install next-themes"
- [x] add /providers/theme-provider.tsx and wrap /app/layout.tsx's {children} using alt+w
- [x] change providers's storageKey
- [x] create ThemeToggle.tsx switch
- [x] add suppressHydrationWarning to html tag in /app/layout.tsx

- [x] "npx shadcn-ui@latest add sonner"
- [x] add /providers/toast-provider.tsx
- [x] add ToastProvider next to {children} in /app/layout.tsx

- [x] create new supabase project
- [x] "npm i @supabase/ssr @supabase/supabase-js"
- [x] "npm i -D supabase@latest", "npx supabase login"
- [x] copy project settings -> project url as NEXT_PUBLIC_SUPABASE_URL
- [x] copy project settings -> project api keys -> anon key as NEXT_PUBLIC_SUPABASE_ANON_KEY
- [x] add /lib/supabase
- [x] add /middleware.ts
- [x] create policies whenever new table created except users
- [x] "npx supabase gen types typescript --project-id "{project_reference}" --schema public > types/supabase.ts", general settings -> reference id

- [x] create OAuth consent screen adn create new OAuth ClintID credential at google developer console -> APIs & Services
- [x] paste this Client ID and Client Secret to enable google auth at supabase
- [x] create Github OAuth App on Settings -> Developer Settings -> OAuth Apps -> New OAuth App (copy callback url from supabase)
- [x] add /auth/callback/route.ts
- [x] create users table and connect user->id to auth->user->id
- [x] create create_user_on_signup function: returntype = trigger, defination=/lib/supabase/functions.txt, showadvanced -> security definer
- [x] run create_user_on_signup trigger in sql editor, now it is showing in trigger -> auth

---

- create supabase for both user management and database
- make the app realtime with zustand and useEffects
