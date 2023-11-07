import { Navbar } from "@/components/Navbar";
import { cookies } from "next/headers";
import { getDictionary } from '@/lib/get-dictionary'
import { Locale } from '@/lib/i18n-config'
import { createClient } from '@/utils/supabase/server'

export default async function Index({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)
  const cookieStore = cookies();
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div>
      <Navbar />
      This text is rendered on the server:{' '}
        {dictionary['server-component'].welcome} {user && user.email}!
    </div>
  );
}
