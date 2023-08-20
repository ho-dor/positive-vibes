
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

export const fetchData = async () => {
    const { data, error } = await supabase
    .from('posts')
    .select()
    return { data, error };
}

export const insertData = async (data: string) => {
    const { error } = await supabase.from("posts").insert({ post: data });
    return error;
}
