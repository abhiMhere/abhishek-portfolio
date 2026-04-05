export default function GithubStats() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          GitHub Activity
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-6">

          {/* Stats */}
          <img
            src="https://github-readme-stats.vercel.app/api?username=abhiMhere&show_icons=true&theme=tokyonight"
            alt="GitHub Stats"
            className="rounded-lg"
          />

          {/* Streak */}
          <img
            src="https://streak-stats.demolab.com?user=abhiMhere&theme=tokyonight"
            alt="GitHub Streak"
            className="rounded-lg"
          />

        </div>

      </div>
    </section>
  );
}