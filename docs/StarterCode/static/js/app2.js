
var sampleid = [1977,2318, 189, 352, 1189, 41, 2264, 482, 2859, 1167];

// Code to add "id" string to sampleid array above
var textSampleId = [];
sampleid.forEach((i) => {
    textSampleId.push("id" + i)
})
console.log(textSampleId);

// Build bar chart
var trace = {
    x: [2, 2, 10, 40, 50, 80, 90, 100, 120, 163],

    // y: [1977,2318, 189, 352, 1189, 41, 2264, 482, 2859, 1167],  
    // y: ["1977","2318", "189", "352", "1189", "41", "2264", "482", "2859", "1167"],
    // y: ["id 1977"," id 2318", " id 189", " id 352", "id 1189", "id 41", "id 2264", "id 482", "id 2859", "id 1167"],
    type: "bar",
    orientation: "h",
    };

var data = [trace];

var layout = {
    title: "Test Id 940",
    
    };

Plotly.newPlot("bar", data, layout);