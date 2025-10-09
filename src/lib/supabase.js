import { createClient } from '@supabase/supabase-js'

// ⚠️ Replace these with your actual Supabase credentials
const SUPABASE_URL = 'https://vykoasekhhigwapkwnrr.supabase.co'
const SUPABASE_ANON_KEY = '<prefer publishable key instead of anon key for mobile and desktop apps>'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
