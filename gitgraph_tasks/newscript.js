const graphContainer = document.getElementById("graph-container");
 
// Instantiate the graph.
const gitgraph = GitgraphJS.createGitgraph(graphContainer);

// Simulate git commands with Gitgraph API.
const master = gitgraph.branch("master");
master.commit("Initial commit");

const IDC = gitgraph.branch("IDC");
IDC
.commit("APPS- ")
.commit("NodeX 2248-2.1");

const PADI = gitgraph.master("PADI");
PADI
  .commit("APPS- ")
  .commit("NodeX 22w48-2.1")

IDC.merge(PADI);
IDC.commit("Prepare v2");

master.merge(IDC).tag("v1.0.0");