import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qmoimtvhgwiarhghunzv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtb2ltdHZoZ3dpYXJoZ2h1bnp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODczNDA1MzQsImV4cCI6MjEwMjkxNjUzNH0.-dHX9yPhXzbYsjibcXl8-jQBXS9BuVLfL7F23HN0waE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
