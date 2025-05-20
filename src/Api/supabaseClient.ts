import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://fqaylbezysfjokzuxfqc.supabase.co', // Project URL
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxYXlsYmV6eXNmam9renV4ZnFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NTc5NDQsImV4cCI6MjA2MzIzMzk0NH0.qSemuHTlh66HCMbayFGDAzGSKghdWlaQHEQVR9ImtKk'             // Public key
)
