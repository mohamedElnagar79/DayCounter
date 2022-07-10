function calcDays() {
    const startDay = new Date();
    const s = document.getElementById("inp").value;   
    const endDay = new Date(s);
    const remainderDays = (endDay - startDay) / (1000 * 60 * 60 * 24);
    console.log("remainder days : " + remainderDays);
    // Math.floor () will take the smallest Nearest value .
    /* 1000 to transform millisecond 60 to transform min 60 to transform hour 24 to
       transform my result with integer days only  */
    const monthes = (remainderDays / 30);
    const weeks = (remainderDays / 7);
    const hours = ((remainderDays * 24 ) % 24 )-2;
    const min = (hours * 60) % 60;
    const sec = (min * 60) % 60;

    console.log("monthes is: " + monthes);
    console.log("weeks is: " + weeks);
    console.log("hours is: " + hours);
    console.log("min is: " + min);
    console.log("sec is: " + sec)

    const m = document.getElementById("monthes");
    const d = document.getElementById("days");
    const w = document.getElementById("weeks");
    const h = document.getElementById("hours");
    const Min = document.getElementById("min");
    const Sec = document.getElementById("sec");

    // m.innerHTML = Math.floor(monthes) + " monthes";
    d.innerHTML =  Math.floor (remainderDays) + " Days";
    // w.innerHTML =  Math.floor (weeks) + " weeks";
    h.innerHTML =  Math.floor (hours)+"<br>" + "hours";
    Min.innerHTML =  Math.floor (min) +"<br>" + " min";
    Sec.innerHTML = Math.floor (sec) +"<br>" + "sec";
}
setInterval("calcDays()");



