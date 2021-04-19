let obj = {
  cityName: "NEW YORK",
  regions: [
    {
      regionName: "THE BRONX",
      allPlaces: 13500,
      filledPlaces: 4500,
      schools: [
        {
          schoolName: "SCHOOL №1",
          allPlaces: 1350,
          filledPlaces: 450,
          classes: [
            {
              className: "FIRST GRADES",
              allPlaces: 365,
              filledPlaces: 140,
            },
          ],
        },
      ],
    },
  ],
};
console.log(obj);
 
let region = document.getElementById("first")
    console.log(region);
region.onclick = function () {
    let school = document.getElementById("school");
  school.innerHTML = `
    <div class="block">
        <h3>${obj.regions[0].schools[0].schoolName}</h3>
        <div class="circle__block">
          <div class="circle__container">
            <div class="circle"></div>
          </div>
        </div>
        <div class="about">
          <div class="about__one">
            <p class="ffirst">place filled</p>
            <p class="first">${obj.regions[0].schools[0].filledPlaces}</p>
          </div>
          <div class="about__two">
            <p class="ssecond">out of places aviable</p>
            <p class="second">${obj.regions[0].schools[0].allPlaces}</p>
          </div>
        </div>
      </div>`
    let result = (obj.regions[0].schools[0].filledPlaces /
         obj.regions[0].schools[0].allPlaces)*100;

        let circle = document.querySelectorAll("circle")
        console.log(circle);
console.log(result);

        
    let colors = "";
    if(0< result < 20) {
        colors= "darkseagreen"
    }
    else if(20 < result < 40) {
        colors= "darkcyan"
    }
    else if (40 < result < 60) {
        colors = "darksalmon"
    }
    else if (60 < result < 80) {
        colors = "darkorange"
    }
    else if (80 < result < 100) {
        colors = "darkred"
    }


      school.onclick = function () {
        let className = document.getElementById("class");
className.innerHTML = `
      <div class="block">
      <h3>${obj.regions[0].schools[0].classes[0].className}</h3>
      <div class="circle__block">
        <div class="circle__container">
          <div class="circle"></div>
        </div>
      </div>
      <div class="about">
        <div class="about__one">
          <p class="ffirst">place filled</p>
          <p class="first">${obj.regions[0].schools[0].classes[0].filledPlaces}</p>
        </div>
        <div class="about__two">
          <p class="ssecond">out of places aviable</p>
          <p class="second">${obj.regions[0].schools[0].classes[0].allPlaces}</p>
        </div>
      </div>
    </div>`;

      }

}
