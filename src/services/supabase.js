import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://esvzfkrnbrvdkacmifxy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzdnpma3JuYnJ2ZGthY21pZnh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ3NDc1NjUsImV4cCI6MjAyMDMyMzU2NX0.8QvNinNJVYUmFJp8YAlY59kAnBfMq5D3mszg3ygic9o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
