
let url1 = "https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t="; //Search for team by name
let url2 = "https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=";//Search for players by name
let url3 = "https://www.thesportsdb.com/api/v1/json/{APIKEY}/searchplayers.php?t={India}&p=";//Search for players by name
let url4 = "https://www.thesportsdb.com/api/v1/json/3/searchevents.php?e=Arsenal_vs_Chelsea";//Search for event by event name
let url5 = "https://www.thesportsdb.com/api/v1/json/3/searchfilename.php?e=";//Search for event by event file name
let url6 = "https://www.thesportsdb.com/api/v1/json/3/searchvenues.php?t=";//Search for Venue
let url7 = "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php";//List all leagues (limited 50 on free tier)
let url8 = "https://www.thesportsdb.com/api/v1/json/3/all_countries.php";//List all countries
let url9 = "https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c=";//List all Leagues in a country (limited 50 on free tier)
let url10 = "https://www.thesportsdb.com/api/v1/json/3/search_all_seasons.php?id=4328";//List all Seasons in a League
let url11 = "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League";//List all Teams in a League
let url12 = "https://www.thesportsdb.com/api/v1/json/3/searchloves.php?u=zag";//List all users loved teams and players
let url13 = "https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=34145937";//Player Details by Id
let url14 = "https://www.thesportsdb.com/api/v1/json/3/lookupvenue.php?id=16163";//Venue Details by Id
let url15 = "https://www.thesportsdb.com/api/v1/json/3/lookuphonours.php?id=34147178";//Player Honours by Player Id
let url16 = "https://www.thesportsdb.com/api/v1/json/3/lookupmilestones.php?id=34161397";//Player Milestones by Player Id
let url17 = "https://www.thesportsdb.com/api/v1/json/3/lookupformerteams.php?id=34147178";//Player Former Teams by Player Id
let url18 = "https://www.thesportsdb.com/api/v1/json/3/eventresults.php?id=652890";//Event Player Results by Event Id
let url19 = "https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4328&s=2020-2021";//Lookup Table by League ID and Season
let url20 = "https://www.thesportsdb.com/api/v1/json/3/lookupequipment.php?id=133597";//Lookup Equipment by Team ID
let url21 = "https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=133602";//Last 5 Events by Team Id (Limited to home team for free tier)
let url22 = "https://www.thesportsdb.com/api/v1/json/3/eventsround.php?id=4328&r=38&s=2014-2015";//Events in a specific round by league id/round/season
let url23 = "https://www.thesportsdb.com/api/v1/json/3/eventsseason.php?id=4328&s=2014-2015";//All events in specific league by season (Free tier limited to 100 events)
let url24 = "https://www.thesportsdb.com/images/media/league/fanart/xpwsrw1421853005.jpg/medium";//Images


let btn1 = document.querySelector("#search-button");
let inp = document.querySelector("#search-input");

btn1.addEventListener("click", async ()=>{
	console.log("btn");
	let search = inp.value;
	await getData3(search);
})

let urls1  = [url1, url2, url4, url5, url6, url9, url10, url11, url12, url13, url14, url15, url16, url17, url18, url19, url20, url21, url22, url23,];
let urls2 = [url7, url8];
let urls3 = [url1, url2, url4, url5, url6, url9,];
async function getData1() {
	try {
		let url = urls1
		let num  =1
		for(url of urls1){
			let res = await axios.get(url);
			console.log(`Number of Event ${num}: `, res.data);
			num = num+1;
		}
	} catch (e) {
	  console.log("Error: ", e);
	  return "Error !";
	}
  }

  async function getData2() {
	try {
		let url = urls2
		let num  =1
		for(url of urls2){
			let res = await axios.get(url);
			console.log(`Number of Event ${num}: `, res.data);
			num = num+1;
		}
	} catch (e) {
	  console.log("Error: ", e);
	  return "Error !";
	}
  }

  async function getData3(search) {
	let scrollerSearch = document.querySelector(".scroller-search");
    scrollerSearch.style.display = "block";
	let mb1 = document.querySelector(".main-box-1");
	mb1.style.display = "none";
	try {
		let url = urls3;
			let res1 = await axios.get(url[0]+search);
			let res2 = await axios.get(url[1]+search);
			let res3 = await axios.get(url[2]+search);
			let res4 = await axios.get(url[3]+search);
			let res5 = await axios.get(url[4]+search);
			let res6 = await axios.get(url[5]+search);
          // first
			if(res1.data.teams == null){
				console.log("teams data not match");
			}else{
                 
	            let mb2 = document.querySelector(".main-box-2");
	             mb2.style.display = "block";

			    let res = res1.data.teams;
				let search_h1 = document.querySelector(".search-heading-1");
				search_h1.style.display = "block";
				search_h1.innerText= "Teams: ";

				let scrollerLink1 = document.querySelector(".scroller-link-1");
				scrollerLink1.style.display = "block"; 

				for(r of res){
					console.log("team data",r);
                    let card = document.createElement("div");
					card.className = "card1";
                     mb2.appendChild(card);

					 let imgDiv = document.createElement("div");
					card.appendChild(imgDiv);

					if(r.strBadge == undefined){
						console.log(undefined);
					}else{
						let imgHeading = document.createElement("h3");
						imgHeading.innerText = "Badge: ";
						imgDiv.appendChild(imgHeading);

                    let playerimg = document.createElement("img");
					playerimg.className = "images-teams";
					playerimg.setAttribute("src", r.strBadge);
					playerimg.setAttribute("ait", "Image Not Found");
					imgDiv.appendChild(playerimg);
					}

					let ctCard = document.createElement("div");
					ctCard.className = "card-content";
					card.appendChild(ctCard);

					let h1 = document.createElement("h1");
					h1.innerText = r.strTeam;
					ctCard.appendChild(h1);

					let ul = document.createElement("ul");
                    ctCard.appendChild(ul);
                    let li1 = document.createElement("li");
					let li2 = document.createElement("li");
					let li3 = document.createElement("li");
					let li4 = document.createElement("li");
					let li5 = document.createElement("li");
					let li6 = document.createElement("li");
					let li7 = document.createElement("li");
					let li8 = document.createElement("li");
					let li9 = document.createElement("li");

					li1.innerText = `Alternat name: ${r.strTeamAlternate}`;
					ul.appendChild(li1);
					li2.innerText = `Country: ${r.strCountry}`;
					ul.appendChild(li2);
					li3.innerText = `Location: ${r.strLocation}`;
					ul.appendChild(li3);
					li4.innerText = `Sport:  ${r.strSport}`;
					li4.style.color = "green";
					ul.appendChild(li4);
					li5.innerText = `Stadium: ${r.strStadium}`;
					ul.appendChild(li5);
                    li6.innerText = `Gender: ${r.strGender}`;
					ul.appendChild(li6);
                    li7.innerText = `Keywords: ${r.strKeywords}`;
					ul.appendChild(li7);
					li8.innerText = `Ethinic City: ${r.strLeague}`;
					ul.appendChild(li8);
					li9.innerText = `Team: ${r.strLeague2}`;
					ul.appendChild(li9);

					let ctCard2 = document.createElement("div");
					ctCard2.className = "card-content"
					card.appendChild(ctCard2);
					let h4 = document.createElement("h4");
					h4.innerText = "Fanarts";
					ctCard2.appendChild(h4);
					let ul1 = document.createElement("ul");
					ctCard2.appendChild(ul1)
					
					if(r.strFanart1 != undefined){
                        let logoimg1 = document.createElement("img");
					logoimg1.className = "img-logo";

					logoimg1.setAttribute("src", r.strFanart1);
					ul1.appendChild(logoimg1);
					}
					if(r.strFanart2 != undefined){
						let logoimg2 = document.createElement("img");
						logoimg2.className = "img-logo";
						logoimg2.setAttribute("src", r.strFanart2);
					    ul1.appendChild(logoimg2);
					}
					if(r.strFanart3 != undefined){
						let logoimg3 = document.createElement("img");
						logoimg3.className = "img-logo";
						logoimg3.setAttribute("src", r.strFanart3);
					    ul1.appendChild(logoimg3);
					}
					if(r.strFanart4 != undefined){
						let logoimg4 = document.createElement("img");
						logoimg4.className = "img-logo";
						logoimg4.setAttribute("src", r.strFanart4);
					    ul1.appendChild(logoimg4);
					}
                     if(r.strBanner != undefined){
						let li10 = document.createElement("li");
						li10.innerText = "Banner";
						ul1.appendChild(li10);
						let logoimg5 = document.createElement("img");
						logoimg5.className = "img-logo";
						logoimg5.setAttribute("src", r.strBanner);
					    ul1.appendChild(logoimg5);
					}

					let ctCard3 = document.createElement("div");
					ctCard3.className = "card-content"
					card.appendChild(ctCard3);
					let h5 = document.createElement("h4");
					h5.innerText = "Connection Links";
					ctCard3.appendChild(h5);
					let ul2 = document.createElement("ul");
					ctCard3.appendChild(ul2)
					if(r.strFacebook != undefined){
						let li11 = document.createElement("li");
						let a1 = document.createElement("a");
						a1.setAttribute("href", r.strFacebook);
						a1.innerText = "Facebook";
						li11.appendChild(a1);
						ul2.appendChild(li11);
					}
					if(r.strInstagram != undefined){
						let li12 = document.createElement("li");
						let a2 = document.createElement("a");
						a2.setAttribute("href", r.strInstagram);
						a2.innerText = "Instagram";
						li12.appendChild(a2);
						ul2.appendChild(li12);
					}
					if(r.strTwitter != undefined){
						let li13 = document.createElement("li");
						let a3 = document.createElement("a");
						a3.setAttribute("href", r.strTwitter);
						a3.innerText = "Twitter";
						li13.appendChild(a3);
						ul2.appendChild(li13);
					}
					if(r.strYoutube != undefined){
						let li14 = document.createElement("li");
						let a4 = document.createElement("a");
						a4.setAttribute("href", r.strYoutube);
						a4.innerText = "Youtube";
						li14.appendChild(a4);
						ul2.appendChild(li14);
					}
					if(r.strWebsite != undefined){
						let li15 = document.createElement("li");
						let a5 = document.createElement("a");
						a5.setAttribute("href", r.strWebsite);
						a5.innerText = "Website";
						li15.appendChild(a5);
						ul2.appendChild(li15);
					}
                    
				
				}
			}
			
			// second
			if(res2.data.player == null){
				console.log("players data not match");
			}else{
                
				let mb2 = document.querySelector(".main-box-3");
				mb2.style.display = "block";

				let search_h1 = document.querySelector(".search-heading-2");
				search_h1.style.display = "block";
				search_h1.innerText= "Players: ";
				let scrollerLink1 = document.querySelector(".scroller-link-2");
				scrollerLink1.style.display = "block"; 

			     let res = res2.data.player;
				 for(r of res){
					let card = document.createElement("div");
					card.className = "card1";
                     mb2.appendChild(card);

                    let imgDiv = document.createElement("div");
					card.appendChild(imgDiv);

					if(r.strCutout == undefined){
						console.log(undefined);
					}else{
                    let playerimg = document.createElement("img");
					playerimg.className = "images";
					playerimg.setAttribute("src", r.strCutout);
					playerimg.setAttribute("ait", "Image Not Found");
					imgDiv.appendChild(playerimg);
					}
                   
					let ctCard = document.createElement("div");
					ctCard.className = "card-content";
					card.appendChild(ctCard);

					let h1 = document.createElement("h1");
					h1.innerText = r.strPlayer;
					ctCard.appendChild(h1);

					let ul = document.createElement("ul");
                    ctCard.appendChild(ul);
                    let li1 = document.createElement("li");
					let li2 = document.createElement("li");
					let li3 = document.createElement("li");
					let li4 = document.createElement("li");
					let li5 = document.createElement("li");
					let li6 = document.createElement("li");
					let li7 = document.createElement("li");
					let li8 = document.createElement("li");
					let li9 = document.createElement("li");

					li1.innerText = `Born: ${r.dateBorn}`;
					ul.appendChild(li1);
					li2.innerText = `Birth Place: ${r.strBirthLocatin}`;
					ul.appendChild(li2);
					li3.innerText = `Gender: ${r.strGender}`;
					ul.appendChild(li3);
					li4.innerText = `Height: ${r.strHeight}`;
					ul.appendChild(li4);
					li5.innerText = `Nationality: ${r.strNationality}`;
					ul.appendChild(li5);
                    li6.innerText = `Position: ${r.strPosition}`;
					ul.appendChild(li6);
                    li7.innerText = `Sport: ${r.strSport}`;
					li7.style.color = "green";
					ul.appendChild(li7);
					li8.innerText = `Ethinic City: ${r.strEthnicity}`;
					ul.appendChild(li8);
					li9.innerText = `Team: ${r.strTeam2}`;
					ul.appendChild(li9);


					let ctCard2 = document.createElement("div");
					ctCard2.className = "card-content"
					card.appendChild(ctCard2);
					let h4 = document.createElement("h4");
					h4.innerText = "Other Teams";
					ctCard2.appendChild(h4);
					let ul1 = document.createElement("ul");
					ctCard2.appendChild(ul1)
					
					if(r.strThumb != undefined){
                        let logoimg = document.createElement("img");
					logoimg.className = "img-logo"
					logoimg.setAttribute("src", r.strThumb);
					ul1.appendChild(logoimg);
					}

					let li10 = document.createElement('li')
					li10.innerText = r.strTeam;
					ul1.appendChild(li10);
					
					let card2 = document.createElement("div");
					card2.className = "card12";
					mb2.appendChild(card2);
					card2.style.backgroundImage = `url(${r.strRender})`;
					let p2 = document.createElement("p");
					p2.innerText = r.strDescriptionEN;
					card2.appendChild(p2);
				}
			}

			if(res3.data.event == null){
				console.log("event1 data not match");
			}else{
			    let res = res3.data.event;
				for(r of res){
					console.log("Event1 data",r);
				}
			}

			if(res4.data.event == null){
				console.log("event2 data not match");
			}else{
			    let res = res4.data.event;
				for(r of res){

					let search_h2 = document.createElement("h1");
                     search_h2.className = "search-heading";
					 search_h2.innerText = "Events:";
					 
					console.log("Event 2 data",r);
				}
			}

			if(res5.data.venues == null){
				console.log("venues data not match");
			}else{
			    let res = res5.data.venues;
				for(r of res){
					console.log(" Venues data" ,r);
				}
			}

			if(res6.data.countries == null){
				console.log("countries data not match");
			}else{
			    let res = res6.data.countries;
				for(r of res){
					console.log("Countries data",r);
				}
			}
			
	} catch (e) {
	  console.log("Error: ", e);
	  return "Error !";
	}
  }
