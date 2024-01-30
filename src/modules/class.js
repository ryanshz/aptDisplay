const classes2 = {
    //name:[[Monday],[Tuesday],[Wednesday],[Thursday],[Friday],[Saturday],[Sunday]]
    Alex: [[], [{ start: "1115", end: "1205" }, { start: "1600", end: "1715" }], [{ start: "1300", end: "1415" }], [{ start: "1115", end: "1505" }, { start: "1600", end: "1715" }], [{ start: "1300", end: "1415" }], [{ start: "1115", end: "1205" }], []],
    Andrew: [[], [{ start: "1115", end: "1205" }, { start: "1600", end: "1715" }], [{ start: "1300", end: "1415" }, { start: "1730", end: "1815" }], [{ start: "1115", end: "1505" }, { start: "1600", end: "1715" }], [{ start: "1300", end: "1415" }, { start: "1730", end: "1815" }], [{ start: "1115", end: "1205" }], []],
    Ryan: [[{ start: "1430", end: "1715" }], [{ start: "1430", end: "1545" }, { start: "1800", end: "2000" }], [], [{ start: "1300", end: "1545" }, { start: "1900", end: "2100" }], [], [], []],
    Kealoha: [[], [{ start: "0905", end: "0955" }, { start: "1615", end: "1815" }], [{ start: "1430", end: "1545" }, { start: "1600", end: "1715" }], [{ start: "0905", end: "0955" }, { start: "1220", end: "1505" }, { start: "1615", end: "1815" }], [{ start: "1430", end: "1545" }, { start: "1600", end: "1715" }], [{ start: "0905", end: "0955" }, { start: "1430", end: "1545" }, { start: "1615", end: "1815" }], []]
}

function classTracker() {
    defaults: {
        message: "This is a test"
    }

    start: function domUpdater() {
        console.log("poggers")
        const notificationTimer = () => {
            this.updateDom();
            setTimeout(notificationTimer, 60000)
        }
        setTimeout(notificationTimer, 60000)
    }

    getDom: function pictureChanger() {
        let wrapper = document.createElement("div")
        wrapper.classList.add("Testing")
        //Default input, shows no one in class.
        let inClass = `<span></span>`
        //getting Date/time information
        let date = new Date
        let hour = date.getHours().toString()        //I think it needs to be a string
        if (hour.length == 1) hour = `0${hour}`       //making sure the final string is 4 digits long
        let minute = date.getMinutes().toString()    //I think it needs to be a string
        if (minute.length == 1) minute = `0${minute}` //making sure the final string is 4 digits long
        let day = date.getDay()
        let checker = `${hour}${minute}`          //combining Hour and Minutes into a 4 charater string

        for (const roomate in classes2) {  //loop through each roomate      
            let modifier = ""
            if (Object.keys(classes2)[0] == roomate) modifier = "leftClass"
            else if (Object.keys(classes2)[Object.keys(classes2).length - 1] == roomate) modifier = "rightClass"
            inClass = inClass.replace("</span>", `<img class="classTracker ${modifier}" src="https://legootter.com/images/${roomate.toLowerCase()}dark.png"></span>`)
            for (const inclass of classes2[roomate][day]) {         //loop through each class for the day
                if (inclass.start < checker && inclass.end > checker) {     //check to see if hours match
                    inClass = inClass.replace(`${roomate.toLowerCase()}dark`, roomate.toLowerCase())
                }
            }
        }

        wrapper.innerHTML = inClass
        return wrapper
    }
}