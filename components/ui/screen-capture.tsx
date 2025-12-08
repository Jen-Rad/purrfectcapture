"use client"

import { useState, useRef } from "react"

interface ScreenCaptureProps {
  onCapture?: (imageUrl: string) => void
}

export const ScreenCapture = ({ onCapture }: ScreenCaptureProps) => {
  const [capturing, setCapturing] = useState(false)
  const [capturedImage, setCapturedImage] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [savedUrl, setSavedUrl] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const startCapture = async () => {
    try {
      setCapturing(true)

      // Request screen capture permission
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: {
          mediaSource: "screen" as any,
          cursor: "always"
        } as MediaTrackConstraints,
      })

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        await videoRef.current.play()

        // Wait a moment for the video to stabilize
        setTimeout(() => {
          captureFrame(stream)
        }, 100)
      }
    } catch (error) {
      console.error("Error capturing screen:", error)
      setCapturing(false)
      alert("Screen capture cancelled or not supported")
    }
  }

  const captureFrame = (stream: MediaStream) => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current
      const canvas = canvasRef.current

      // Set canvas size to match video
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight

      // Draw video frame to canvas
      const ctx = canvas.getContext("2d")
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

        // Convert to blob
        canvas.toBlob((blob) => {
          if (blob) {
            const imageUrl = URL.createObjectURL(blob)
            setCapturedImage(imageUrl)
            if (onCapture) {
              onCapture(imageUrl)
            }
          }
        }, "image/png")
      }

      // Stop all tracks
      stream.getTracks().forEach(track => track.stop())
      setCapturing(false)
    }
  }

  const downloadToLocal = () => {
    if (!canvasRef.current) return

    // Create download link
    const link = document.createElement("a")
    const filename = `snapcat-${Date.now()}.png`
    link.download = filename
    link.href = canvasRef.current.toDataURL("image/png")
    link.click()

    setSavedUrl("local")
  }

  const saveScreenshot = async () => {
    if (!capturedImage || !canvasRef.current) return

    setUploading(true)

    try {
      // Convert canvas to blob
      const blob = await new Promise<Blob>((resolve) => {
        canvasRef.current?.toBlob((blob) => {
          if (blob) resolve(blob)
        }, "image/png")
      })

      // Create form data
      const formData = new FormData()
      const filename = `screenshot-${Date.now()}.png`
      formData.append("file", blob, filename)

      // Upload to API
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Upload failed")
      }

      setSavedUrl(data.url)
      console.log("Screenshot saved to:", data.url)
    } catch (error) {
      console.error("Upload error:", error)
      alert("Failed to save screenshot")
    } finally {
      setUploading(false)
    }
  }

  const reset = () => {
    setCapturedImage(null)
    setSavedUrl(null)
  }

  return (
    <div className="w-full">
      {/* Hidden video and canvas for capture */}
      <video ref={videoRef} className="hidden" />
      <canvas ref={canvasRef} className="hidden" />

      {!capturedImage ? (
        // Capture Button
        <button
          onClick={startCapture}
          disabled={capturing}
          className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          <div className="flex items-center gap-3">
            {capturing ? (
              <>
                <svg
                  className="animate-spin h-6 w-6"
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
                <span>Select window or screen...</span>
              </>
            ) : (
              <>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Take Screenshot</span>
              </>
            )}
          </div>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity" />
        </button>
      ) : (
        // Preview and Actions
        <div className="w-full space-y-4">
          {/* Preview */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-zinc-700 shadow-2xl">
            <img
              src={capturedImage}
              alt="Screenshot preview"
              className="w-full h-auto"
            />
          </div>

          {/* Success Message */}
          {savedUrl && (
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl animate-bounce-in">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-green-400 font-semibold">
                  {savedUrl === "local" ? "Screenshot downloaded!" : "Screenshot saved!"}
                </p>
              </div>
              {savedUrl !== "local" && (
                <a
                  href={savedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm underline break-all"
                >
                  {savedUrl}
                </a>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            {!savedUrl ? (
              <>
                <button
                  onClick={downloadToLocal}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                >
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
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download to Desktop
                </button>
                <div className="flex gap-3">
                  <button
                    onClick={saveScreenshot}
                    disabled={uploading}
                    className="flex-1 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 disabled:bg-zinc-700 text-white rounded-xl font-semibold transition-all disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                        Saving...
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
                        Save to Cloud
                      </>
                    )}
                  </button>
                  <button
                    onClick={reset}
                    className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl font-semibold transition-all"
                  >
                    Retake
                  </button>
                </div>
              </>
            ) : (
              <button
                onClick={reset}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all"
              >
                Take Another Screenshot
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
