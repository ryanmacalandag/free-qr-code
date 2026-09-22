import { QrGenerator } from '@/components/qr-generator'

export default function Page() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-6 py-8 md:py-16">
      <div className="flex w-full max-w-sm flex-col items-center gap-8 md:gap-10">
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="flex flex-row items-center text-3xl md:text-4xl font-semibold tracking-tight text-foreground font-silkscreen">
            Free
            <div className="relative text-emerald-800 pb-2 pt-1 m-2 px-2 bg-emerald-500 rounded-lg 
            ">
              <div className="absolute top-0 left-0 corner-line size-4 aspect-square"></div>
              <div className="absolute top-0 right-0 corner-line size-4 aspect-square rotate-90"></div>
              <div className="absolute bottom-0 right-0 corner-line size-4 aspect-square rotate-180"></div>
              <div className="absolute bottom-0 left-0 corner-line size-4 aspect-square rotate-270"></div>
              QR
            </div>
            Coder
          </h1>
          <p className="text-xs text-muted-foreground/60 text-balance">
            Type something, get a QR code, download it. That&apos;s it.
          </p>
        </div>
        <QrGenerator />
        <div className="flex flex-col items-center text-center">
          <p className="text-xs text-muted-foreground/60 text-balance">
            Made with ❤️ by{' '}
            <a
              href="https://ryanmacalandag.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-800 transition-colors duration-200"
            >
              Ryan Macalandag
            </a>
          </p>
          <p className="text-xs text-muted-foreground/60 text-balance">
            Source code available on{' '}
            <a
              href="https://github.com/ryanmacalandag/free-qr-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-800 transition-colors duration-200"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
