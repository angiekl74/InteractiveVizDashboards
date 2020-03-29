var sampleid = [1977,2318, 189, 352, 1189, 41, 2264, 482, 2859, 1167];
// var textSampleId = sampleid.map(function(item) {
//     return item.join("Id") 
// });
var textSampleId = [];
sampleid.forEach((i) => {
    textSampleId.push("id" + i)
})
console.log("Angie", textSampleId);


var trace = {
    x: [2, 2, 10, 40, 50, 80, 90, 100, 120, 163],
    y: textSampleId,
    // y: ["A", "B", "C", "D", "E", "F","G", "H", "I", "J"],
    // y: [1977,2318, 189, 352, 1189, 41, 2264, 482, 2859, 1167],
    // y: ["id 1977"," id 2318", " id 189", " id 352", "id 1189", "id 41", "id 2264", "id 482", "id 2859", "id 1167"],
    type: "bar",
    orientation: "h",
    marker: {
        color: [1,2,3,4,5,6,7,8,9,10],
        colorscale: [[0, 'rgb(200, 255, 200)'], [1, 'rgba(214, 0, 0, 1))']]
    }
};

var data = [trace];

var layout = {
    title: "Test Id 940",
    yaxis: {
        title: "OTU-IDS",
        // tickmode: 'array',
        // tickvals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
        // ticktext: [1977, 2318, 189, 352, 1189, 41, 2264, 482, 2859, 1167]
        // ticktext: [dataSamples.forEach((i) => {console.log(i)})]
        //still need to fix this so tick text dynamically changes
    }
    };

Plotly.newPlot("bar", data, layout);