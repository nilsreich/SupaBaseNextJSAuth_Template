import { cookies } from "next/headers";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";
import { createClient } from "@/utils/supabase/server";

export default async function Index({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div>
      <main>
        {user ? (
          <p>
            {dictionary["server-component"].welcome} {user.email}!
          </p>
        ) : (
          <p>You are not logged in.</p>
        )}
      </main>
    </div>
  );
}
