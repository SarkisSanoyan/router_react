import { useState } from "react";


export function BlogFilter({ setSearchParams }) {

    const [val, setVal] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        const params = {};
        if (val) params.post = val;
        if (val) params.age = 21;
        setSearchParams(params);
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
            <input type="submit" value="Search" />
        </form>
    )
}
