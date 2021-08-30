import { createToast } from 'mosha-vue-toastify'

let flips = []

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let isRatelimited = false;
let isReloading = false;

function getData(grid) {
    console.log("Attempting to fetch flips...")
    fetch('https://api.skyblock.tools/api/flips?&sort='+(grid.$root.Sidebar.sort + 1)+((typeof grid.$root.minProf == 'undefined') ? '' : ('&min_profit='+grid.$root.minProf))+((typeof grid.$root.maxPrice == 'undefined') ? '' : ('&max_price='+grid.$root.maxPrice)) + "&type="+grid.$root.Sidebar.flipType+"&item_filter="+grid.$root.Sidebar.filterNumber, {
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
        headers: {
            Authorization: 'Bearer ' + JSON.parse(window.localStorage.getItem("user_session_data")).access_token
        }
    })
        .then(async res => {
            const json = await res.json()
            if (res.status == 401) {
                reloadToken()
            }
            if (res.status == 429) { //hell
                if(!isRatelimited) {
                    grid.ready = false
                    isRatelimited = true
                    const timeUntil = await res.headers.get("Retry-After") * 1000
                    console.log(json)
                    console.log("ratelimit hit!")
                    !grid.ready && createToast('You are being ratelimited!',
                        {
                            position: 'bottom-right',
                            type: 'warning',
                            transition: 'zoom',
                            showIcon: true,
                            timeout: timeUntil,
                        })
                    await sleep(timeUntil)
                    isRatelimited = false
                }
            }
            return json
        })
        .then(res => {
            if (res.refresh_session == true) {
                reloadToken()
            }
            if(typeof res.flips != "undefined" || res.flips != null){
                console.log(res.flips);
                console.log("Flips successfully fetched!")
                let processedUUIDS = []
                for(let i = 0; i < grid.flips.length; i++){
                    if(grid.flips[i].processed === true){
                        processedUUIDS.push(grid.flips[i].uuid)
                    }
                }
                for(let i = 0; i < res.flips.length; i++){
                    const indexOfMatch = processedUUIDS.indexOf(res.flips[i].uuid);
                    if(indexOfMatch == -1){
                        // const bestItemImageMatch = items.get(stringSimilarity.findBestMatch(res.flips[i].item_name, itemsKeys).bestMatch.target).replaceAll(" ","_")+".webp"
                        // res.flips[i].item_image = bestItemImageMatch
                        if(res.flips[i].head_url === "" || res.flips[i].head_url === "null"){
                            res.flips[i].head_url = "https://hypixel-skyblock-item-images.pages.dev/"+res.flips[i].skyblock_id+".webp"
                        }
                        res.flips[i].processed = true
                    } else {
                        const prevProcessed = grid.flips.map(e => e.uuid).indexOf(processedUUIDS[indexOfMatch])
                        res.flips[i].head_url = grid.flips[prevProcessed].head_url
                        res.flips[i].processed = true
                    }
                }
                flips = res.flips
                if(!isRatelimited) {
                    grid.ready = true
                }
                grid.flips = flips
            }
        })
}

async function reloadToken() {
    isReloading = true;
    console.log("Reloading Token...")
    await fetch(`https://api.skyblock.tools/api/auth/token/create?` + new URLSearchParams({
        webtoken: JSON.parse(window.localStorage.getItem("user_session_data")).refresh_token
    }))
        .then(res => {
            if(res.status == 401){
                console.log("Got 401 when trying to reload token!!!")
                window.localStorage.removeItem("user_session_data")
                window.location.reload()
            }
            return res.json()
        })
        .then(res => {
            const temp = JSON.parse(window.localStorage.getItem("user_session_data"))
            temp.refresh_token = res.refresh_token
            temp.access_token = res.access_token
            let plUpdated = false
            if(temp.priviledge_level !== res.priviledge_level){
                plUpdated = true
                temp.priviledge_level = res.priviledge_level
            }
            window.localStorage.setItem("user_session_data", JSON.stringify(temp))
            console.log("Successfully reloaded token!")
            isReloading = false;
            plUpdated && window.location.reload()
        })
}

export function start(grid){
    getData(grid)
    grid.$root.flipFetcher = setInterval(() => {
        if (!isRatelimited && !isReloading) {
            getData(grid)
        }
    }, JSON.parse(window.localStorage.getItem("user_session_data")).privilege_level == 1 ? 10000 : 5000)
}