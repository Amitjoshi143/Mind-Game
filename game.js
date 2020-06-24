document.addEventListener('DOMContentLoaded',()=> {
    const cardarr =[
        {
            name:'p1',
            img:'images/p1.png'
        },
        {
            name:'p1',
            img:'images/p1.png'
        },
        {
            name:'p2',
            img:'images/p2.png'
        },
        {
            name:'p2',
            img:'images/p2.png'
        },
        {
            name:'p3',
            img:'images/p3.png'
        },
        {
            name:'p3',
            img:'images/p3.png'
        },
        {
            name:'p4',
            img:'images/p4.png'
        },{
            name:'p4',
            img:'images/p4.png'
        },
        {
            name:'p5',
            img:'images/p5.png'
        },{
            name:'p5',
            img:'images/p5.png'
        },{
            name:'p6',
            img:'images/p6.png'
        },{
            name:'p6',
            img:'images/p6.png'
        },
        
    ]

    cardarr.sort(() => 0.5 - Math.random())
    
const grid =document.querySelector('.grid')   
const resultDisplay = document.querySelector('#result')
    var plastichosen=[]
    var plastichosenid=[]
    var plasticswon=[]
    

function boardmaking(){
    for (let i=0;i<cardarr.length;i++){
        var plastic = document.createElement('img')
        plastic.setAttribute('src', 'images/front.png')
        plastic.setAttribute('data-id',i)
        plastic.addEventListener('click',flipcard)
        grid.appendChild(plastic)
    }
}

function sameplasticheck(){
    var plastics=document.querySelectorAll('img')
    const firstoption=plastichosenid[0]
    const secondoption=plastichosenid[1]
    if(plastichosen[0]===plastichosen[1]){
        alert('You r a magician')
       // console.log("1");
        //i=i+1;
       // console.log(i);
        plastics[firstoption].setAttribute('src','images/black.png')
        plastics[secondoption].setAttribute('src','images/black.png')
       // plastics[firstoption].removeEventListener('click',flipcard)
		//plastics[secondoption].removeEventListener('click',flipcard)
        plasticswon.push(plastichosen)
    }  else {
        //console.log("2")
        //i=i+1;
        //console.log(i);
        plastics[firstoption].setAttribute('src','images/front.png')
        plastics[secondoption].setAttribute('src','images/front.png')
        alert("You must be kidding i know. Go again")
    }
    plastichosen=[]
    plastichosenid=[]
    resultDisplay.textContent=plasticswon.length
    if(plasticswon.length===cardarr.length/2){
        resultdisplay.textContent='congratulation ! You r a lengend in this game'
    }

}



function flipcard(){
    var plasticid=this.getAttribute('data-id')
    plastichosen.push(cardarr[plasticid].name)
    plastichosenid.push(plasticid)
    this.setAttribute('src',cardarr[plasticid].img)
    if(plastichosen.length===2){
        
        setTimeout(sameplasticheck,300)
    }

}
boardmaking()
})