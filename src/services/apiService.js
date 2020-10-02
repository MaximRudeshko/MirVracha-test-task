export default class ApiService {

    _apiBase = 'http://www.filltexst.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'

    getResources = async (url) => {
        const res = await fetch(url);

        if(!res.ok){
            throw new Error(`Could not fetch ${res.status}`)
        }

        return await res.json()
    } 

    getAllUsers = async () => {
        return await this.getResources(this._apiBase)
    }
}




