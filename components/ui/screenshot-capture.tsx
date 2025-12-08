"use client"

import { useState } from "react"

export const ScreenshotCapture = () => {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      // Validate file type
      if (!selectedFile.type.startsWith('image/')) {
        setError('Please select an image file')
        return
      }
      setFile(selectedFile)
      setError(null)
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setUploading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Upload failed')
      }

      setUploadedUrl(data.url)
      console.log('Screenshot saved to:', data.url)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed')
    } finally {
      setUploading(false)
    }
  }

  const handlePaste = async (e: React.ClipboardEvent) => {
    const items = e.clipboardData?.items
    if (!items) return

    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        const blob = items[i].getAsFile()
        if (blob) {
          setFile(blob)
          setError(null)
        }
      }
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-zinc-900 rounded-2xl border border-zinc-800">
      <h2 className="text-2xl font-bold text-white mb-4">Save Your Screenshot</h2>
      <p className="text-zinc-400 mb-6">
        Upload a screenshot or paste it directly (Cmd/Ctrl + V)
      </p>

      {/* Paste Area */}
      <div
        onPaste={handlePaste}
        tabIndex={0}
        className="w-full p-12 border-2 border-dashed border-zinc-700 rounded-xl bg-zinc-800/50 hover:border-blue-500 transition-colors cursor-pointer mb-4 focus:outline-none focus:border-blue-500"
      >
        <div className="text-center">
          <svg
            className="w-16 h-16 mx-auto mb-4 text-zinc-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-white font-medium mb-2">Click to paste or drop screenshot</p>
          <p className="text-zinc-500 text-sm">Paste with Cmd+V or Ctrl+V</p>
        </div>
      </div>

      {/* File Input */}
      <div className="mb-4">
        <label className="block w-full">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <div className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg cursor-pointer transition-colors text-center font-medium">
            Or choose file from computer
          </div>
        </label>
      </div>

      {/* Preview */}
      {file && (
        <div className="mb-4">
          <p className="text-zinc-400 text-sm mb-2">Selected file:</p>
          <div className="flex items-center justify-between p-4 bg-zinc-800 rounded-lg">
            <span className="text-white truncate">{file.name}</span>
            <span className="text-zinc-500 text-sm ml-4">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </span>
          </div>
        </div>
      )}

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        disabled={!file || uploading}
        className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-zinc-700 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
      >
        {uploading ? (
          <>
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Uploading...
          </>
        ) : (
          <>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            Upload Screenshot
          </>
        )}
      </button>

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      {/* Success Message */}
      {uploadedUrl && (
        <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
          <p className="text-green-400 text-sm mb-2">Screenshot saved successfully!</p>
          <a
            href={uploadedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-sm underline break-all"
          >
            {uploadedUrl}
          </a>
        </div>
      )}
    </div>
  )
}
