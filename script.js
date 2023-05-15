const sHeroToken = '196546583099861'

let SHeroURL = 'https://www.superheroapi.com/api.php/196546583099861/search/'
let batman = new URL('https://www.superheroapi.com/api.php/196546583099861/name/batman/')

const body = document.body
const title = document.body.querySelector('.header')
const searchB = document.querySelector('input')
const themeBanner = document.querySelector('.themeTitle')
const buttons = document.querySelectorAll('button')
const results = document.querySelector('.totalResults')
const searchButton = document.querySelector('.find')



function hover(main, hoverColor) {


    buttons.forEach((button) => {
        button.addEventListener('mouseover', event => {
            button.style.color = hoverColor
            button.style.filter = 'bightness(50%)'
            button.style.borderRadius = '40px'
            button.style.fontSize = '20px'


        });
        button.addEventListener('mouseout', event => {
            button.style.color = main
            button.style.filter = 'bightness(80%)'
            button.style.borderRadius = '0'
            button.style.fontSize = '15px'


        })


    })
}

function themeDark() {

    body.style.backgroundSize = '3em 3em'
    body.style.backgroundColor = '#19114c'
    body.style.backgroundImage = 'radial-gradient(#526ad4 10%, transparent 10%, transparent 39%, #526ad4 40%, #526ad4 45%, transparent 46%), radial-gradient(circle at top left, #526ad4 4%, transparent 5%, transparent 19%, #526ad4 20%, #526ad4 22%, transparent 23%), radial-gradient(circle at top right, #526ad4 4%, transparent 5%, transparent 19%, #526ad4 20%, #526ad4 22%, transparent 23%), radial-gradient(circle at bottom left, #526ad4 4%, transparent 5%, transparent 19%, #526ad4 20%, #526ad4 22%, transparent 23%), radial-gradient(circle at bottom right, #526ad4 4%, transparent 5%, transparent 19%, #526ad4 20%, #526ad4 22%, transparent 23%)'



    searchB.style = 'background: #19114c'
    title.style.color = 'white'
    themeBanner.style = 'background: #19114c'
    buttons.forEach((x) => {
        x.style = 'background: #19114c'
        x.style.color = 'white'
    })
    results.style.background = '#19114c'
    results.style.color = '#fff'
    document.querySelector('.search').style.color = ''
    document.querySelector('.results').style.color = ''
    hover('white', 'gray')



}

function themeNormal() {
    body.style = 'background: linear-gradient(90deg, rgba(218,11,0,1) 5%, rgba(144,4,4,1) 46%, rgba(104,0,0,1) 91%)'
    searchB.style = 'background: #8B0000'
    title.style = 'color: #fff'
    themeBanner.style = 'background: #8B0000'

    buttons.forEach((x) => {
        x.style = 'background: #8B0000'

        x.style.color = 'white'
    })
    results.style.background = 'white'
    results.style.color = '#880000'
    document.querySelector('.search').style.color = ''
    document.querySelector('.results').style.color = ''
    hover('white', 'yellow')

}

function themeZen() {
    body.style.background = '#020416'
    body.style.backgroundSize = '30px 30px '
    body.style.backgroundPosition = '0 0, 15px 15px'
    body.style.backgroundImage = 'radial-gradient(#45f781 0.75px, transparent 0.75px), radial-gradient(#45f781 0.75px, #020416 0.75px)'
    searchB.style = 'background: #020416b3'
    title.style = 'color: #45f781'
    themeBanner.style = 'background: #020416b3; color: #45f781'
    searchButton.style.border = '2px solid #45f781'
    buttons.forEach((x) => {
        x.style.background = '#020416b5'

        x.style.color = '#45f781'



    })
    results.style.background = '#45f781'
    results.style.color = '#020416'
    document.querySelector('.search').style.color = '#45f781'
    document.querySelector('.results').style.color = '#45f781'

    hover('#45f781', 'white')






}

function themeTw() {

    body.style.background = 'linear-gradient(304deg, rgba(4,0,36,1) 5%, rgba(9,45,121,1) 51%, rgba(10,10,77,1) 81%)'

    searchB.style = 'background: #00308F'
    title.style.color = 'white'
    themeBanner.style = 'background: #00308F'
    buttons.forEach((x) => {
        x.style = 'background: #00308F'
        x.style.color = 'white'
    })
    results.style.background = '#00308f'
    results.style.color = '#fff'
    document.querySelector('.search').style.color = ''
    document.querySelector('.results').style.color = ''
    hover('white', "#25cfdb")
}

let heroData = (name) => {
    fetch(SHeroURL + '/' + name)
        .then(res => {
            if (res.status === 200) {
                console.log('Call is Successful');
            }
            if (res.status === 400) {
                console.log('Call experienced an error')

            }



            return res.json()
        })

    .then(data => {
        var hero = data
            // if (hero.response === 'error') {
            //     const main = document.querySelector('.main')
            //     main.innerText = 'The hero name is not in the database'
            //     main.style.color = 'White'
            //     main.style.height = '050vh'
            //     main.style.fontSize = '50px'
            // }

        let nameList = document.querySelector('.nameList')


        let heroDict = hero.results


        let results = document.querySelector('.totalResults')

        if (hero.response === 'error') {
            results.innerText = 0
        } else {
            results.innerText = heroDict.length
        }





        for (x in heroDict) {
            let rName = heroDict[x].biography['full-name']
            let actionName = heroDict[x].name
            let allignment = heroDict[x].biography.alignment
            let publisher = heroDict[x].biography.publisher
            if (allignment === 'bad') {
                allignment = 'Villain'
            } else if (allignment === 'good') {
                allignment = 'Hero'
            }

            let imageSource = heroDict[x].image.url



            if (rName.length === 0) {
                rName = 'Unavailable'
            }
            // if (actionName.length === 0) {
            //     actionName = 'Unavailable'
            // }
            // console.log("Hero Name: " + actionName + "\nReal Name: " + rName)
            let li = document.createElement('li')
            let img = document.createElement('img')


            img.src = imageSource


            li.innerText = "Action Name: " + actionName + "\nReal Name: " + rName + '\n Allignment: ' + allignment + `\n Publisher: ${publisher} `
            nameList.appendChild(li)

            document.querySelector('.image').appendChild(img)

        }











    })

}

function clean() {
    let totalimages = document.querySelectorAll('img')
    for (let i = 0; i < totalimages.length; i++) {
        totalimages[i].remove()
    }

    let list = document.querySelector('.nameList')

    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    console.log(true);

}

function findHV() {

    let searchbar = document.querySelector('.searchHero')
    let searchbarContent = searchbar.value
    searchbarContent = String(searchbarContent.toLowerCase())



    heroData(searchbarContent)
}

function bg() {
    let searchbar = document.querySelector('.searchHero')
    let nav = document.querySelector('.navContents')
    nav.style.background = ' transparent'
    nav.style.marginTop = '50px'
}

let searchbar = document.querySelector('.searchHero')

function noBg() {
    let nav = document.querySelector('.navContents')
    nav.style.background = ' transparent';
    nav.style.marginTop = '0'

}


const bodyH = document.body.scrollHeight
const footer = document.querySelector('footer')

console.log(bodyH)

function footer_position() {
    if (bodyH > 450) {
        footer.style.position = 'relative'
    }
}

function enterKey() {
    let keypress = event.key
    console.log(keypress)

    if (keypress === 'Enter') {
        clean();
        findHV();

    }


}




function maxHeros() {
    let heroURL = 'https://www.superheroapi.com/api.php/196546583099861/'

    let i = 1
    fetch(heroURL + 1)

    .then((result) => {
            console.log(result)
            return result.json()

        })
        .then((data) => {
            console.log(data)
            while (data.response === 'success') {
                fetch(heroURL + i)

                .then((result) => {
                        console.log(result)
                        return result.json()

                    })
                    .then((data) => {
                        console.log(data)

                    })
                i++
            }
        })
}



hover('white', 'yellow')






// buttons.forEach((button) => {
//     button.addEventListener('mouseout', event => {
//         button.style.color = 'white'

//         console.log(true);
//     })


// })