import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(
  'https://lanvotduduqpfvtpbjjp.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhbnZvdGR1ZHVxcGZ2dHBiampwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3Mzc3MTMsImV4cCI6MTk5OTMxMzcxM30.sgN8yRzNntZ9ujMvhdEQHlA4vkd9mJrq3rdLHb2dRGQ'
)

export { supabase }
