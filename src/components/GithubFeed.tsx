"use client";
import { useEffect, useState } from "react";

export default function GithubFeed() {
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/colonel1223/repos?sort=updated")
      .then(r => r.json())
      .then(data => setRepos(data.slice(0,6)));
  }, []);

  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold mb-4">Featured Code</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            className="rounded-xl border border-zinc-800 p-4 hover:border-zinc-600"
          >
            <div className="font-semibold">{repo.name}</div>
            <div className="text-sm text-zinc-400 mt-1">
              {repo.description || "No description"}
            </div>
            <div className="text-xs text-zinc-500 mt-2">
              ⭐ {repo.stargazers_count} • {repo.language}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
