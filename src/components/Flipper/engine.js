import { createToast } from 'mosha-vue-toastify'

let flips = []

function getData(grid) {
    fetch('https://api.skyblock.tools/api/flip/auctions?filters=11&minProfit=-1&maxPrice=-1&minQuantity=10&sort=1', {
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
        headers: {
            Authorization: 'Bearer ' + JSON.parse(window.localStorage.getItem("user_session_data")).access_token
        }
    })
        .then(res => {
            if(res.status == 401){
                reloadToken()
            }
            if(res.status == 429){
                createToast('You are being ratelimited!',
                    {
                        position: 'bottom-right',
                        type: 'warning',
                        transition: 'zoom',
                        showIcon: true
                    })
            }
            return res.json()
        })
        .then(res => {
            if (res.refresh_session == true) {
                reloadToken()
            }
            if(typeof res.flips != "undefined" || res.flips != null){
                flips = res.flips
                grid.flips = flips
            }
        })
}

async function reloadToken() {
    await fetch(`https://api.skyblock.tools/auth/token/create?` + new URLSearchParams({
        webtoken: JSON.parse(window.localStorage.getItem("user_session_data")).refresh_token
    }))
        .then(res => {
            if(res.status == 401){
                window.localStorage.removeItem("user_session_data")
                window.location.reload()
            }
            return res.json()
        })
        .then(res => {
            const temp = JSON.parse(window.localStorage.getItem("user_session_data"))
            temp.refresh_token = res.refresh_token
            temp.access_token = res.access_token
            window.localStorage.setItem("user_session_data", JSON.stringify(temp))
        })
}

export function start(grid){
    getData(grid)
    setInterval(() => {
        if (document.hidden) {
            getData(grid)
        }
    }, JSON.parse(window.localStorage.getItem("user_session_data")).privilege_level == 1 ? 10000 : 5000)
}