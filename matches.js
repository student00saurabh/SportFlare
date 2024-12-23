let ct = document.querySelector(".first-container");
let n = 0;
async function Matches() {
  try {
    let res = await axios.get(
      `https://api.cricapi.com/v1/matches?apikey=4fb281f8-4a6c-4529-a79d-346c539f4d89&offset=${n}`
    );

    let rs = res.data.data;
    for (r of rs) {
      let b = document.createElement("div");
      b.className = "container";
      ct.appendChild(b);
      let h5 = document.createElement("h5");
      h5.innerText = r.name;
      b.appendChild(h5);
      let ul = document.createElement("ul");
      b.appendChild(ul);
      let li1 = document.createElement("li");
      let li2 = document.createElement("li");
      let li3 = document.createElement("li");
      let li4 = document.createElement("li");
      let li5 = document.createElement("li");
      let li6 = document.createElement("li");
      let li7 = document.createElement("li");
      li1.style.color = "#ffc107";
      if (r.matchStarted == true && r.matchEnded == true) {
        li1.innerText = `Match Completed`;
      } else if (r.matchStarted == true && r.matchEnded == false) {
        li1.innerText = `Match not completed Yet`;
      } else {
        li1.innerText = `Match not Started...!`;
      }
      li2.innerText = `Date: ${r.date}`;
      li3.innerText = `Match Type: ${r.matchType}`;
      li4.innerText = `Status: ${r.status}`;
      li5.innerText = `Venue: ${r.vanue}:`;
      ul.appendChild(li1);
      ul.appendChild(li2);
      ul.appendChild(li3);
      ul.appendChild(li4);
      ul.appendChild(li5);
      if (r.matchStarted == true && r.matchEnded == true) {
        let li8 = document.createElement("li");
        li8.innerHTML = `
		<table>
		  <tr>
		    <th>Score</th>
			<th>r</th>
			<th>w</th>
			<th>0</th>
		  </tr>
		  <tr>
		     <th>Team1</th>
			 <td>${r.score[0].r}</td>
			 <td>${r.score[0].w}</td>
			 <td>${r.score[0].o}</td>
		  </tr>
		  <tr>
		     <th>Team2</th>
			 <td>${r.score[1].r}</td>
			 <td>${r.score[1].w}</td>
			 <td>${r.score[1].o}</td>
		  </tr>
		</table>`;
        ul.appendChild(li8);
      } else if (r.matchStarted == true && r.matchEnded == false) {
        li6.innerText = `Team1: ${r.teams[0]} `;
        li7.innerText = `Team2: ${r.teams[1]}`;
        ul.appendChild(li6);
        ul.appendChild(li7);
      } else {
        li6.innerText = `Team1: ${r.teams[0]} `;
        li7.innerText = `Team2: ${r.teams[1]}`;
        ul.appendChild(li6);
        ul.appendChild(li7);
      }
      console.log(r);
    }
  } catch (e) {
    console.log("Error: ", e);
    return "Error !";
  }

  let btn = document.createElement("button");
  btn.innerText = "next";
  ct.appendChild(btn);

  btn.addEventListener("click", () => {
    n = n + 1;
    Matches();
  });
}

Matches();
