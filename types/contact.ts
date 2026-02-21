/**
 * 상담 폼 제출 시 사용하는 데이터 타입 정의
 */
export interface ContactFormData {
  organization: string;
  department?: string;
  name: string;
  email: string;
  phone: string;
  interests: string[];
  concern: string;
  consultationMethod: "온라인" | "오프라인" | "이메일";
}
