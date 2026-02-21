-- 상담 신청 데이터 저장 테이블
-- Supabase Dashboard > SQL Editor에서 이 스크립트를 실행하세요.

CREATE TABLE IF NOT EXISTS public.contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  organization TEXT NOT NULL,
  department TEXT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  interests TEXT[] DEFAULT '{}',
  concern TEXT DEFAULT '',
  consultation_method TEXT NOT NULL DEFAULT '온라인'
    CHECK (consultation_method IN ('온라인', '오프라인', '이메일')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- RLS 활성화 (service_role은 RLS를 우회하므로 API Route에서 정상 동작)
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
