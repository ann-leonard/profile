const jumboDiv = $('#jumboDiv')
const firstJumbo = $('#firstJumbo')
let current = 'jumbo1'
function buildJumbo2(){
    let secondJumbo = $('<div id="secondJumbo" data-toggle="on" class="animated slow fadeInDown delay-1s jumbotron bg-dark text-light mx-auto text-center rounded">')
    let jumboHead = $('<h1 class="pb-4">Skills and Technologies</h1>')
    let jumboList = $('<div class="list-group list-group-flush">')
    let jsIcon = $('<div class="list-group-item-secondary pb-2"><i class="devicon-javascript-plain colored">Javascript</i>')
    let nodeIcon = $('<div class="list-group-item-secondary pb-2"><i class="devicon-nodejs-plain colored">Node.js</i>')
    let javaIcon = $('<div class="list-group-item-secondary pb-2"><i class="devicon-java-plain colored">Java</i>')
    let gitIcon = $('<div class="list-group-item-secondary pb-2"><i class="devicon-git-plain colored">Git</i>')
    let linuxIcon = $('<div class="list-group-item-secondary pb-2"><i class="devicon-linux-plain colored">Linux</i>')
    let expressIcon = $('<div class="list-group-item-secondary pb-2"><i style="color:whitesmoke" class="devicon-express-original colored">Express.js</i>')
    let reactIcon = $('<div class="list-group-item-secondary pb-2"><i class="devicon-react-original colored">React</i>')
    let sqlIcon = $('<div class="list-group-item-secondary pb-2"><i class="devicon-mysql-plain colored">Mysql</i>')
    let mongoIcon = $('<div class="list-group-item-secondary pb-2"><i class="devicon-mongodb-plain colored">MongoDB</i>')
    let herokuIcon = $('<div class="list-group-item-secondary pb-2"><i class="devicon-heroku-original colored">Heroku</i>')
    let awsIcon = $('<div class="list-group-item-secondary pb-2"><i class="devicon-amazonwebservices-original colored">AWS</i>')
    let nextBtn = $('<button id="next2" class=" animated fadeIn slow delay-2s m-2 btn btn-lg btn-primary rounded-pill">▼</button>')         
    secondJumbo.append(jumboHead)
    jumboHead.append(jumboList)
    jumboList.append(jsIcon)
    jumboList.append(nodeIcon)
    jumboList.append(javaIcon)
    jumboList.append(gitIcon)
    jumboList.append(linuxIcon)
    jumboList.append(expressIcon)
    jumboList.append(reactIcon)
    jumboList.append(sqlIcon)
    jumboList.append(mongoIcon)
    jumboList.append(herokuIcon)
    jumboList.append(awsIcon)
    // secondJumbo.append(nextBtn)
    jumboDiv.append(secondJumbo)
    $("#next2").click(()=>{
        $("#next2").removeClass('animated fadeIn slow')
        $("#next2").addClass('animated bounceOutDown')
        setTimeout($("#next2").hide(),1500)
        jumboDisplay()
    })
  // current = 'jumbo2'
}
$("#profPic").hover(function(){
    $("#profPic").addClass("animated pulse").one('animationend',()=>{
        $(this).removeClass("animated pulse")
    })
})


// function buildJumbo3(){
//     let thirdJumbo = $('<div id="thirdJumbo" class="animated slow fadeInDown delay-1s jumbotron bg-dark text-light mx-auto text-center rounded">')
//     let jumboHead = $('<h1 class="pb-4">Projects</h1>')
//     let jumboList = $('<div class="list-group list-group-secondary">')
//     let firstProd= $('<div class="d-flex w-100 justify-content-between text-center list-group-item"><h3 class="mb-1"><a href="http://ibetya.io">iBetya</a></h3></div><p class="mb-1 prod">iBetya is a collabrative project with an Express server, Passport.js for authentication, a mysql database, and a Bootstrap frontend, hosted on Heroku.</p></a>')
//     let secondProd= $('<div class="d-flex w-100 justify-content-between text-center list-group-item"><h3 class="mb-1"><a href="http://github.com/ann-leonard/liri-node-app">Liri.js</a></h3></div><p class="mb-1 prod">Liri is a simple command line app using axios to make restful API calls for movie, song, and concert information.</p></a>')
//     let moreProd = $('<p><a href="http://github.com/ann-leonard">See more projects on my github</p>')
    
//     thirdJumbo.append(jumboHead)
//     thirdJumbo.append(jumboList)
//     jumboList.append(firstProd)
//     jumboList.append(secondProd)
//     thirdJumbo.append(moreProd)
//     jumboDiv.append(thirdJumbo)
// }

function jumboDisplay(){
    console.log('gothere')
    console.log(current)
    if (current === 'jumbo1'){
        buildJumbo2()
        current = 'jumbo2'
        console.log('jum2')
    }
    // else if (current === 'jumbo2'){
    //     buildJumbo3()  
    //     console.log("jum3") 
    // }
}

$("#next").click(()=>{
    $('#next').removeClass('animated fadeIn slow delay-2s')
    $('#next').addClass('animated bounceOutDown slow')

   $("#next").hide()
    jumboDisplay()
})

