/**
 *
 * @author:       Hafeez Syed - hafeez.syed@news.com.au
 * @type:         javascript
 * @project:      Footy Fans Survey Results 2013 - For Northern Territory
 * @description:  Defining Google Charts data
 *
 */

/* 
  chart 1
*/


// Callback that creates and populates a data table,
// instantiates the pie/bar chart, passes in the data and
// draws it.
function drawChart1() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
        ['Player Name', 'Votes'],
        ['Gary Ablett',10870],
        ['Jonathan Brown',58],
        ['Matthew Boyd',49],
        ['Dean Cox',29],
        ['Lance Franklin',370],
        ['Chris Judd',171],
        ['Dane Swan',278],
        ['Matthew Pavlich',49],
        ['Scott Pendlebury',300],
        ['Nick Riewoldt',92],
        ['Joel Selwood',332],
        ['Jobe Watson',396],
        ['Trent Cotchin',134],
        ['Sam Mitchell',211],
        ['Patrick Dangerfield',303],
        ['Josh P Kennedy',125],
        ['Other',156]
      ]);

  // Set chart options
  var options = {'title':'Question 1 - Who is the best player in the AFL?',
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div1'));
    chart.draw(data, options);
} 


/* 
  chart 2
*/


function drawChart2() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
    ['Team', 'Votes'],
    ["Adelaide",1057],
    ["Brisbane",373],
    ["Carlton",1151],
    ["Collingwood",1605],
    ["Essendon",1493],
    ["Fremantle",343],
    ["Geelong",1404],
    ["Gold Coast",76],
    ["GWS",39],
    ["Hawthorn",1453],
    ["North Melbourne",524],
    ["Melbourne",444],
    ["Port Adelaide",707],
    ["Richmond",1162],
    ["St Kilda",593],
    ["Sydney Swans",694],
    ["West Coast Eagles",391],
    ["Western Bulldogs",412]
  ]);

  // Set chart options
  var options = {'title':'Question 2 - Which AFL club do you support?',
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div2'));
    chart.draw(data, options);
}


/* 
  chart 3
*/


function drawChart3() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
    ['Reason', 'Votes'],
    ["History of family support",8281],
    ["Friends supported them",938],
    ["Club success",943],
    ["I like their colours",597],
    ["My favourite player plays or played for the team",1226],
    ["Other",1935]
  ]);

  // Set chart options
  var options = {'title':'Question 3 - Why did you choose to support your team?',
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div3'));
    chart.draw(data, options);
}


/* 
  chart 4
*/

function drawChart4() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
        ['Response', 'Votes'],
        ["Yes",11921],
        ["No", 1975]
      ]);

  // Set chart options
  var options = {'title':'Question 4 - Who is the best player in the AFL?',
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div4'));
    chart.draw(data, options);
} 


/* 
  chart 5
*/


function drawChart5() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
    ['Coach Name', 'Votes'],
    ["Alastair Clarkson",2554],
    ["Neil Craig",55],
    ["Brendan McCartney",120],
    ["Ross Lyon",2847],
    ["James Hird",610],
    ["Brad Scott",138],
    ["Nathan Buckley",303],
    ["Guy McKenna",237],
    ["John Longmire",2398],
    ["Chris Scott",1566],
    ["Damien Hardwick",423],
    ["Mick Malthouse",731],
    ["Ken Hinkley",1484],
    ["Brenton Sanderson",144],
    ["Scott Watters",27],
    ["Michael Voss",38],
    ["John Worsfold",48],
    ["Kevin Sheedy",191]
  ]);

  // Set chart options
  var options = {'title':'Question 5 - Who is the best current AFL coach?',
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div5'));
    chart.draw(data, options);
}


/* 
  chart 6
*/


function drawChart6() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
    ['Player Name', 'Votes'],
    ["Hayden Ballantyne",3159],
    ["Alan Didak",784],
    ["Stephen Milne",3464],
    ["Dale Thomas",458],
    ["Jake King",555],
    ["Jack Riewoldt",1230],
    ["Joel Selwood",1295],
    ["Ryan Crowley",1250],
    ["Other",1717]
  ]);

  // Set chart options
  var options = {'title':'Question 6 - Which AFL player do you most love to hate?',
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div6'));
    chart.draw(data, options);
}



/* 
  chart 7
*/


function drawChart7() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
        ['Player Name', 'Votes'],
        ['Jimmy Bartel',439],
        ['Jude Bolton',605],
        ['Jonathan Brown',2667],
        ['Daniel Cross',127],
        ['Patrick Dangerfield',967],
        ['Lenny Hayes',853],
        ['Luke Hodge',3132],
        ['Joel Selwood',3014],
        ['Campbell Brown',578],
        ['Steven Morris',399],
        ['Beau Waters',375],
        ['Other',758]
      ]);

  // Set chart options
  var options = {'title':"Question 7 - Who is the AFL's toughest player?",
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div7'));
    chart.draw(data, options);
} 


/* 
  chart 8
*/


function drawChart8() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
    ['Player Name', 'Votes'],
    ['Jimmy Bartel',2731],
    ['Simon Black',534],
    ['Jude Bolton',482],
    ['Sam Fisher',181],
    ['Lance Franklin',593],
    ['Daniel Giansiracusa',738],
    ['Josh Gibson',817],
    ['Mark LeCras',370],
    ['Harry O’Brien',450],
    ['Nick Riewoldt',167],
    ['Majak Daw',1731],
    ['Robbie Tarrant',199],
    ['Chad Wingard',431],
    ['Jeremy Howe',214],
    ['Andrew Walker',671],
    ['Nic Naitanui',313],
    ['Matthew Pavlich',309],
    ['Jobe Watson',475],
    ['David Swallow',290],
    ['Other',2219]
  ]);

  // Set chart options
  var options = {'title':"Question 8 - Who is the AFL's sexiest player?",
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div8'));
    chart.draw(data, options);
}


/* 
  chart 9
*/


function drawChart9() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
    ['Reason', 'Votes'],
    ["None",3277],
    ["1-2",6051],
    ["3-4",2500],
    ["5-6",607],
    ["More than six",1478]
  ]);

  // Set chart options
  var options = {'title':'Question 9 - How many live AFL matches would you attend during an average month during the footy season?',
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div9'));
    chart.draw(data, options);
}


/* 
  chart 10
*/

function drawChart10() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
        ['Response', 'Votes'],
        ["Yes",3496],
        ["No", 10415]
      ]);

  // Set chart options
  var options = {'title':'Question 10 - Would you support the use of exotic legal supplements by players at your club if it helped win the Grand Final?',
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div10'));
    chart.draw(data, options);
}


/*****************************************************************************
  Second sets of charts
******************************************************************************/


/* 
  chart 11
*/


// Callback that creates and populates a data table,
// instantiates the pie/bar chart, passes in the data and
// draws it.
function drawChart11() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
        ['Item', 'Votes'],
        ['Game tickets',1632],
        ['Club membership',508],
        ['Club merchandise',660],
        ['Food prices at venues',10815],
        ['Other',296]
      ]);

  // Set chart options
  var options = {'title':'Question 11 - What is the most unreasonable cost associated with going to the footy?',
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div11'));
    chart.draw(data, options);
} 


/* 
  chart 12
*/


function drawChart12() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
    ['Player Name', 'Votes'],
    ["Dylan Roberton",511],
    ["Sam Dwyer",1195],
    ["Nick Vlastuin",637],
    ["Brendon Goddard",3068],
    ["Oliver Wines",1957],
    ["Jack Viney",242],
    ["Nick Lower",138],
    ["Brent Moloney",837],
    ["Kurt Tippett",1175],
    ["Brian Lake",2144],
    ["Angus Monfries",653],
    ["Troy Chaplin",693],
    ["Others",412]
  ]);

  // Set chart options
  var options = {'title':'Question 12 - Who is the best value recruit of 2013?',
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div12'));
    chart.draw(data, options);
}


/* 
  chart 13
*/


function drawChart13() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
    ['Reason', 'Votes'],
    ["Stefan Martin",560],
    ["Jordan Russell",1531],
    ["Danyle Pearce",413],
    ["Hamish McIntosh",3957],
    ["Chris Dawes",2316],
    ["David Rodan",2098],
    ["Sharrod Wellingham",1324],
    ["Trent Dennis-Lane",896],
    ["Other",816]
  ]);

  // Set chart options
  var options = {'title':'Question 13 - Who is the worst value recruit of 2013?',
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div13'));
    chart.draw(data, options);
}


/* 
  chart 14
*/

function drawChart14() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
        ['Response', 'Votes'],
        ["Better",7445],
        ["Worse", 1682],
        ["No change", 4788]
      ]);

  // Set chart options
  var options = {'title':"Question 14 - Is AFL players' off-field behaviour better or worse than five years ago?",
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div14'));
    chart.draw(data, options);
} 


/* 
  chart 15
*/


function drawChart15() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
    ['Player Name', 'Votes'],
    ["Nathan Van Berlo",115],
    ["Jonathan Brown",419],
    ["Marc Murphy",186],
    ["Nick Maxwell",437],
    ["Jobe Watson",2334],
    ["Matthew Pavlich",272],
    ["Joel Selwood",2137],
    ["Gary Ablett",3168],
    ["Luke Hodge",2498],
    ["Andrew Swallow",139],
    ["Jack Trengove",18],
    ["Travis Boak",401],
    ["Trent Cotchin",319],
    ["Nick Riewoldt",425],
    ["Jarrad McVeigh",756],
    ["Darren Glass",200],
    ["Matthew Boyd",62],
    ["Callan Ward",29]
  ]);

  // Set chart options
  var options = {'title':'Question 15 - Which current club captain do you think is the best leader in the AFL?',
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div15'));
    chart.draw(data, options);
}


/* 
  chart 16
*/


function drawChart16() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
    ['Player Name', 'Votes'],
    ["Jonathan Brown",2564],
    ["Paul Chapman",330],
    ["Steve Johnson",432],
    ["Brent Moloney",46],
    ["Nick Maxwell",266],
    ["Dane Swan",612],
    ["Luke Hodge",1230],
    ["Jobe Watson",1419],
    ["Lenny Hayes",1511],
    ["Dustin Fletcher",558],
    ["Gary Ablett",903],
    ["Matthew Pavlich",423],
    ["Taylor Walker",1028],
    ["Ivan Maric",472],
    ["Robert Murphy",1498],
    ["Other",619]
  ]);

  // Set chart options
  var options = {'title':'Question 16 - Who is currently the all-round best bloke in the AFL?',
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div16'));
    chart.draw(data, options);
}



/* 
  chart 17
*/


function drawChart17() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
        ['Player Name', 'Votes'],
        ['Adam Cooney (Haylea McCann)',608],
        ['Jonathan Brown (Kylie Brown)',456],
        ['Scott Pendlebury (Alex Davis)',2150],
        ['Aaron Sandilands (Jenny Sandilands)',647],
        ['Jarryd Roughead (Sarah Dunn)',5462],
        ['Will Schofield (Alex Leahy)',1190],
        ['Chris Judd (Rebecca Judd)',1823],
        ['Corey Enright (Renee Enright)',544],
        ['Other',1029]
      ]);

  // Set chart options
  var options = {'title':"Question 17 - Which player is punching most above their weight?",
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div17'));
    chart.draw(data, options);
} 


/* 
  chart 18
*/


function drawChart18() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
    ['Player Name', 'Votes'],
    ['Alex Davis (Scott Pendlebury)',2632],
    ['Lucy Freer (Jordan Lewis)',186],
    ['Nadia Coppolino (Jimmy Bartel)',1220],
    ['Emma Clapham (Tom Hawkins)',684],
    ['Taylor Wilson (Dane Swan)',573],
    ['Megan Gale (Shaun Hampson)',4038],
    ['Rouba Houli (Bachar Houli)',481],
    ['Catherine Riewoldt (Nick Riewoldt)',557],
    ['Erinn Byrne (Leigh Montagna)',293],
    ['Brooke Kennedy (Trent Cotchin)',913],
    ['Ana Calle (Josh Kennedy)',1380],
    ['Other',955]
  ]);

  // Set chart options
  var options = {'title':"Question 18 - Who is the AFL's most glamorous WAG?",
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div18'));
    chart.draw(data, options);
}


/* 
  chart 19
*/


function drawChart19() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
    ['Commentator', 'Votes'],
    ["Bruce McAvaney (Channel 7)",2261],
    ["Dennis Cometti (Channel 7)",5331],
    ["Hamish McLachlan (Channel 7)",349],
    ["Basil Zempilas (Channel 7)",125],
    ["Brian Taylor (Channel 7)",1496],
    ["Eddie McGuire (Fox Footy)",703],
    ["Anthony Hudson (Fox Footy)",2684],
    ["Dwayne Russell (Fox Footy)",754],
    ["Matthew Campbell (Fox Footy)",208]
  ]);

  // Set chart options
  var options = {'title':"Question 19 - Who is the AFL's best play-by-play television commentator?",
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div19'));
    chart.draw(data, options);
}


/* 
  chart 20
*/

function drawChart20() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
      ['Commentator', 'Votes'],
      ["Anthony Hudson (SEN)",1836],
      ["Kevin Bartlett (SEN)",339],
      ["David Schwarz (SEN)",225],
      ["Andrew Maher (SEN)",117],
      ["Matt Granland (SEN)",162],
      ["Francis Leach (ABC)",98],
      ["Gerard Whateley (ABC)",2385],
      ["Drew Morphett (ABC)",445],
      ["Dan Lonergan (ABC)",117],
      ["Glenn Mitchell (ABC)",101],
      ["Dennis Cometti (Channel 7)",2485],
      ["James Brayshaw (Triple M)",2572],
      ["Michael Christian (Triple M)",167],
      ["Hamish McLachlan (Triple M)",152],
      ["Barry Denner (Triple M)",31],
      ["Brian Taylor (3AW)",942],
      ["Tim Lane (3AW)",664],
      ["Dwayne Russell (3AW)",328],
      ["Tony Leonard (3AW)",87],
      ["Shane McInnes (3AW)",32],
      ["Stephen Quartermain (3AW)",355],
      ["Bruce Eva (3AW)",28],
      ["Other",241]
      ]);

  // Set chart options
  var options = {'title':"Question 20 - Who is the AFL's best play-by-play radio commentator?",
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div20'));
    chart.draw(data, options);
}


/*****************************************************************************
  Third sets of charts
******************************************************************************/


/* 
  chart 21
*/


// Callback that creates and populates a data table,
// instantiates the pie/bar chart, passes in the data and
// draws it.
function drawChart21() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
        ['Analyst Name', 'Votes'],
        ['Dermott Brereton (Fox Footy)',1440],
        ['Leigh Colbert (Fox Footy)',66],
        ['Jason Dunstall (Fox Footy)',587],
        ['Luke Darcy (Channel 7)',771],
        ['Danny Frawley (Fox Footy)',276],
        ['Gerard Healy (Fox Footy)',487],
        ['Paul Roos (Fox Footy)',2114],
        ['Mark Ricciuto (Fox Footy)',338],
        ['Brad Johnson (Fox Footy)',179],
        ['David King (Fox Footy)',2702],
        ['Alastair Lynch (Fox Footy)',161],
        ['Leigh Matthews (Channel 7)',2005],
        ['Cameron Ling (Channel 7)',1855],
        ['Matthew Richardson (Channel 7)',845],
        ['Other',80]
      ]);

  // Set chart options
  var options = {'title':'Question 21 - Who is the best AFL tactical analyst on television?',
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div21'));
    chart.draw(data, options);
} 


/* 
  chart 22
*/


function drawChart22() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
    ['Analyst Name', 'Votes'],
    ['Tony Shaw (3AW)',377],
    ['Leigh Matthews (3AW)',2160],
    ['Matthew Lloyd (3AW)',889],
    ['Chris Johnson (3AW)',67],
    ['Matthew Richardson (3AW)',617],
    ['Luke Darcy (Triple M)',676],
    ['Garry Lyon (Triple M)',1556],
    ['Jason Dunstall (Triple M)',581],
    ['Danny Frawley (Triple M)',336],
    ['Wayne Carey (Triple M)',662],
    ['Wayne Schwass (Triple M)',116],
    ['Nathan Brown (Triple M)',302],
    ['Billy Brownless (Triple M)',394],
    ['Mark Ricciuto (Triple M)',456],
    ['Robert Walls (SEN)',559],
    ['David King (SEN)',1252],
    ['Cameron Mooney (SEN)',392],
    ['Dermott Brereton (SEN)',826],
    ['Scott Lucas (SEN)',78],
    ['Nathan Thompson (SEN)',30],
    ['Daniel Harford (SEN)',44],
    ['Terry Wallace (SEN)',147],
    ['Stan Alves (ABC)',253],
    ['David Parkin (ABC)',452],
    ['Mark Maclure (ABC)',468],
    ['Peter Schwab (ABC)',50],
    ['Peter Daicos (ABC)',63],
    ['Other',103]
  ]);

  // Set chart options
  var options = {'title':'Question 22 - Who is the best AFL tactical analyst on radio?',
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div22'));
    chart.draw(data, options);
}


/* 
  chart 23
*/


function drawChart23() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
    ['Commentator Name', 'Votes'],
    ["Brian Taylor",4762],
    ["Dennis Cometti",528],
    ["Luke Darcy",869],
    ["Gerard Healy",401],
    ["Anthony Hudson",569],
    ["Alastair Lynch",392],
    ["Leigh Matthews",235],
    ["Bruce McAvaney",2562],
    ["Dwayne Russell",942],
    ["Paul Roos",672],
    ["Robert Walls",1272],
    ["Other",703]
  ]);

  // Set chart options
  var options = {'title':'Question 23 - Who is the most annoying AFL commentator?',
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div23'));
    chart.draw(data, options);
}


/* 
  chart 24
*/

function drawChart24() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
        ['TV Program', 'Votes'],
        ["On the Couch",1144],
        ["AFL 360", 3518],
        ["Open Mike", 504],
        ["AFL Insider",100],
        ["League Teams", 110],
        ["Before the Game", 1930],
        ["The Footy Show",2953],
        ["Footy Classified", 902],
        ["Sunday Footy Show", 378],
        ["AFL Gameday",571],
        ["After the Bounce", 1048],
        ["Marngrook Footy Show", 526],
        ["The Supercoach Show", 111],
        ["Other", 112]
      ]);

  // Set chart options
  var options = {'title':"Question 24 - What is your favourite footy television program?",
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div24'));
    chart.draw(data, options);
} 


/* 
  chart 25
*/


function drawChart25() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
    ['Opinion', 'Votes'],
    ["Yes",115],
    ["No",419]
  ]);

  // Set chart options
  var options = {'title':'Question 25 -  Do you think that the AFL makes too many rule changes?',
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div25'));
    chart.draw(data, options);
}


/* 
  chart 26
*/


function drawChart26() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
    ['Opinion', 'Votes'],
    ["Yes",6424],
    ["No",7484]
  ]);

  // Set chart options
  var options = {'title':'Question 26 -  Are you worried about your team losing players because of free agency?',
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div26'));
    chart.draw(data, options);
}



/* 
  chart 27
*/


function drawChart27() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
      ['Opinion', 'Votes'],
      ["Harder",4244],
      ["Softer",7534],
      ["No change",2132]
      ]);

  // Set chart options
  var options = {'title':"Question 27 - Do you think the game is harder or softer than 10 years ago?",
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div27'));
    chart.draw(data, options);
} 


/* 
  chart 28
*/


function drawChart28() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
      ['Opinion', 'Votes'],
      ["Better",7276],
      ["Worse",5028],
      ["No change",1607]
  ]);

  // Set chart options
  var options = {'title':"Question 28 - Do you think the game is in a better or worse shape than it was in 1995?",
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div28'));
    chart.draw(data, options);
}


/* 
  chart 29
*/


function drawChart29() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
    ['Opinion', 'Votes'],
    ["Yes",1674],
    ["No",12234]
  ]);

  // Set chart options
  var options = {'title':"Question 29 - Do you think the tribunal/match review panel hand out consistent penalties for similar offences?",
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div29'));
    chart.draw(data, options);
}


/* 
  chart 30
*/

function drawChart30() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
      ['Penalty', 'Votes'],
      ["Ban players responsible",2703],
      ["Ban staff responsible",1905],
      ["Strip club of premiership points",5809],
      ["Make club play remainder of season for no premiership points",1233],
      ["Remove future draft picks",1374],
      ["Other",884]
      ]);

  // Set chart options
  var options = {'title':"Question 30 - If an AFL team is found to have used performance-enhancing drugs, what do you think is the most appropriate penalty?",
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div30'));
    chart.draw(data, options);
}


/*****************************************************************************
  Forth sets of charts
******************************************************************************/


/* 
  chart 31
*/


// Callback that creates and populates a data table,
// instantiates the pie/bar chart, passes in the data and
// draws it.
function drawChart31() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
        ['Opinion', 'Votes'],
        ['Yes',2292],
        ['No',11612]
      ]);

  // Set chart options
  var options = {'title':'Question 31 - Would a fear of injuries affect your decision to let your child play football?',
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div31'));
    chart.draw(data, options);
} 


/* 
  chart 32
*/


function drawChart32() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
    ['Opinion', 'Votes'],
    ['Yes',4565],
    ['No',9344]
  ]);

  // Set chart options
  var options = {'title':'Question 32 - Do you think AFL chief Andrew Demetriou does a good enough job to justify his $1.8 million pay packet?',
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div32'));
    chart.draw(data, options);
}


/* 
  chart 33
*/


function drawChart33() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
    ['Opinion', 'Votes'],
    ['Positive influence',6776],
    ['Negative influence',1279],
    ['No influence',5855]
  ]);

  // Set chart options
  var options = {'title':'Question 33 - How does footy affect your relationship with your partner, kids or parents?',
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div33'));
    chart.draw(data, options);
}


/* 
  chart 34
*/

function drawChart34() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
        ['Opinion', 'Votes'],
        ['Yes',4132],
        ['No',9778]
      ]);

  // Set chart options
  var options = {'title':"Question 34 - Do you think the AFL fixture is fair?",
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div34'));
    chart.draw(data, options);
} 


/* 
  chart 35
*/


function drawChart35() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
    ['Opinion', 'Votes'],
    ["Often",820],
    ["Regularly",1587],
    ["Rarely",4124],
    ["Never",7379]
  ]);

  // Set chart options
  var options = {'title':'Question 35 - How often do you gamble on AFL games?',
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div35'));
    chart.draw(data, options);
}


/* 
  chart 36
*/


function drawChart36() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
    ['Opinion', 'Votes'],
    ["Yes",8537],
    ["No",5374]
  ]);

  // Set chart options
  var options = {'title':'Question 36 - Are you concerned about the amount of gambling advertising in the game and promotion of live odds during matches?',
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div36'));
    chart.draw(data, options);
}



/* 
  chart 37
*/


function drawChart37() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
      ['Player Name', 'Votes'],
      ["Michael Hurley (Essendon)",209],
      ["Dustin Martin (Richmond)",475],
      ["Jaeger O'Meara (Gold Coast)",5435],
      ["Oliver Wines (Port Adelaide)",569],
      ["Jack Trengove (Melbourne)",108],
      ["Dan Hannebery (Sydney)",890],
      ["Trent Cotchin (Richmond)",776],
      ["Patrick Dangerfield (Adelaide)",2355],
      ["Jack Ziebell (North Melbourne)",285],
      ["Tom Scully (GWS)",127],
      ["Nic Naitanui (West Coast)",563],
      ["Nathan Fyfe (Fremantle)",770],
      ["Other",1347]
      ]);

  // Set chart options
  var options = {'title':"Question 37 - Who will be the best player in the AFL in five years?",
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div37'));
    chart.draw(data, options);
} 


/* 
  chart 38
*/


function drawChart38() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
      ['Job', 'Votes'],
      ["Rock star",2778],
      ["AFL star",5875],
      ["Hollywood star",3724],
      ["Prime Minister",1533]
  ]);

  // Set chart options
  var options = {'title':"Question 38 - Which of the following jobs would you rather have?",
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div38'));
    chart.draw(data, options);
}


/* 
  chart 39
*/


function drawChart39() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
    ['Opinion', 'Votes'],
    ["Yes",7065],
    ["No",6844]
  ]);

  // Set chart options
  var options = {'title':"Question 39 - Do you think it's rude for friends to schedule weddings during football season?",
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div39'));
    chart.draw(data, options);
}


/* 
  chart 40
*/

function drawChart40() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
      ['Opinion', 'Votes'],
      ["Yes",9240],
      ["No",4668]
      ]);

  // Set chart options
  var options = {'title':"Question 40 - If your team was in the Grand Final, would you miss the game to be at the birth of your first child?",
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div40'));
    chart.draw(data, options);
}


/*****************************************************************************
  Fifth sets of charts
******************************************************************************/


/* 
  chart 41
*/


// Callback that creates and populates a data table,
// instantiates the pie/bar chart, passes in the data and
// draws it.
function drawChart41() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
        ['Opinion', 'Votes'],
        ['Yes',89],
        ['No',155]
      ]);

  // Set chart options
  var options = {'title':'Question 41 - Should your team trade aggressively for the No. 1 draft pick?',
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div41'));
    chart.draw(data, options);
} 


/* 
  chart 42
*/


function drawChart42() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
    ['Opinion', 'Votes'],
    ['Yes',181],
    ['No',63]
  ]);

  // Set chart options
  var options = {'title':'Question 42 - When 2014 dawns will you realistically think your team is in Premiership contention?',
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div42'));
    chart.draw(data, options);
}


/* 
  chart 43
*/


function drawChart43() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
    ['Opinion', 'Votes'],
    ['Inside 2 years',30],
    ['3rd or 4th year',139],
    ['5 years',41],
    ['more than 5 years',34]
  ]);

  // Set chart options
  var options = {'title':'Question 43 - If your club commits to a "rebuild" when do you expect it to return to the finals?',
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div43'));
    chart.draw(data, options);
}


/* 
  chart 44
*/

function drawChart44() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
        ['Club', 'Votes'],
        ['Hawthorn',122],
        ['GWS',115],
        ['Any other clud',7]
      ]);

  // Set chart options
  var options = {'title':"Question 44 - Where will Lance Franklin play in 2014",
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div44'));
    chart.draw(data, options);
} 


/* 
  chart 45
*/


function drawChart45() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
    ['Opinion', 'Votes'],
    ["Yes",140],
    ["No",104]
  ]);

  // Set chart options
  var options = {'title':'Question 45 - Did Carlton make the right decision replacing Brett Ratten with Mick Malthouse',
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div45'));
    chart.draw(data, options);
}


/* 
  chart 46
*/


function drawChart46() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
    ['Opinion', 'Votes'],
    ["Yes",149],
    ["No",95]
  ]);

  // Set chart options
  var options = {'title':'Question 46 - Will Paul Roos coach again in the AFL?',
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div46'));
    chart.draw(data, options);
}



/* 
  chart 47
*/


function drawChart47() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
      ['Opinion', 'Votes'],
      ["Yes",37],
      ["No",93]
      ]);

  // Set chart options
  var options = {'title':"Question 47 - Should Melbourne receive a priority pick?",
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div47'));
    chart.draw(data, options);
} 


/* 
  chart 48
*/


function drawChart48() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
      ['Player Name', 'Votes'],
      ["Tony Lockett",72],
      ["Jason Dunstall",30],
      ["Gary Ablett",89],
      ["Malcolm Blight",48],
      ["Dick Lee",5]
  ]);

  // Set chart options
  var options = {'title':"Question 48 - Who should be the next player elevated to legend status in the Hall of Fame?",
                 'width':650,
                 'height':400,
                 is3D: true
               };

  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div48'));
    chart.draw(data, options);
}
