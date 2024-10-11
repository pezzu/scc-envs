import localFont from "next/font/local";
import fs from "fs";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

function Environment({ env }) {
    return (
        <li className="mb-2">
            <div className="flex items-center justify-center gap-2 text-xl">
                {env}
                <a
                    className="text-xl text-green-500 dark:text-green-400 ml-40 border border-green-500 dark:border-green-400 px-2 py-1 rounded-md"
                    href="#"
                    _target="blank"
                    rel="noopener noreferrer"
                >
                    Deploy
                </a>
                <a
                    className="text-xl text-red-500 dark:text-red-400 border border-red-500 dark:border-red-400 px-2 py-1 rounded-md"
                    href="#"
                    _target="blank"
                    rel="noopener noreferrer"
                >
                    Delete
                </a>
            </div>
        </li>
    );
}

export default function Home({ envs }) {
    return (
        <div
            className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
        >
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <ol className="list-inside  text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    {envs.map((env, index) => (
                        <Environment key={index} env={env} />
                    ))}
                </ol>
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const envs = fs
        .readdirSync("../")
        .filter((file) => file.startsWith("QA") && file.endsWith(".json"));
    return { props: { envs } };
}
