/**
 * Supabase 서버 클라이언트
 * API Route 등 서버에서만 사용 (SERVICE_ROLE_KEY로 RLS 우회)
 * 지연 초기화: 빌드 시 env 미설정해도 빌드가 성공하도록 함
 */
import { createClient, SupabaseClient } from "@supabase/supabase-js";

let _client: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (_client) return _client;
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error(
      "Supabase 환경변수(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)를 확인해 주세요."
    );
  }
  _client = createClient(url, key);
  return _client;
}
