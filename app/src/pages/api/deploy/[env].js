export default async function handler(req, res) {
    console.log("Deploying " + req.query.env);
    const response = await fetch(
        `https://api.github.com/repos/pezzu/scc-infra/actions/workflows/deploy.yaml/dispatches`,
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
    // console.log("GH Action response: " + response.ok);
    console.log(response);
    res.status(200).json({ ok: true });
}
