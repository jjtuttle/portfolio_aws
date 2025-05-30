export default function DigitalCloud() {
    return (
        <div className="absolute top-0 left-105 -translate-x-1/2 -translate-y-56 w-[1000px] h-[800px] z-0">
            <svg viewBox="0 0 800 500" className="w-full h-full opacity-18" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Large Cloud outline */}
                <path
                    d="M150 300 C150 250, 180 220, 220 220 C240 180, 290 150, 350 150 C410 150, 460 180, 480 220 C530 220, 580 250, 580 300 C580 350, 530 380, 480 380 L220 380 C180 380, 150 350, 150 300 Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="text-green-400"
                />

                {/* Network pattern inside cloud */}
                <g className="text-green-400/70">
                    {/* Horizontal lines */}
                    <line x1="200" y1="240" x2="530" y2="240" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="210" y1="270" x2="520" y2="270" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="220" y1="300" x2="510" y2="300" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="230" y1="330" x2="500" y2="330" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="240" y1="360" x2="490" y2="360" stroke="currentColor" strokeWidth="1.5" />

                    {/* Vertical lines */}
                    <line x1="250" y1="220" x2="250" y2="370" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="300" y1="210" x2="300" y2="370" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="350" y1="200" x2="350" y2="370" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="400" y1="210" x2="400" y2="370" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="450" y1="220" x2="450" y2="370" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="500" y1="230" x2="500" y2="370" stroke="currentColor" strokeWidth="1.5" />

                    {/* Connection nodes - larger */}
                    <circle cx="250" cy="240" r="8" fill="currentColor" />
                    <circle cx="300" cy="240" r="4" fill="currentColor" />
                    <circle cx="350" cy="240" r="4" fill="currentColor" />
                    <circle cx="400" cy="240" r="4" fill="currentColor" />
                    <circle cx="450" cy="240" r="4" fill="currentColor" />

                    <circle cx="250" cy="270" r="8" fill="currentColor" />
                    <circle cx="300" cy="270" r="3" fill="currentColor" />
                    <circle cx="350" cy="270" r="3" fill="currentColor" />
                    <circle cx="400" cy="270" r="3" fill="currentColor" />
                    <circle cx="450" cy="270" r="3" fill="currentColor" />

                    <circle cx="250" cy="300" r="3" fill="currentColor" />
                    <circle cx="300" cy="300" r="3" fill="currentColor" />
                    <circle cx="350" cy="300" r="8" fill="currentColor" />
                    <circle cx="400" cy="300" r="3" fill="currentColor" />
                    <circle cx="450" cy="300" r="3" fill="currentColor" />

                    <circle cx="250" cy="330" r="3" fill="currentColor" />
                    <circle cx="300" cy="330" r="3" fill="currentColor" />
                    <circle cx="350" cy="330" r="3" fill="currentColor" />
                    <circle cx="400" cy="330" r="3" fill="currentColor" />
                    <circle cx="450" cy="330" r="8" fill="currentColor" />

                    <circle cx="250" cy="360" r="4" fill="currentColor" />
                    <circle cx="300" cy="360" r="8" fill="currentColor" />
                    <circle cx="350" cy="360" r="4" fill="currentColor" />
                    <circle cx="400" cy="360" r="4" fill="currentColor" />
                    <circle cx="450" cy="360" r="4" fill="currentColor" />

                    {/* Diagonal connections */}
                    <line x1="250" y1="240" x2="300" y2="270" stroke="currentColor" strokeWidth="1" opacity="0.6" />
                    <line x1="300" y1="240" x2="350" y2="270" stroke="currentColor" strokeWidth="1" opacity="0.6" />
                    <line x1="350" y1="240" x2="400" y2="270" stroke="currentColor" strokeWidth="1" opacity="0.6" />
                    <line x1="400" y1="240" x2="450" y2="270" stroke="currentColor" strokeWidth="1" opacity="0.6" />

                    <line x1="250" y1="270" x2="300" y2="300" stroke="currentColor" strokeWidth="5" opacity="0.6" />
                    <line x1="300" y1="270" x2="350" y2="300" stroke="currentColor" strokeWidth="5" opacity="0.6" />
                    <line x1="350" y1="270" x2="400" y2="300" stroke="currentColor" strokeWidth="1" opacity="0.6" />
                    <line x1="400" y1="270" x2="450" y2="300" stroke="currentColor" strokeWidth="1" opacity="0.6" />

                    <line x1="250" y1="300" x2="300" y2="330" stroke="currentColor" strokeWidth="1" opacity="0.6" />
                    <line x1="300" y1="300" x2="350" y2="330" stroke="currentColor" strokeWidth="1" opacity="0.6" />
                    <line x1="350" y1="300" x2="400" y2="330" stroke="currentColor" strokeWidth="1" opacity="0.6" />
                    <line x1="400" y1="300" x2="450" y2="330" stroke="currentColor" strokeWidth="1" opacity="0.6" />

                    {/* Additional network details */}
                    <line x1="220" y1="250" x2="280" y2="250" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                    <line x1="320" y1="250" x2="380" y2="250" stroke="currentColor" strokeWidth="5" opacity="0.4" />
                    <line x1="420" y1="250" x2="480" y2="250" stroke="currentColor" strokeWidth="1" opacity="0.4" />

                    <line x1="230" y1="280" x2="290" y2="280" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                    <line x1="330" y1="280" x2="390" y2="280" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                    <line x1="430" y1="280" x2="490" y2="280" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                </g>
            </svg>
        </div>
    )
}
