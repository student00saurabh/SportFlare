let ct1 = document.querySelector(".news-container");

let mh1 = document.querySelector("#scrollspyHeading1");
//let mh2 = document.querySelector("#scrollspyHeading1");
let mh3 = document.querySelector("#scrollspyHeading3");
let mh4 = document.querySelector("#scrollspyHeading4");
let mh5 = document.querySelector("#scrollspyHeading5");
let mh6 = document.querySelector("#scrollspyHeading6");
let mh7 = document.querySelector("#scrollspyHeading7");

let url = "";

mh1.addEventListener("click", () => {
  mh1.innerText = "Live News";
  let n = 0;
  url = `https://api.mediastack.com/v1/news?access_key=b0a94e7d97222626d1969a7225c0c4bc&limit=10&offset=${n}&categories=sports`;
  LiveNews(url, n);
});

async function LiveNews(url, n) {
  try {
    let res = await axios.get(url);
    let rs = res.data.data;
    for (r of rs) {
      let b = document.createElement("div");
      b.className = "news-container";
      ct1.appendChild(b);
      let h5 = document.createElement("h5");
      h5.innerText = r.title;
      b.appendChild(h5);
      if (r.image != null) {
        let img = document.createElement("img");
        img.className = "news-img";
        img.setAttribute("src", r.image);
        b.appendChild(img);
      }
      let p = document.createElement("p");
      p.innerText = r.description;
      b.appendChild(p);
      if (r.url != null) {
        let a = document.createElement("a");
        a.innerText = "Go to Page";
        a.setAttribute("href", r.url);
        b.appendChild(a);
      }
    }
  } catch (e) {
    console.log("Error: ", e);
    return "Error !";
  }

  let btn = document.createElement("button");
  btn.innerText = "next";
  ct1.appendChild(btn);

  btn.addEventListener("click", () => {
    n = n + 10;
    LiveNews();
  });
}
