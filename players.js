async function players() {
  let ct = document.querySelector(".first-container");
  let n = 0;
  try {
    let res = await axios.get(
      `https://api.cricapi.com/v1/players?apikey=4fb281f8-4a6c-4529-a79d-346c539f4d89&offset=${n}`
    );
    let rs = res.data.data;
    let table = document.createElement("table");
    table.className = "player-table";
    ct.appendChild(table);
    let tr1 = document.createElement("tr");
    table.appendChild(tr1);
    let th1 = document.createElement("td");
    let th2 = document.createElement("td");
    let th3 = document.createElement("td");
    let th4 = document.createElement("td");
    th1.innerText = "S. No.";
    th2.innerText = "Name";
    th3.innerText = "Country";
    th4.innerText = "See In Detailed";
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);
    tr1.appendChild(th4);
    let num = 0;
    for (r of rs) {
      num = num + 1;
      let tr = document.createElement("tr");
      table.appendChild(tr);
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      let td4 = document.createElement("td");

      td1.innerText = num;
      td2.innerText = r.name;
      td3.innerText = r.country;
      td4.innerHTML = `<button class = "detailed">See In Detailed</button>`;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      td4.addEventListener("click", () => {
        let id = r.id;
        playerDetails(id);
      });
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
    players();
  });
}

players();

async function playerDetails(id) {
  try {
    let res = await axios.get(
      `https://api.cricapi.com/v1/players_info?apikey=4fb281f8-4a6c-4529-a79d-346c539f4d89&id=${id}`
    );
    let r = res.data.data;
    console.log(r);
    let mh1 = document.querySelector("#staticBackdropLabel");
    mh1.innerText = r.name;
    let md = document.querySelector(".modal-body");
    md.innerHTML = "";
    let bkdpath = document.createElement("img");
    bkdpath.className = "smimg";
    bkdpath.setAttribute("src", r.playerImg);
    md.appendChild(bkdpath);
    let ul = document.createElement("ul");
    md.appendChild(ul);
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    li1.innerText = `Country: ${r.country}`;
    li2.innerText = `Role: ${r.role}`;
    li3.innerText = `Batting Style : ${r.battingStyle}`;
    li4.innerText = `Date Of Birth: ${r.bateOfBirth}`;
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
  } catch (e) {
    console.log("Error: ", e);
    return "Error !";
  }
}
