'use client'

import { useEffect, useRef, useState } from 'react'
import QRCode from 'qrcode'
import { Download } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const SIZE = 640

export function QrGenerator() {
  const [value, setValue] = useState('https://v0.app')
  const [error, setError] = useState<string | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const text = value.trim()
    if (!text) {
      const ctx = canvas.getContext('2d')
      ctx?.clearRect(0, 0, canvas.width, canvas.height)
      setError(null)
      return
    }

    QRCode.toCanvas(canvas, text, {
      width: SIZE,
      margin: 2,
      color: {
        dark: '#161616',
        light: '#ffffff',
      },
    })
      .then(() => setError(null))
      .catch(() => setError('Could not generate a QR code for this input.'))
  }, [value])

  function handleDownload() {
    const canvas = canvasRef.current
    if (!canvas || !value.trim()) return

    canvas.toBlob((blob) => {
      if (!blob) return
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'qr-code.png'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    }, 'image/png')
  }

  const isEmpty = !value.trim()

  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="qr-input"
          className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
        >
          Text or URL
        </label>
        <Input
          id="qr-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter text or a URL"
          className="font-mono"
          autoComplete="off"
          spellCheck={false}
        />
      </div>

      <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg border border-border bg-card p-6">
        {isEmpty ? (
          <p className="font-mono text-xs text-muted-foreground">
            Enter text to generate a code
          </p>
        ) : (
          <canvas
            ref={canvasRef}
            width={SIZE}
            height={SIZE}
            className="h-full w-full"
            aria-label="Generated QR code"
          />
        )}
      </div>

      {error && <p className="text-xs text-destructive">{error}</p>}

      <Button
        onClick={handleDownload}
        disabled={isEmpty || !!error}
        className="w-full gap-2"
      >
        <Download className="size-4" aria-hidden="true" />
        Download PNG
      </Button>
    </div>
  )
}
