'use client'

interface AlertProps {
  children: React.ReactNode
  type?: 'info' | 'warning' | 'error' | 'success'
}

export default function Alert({ children, type = 'info' }: AlertProps) {
  const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    success: 'bg-green-50 border-green-200 text-green-800',
  }

  return (
    <div className={`p-4 mb-4 border rounded-lg ${styles[type]}`}>
      {children}
    </div>
  )
} 