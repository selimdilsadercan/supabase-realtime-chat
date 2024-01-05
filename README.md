- database:

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
- [x] create ThemeToggle.tsx switch
- [x] add suppressHydrationWarning to html tag in /app/layout.tsx

- [ ] "npm i axios"
- [ ] "npm i @tanstack/react-query"
- [ ] add providers/query-provider.tsx and wrap layout.tsx's children

- [ ] create coachroachdb cluster and rename cluster
- [ ] press connect -> create new sql user -> add sql username -> press next -> copy general connection string -> paste to .env as DATABASE_URL
- [ ] "npm i -D prisma"
- [ ] "npm i @prisma/client"
- [ ] "npx prisma init"
- [ ] create lib/db.ts
- [ ] add "postinstall": "prisma generate" to package.json's scripts field
- [ ] change datasource db -> provider to cockroachdb in schema.prisma
- [ ] note: "npx prisma generate" and "npx prisma db push" whenever schemas have changed
- [ ] note: "npx prisma studio" to manage content
