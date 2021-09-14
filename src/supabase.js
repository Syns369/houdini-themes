import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://igvsurbnqbihwsnoatyv.supabase.co'
const supabaseAnonKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTU3NDYxMiwiZXhwIjoxOTQ3MTUwNjEyfQ.jlBeA8XyHlV_Y5d2CRYDvmXHJKavNNG4ysHpDLzlad0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
