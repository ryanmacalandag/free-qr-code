import { QrGenerator } from '@/components/qr-generator'

export default function Page() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-6 py-16">
      <div className="flex w-full max-w-sm flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-foreground font-silkscreen sm:text-4xl">
            Free QR Coder
          </h1>
          <p className="text-sm text-muted-foreground text-balance">
            Type something, get a QR code, download it. That&apos;s it.
          </p>
        </div>
        <QrGenerator />
      </div>
    </main>
  )
}
