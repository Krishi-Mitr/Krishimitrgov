// supabase.js
console.log("supabase.js loaded");

const { createClient } = window.supabase;

const SUPABASE_URL = "https://xhzpvgiyvxcfwgnupkqv.supabase.co";  
const SUPABASE_KEY = "sb_publishable_YviwlBy7i3PmxZ88mwsDeQ_P4Bg0naI";                         

window.db = createClient(SUPABASE_URL, SUPABASE_KEY);

console.log("Supabase client ready", window.db);
