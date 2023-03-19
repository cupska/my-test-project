export default async function FetchRegister(data) {
    const response = await fetch("https://reqres.in/api/register", {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    const token = await response.json()
    return token
  }