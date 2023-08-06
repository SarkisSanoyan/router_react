import { useParams } from "react-router-dom"


export function DetailPage() {
    const { id } = useParams();

    return (
        <div>Detail {id}</div>
    )
}
