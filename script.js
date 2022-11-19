fetch("https://valorant-api.com/v1/agents")
  .then((response) => response.json())
  .then((json) => {
    let agent = json.data[rand(json.data)];
    //   console.log(agent)
    let cardImage = document.getElementById("cardImg");
    cardImage.src = agent.displayIcon;
    let displayName = document.getElementById("displayName");
    displayName.innerText = `${agent.displayName}`;

    let desc = document.getElementById("desc");
    desc.innerText = `${agent.description}`;
  });

const rand = (arr) => {
  const length = arr.length;
  return Math.floor(Math.random() * length);
};

fetch("https://valorant-api.com/v1/agents")
  .then((response) => response.json())
  .then((json) => {
    let agent = json.data[rand(json.data)];
    //   console.log(agent)
    let card1 = document.getElementById("sideCard1");
    card1.innerHTML = `<img  src="${agent.displayIcon}" alt=""/>
      <h1 >${agent.displayName}</h1>
      <p >${agent.description} </p>`;
  });

fetch("https://valorant-api.com/v1/agents")
  .then((response) => response.json())
  .then((json) => {
    let agent = json.data[rand(json.data)];
    //   console.log(agent)
    let card2 = document.getElementById("sideCard2");
    card2.innerHTML = `<img  src="${agent.displayIcon}" alt=""/>
      <h1 >${agent.displayName}</h1>
      <p >${agent.description} </p>`;
  });

//search
const searchBtn = document.getElementById("search");
// console.log(searchBtn)

searchBtn.onclick = () => {
  let name = document.getElementById("searchInput").value;
  
  console.log(name);
  
  fetch("https://valorant-api.com/v1/agents")
    .then((response) => response.json())
    .then((json) => {
      let agents = json.data;
      let found = false;
      agents.map((agent) => {
        if (agent.displayName == name) {
          found = true;
          let cardImage = document.getElementById("cardImg");
          cardImage.src = agent.displayIcon;
          let displayName = document.getElementById("displayName");
          displayName.innerText = `${agent.displayName}`;

          let desc = document.getElementById("desc");
          desc.innerText = `${agent.description}`;
        }
      });
      if (found == false) {
        alert("Wrong Input");
      }
    });
};


// random button
let randBtn = document.getElementById('random')
randBtn.onclick=()=>{
   location.reload()
}

//Know More

let knowMore= document.getElementById("knowMore")

knowMore.onclick=()=>{
   let card=document.getElementById('cards')
   // console.log(card)
   fetch("https://valorant-api.com/v1/agents")
  .then((response) => response.json())
  .then((json) => {
    let name= document.getElementById("displayName").innerText
    console.log(name)
    let agents = json.data;
      agents.map((agent) => {
        if (agent.displayName == name) {
         console.log(agent)
        
         let bgUrl = agent.background

          card.innerHTML=` <div id="body">
          <div id="abilities"><h1>${name}'s Abilities</h1>
          <div id="a1"> 
          Ability 1: 
          <img src="${agent.abilities[0].displayIcon}" style="height:30px;width:30px"/>
          ${agent.abilities[0].displayName}- ${agent.abilities[0].description} 
           </div>
          <div id="a1">Ability 2:
          <img src="${agent.abilities[1].displayIcon}" style="height:30px;width:30px"/>
           ${agent.abilities[1].displayName}- ${agent.abilities[1].description}</div>
          <div id="a1">Ability 3:
          <img src="${agent.abilities[2].displayIcon}" style="height:30px;width:30px"/>
           ${agent.abilities[2].displayName}- ${agent.abilities[2].description}</div>
          <div id="a1">Ultimate:
          <img src="${agent.abilities[3].displayIcon}" style="height:30px;width:30px"/>
           ${agent.abilities[3].displayName}- ${agent.abilities[3].description}</div>
          </div>
           <img id="agentImage" src=${agent.fullPortrait} alt=""> 
           
           <div id="stats">
           <h1>Info</h1>
           <p>${agent.description}</p>
           <p>Character Type: ${agent.role.displayName}
           <img src=${agent.role.displayIcon} style="height:20px;width:20px" /></p>
           
           </div>
        </div>`
          
          document.getElementById('body').style.cssText +='background-color:whitesmoke;height: 675px;width:180vh;margin:auto;display:flex;flex-direction: row; border-radius: 10px;';
          document.getElementById('agentImage').style.cssText+=`height: 80vh;width: 80vh;margin: auto;background-image: url(${bgUrl})`;
          document.getElementById('abilities').style.cssText+=' height: 80vh; width: 80vh;background-color:  palegoldenrod;border-radius: 10px;margin-top:10px;margin-left:10px';
          document.getElementById('stats').style.cssText+=' height: 80vh;width: 80vh;background-color: palegoldenrod;border-radius: 10px; margin-right:10px;margin-top:10px';
        }
      });
  });
   
}

