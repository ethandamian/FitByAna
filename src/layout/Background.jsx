
// eslint-disable-next-line react/prop-types
export default function Background({ children }) {
    return (
        <div className="absolute top-0 z-[-2] h-screen w-screen transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
            {children}
        </div>
    )
}