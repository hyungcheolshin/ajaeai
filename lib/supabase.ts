/**
 * Supabase 서버 클라이언트
 * API Route 등 서버에서만 사용 (SERVICE_ROLE_KEY로 RLS 우회)
 * .env의 SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY 사용
 */
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error(
    "Supabase 환경변수(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)를 확인해 주세요."
  );
}

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
