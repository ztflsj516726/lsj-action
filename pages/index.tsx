import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import type { NextPage } from 'next'
import IKun from '../src/ikun'
import styles from '/styles/Home.module.css'

const Home: NextPage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const ikunRef = useRef<IKun | null>(null)

  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    setMuted(mobile)

    const ikun = ikunRef.current = new IKun({
      container: containerRef.current!,
      muted: mobile
    })
    ikun.run()

    return () => {
      ikun.dispose()
    }
  }, [])

  const handleClick = useCallback(() => {
    setMuted(muted => !muted)
  }, [])

  useMemo(() => {
    ikunRef.current?.setMuted(muted)
  }, [muted])
  
  return (
    <>
      <div className={styles.options}>
        <button className={styles.bgm} onClick={handleClick}>
          {muted ? (
            <svg width="30px" height="30" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path fill="#888" d="M616.576 730.976c-5.056 5.216-10.08 10.432-14.304 16.16-24.096 32.512-31.68 70.24-20.864 103.648 15.648 48.288 66.656 79.456 129.92 79.456 21.248 0 42.752-3.456 63.904-10.304 9.632-3.136 18.784-6.816 27.424-11.008L616.576 730.976zM416 273.408l0-8.96 416-69.312 0 476.192 64 61.216L896 160c0-1.056-0.512-1.984-0.608-3.008-0.032-1.664 0.448-3.232 0.16-4.896-2.88-17.44-19.424-29.408-36.8-26.304l-480 80C370.24 207.2 363.2 211.936 358.4 218.336L416 273.408zM352 477.92l0 207.68c-20.128-9.376-43.648-14.784-69.408-14.784-21.28 0-42.816 3.456-63.968 10.336-39.584 12.8-73.568 36.224-95.584 65.984-24.096 32.512-31.68 70.24-20.864 103.648 15.648 48.288 66.656 79.456 129.92 79.456 21.248 0 42.752-3.456 63.904-10.304 58.656-19.04 100.32-59.2 115.04-103.808C413.92 811.328 416 806.016 416 800l0-5.216c1.056-8.512 1.056-17.024 0-25.6l0-230.048L352 477.92zM928 928c-7.968 0-15.904-2.944-22.112-8.864l-736-704C157.12 202.912 156.672 182.656 168.864 169.888c12.192-12.736 32.48-13.216 45.248-0.992l736 704c12.736 12.224 13.216 32.48 0.992 45.248C944.832 924.672 936.448 928 928 928z" />
            </svg>
          ) : (
            <svg width="30px" height="30px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path fill="#333333" d="M895.456 770.56C895.552 769.696 896 768.896 896 768L896 160c0-1.056-0.512-1.984-0.608-3.008-0.032-1.664 0.448-3.232 0.16-4.928-2.88-17.408-19.328-29.184-36.8-26.304l-480 80c-17.408 2.912-29.216 19.392-26.304 36.832 0.256 1.472 1.024 2.656 1.44 4.032C352.96 249.664 352 252.672 352 256l0 429.6c-20.128-9.376-43.648-14.784-69.408-14.784-21.312 0-42.816 3.456-63.968 10.336-39.616 12.8-73.536 36.224-95.584 65.984-24.064 32.512-31.68 70.24-20.864 103.648 15.648 48.288 66.656 79.456 129.92 79.456 21.248 0 42.72-3.456 63.904-10.304 58.656-19.04 100.288-59.2 115.04-103.808C413.888 811.328 416 806.016 416 800l0-5.312c1.056-8.48 1.056-16.96 0-25.472L416 264.448l416-69.344 0 490.88c-20.32-9.632-44.096-15.2-70.176-15.2-21.28 0-42.816 3.456-63.968 10.336-39.584 12.8-73.568 36.224-95.584 65.984-24.096 32.512-31.68 70.24-20.864 103.648 15.648 48.288 66.656 79.456 129.92 79.456 21.248 0 42.752-3.456 63.904-10.304C853.472 894.56 902.176 831.68 895.456 770.56z" />
            </svg>
          )}
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.stage} ref={containerRef} />
       
      </div>
    </>
  )
}

export default Home

export async function getStaticProps() {
  return {
    props: {}
  }
}
