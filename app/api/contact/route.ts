/**
 * 상담 폼 제출 API (POST)
 * 폼 데이터를 Supabase contacts 테이블에 저장
 */
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import type { ContactFormData } from "@/types/contact";

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    const { error } = await supabaseAdmin.from("contacts").insert({
      organization: body.organization,
      department: body.department ?? null,
      name: body.name,
      email: body.email,
      phone: body.phone,
      interests: body.interests,
      concern: body.concern,
      consultation_method: body.consultationMethod,
    });

    if (error) {
      console.error("[Contact Form] Supabase 에러:", error);
      return NextResponse.json(
        { success: false, error: "데이터 저장 중 오류가 발생했습니다." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Contact Form] 에러:", error);
    return NextResponse.json(
      { success: false, error: "폼 제출 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
