export default async function handler(req, res) {
    console.log("Deleting " + req.query.env);
    const response = await fetch(
        `https://api.github.com/repos/pezzu/scc-infra/actions/workflows/destroy.yaml/dispatches`,
        {
            method: "POST",
            headers: {
                Accept: "application/vnd.github+json",
                Authorization: `Bearer ${process.env.SCC_INFRA_TOKEN}`,
                "X-GitHub-Api-Version": "2022-11-28",
            },
            body: JSON.stringify({ ref: "main", inputs: { environment: req.query.env } }),
        }
    );
    console.log("GH Action response: " + response.ok);
    res.status(200).json({ ok: true });
}
