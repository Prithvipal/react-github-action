module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/Prithvipal/react-github-action",
    plugins: [
        '@semantic-release/commit-analyzer', 
        '@semantic-release/release-notes-generator',
        '@semantic-release/github'
    ]
}