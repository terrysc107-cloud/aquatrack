'use client'

import { Button } from '@/components/ui/button'

export default function PrintButton() {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => window.print()}
      className="text-xs"
    >
      Print / Save PDF
    </Button>
  )
}
