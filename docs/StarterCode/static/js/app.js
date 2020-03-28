d3.selectAll("#selDataset").on("change", getData);

function getData() {
    d3.json("samples.json").then((importedData) => {
        var data = importedData;
        var metaData = data.metadata

        var dataset = d3.select("#selDataset").node().value;
        var testCase = parseInt(dataset);
        console.log(testCase);
        var results=[]
        var testId = data.metadata.map(row => row["id"])
        
        // var ethnicity = data.metadata.map(row => row["ethnicity"])

        var resultindex = testId.indexOf(testCase, 0)
        console.log("result",resultindex)

        results.push(testId[resultindex])
        console.log(results)  

    
// NEW WAY OF GETTING DATA!  BUT can't append to panel to show output
        finalResult = []
        var panel = d3.select("#sample-metadata");
        panel.html("")
        
        for (var i=0; i < metaData.length; i++) {
            if (i === resultindex) {
                Object.entries(data.metadata[i]).forEach(([key, value]) => 
                finalResult.push(`${key}: ${value}`));
                console.log("F", finalResult)
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

// Make the horizontal bar chart
function buildPlot(){
    d3.json("samples.json").then((importedData) => {
        var data = importedData;

        var dataset = d3.select("#selDataset").node().value;
        var testCase = parseInt(dataset);
        console.log(testCase);
        var testId = data.metadata.map(row => row["id"])
        var resultindex = testId.indexOf(testCase, 0)
        console.log("result in buildPlot",resultindex)

        var results=[]
        results.push(testId[resultindex])
        console.log("Angie",results) 

            var dataSamples = data.samples[resultindex].sample_values
            console.log(dataSamples);
            var dataIds = data.samples[resultindex].otu_ids
            console.log(dataIds);
            
            dataTop10Samples = dataSamples.slice(0,10)
            reversedataTop10Samples = dataTop10Samples.reverse()
            dataTop10IdValues = dataIds.slice(0,10)
            reversedataTop10Values = dataTop10IdValues.reverse().toString()
            console.log(reversedataTop10Samples, dataTop10IdValues)

            var trace = {
                x: reversedataTop10Samples,
                y: reversedataTop10Values,
                type: "bar",
            orientation: "h"
            };

            var data = [trace];

            var layout = {
                title: `Test Id: ${testCase}`,
                yaxis: {
                    title: "OTU-IDS",
                    tickmode: 'array',
                    tickvals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
                    // ticktext: [dataSamples.forEach((i) => {console.log(i)})]
                   }
                    //still need to fix this so tick text dynamically changes
            };   

            Plotly.newPlot("bar", data, layout);    
            
            buildBubble();
        
    })
}


function buildBubble(){
    d3.json("samples.json").then((importedData) => {
        var data = importedData;

        var dataset = d3.select("#selDataset").node().value;
        var testCase = parseInt(dataset);
        console.log(testCase);
        var testId = data.metadata.map(row => row["id"])
        var resultindex = testId.indexOf(testCase, 0)
        console.log("result in buildPlot",resultindex)

        var results=[]
        results.push(testId[resultindex])
        console.log("Angie",results) 

            var dataSamples = data.samples[resultindex].sample_values
            console.log(dataSamples);
            var dataIds = data.samples[resultindex].otu_ids
            console.log(dataIds);
            
            dataTop10Samples = dataSamples.slice(0,10)
            reversedataTop10Samples = dataTop10Samples.reverse()
            dataTop10IdValues = dataIds.slice(0,10)
            reversedataTop10Values = dataTop10IdValues.reverse().toString()
            console.log(reversedataTop10Samples, dataTop10IdValues)

            var trace = {
                x: reversedataTop10Samples,
                y: reversedataTop10Values,
                mode: "markers",
                marker: {
                    size: [30,30,30,30,30,30,30,30,30,30]} // Need to use samples for marker size.
            };

            var data = [trace];

            var layout = {
                title: `Bubble for Test Id: ${testCase}`,
                height: 600,
                width: 1000                                         
            };   

            Plotly.newPlot("bubble", data, layout);               
       
    })
}

