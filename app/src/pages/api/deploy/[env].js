export default function handler(req, res) {
    console.log("Deploying" + req.query.env);
    res.status(200).json({ name: "John Doe" });
}
