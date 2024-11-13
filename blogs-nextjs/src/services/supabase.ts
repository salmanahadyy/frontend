
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yjcsqmiqkodagezlytbr.supabase.co'
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqY3NxbWlxa29kYWdlemx5dGJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0NjU3NjgsImV4cCI6MjA0NzA0MTc2OH0.vMuz7DERXYjctOjK989bVAPOjutzlQW7CiOHF5mmUiM"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase