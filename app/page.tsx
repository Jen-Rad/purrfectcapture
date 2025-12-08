export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-32 px-6">
      <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
        Purrfect Capture
      </h1>

      <p className="mt-4 max-w-xl text-lg text-zinc-300">
        The purrfect way to screenshot—fast, intuitive, and infused with a
        little meowgic in every snap… no claws attached!
      </p>

      <div className="mt-8">
        <a
          href="/capture"
          className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium shadow-lg transition"
        >
          Start Capturing
        </a>
      </div>
    </div>
  );
}
