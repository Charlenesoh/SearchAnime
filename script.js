


async function sendApiRequest()[
    let APP_ID = "4914101"
    let API_KEY = ""
    let response  = await fetch ("")
    console.log(response)
    let data = await response.json()
    console.log(data)
    userAPIData(data)
]