'use client' // Error boundaries must be Client Components
 
import style from "./page.module.css"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  return (
    <div className={style.notFound}>
      <h2 className={style.notFoundTitle}>Something went wrong!</h2>
      <button className={style.buttonError}
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}