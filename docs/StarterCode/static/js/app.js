d3.selectAll("#selDataset").on("change", getData);

function getData() {
    d3.json("samples.json").then((importedData) => {
        var data = importedData;
        var metaData = data.metadata

        var dataset = d3.select("#selDataset").node().value;
        var testCase = parseInt(dataset);
        // console.log(testCase);
        var results=[]
        var testId = data.metadata.map(row => row["id"])
        
        var resultindex = testId.indexOf(testCase, 0)
        // console.log("result",resultindex)
        results.push(testId[resultindex])
        // console.log(results)  

        finalResult = []
        var panel = d3.select("#sample-metadata");
        panel.html("")
        
        for (var i=0; i < metaData.length; i++) {
            if (i === resultindex) {
                Object.entries(data.metadata[i]).forEach(([key, value]) => 
                finalResult.push(`${key}: ${value}`));
                // console.log("F", finalResult)
                for (var j = 0; j < finalResult.length; j++) {
                    var row = panel.append("p");
                    row.text(finalResult[j]);                
                
        buildPlot();
                }
            }
        }   
    })
}

getData();

// Build horizontal bar chart
function buildPlot(){
    d3.json("samples.json").then((importedData) => {
        var data = importedData;

        var dataset = d3.select("#selDataset").node().value;
        var testCase = parseInt(dataset);
        var testId = data.metadata.map(row => row["id"])
        var resultindex = testId.indexOf(testCase, 0)

        var results=[]
        results.push(testId[resultindex])
        
            var dataSamples = data.samples[resultindex].sample_values
            var dataIds = data.samples[resultindex].otu_ids
            var dataLabels = data.samples[resultindex].otu_labels

            
            dataTop10Samples = dataSamples.slice(0,10)
            reversedataTop10Samples = dataTop10Samples.reverse()
            dataTop10IdValues = dataIds.slice(0,10)
            reversedataTop10Values = dataTop10IdValues.reverse().toString()

            // Adding string "OTU" to integer array to fix label issues
            var finalTop10IdValueArray = [];
            dataTop10IdValues.forEach((i) => {
                finalTop10IdValueArray.push("OTU: " + i)
                })


            var trace = {
                x: reversedataTop10Samples,
                y: finalTop10IdValueArray,
                type: "bar",
                text: dataLabels,
                orientation: "h",
                marker: {
                    color: [1,2,3,4,5,6,7,8,9,10],
                    colorscale: [[0, 'rgb(200, 255, 200)'], [1, 'rgba(214, 0, 0, 1))']]
                }
            };

            var data = [trace];

            var layout = {
                title: `Test Subject Id #: ${testCase}`,
                };

            Plotly.newPlot("bar", data, layout);    
            
            buildBubble();        
    })
}

// Build bubble chart
function buildBubble(){
    d3.json("samples.json").then((importedData) => {
        var data = importedData;

        var dataset = d3.select("#selDataset").node().value;
        var testCase = parseInt(dataset);
        // console.log(testCase);
        var testId = data.metadata.map(row => row["id"])
        var resultindex = testId.indexOf(testCase, 0)
        // console.log("result in buildPlot",resultindex)

        var results=[]
        results.push(testId[resultindex])
        // console.log(results) 

            var dataSamples = data.samples[resultindex].sample_values;
            var dataIds = data.samples[resultindex].otu_ids;
            var dataLabels = data.samples[resultindex].otu_labels;
            // console.log("data labels", dataLabels)
            
            dataTop10Samples = dataSamples
            dataTop10IdValues = dataIds
            // console.log(dataTop10Samples, dataTop10IdValues)

            var trace = {
                x: dataIds,
                y: dataSamples,
                type: "bubble",
                mode: "markers",
                text: dataLabels,
                marker: {
                    color: dataIds,
                    size: dataSamples,
                    colorscale: [[0, 'rgb(200, 255, 200)'], [1, 'rgb(0, 100, 0)']]                    
                    }
            };          

            var data = [trace];

            var layout = {
                title: `Test Subject Id #: ${testCase}`,
                height: 600,
                width: 1000                                         
            };   

            Plotly.newPlot("bubble", data, layout);    

            buildGauge();           
       
    })
}

// https://stackoverflow.com/questions/53211506/calculating-adjusting-the-needle-in-gauge-chart-plotly-js
function buildGauge() {
    d3.json("samples.json").then((importedData) => {
        var data = importedData;

        var dataset = d3.select("#selDataset").node().value;
        var testCase = parseInt(dataset);
        var testId = data.metadata.map(row => row["id"])
        var resultindex = testId.indexOf(testCase, 0)

        var results=[]
        results.push(testId[resultindex])

        var bbwfreq = data.metadata[resultindex].wfreq;
        // console.log(hwfreq)

        var data = [
            {
            domain: { x: [0, 1], y: [0, 1] },
            value: bbwfreq,                                     // this moves the gauge.  This should be hwfreq
            title: { text: `Test Subject Id #: ${testCase} Weekly Bellybutton Wash Frequency`},
            type: "indicator",
            mode: "gauge+number",
            //   delta: { reference: 10 },
            gauge: {
                axis: { range: [null, 9] },
                steps: [
                { range: [0, 1], color: "#e62e00" },
                { range: [1, 2], color: "#c83e08" },
                { range: [2, 3], color: "#be570f" },
                { range: [3, 4], color: "#b46b17" },
                { range: [4, 5], color: "#a77d1f" },
                { range: [5, 6], color: "#998c27" },
                { range: [6, 7], color: "#889b2f" },
                { range: [7, 8], color: "#52b640" },
                { range: [8, 9], color: "#00cc00" },
                ],
                    }
            }
        ];
        
        var layout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
        Plotly.newPlot('gauge', data, layout);
    })
}


