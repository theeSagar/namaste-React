// This is about error handling -

import { useRouteError } from "react-router-dom"
const Error=()=>{
    const err=useRouteError();
    console.log(err)
    return (
        <div>
            <h1>Opps!! This is an Error. Look below to know more about the error.</h1>
            <h2>{err?.status} : {err?.statusText}</h2>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eius molestias, hic, eveniet expedita quo quod repellat dolores rem quas necessitatibus ipsam quaerat in et.</h4>
            </div>
    )
}
export default Error