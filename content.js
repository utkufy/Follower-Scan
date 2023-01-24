const playCdnTailwind = document.createElement("script")
playCdnTailwind.src="https://cdn.tailwindcss.com"
const searchButton = document.createElement("button")
searchButton.textContent="Follower Scan"
searchButton.classList="w-1/2 h-8 rounded bg-blue-100"

document.querySelector("header>section").appendChild(searchButton)
document.querySelector("head").appendChild(playCdnTailwind)



function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms))
}
var namesFollowers=[]
var namesFollowing=[]
var finalList = []
async function getFollowers(){

    document.querySelector("header > section > ul > li:nth-child(2) > a").click()
    
    ht=1
    last_ht=0
    while(ht!=last_ht){
        last_ht=ht
        await sleep(2000)
        document.querySelector("div._aano").scrollTo(0,document.querySelector("div._aano").scrollHeight)
        ht = document.querySelector("div._aano").scrollHeight
        linksFollower = document.querySelectorAll("div._ab8w._ab94._ab99._ab9h._ab9m._ab9o._abcm>div>div>div>span>a")
        

    }

}
async function getFollowing(){
    document.querySelector("header > section > ul > li:nth-child(3) > a").click()
    ht=1
    last_ht=0
    while(ht!=last_ht){
        last_ht=ht
        await sleep(2000)
        document.querySelector("div._aano").scrollTo(0,document.querySelector("div._aano").scrollHeight)
        ht = document.querySelector("div._aano").scrollHeight
        linksFollowing = document.querySelectorAll("div._ab8w._ab94._ab99._ab9h._ab9m._ab9o._abcm>div>div>div>span>a")
        

    }


}



searchButton.addEventListener("click",async()=>{
   await getFollowers()
    linksFollower.forEach(element => {
        namesFollowers.push(element.innerText)
   });
   sleep(1000)
   await getFollowing()
   sleep(1000)
   linksFollowing.forEach(element=>{
    namesFollowing.push(element.innerText)
   })

   linksFollowing.forEach(element => {
    let flag = true
    linksFollower.forEach(follower => {
        if(element.innerText === follower.innerText) flag = false
    });
    if(flag) finalList.push(element.innerText)
});

    const article = document.querySelector("article")
    article.classList.add("h-screen")
    article.classList.add("text-center")
    article.innerHTML=""

    const footer = document.querySelector("footer")
    footer.remove()
    
    const createListDiv = document.createElement("div")
   
    article.appendChild(createListDiv)

    finalList.forEach(element=>{
        var newA = document.createElement("a")
        var newDiv = document.createElement("div")
        newA.textContent = element
        newA.href=`https://www.instagram.com/${element}/`
        createListDiv.appendChild(newDiv)
        newDiv.appendChild(newA)
    })
console.log(finalList);
})
