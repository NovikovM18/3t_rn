import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nmepdexfiuumbyfvqqrq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tZXBkZXhmaXV1bWJ5ZnZxcXJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA5ODk5NzMsImV4cCI6MjAwNjU2NTk3M30.wcPsTQeynlfno72OAj0EDAzTtlvSZ1sMM_5xPjMbzDY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})