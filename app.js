
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
	storeValue()
	let search = inp.value;
	//await getData3(search);
})

function storeValue() {
    var input =inp.value;
    localStorage.setItem('userValue', input);
    window.location.href = 'search1.html';
}


let urls1  = [url10, url11, url12, url13, url14, url15, url16, url17, url18, url19, url20, url21, url22, url23,];
let urls2 = [url7, url8];
let urls3 = [url1, url2, url4, url5, url6, url9,];
async function getData1() {
	try {
		let url = urls1
		let num  =1
		for(url of urls1){
			let res = await axios.get(url);
		//	console.log(`Number of Event first ${num}: `, res.data);
			num = num+1;
		}
	} catch (e) {
	  console.log("Error: ", e);
	  return "Error !";
	}
  }

 // console.log("get data1" , getData1());
  async function getData2() {
	try {
		let url = urls2
		let num  =1
		for(url of urls2){
			let res = await axios.get(url);
		//	console.log(`Number of Event second ${num}: `, res.data);
			num = num+1;
		}
	} catch (e) {
	  console.log("Error: ", e);
	  return "Error !";
	}
  }
  //console.log("get data2" , getData2());


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
                let searching = document.querySelector(".searching");
	            searching.style.display = "none"; 

	            let mb2 = document.querySelector(".main-box-2");
	             mb2.style.display = "block";

			    let res = res1.data.teams;
				let search_h1 = document.querySelector(".search-heading-1");
				search_h1.style.display = "block";
				search_h1.innerText= "Teams: ";

				let scrollerLink1 = document.querySelector(".scroller-link-1");
				scrollerLink1.style.display = "block"; 

				for(r of res){
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
						a1.href = `https:/${r.strFacebook}`;
						a1.innerText = "Facebook";
						li11.appendChild(a1);
						ul2.appendChild(li11);
					}
					if(r.strInstagram != undefined){
						let li12 = document.createElement("li");
						let a2 = document.createElement("a");
						a2.setAttribute("href", `https:/${r.strInstagram}`);
						a2.innerText = "Instagram";
						li12.appendChild(a2);
						ul2.appendChild(li12);
					}
					if(r.strTwitter != undefined){
						let li13 = document.createElement("li");
						let a3 = document.createElement("a");
						a3.setAttribute("href", `https:/${r.strTwitter}`);
						a3.innerText = "Twitter";
						li13.appendChild(a3);
						ul2.appendChild(li13);
					}
					if(r.strYoutube != undefined){
						let li14 = document.createElement("li");
						let a4 = document.createElement("a");
						a4.setAttribute("href", `https:/${r.strYoutube}`);
						a4.innerText = "Youtube";
						li14.appendChild(a4);
						ul2.appendChild(li14);
					}
					if(r.strWebsite != undefined){
						let li15 = document.createElement("li");
						let a5 = document.createElement("a");
						a5.setAttribute("href",`https:/${ r.strWebsite}`);
						a5.innerText = "Website";
						li15.appendChild(a5);
						ul2.appendChild(li15);
					}

					let card2 = document.createElement("div");
					card2.className = "card12";
					mb2.appendChild(card2);
					let p2 = document.createElement("p");
					p2.innerText = r.strDescriptionEN;
					card2.appendChild(p2);

                    
				
				}
			}
			
			// second
			if(res2.data.player == null){
				console.log("players data not match");
			}else{
                let searching = document.querySelector(".searching");
	            searching.style.display = "none";

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

			//third

			if(res3.data.event == null){
				console.log("event1 data not match");
			}else{
				let searching = document.querySelector(".searching");
	            searching.style.display = "none";

			    let res = res3.data.event;
				for(r of res){
					console.log("Event1 data",r);
				}
			}

			//fourth 
			if(res4.data.event == null){
				console.log("event2 data not match");
			}else{
				let searching = document.querySelector(".searching");
				searching.style.display = "none";

				let mb2 = document.querySelector(".main-box-5");
				mb2.style.display = "block";

				let search_h4 = document.querySelector(".search-heading-4");
				search_h4.style.display = "block";
				search_h4.innerText= "Events: ";
				let scrollerLink1 = document.querySelector(".scroller-link-4");
				scrollerLink1.style.display = "block"; 

			    let res = res4.data.event;
				for(r of res){ 

					let card = document.createElement("div");
					card.className = "card1";
                     mb2.appendChild(card);

                    let imgDiv = document.createElement("div");
					card.appendChild(imgDiv);
              
					if(r.strAwayTeamBadge == undefined){
						console.log(undefined);
					}else{
                    let playerimg = document.createElement("img");
					playerimg.className = "images-teams";
					playerimg.setAttribute("src", r.strAwayTeamBadge);
					playerimg.setAttribute("ait", "Image Not Found");
					imgDiv.appendChild(playerimg);
					}

					let ctCard = document.createElement("div");
					ctCard.className = "card-content";
					card.appendChild(ctCard);

					let h1 = document.createElement("h4");
					h1.innerText = r.strAwayTeam;
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

					li1.innerText = `Date: ${r.dateEvent}`;
					ul.appendChild(li1);
					li2.innerText = `Round: ${r.intRound}`;
					ul.appendChild(li2);
					li3.innerText = `Country: ${r.strCountry}`;
					ul.appendChild(li3);
					li4.innerText = `Event Name: ${r.strEvent}`;
					li4.style.color = "green";
					ul.appendChild(li4);
					li5.innerText = `Alternate : ${r.strEventAlternate}`;
					ul.appendChild(li5);
                    li6.innerText = `Season: ${r.strSeason}`;
					ul.appendChild(li6);
                    li7.innerText = `Sport: ${r.strSport}`;
					li7.style.color = "green";
					ul.appendChild(li7);
					li8.innerText = `Time: ${r.strTime}`;
					ul.appendChild(li8);
					li9.innerText = `Venue: ${r.strVenue}`;
					ul.appendChild(li9);


					let ctCard2 = document.createElement("div");
					ctCard2.className = "card-content"
					card.appendChild(ctCard2);
					
                    if( r.strFileName != undefined){
						let h4 = document.createElement("h5");
					h4.innerText = r.strFileName;
					ctCard2.appendChild(h4);
					}

					let ul1 = document.createElement("ul");
					ctCard2.appendChild(ul1)
					

					if(r.strAwayTeamBadge != undefined){
                        let logoimg = document.createElement("img");
					logoimg.className = "img-logo"
					logoimg.setAttribute("src", r.strAwayTeamBadge);
					ul1.appendChild(logoimg);
					}

                    let spn1 = document.createElement("span");
					spn1.innerText = "& ";
					ul1.appendChild(spn1);

					if(r.strHomeTeamBadge != undefined){
                        let logoimg = document.createElement("img");
					logoimg.className = "img-logo"
					logoimg.setAttribute("src", r.strHomeTeamBadge);
					ul1.appendChild(logoimg);
					}

					let li11 = document.createElement("li");
					li11.innerText = r.strLeague;
					ul1.appendChild(li11);

					if(r.strLeagueBadge != undefined){
                        let logoimg = document.createElement("img");
					logoimg.className = "img-logo"
					logoimg.setAttribute("src", r.strLeagueBadge);
					ul1.appendChild(logoimg);
					}

				}
			}

			//fifth
			if(res5.data.venues == null){
				console.log("venues data not match");
			}else{
                let searching = document.querySelector(".searching");
	            searching.style.display = "none";

                let mb2 = document.querySelector(".main-box-6");
				mb2.style.display = "block";

				let search_h4 = document.querySelector(".search-heading-5");
				search_h4.style.display = "block";
				search_h4.innerText= "Venue: ";
				let scrollerLink1 = document.querySelector(".scroller-link-5");
				scrollerLink1.style.display = "block"; 

			    let res = res5.data.venues;
				for(r of res){
			       
					let card = document.createElement("div");
					card.className = "card1";
                     mb2.appendChild(card);

                    let imgDiv = document.createElement("div");
					card.appendChild(imgDiv);

					if(r.strThumb == undefined){
						console.log(undefined);
					}else{
                    let playerimg = document.createElement("img");
					playerimg.className = "images-teams";
					playerimg.setAttribute("src", r.strThumb);
					playerimg.setAttribute("ait", "Image Not Found");
					imgDiv.appendChild(playerimg);
					}

					let ctCard = document.createElement("div");
					ctCard.className = "card-content";
					card.appendChild(ctCard);

					let h1 = document.createElement("h4");
					h1.innerText = r.strVenue;
					ctCard.appendChild(h1);


					let ul = document.createElement("ul");
                    ctCard.appendChild(ul);
                    let li1 = document.createElement("li");
					let li2 = document.createElement("li");
					let li3 = document.createElement("li");
					let li4 = document.createElement("li");
					let li5 = document.createElement("li");
					let li7 = document.createElement("li");

					li1.innerText = `Alternate: ${r.strVenueAlternate}`;
					ul.appendChild(li1);
					li2.innerText = `Sponsor: ${r.strVenueSponsor}`;
					ul.appendChild(li2);
					li3.innerText = `Country: ${r.strCountry}`;
					ul.appendChild(li3);
					li4.innerText = `Country: ${r.strCountry}`;
					li4.style.color = "green";
					ul.appendChild(li4);
					li5.innerText = `Alternate : ${r.strLocation}`;
					ul.appendChild(li5);
                    li7.innerText = `Sport: ${r.strSport}`;
					li7.style.color = "green";
					ul.appendChild(li7);


					let ctCard2 = document.createElement("div");
					ctCard2.className = "card-content"
					card.appendChild(ctCard2);
					

					let ul1 = document.createElement("ul");
					ctCard2.appendChild(ul1)
					
					let li11 = document.createElement("li");
					li11.innerText = "Pictures: ";
					ul1.appendChild(li11);

					let li9 = document.createElement("li");
                    if(r.strLogo != undefined){
                        let logoimg = document.createElement("img");
					logoimg.className = "img-logo"
					logoimg.setAttribute("src", r.strLogo);
					li9.appendChild(logoimg);
					ul1.appendChild(li9);
					}

					if(r.strFanart1 != undefined){
                        let logoimg = document.createElement("img");
					logoimg.className = "img-logo"
					logoimg.setAttribute("src", r.strFanart1);
					ul1.appendChild(logoimg);
					}
					if(r.strFanart2 != undefined){
                        let logoimg = document.createElement("img");
					logoimg.className = "img-logo"
					logoimg.setAttribute("src", r.strFanart2);
					ul1.appendChild(logoimg);
					}
					if(r.strFanart3 != undefined){
                        let logoimg = document.createElement("img");
					logoimg.className = "img-logo"
					logoimg.setAttribute("src", r.strFanart3);
					ul1.appendChild(logoimg);
					}
					if(r.strFanart4 != undefined){
                        let logoimg = document.createElement("img");
					logoimg.className = "img-logo"
					logoimg.setAttribute("src", r.strFanart4);
					ul1.appendChild(logoimg);
					}


					if(r.strLeagueBadge != undefined){
                        let logoimg = document.createElement("img");
					logoimg.className = "img-logo"
					logoimg.setAttribute("src", r.strLeagueBadge);
					ul1.appendChild(logoimg);
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
						a1.href = `https:/${r.strFacebook}`;
						a1.innerText = "Facebook";
						li11.appendChild(a1);
						ul2.appendChild(li11);
					}
					if(r.strInstagram != undefined){
						let li12 = document.createElement("li");
						let a2 = document.createElement("a");
						a2.setAttribute("href", `https:/${r.strInstagram}`);
						a2.innerText = "Instagram";
						li12.appendChild(a2);
						ul2.appendChild(li12);
					}
					if(r.strYoutube != undefined){
						let li14 = document.createElement("li");
						let a4 = document.createElement("a");
						a4.setAttribute("href", `https:/${r.strYoutube}`);
						a4.innerText = "Youtube";
						li14.appendChild(a4);
						ul2.appendChild(li14);
					}
					if(r.strWebsite != undefined){
						let li15 = document.createElement("li");
						let a5 = document.createElement("a");
						a5.setAttribute("href",`https:/${ r.strWebsite}`);
						a5.innerText = "Website";
						li15.appendChild(a5);
						ul2.appendChild(li15);
					}

					let card2 = document.createElement("div");
					card2.className = "card12";
					mb2.appendChild(card2);
					let p2 = document.createElement("p");
					p2.innerText = r.strDescriptionEN;
					card2.appendChild(p2);


				}
			}

			//sixth
			if(res6.data.countries == null){
				console.log("countries data not match");
			}else{
                let searching = document.querySelector(".searching");
	            searching.style.display = "none";

				let mb2 = document.querySelector(".main-box-7");
				mb2.style.display = "block";

				let search_h4 = document.querySelector(".search-heading-6");
				search_h4.style.display = "block";
				search_h4.innerText= "Countries: ";
				let scrollerLink1 = document.querySelector(".scroller-link-6");
				scrollerLink1.style.display = "block"; 

			    let res = res6.data.countries;
				for(r of res){
					
                    let card = document.createElement("div");
					card.className = "card1";
                     mb2.appendChild(card);

                    let imgDiv = document.createElement("div");
					card.appendChild(imgDiv);

					if(r.strBadge == undefined){
						console.log(undefined);
					}else{
                    let playerimg = document.createElement("img");
					playerimg.className = "images-teams";
					playerimg.setAttribute("src", r.strBadge);
					playerimg.setAttribute("ait", "Image Not Found");
					imgDiv.appendChild(playerimg);
					}

					let ctCard = document.createElement("div");
					ctCard.className = "card-content";
					card.appendChild(ctCard);

					let h1 = document.createElement("h4");
					h1.innerText = r.strLeague;
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

					li1.innerText = `First Event: ${r.dateFirstEvent}`;
					ul.appendChild(li1);
					li2.innerText = `Year: ${r.intFormedYear}`;
					ul.appendChild(li2);
					li3.innerText = `Completed: ${r.strCompleted}`;
					ul.appendChild(li3);
					li4.innerText = `Country: ${r.strCountry}`;
					li4.style.color = "green";
					ul.appendChild(li4);
					li5.innerText = `Current Season : ${r.strCurrentSeason}`;
					ul.appendChild(li5);
                    li7.innerText = `Sport: ${r.strSport}`;
					li7.style.color = "green";
					ul.appendChild(li7);
					li6.innerText = `Alternate Name : ${r.strLeagueAlternate}`;
					ul.appendChild(li6);


					let ctCard2 = document.createElement("div");
					ctCard2.className = "card-content"
					card.appendChild(ctCard2);
					

					let ul1 = document.createElement("ul");
					ctCard2.appendChild(ul1)
					
					let li11 = document.createElement("li");
					li11.innerText = "Pictures: ";
					ul1.appendChild(li11);

					let li10 = document.createElement("li");
                    if(r.strLogo != undefined){
                        let logoimg = document.createElement("img");
					logoimg.className = "img-logo"
					logoimg.setAttribute("src", r.strBanner);
					li10.appendChild(logoimg);
					ul1.appendChild(li10);
					}

					if(r.strFanart1 != undefined){
                        let logoimg = document.createElement("img");
					logoimg.className = "img-logo"
					logoimg.setAttribute("src", r.strFanart1);
					ul1.appendChild(logoimg);
					}
					if(r.strFanart2 != undefined){
                        let logoimg = document.createElement("img");
					logoimg.className = "img-logo"
					logoimg.setAttribute("src", r.strFanart2);
					ul1.appendChild(logoimg);
					}
					if(r.strFanart3 != undefined){
                        let logoimg = document.createElement("img");
					logoimg.className = "img-logo"
					logoimg.setAttribute("src", r.strFanart3);
					ul1.appendChild(logoimg);
					}
					if(r.strFanart4 != undefined){
                        let logoimg = document.createElement("img");
					logoimg.className = "img-logo"
					logoimg.setAttribute("src", r.strFanart4);
					ul1.appendChild(logoimg);
					}


					if(r.strPoster != undefined){
                        let logoimg = document.createElement("img");
					logoimg.className = "img-logo"
					logoimg.setAttribute("src", r.strPoster);
					ul1.appendChild(logoimg);
					}
					if(r.strTrophy != undefined){
                        let logoimg = document.createElement("img");
					logoimg.className = "img-logo"
					logoimg.setAttribute("src", r.strTrophy);
					ul1.appendChild(logoimg);
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
						a1.href = `https:/${r.strFacebook}`;
						a1.innerText = "Facebook";
						li11.appendChild(a1);
						ul2.appendChild(li11);
					}
					if(r.strInstagram != undefined){
						let li12 = document.createElement("li");
						let a2 = document.createElement("a");
						a2.setAttribute("href", `https:/${r.strInstagram}`);
						a2.innerText = "Instagram";
						li12.appendChild(a2);
						ul2.appendChild(li12);
					}
					if(r.strYoutube != undefined){
						let li14 = document.createElement("li");
						let a4 = document.createElement("a");
						a4.setAttribute("href", `https:/${r.strYoutube}`);
						a4.innerText = "Youtube";
						li14.appendChild(a4);
						ul2.appendChild(li14);
					}
					if(r.strWebsite != undefined){
						let li15 = document.createElement("li");
						let a5 = document.createElement("a");
						a5.setAttribute("href",`https:/${ r.strWebsite}`);
						a5.innerText = "Website";
						li15.appendChild(a5);
						ul2.appendChild(li15);
					}
					if(r.strTwitter != undefined){
						let li15 = document.createElement("li");
						let a5 = document.createElement("a");
						a5.setAttribute("href",`https:/${ r.strTwitter}`);
						a5.innerText = "Twitter";
						li15.appendChild(a5);
						ul2.appendChild(li15);
					}
					if(r.strRSS != undefined){
						let li15 = document.createElement("li");
						let a5 = document.createElement("a");
						a5.setAttribute("href",`https:/${ r.strRSS}`);
						a5.innerText = "RSS";
						li15.appendChild(a5);
						ul2.appendChild(li15);
					}

					let card2 = document.createElement("div");
					card2.className = "card12";
					mb2.appendChild(card2);
					let p2 = document.createElement("p");
					p2.innerText = r.strDescriptionEN;
					card2.appendChild(p2);

				}
			}
			
	} catch (e) {
	  console.log("Error: ", e);
	  return "Error !";
	}
  }


  let cricurl1 = "https://api.cricapi.com/v1/currentMatches?apikey=4fb281f8-4a6c-4529-a79d-346c539f4d89&offset=0";

  async function getCurrentMatches() {
	try {

		let mb2 = document.querySelector(".other-contents");
		mb2.style.display = "block"; 

	  let res = await axios.get(cricurl1);
	  let rs = res.data.data;
	  for(r of rs){

		let card = document.createElement("div");
		card.className = "card2";
		 mb2.appendChild(card);

		  let ctCard = document.createElement("div");
		  ctCard.className = "card-content";
		  card.appendChild(ctCard);
		  let h1 = document.createElement("h5");
		  h1.innerText = r.name;
		  ctCard.appendChild(h1);


		  let ul = document.createElement("ul");
		  ctCard.appendChild(ul);
		  let li1 = document.createElement("li");
		  let li2 = document.createElement("li");
		  let li3 = document.createElement("li");
		  let li4 = document.createElement("li");

		  li1.innerText = `Date: ${r.date}`;
		  ul.appendChild(li1);
		  li2.innerText = `Match: ${r.matchType}`;
		  ul.appendChild(li2);
		  li3.innerText = `Venue: ${r.venue}`;
		  ul.appendChild(li3);
		  li4.innerText = `Status: ${r.status}`;
		  li4.style.color = "white";
		  ul.appendChild(li4);

		  if(r.matchEnded == true && r.matchStarted == true){
			let li5 = document.createElement("li");
			li5.innerText = "Match Completed";
			li5.style.color = "aqua";
			ul.appendChild(li5);
		  }
		  else if(r.matchEnded == false && r.matchStarted == true){
			let li5 = document.createElement("li");
			li5.innerText = "Match Started";
			li5.style.color = "yellow";
			ul.appendChild(li5);
		  }
		  else if(r.matchEnded == false && r.matchStarted == false){
			let li5 = document.createElement("li");
			li5.innerText = "Match Canceled";
			li5.style.color = "orange";
			ul.appendChild(li5);
		  }
				
					
					let li6 = document.createElement("li");
					let img1 = document.createElement("img");
                     img1.className = "mini-logo";
					 img1.setAttribute("src", r.teamInfo[0].img)
					 li6.appendChild(img1);
					 let span1 = document.createElement("span");
					span1.innerText = ` ${r.teamInfo[0].name} (${r.teamInfo[0].shortname})`;
					li6.appendChild(span1);
					ul.appendChild(li6);
					

					let li7 = document.createElement("li");
					let img2 = document.createElement("img");
                     img2.className = "mini-logo";
					 img2.setAttribute("src", r.teamInfo[1].img)
					 li7.appendChild(img2);
					 let span2 = document.createElement("span");
					span2.innerText = ` ${r.teamInfo[1].name} (${r.teamInfo[1].shortname})`;
					li7.appendChild(span2);
					ul.appendChild(li7);


					let ctCard4 = document.createElement("div");
					ctCard4.className = "card-content2"
					card.appendChild(ctCard4);
					let ul3 = document.createElement("ul");
					ctCard4.appendChild(ul3);
					let ul4 = document.createElement("ul");
					ctCard4.appendChild(ul4);

					let li8 = document.createElement("li");
					li8.innerHTML = `${r.teams[0]}</br>o: ${r.score[0].o}</br>r: ${r.score[0].r}</br>w: ${r.score[0].w}`;
					ul3.appendChild(li8);

					let li9 = document.createElement("li");
					li9.innerHTML = `${r.teams[1]}</br>o: ${r.score[1].o}</br>r: ${r.score[1].r}</br>w: ${r.score[1].w}`;
					ul4.appendChild(li9);

	  }
	} catch (e) {
	  console.log("error: ", e);
	}
  }

  getCurrentMatches();
