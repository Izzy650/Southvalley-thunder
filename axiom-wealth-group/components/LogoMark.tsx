interface LogoMarkProps {
  size?: number
}

export default function LogoMark({ size = 40 }: LogoMarkProps) {
  const cx = size / 2
  const cy = size / 2
  const outerH = size * 0.88
  const outerHalfW = size * 0.48

  const apex = { x: cx, y: size * 0.06 }
  const bl = { x: cx - outerHalfW, y: apex.y + outerH }
  const br = { x: cx + outerHalfW, y: apex.y + outerH }

  const scale = 0.46
  const innerApex = {
    x: cx,
    y: apex.y + outerH * (1 - scale) * 0.5 + 2,
  }
  const innerBl = {
    x: cx - outerHalfW * scale,
    y: bl.y - outerH * (1 - scale) * 0.5,
  }
  const innerBr = {
    x: cx + outerHalfW * scale,
    y: br.y - outerH * (1 - scale) * 0.5,
  }

  const baseMidY = bl.y

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <polygon
        points={`${apex.x},${apex.y} ${bl.x},${bl.y} ${br.x},${br.y}`}
        fill="rgba(196,168,112,0.08)"
        stroke="#C4A870"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <polygon
        points={`${innerApex.x},${innerApex.y} ${innerBl.x},${innerBl.y} ${innerBr.x},${innerBr.y}`}
        fill="none"
        stroke="rgba(196,168,112,0.3)"
        strokeWidth="0.6"
        strokeLinejoin="round"
      />
      <line
        x1={apex.x}
        y1={apex.y}
        x2={cx}
        y2={baseMidY}
        stroke="rgba(196,168,112,0.22)"
        strokeWidth="0.6"
      />
      <line
        x1={bl.x}
        y1={baseMidY}
        x2={br.x}
        y2={baseMidY}
        stroke="rgba(196,168,112,0.5)"
        strokeWidth="1"
      />
    </svg>
  )
}
