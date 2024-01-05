async function Page() {
  // const supabase = supabaseServer();
  // const { data } = await supabase.auth.getSession();

  return (
    <>
      <div className="max-w-3xl mx-auto md:py-10 h-screen">
        <div className=" h-full border rounded-md flex flex-col relative">
          {/* <ChatHeader user={data.session?.user} />
          {data.session?.user && (
            <>
              <ChatMessages />
              <ChatInput />
            </>
          )}
          {!!data.session?.user && (
            <>
              <ChatAbout />
            </>
          )} */}
        </div>
      </div>
      {/* <InitUser user={data.session?.user} /> */}
    </>
  );
}

export default Page;
