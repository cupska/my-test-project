
export default async function FetcherUsers() {
    const response = await fetch("https://reqres.in/api/users")
    const datas = await response.json()
    return datas
}