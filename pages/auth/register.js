import { useMutation } from "@tanstack/react-query"
import Link from "next/link"
import { useRouter } from "next/router"
import Auth from "."

export default function Register() {
  const {status, data, error, mutate} = useMutation(fetchRegister)
  const router = useRouter()
  const handleSubmit = async (event) => {
    event.preventDefault()
    
    const data = {
    email : event.target.email.value,
    password : event.target.password.value,
    }
    mutate(data)
  }

  if (status === "loading") return <h1>loading...</h1>
  if (status === "error") console.log(error.massage)
  if (status === "success") { 
    sessionStorage.setItem('token', data.token);
    sessionStorage.setItem('id', data.id);
    router.push("/")
}
  
    return (
        <Auth>
            <h1 className=" text-center">Register</h1>
            <form className=" w-[25rem] flex flex-col gap-2" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="email">Email:</label>
                <input className=" input-field" type="email" id="email" value="eve.holt@reqres.in" readOnly name="email"/>

                <label htmlFor="password">Password:</label>
                <input className=" input-field" type="password" id="password" name="password" value="pistol" readOnly autoComplete="no"/>
                <input className=" btn mt-4" type="submit" value="submit"/>
            </form> 
            <div className=" mt-4">
                <Link className=" underline" href="./login">Sudah punya akun? silahkan login..</Link>
            </div>
        </Auth>
    )
}