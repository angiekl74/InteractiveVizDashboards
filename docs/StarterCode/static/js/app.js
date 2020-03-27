d3.selectAll("#selDataset").on("change", getData);

function getData() {
    d3.json("samples.json").then((importedData) => {
        var data = importedData;
        console.log(data);
        // var dropdownMenu = d3.select("#selDataset");
        // console.log(dropdownMenu)
        var dataset = d3.select("#selDataset").node().value;
        var testCase = parseInt(dataset);
        var results=[]
        var testId = data.metadata.map(row => row["id"])
        
        var ethnicity = data.metadata.map(row => row["ethnicity"])
        var gender = data.metadata.map(row => row["gender"])
        var age = data.metadata.map(row => row["age"])
        var location = data.metadata.map(row => row["location"])
        var bbtype = data.metadata.map(row => row["bbtype"])
        var wfreq =data.metadata.map(row => row["wfreq"])

        var resultindex = testId.indexOf(testCase, 0)
        // console.log("result",resultindex)

        results.push(testId[resultindex])
        results.push(ethnicity[resultindex]) 
        results.push(gender[resultindex])
        results.push(age[resultindex])
        results.push(location[resultindex])
        results.push(bbtype[resultindex])
        results.push(wfreq[resultindex])
        console.log(results)  

        var panel = d3.select("sample-metadata");
        // panel.html("")
        // Object.entries(results).forEach(([key, value]) => {
        //     panel.append("p").text(`${key} : ${value}`) 
        // })

     

        for (var i = 0; i < results.length; i++) {
            var table = document.getElementById("sample-metadata");
            table.html("")
            table.append(results[i])
            console.log(results[i])
          }
})
}
 

