function parseRobots(text) {
  const result = {
    agents: {},
    Sitemap: [],
  };

  let currentAgents = [];

  const lines = text.split("\n");

  for (let line of lines) {
    line = line.trim();

    // skip kosong / komentar
    if (!line || line.startsWith("#")) continue;

    const [key, ...rest] = line.split(":");
    const value = rest.join(":").trim();

    switch (key.toLowerCase()) {
      case "user-agent":
        const agent = value.toLowerCase();
        currentAgents = [agent];

        if (!result.agents[agent]) {
          result.agents[agent] = {
            Allow: [],
            Disallow: [],
          };
        }
        break;

      case "allow":
        if (value !== "") {
          for (const agent of currentAgents) {
            result.agents[agent].Allow.push(value);
          }
        }
        break;

      case "disallow":
        if (value !== "") {
          for (const agent of currentAgents) {
            result.agents[agent].Disallow.push(value);
          }
        }
        break;

      case "sitemap":
        result.Sitemap.push(value);
        break;

      case "host":
        result.Host = value;
        break;
    }
  }

  return result;
}

module.exports = parseRobots;
