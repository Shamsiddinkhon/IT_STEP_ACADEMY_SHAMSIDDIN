<script>
        function createEl(nameEl, settingObj) {
            let element = document.createElement(nameEl);

            for (set in settingObj) {

                element[set] = settingObj[set];
                if (typeof settingObj[set] === "object") {
                    for (style in settingObj[set]) {
                        element[set][style] = settingObj[set][style];
                    }
                }

            }


            return element;
        }

        function appendToElem(addElement, param, addFunc = createEl) {
            document.querySelector(addElement).append(addFunc(...param));
        }


        // let block = document.querySelector(".block1");
        // let block2 = document.querySelector(".block2");
        // let del = document.querySelector(".del");
        // let prev = 0;
        // let height = 100;
        // console.log(block.get);
        // del.ondragover = (e) => {
        //     e.preventDefault()

        //     if (prev > e.clientY) {

        //     }
        //     console.log("!!!!");
        // }


        // fetch("https://api.openweathermap.org/data/2.5/weather?q=Washington&appid=8b9c70bc7dbfd385aaf018d4aa0d343e")
        //     .then(data => data.json())
        //     .then(data => {
        //         console.log(data);

        //         let sunrise = new Date(data.sys.sunrise * 1000);
        //         let sunset = new Date(data.sys.sunset * 1000);
        //         let result = data.timezone / 3600 - 5;
        //         console.log(data.timezone);

        //         console.log(sunrise);
        //         console.log(sunset);

        //         sunrise.setHours(sunrise.getHours() + result)
        //         sunset.setHours(sunset.getHours() + result)

        //         console.log(sunrise);
        //         console.log(sunset);

        //         sunset.setHours(sunset.getHours() - sunrise.getHours())

        //         console.log(sunset);
        //         console.log(result);



        //         // console.log(new Date(25200 * 1000));
        //         console.log("=============");

        //         let Mresult = data["timezone"] / 3600 - 5;

        //         let Msunrise = new Date(data["sys"]["sunrise"] * 1000);

        //         let Msunrises = (Msunrise.getHours() + Mresult) + ":" + Msunrise.getMinutes();
        //         let Msunset = new Date(data["sys"]["sunset"] * 1000);

        //         let Msunsets = (Msunset.getHours() + Mresult) + ":" + Msunset.getMinutes();
        //         let Mduration =
        //             Msunset.getHours() +
        //             Mresult -
        //             Msunrise.getHours() +
        //             Mresult +
        //             " hr " +
        //             (Msunset.getMinutes() - Msunrise.getMinutes()) +
        //             " min";


        //         console.log(Mresult);
        //         console.log(Msunrise);
        //         console.log(Msunset);
        //         console.log(Msunrises);
        //         console.log(Msunsets);
        //         console.log(Mduration);
        //     })
        //     .catch((error) => {
        //         console.log("Моя ошибка " + error);
        //     })




        // appendToElem(".container", createEl, ["div", {
        //     "className": "block", "id": "footer",
        //     style: {
        //         "height": "200px",
        //         "width": "200px",
        //         "backgroundColor": "red",
        //     }
        // }
        // ]
        // )

        // appendToElem("body", createEl, ["img", {
        //     "className": "picture",
        //     "src": "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg"
        // }])

        appendToElem("body", ["ul", { "className": "list" }])

        appendToElem(".list", ["li", { "textContent": "1" }])


        // document.querySelector(".container").append(createEl("div", {
        //     "className": "block", "id": "footer",
        //     style: {
        //         "height": "200px",
        //         "width": "200px",
        //         "backgroundColor": "red",
        //     }
        // }));

        // document.querySelector(".container").append(createEl("div", {
        //     "className": "block", "id": "footer",
        //     style: {
        //         "height": "200px",
        //         "width": "200px",
        //         "backgroundColor": "black",
        //         "marginTop": "15px"
        //     }
        // }));


    </script>