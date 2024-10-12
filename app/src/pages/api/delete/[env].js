export default function handler(req, res) {
    console.log("Deleting " + req.query.env);
    res.status(200).json({ name: "John Doe" });
}
