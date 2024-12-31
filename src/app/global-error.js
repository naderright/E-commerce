'use client' // Error boundaries must be Client Components
 
export default function GlobalError({ error, reset }) {
  return (
    // global-error must include html and body tags
    <html>
      <body className="flex justify-center items-center h-[56vh]">
        <h2 className="font-bold">Something went wrong!</h2>
        <button className="text-blue-600 underline font-medium" onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}