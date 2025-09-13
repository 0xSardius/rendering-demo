import fs from "fs";

export const ServerComponentOne = () => {

    fs.readFileSync("example.txt", "utf8");
    return (
        <div>
            <h1>Server Component One</h1>
        </div>
    )
}
