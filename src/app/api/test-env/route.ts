import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    smtp_host: process.env.SMTP_HOST || 'nicht gesetzt',
    smtp_port: process.env.SMTP_PORT || 'nicht gesetzt',
    smtp_user: process.env.SMTP_USER || 'nicht gesetzt',
    smtp_pass: process.env.SMTP_PASS ? '***konfiguriert***' : 'nicht gesetzt',
    node_env: process.env.NODE_ENV
  })
}
