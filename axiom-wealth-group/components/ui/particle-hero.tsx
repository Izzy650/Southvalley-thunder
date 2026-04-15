"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  speed: number
  opacity: number
  fadeDelay: number
  fadeStart: number
  fadingOut: boolean
  reset: () => void
  update: () => void
  draw: (ctx: CanvasRenderingContext2D) => void
}

export function ParticleHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isGoldMode, setIsGoldMode] = useState(false)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()

  const createParticle = (canvas: HTMLCanvasElement): Particle => {
    const particle: Particle = {
      x: 0,
      y: 0,
      speed: 0,
      opacity: 1,
      fadeDelay: 0,
      fadeStart: 0,
      fadingOut: false,
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.speed = Math.random() / 5 + 0.1
        this.opacity = 1
        this.fadeDelay = Math.random() * 600 + 100
        this.fadeStart = Date.now() + this.fadeDelay
        this.fadingOut = false
      },
      update() {
        this.y -= this.speed
        if (this.y < 0) this.reset()
        if (!this.fadingOut && Date.now() > this.fadeStart) this.fadingOut = true
        if (this.fadingOut) {
          this.opacity -= 0.008
          if (this.opacity <= 0) this.reset()
        }
      },
      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `rgba(${255 - (Math.random() * 255) / 2}, 255, 255, ${this.opacity})`
        ctx.fillRect(this.x, this.y, 0.4, Math.random() * 2 + 1)
      },
    }

    particle.reset()
    particle.y = Math.random() * canvas.height
    particle.fadeDelay = Math.random() * 600 + 100
    particle.fadeStart = Date.now() + particle.fadeDelay
    particle.fadingOut = false

    return particle
  }

  const calculateParticleCount = (canvas: HTMLCanvasElement) =>
    Math.floor((canvas.width * canvas.height) / 6000)

  const initParticles = (canvas: HTMLCanvasElement) => {
    const count = calculateParticleCount(canvas)
    particlesRef.current = []
    for (let i = 0; i < count; i++) {
      particlesRef.current.push(createParticle(canvas))
    }
  }

  const animate = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    particlesRef.current.forEach((p) => {
      p.update()
      p.draw(ctx)
    })
    animationRef.current = requestAnimationFrame(() => animate(canvas, ctx))
  }

  const handleResize = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    initParticles(canvas)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    initParticles(canvas)
    animate(canvas, ctx)

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  const spotlightRotations = [20, -20, 0]
  const spotlightDurations = ["17s", "14s", "21s"]
  const spotlightDirections = ["normal", "normal", "reverse"]

  const accentHLines = [6, 11, 16, 24, 29]
  const accentVLines = [24, 34, -24, -34]

  return (
    <div
      className={`relative w-full overflow-hidden ${isGoldMode ? "ph-gold-mode" : ""}`}
      style={{
        height: "700px",
        background: "#05060f",
        backgroundImage: "linear-gradient(0deg,rgba(216,236,248,.06),rgba(152,192,239,.06))",
        fontSize: "max(calc(min(600px, 80vh) * 0.03), 10px)",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* Header row with toggle + spotlights */}
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          color: "#bad6f7",
          padding: "2em",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          margin: "0 auto",
          opacity: 0,
          transform: "translateY(-1em)",
          animation: "ph-load 2s ease-in 2s forwards, ph-up 1.4s ease-out 2s forwards",
        }}
      >
        <div
          className="ph-mid-spot"
          onClick={() => setIsGoldMode((v) => !v)}
          title="Toggle gold mode"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            margin: "0 auto",
            width: "1.8em",
            height: "1.8em",
            borderRadius: "50%",
            background: "black",
            boxShadow: isGoldMode ? "0 0 1em 0 #d8bd10" : "0 0 1em 0 #98c0ef",
            cursor: "pointer",
            transition: "box-shadow 1s ease-in-out",
            zIndex: 10,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = isGoldMode
              ? "-0.3em 0.1em 0.2em 0 #98c0ef"
              : "-0.3em 0.1em 0.2em 0 #d8bd10"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = isGoldMode ? "0 0 1em 0 #d8bd10" : "0 0 1em 0 #98c0ef"
          }}
        />

        <div
          className="ph-spotlight-wrap"
          style={{
            pointerEvents: "none",
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            margin: "0 auto",
            height: "42em",
            width: "100%",
            overflow: "hidden",
          }}
        >
          {spotlightRotations.map((rot, i) => (
            <div
              key={i}
              style={{
                borderRadius: "0 0 50% 50%",
                position: "absolute",
                left: 0,
                right: 0,
                margin: "0 auto",
                top: "3em",
                width: "30em",
                height: "max(42em, 86vh)",
                backgroundImage:
                  "conic-gradient(from 0deg at 50% -5%, transparent 45%, rgba(124,145,182,.3) 49%, rgba(124,145,182,.5) 50%, rgba(124,145,182,.3) 51%, transparent 55%)",
                transformOrigin: "50% 0",
                filter: "blur(15px) opacity(0.5)",
                zIndex: -1,
                transform: `rotate(${rot}deg)`,
                animation: `ph-load 2s ease-in-out forwards, ph-loadrot 2s ease-in-out forwards, ph-spotlight ${spotlightDurations[i]} ease-in-out infinite ${spotlightDirections[i]}`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          pointerEvents: "none",
          animation: "ph-load 0.4s ease-in-out forwards",
          zIndex: 1,
          width: "100%",
          height: "100%",
        }}
      />

      {/* Accent lines */}
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: "42em",
          zIndex: -2,
        }}
      >
        {accentHLines.map((top, i) => (
          <div
            key={`h-${i}`}
            style={{
              position: "absolute",
              top: `${top}em`,
              left: 0,
              right: 0,
              margin: "auto",
              width: "100%",
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(186,215,247,.18), transparent)",
              opacity: 0,
              transform: "scale(0)",
              animation: "ph-accentload 2s ease-out 2.4s forwards",
            }}
          />
        ))}
        {accentVLines.map((offset, i) => (
          <div
            key={`v-${i}`}
            style={{
              position: "absolute",
              top: 0,
              left: offset > 0 ? `${offset}em` : "auto",
              right: offset < 0 ? `${Math.abs(offset)}em` : "auto",
              width: "1px",
              height: "100%",
              background: "rgba(186,215,247,.18)",
              opacity: 0,
              transform: "scale(0)",
              animation: "ph-accentload 2s ease-out 2s forwards",
            }}
          />
        ))}
      </div>

      {/* Hero heading */}
      <div
        className="mx-auto max-w-3xl flex justify-center"
        style={{ marginTop: "240px", position: "relative", zIndex: 2 }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            margin: "auto",
            height: "20em",
            paddingTop: "2em",
            transform: "translateY(-1.6em)",
            opacity: 0,
            animation: "ph-load 2s ease-in-out 0.6s forwards",
          }}
        >
          <h2
            className="ph-h2-main"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              margin: "auto",
              width: "fit-content",
              fontSize: "7em",
              fontWeight: 600,
              color: "#9dc3f7",
              background: `
                radial-gradient(2em 2em at 50% 50%,
                  transparent calc(var(--p) - 2em),
                  #fff calc(var(--p) - 1em),
                  #fff calc(var(--p) - 0.4em),
                  transparent var(--p)
                ),
                linear-gradient(0deg, #bad1f1 30%, #9dc3f7 100%)
              `,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 2px 16px rgba(174,207,242,.24)",
              animation: "ph-pulse 10s linear 1.2s infinite",
            }}
          >
            Gold Design
          </h2>
          <h2
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              margin: "auto",
              width: "fit-content",
              fontSize: "7em",
              fontWeight: 600,
              background: `
                radial-gradient(2em 2em at 50% 50%,
                  transparent calc(var(--p) - 2em),
                  transparent calc(var(--p) - 1em),
                  #fff calc(var(--p) - 1em),
                  #fff calc(var(--p) - 0.4em),
                  transparent calc(var(--p) - 0.4em),
                  transparent var(--p)
                )
              `,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "blur(16px) opacity(0.4)",
            }}
          >
            Gold Design
          </h2>
        </div>
      </div>

      {/* Subheading */}
      <p
        className="ph-p"
        style={{
          fontSize: "1.2em",
          position: "absolute",
          left: 0,
          right: 0,
          top: "20em",
          margin: "auto",
          height: "fit-content",
          width: "fit-content",
          textAlign: "center",
          opacity: 0,
          transform: "translateY(1em)",
          animation: "ph-load 2s ease-out 2s forwards, ph-up 1.4s ease-out 2s forwards",
          background: "linear-gradient(0deg, #d8ecf8 0, #98c0ef 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          zIndex: 2,
        }}
      >
        The world&apos;s best platform for Designs,
        <br />
        powered by Dalim
      </p>
    </div>
  )
}
