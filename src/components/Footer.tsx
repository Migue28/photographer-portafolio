const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="flex w-screen bg-zinc-300 justify-center items-end">
            <p className="text-center font-mono font-light tracking-wide text-neutral-700">
                SKYLA RANGER {currentYear}
            </p>
        </footer>
    )
}

export default Footer