import { createClient } from '@supabase/supabase-js'

const SUPABASE_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0Mzc0ODQwOCwiZXhwIjoxOTU5MzI0NDA4fQ.iNfByc_vPYFu4XqZQnWTRVm5VOCxqf0lDbeQxm2RbLg";
const supabaseUrl = "https://qgpjbslezaxeplybktpb.supabase.co";
export const supabase = createClient(supabaseUrl, SUPABASE_KEY);