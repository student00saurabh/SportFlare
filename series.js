async function Series() {
  let ct = document.querySelector(".first-container");
  let n = 0;
  try {
    let res = await axios.get(
      `https://api.cricapi.com/v1/series?apikey=4fb281f8-4a6c-4529-a79d-346c539f4d89&offset=${n}`
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
      li1.innerText = `Start Date: ${r.startDate}`;
      li2.innerText = `End Date: ${r.endDate}`;
      li3.innerText = `Matches: ${r.matches}`;
      li4.innerText = `ODI: ${r.odi}`;
      li5.innerText = `Squad: ${r.squads}`;
      li6.innerText = `T20: ${r.t20}`;
      li7.innerText = `Test: ${r.test}`;
      ul.appendChild(li1);
      ul.appendChild(li2);
      ul.appendChild(li3);
      ul.appendChild(li4);
      ul.appendChild(li5);
      ul.appendChild(li6);
      ul.appendChild(li7);
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
    Series();
  });
}

Series();
