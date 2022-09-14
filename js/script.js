
// Q1

const weekday = new Intl.DateTimeFormat('en-US',{weekday: "long"}).format(new Date());

const time = new Intl.DateTimeFormat('en-US',{ hour: "numeric", minute: "numeric", second: "numeric"}).format(new Date());

$("#answer1").append(`<p>Today is ${weekday} <br> Current Time: ${time}</p>`);



// Q2

const date = new Intl.DateTimeFormat('en-US', {year: "numeric", month: "2-digit", day: "2-digit"}).format(new Date());

let [month, day, year] = date.split("/");

let dates = [
    "<p>",
    `${month}-${day}-${year} <br>`,
    `${month}/${day}/${year} <br>`,
    `${day}/${month}/${year}`,
    "</p>"
]

$("#answer2").append(dates);



// Q3

function myFunction(){
    let string = document.documentElement.outerHTML;
    $("#answer3").text(string)
}



// Q4

paper.install(window);
paper.setup(document.querySelector("#main-canvas"));


let tool = new Tool();

tool.onMouseDown = (e) => {
    let c = Shape.Circle(e.point,20);
    console.log(c);

    c.fillColor = "green";

    addCircle(c);
}

let c = Shape.Circle(200,200,80);
c.fillColor = "black";

let text = new PointText(200,200);
text.justification = 'center';
text.fillColor = 'white';
text.fontSize = 20;
text.content = 'hello world';
