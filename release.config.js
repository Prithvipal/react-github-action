module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/Prithvipal/react-github-action",
    plugins: [
        '@semantic-release/commit-analyzer', 
        '@semantic-release/release-notes-generator',
        '@semantic-release/github'
    ]
}