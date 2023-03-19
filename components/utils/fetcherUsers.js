import { data } from "autoprefixer"

export default async function FetcherUsers() {
    let datas = []
    const getData = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        datas.push(...data.data)
    }
    try {
        await getData('https://reqres.in/api/users')
        await getData('https://reqres.in/api/users?page=2')
    } catch (error) {
        console.log(error)
    }
    return datas

}