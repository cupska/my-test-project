

export default async function FetcherUsers(id) {
    const response = await fetch(`https://reqres.in/api/users/${id}`)
    const datas = await response.json()
    return datas
}