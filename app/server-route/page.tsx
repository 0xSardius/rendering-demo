import { serverSideFunction } from "@/utils/server-utils";


export default function ServerRoutePage() {
    const result = serverSideFunction();
    return (
        <div>
            <h1>Server Route {result}</h1>
        </div>
    )
}