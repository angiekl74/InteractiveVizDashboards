## Interactive Visualiztion Dashboard using Plotly (Belly Button Biodiversity dataset) 

## Table of contents
* [Homework_Assignment_Background](##Homework_Assignment_Background)
* [Project_Task](##Project_Task)
* [Technologies](##Technologies)
* [Setup](##setup)
* [Methodology](##Methodology)
* [Homework_Status](##Homework_Status)


## Homework_Assignment_Background

In this assignment, we will build an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels. The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Project_Task
1. Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

2. Created a bubble chart that displays each sample.
    * Used otu_ids for the x values.
    * Used sample_values for the y values.
    * Used sample_values for the marker size.
    * Used otu_ids for the marker colors.
    * Used otu_labels for the text values. 

3. Displayed the sample metadata, i.e., an individual's demographic information. Displayed each key-value pair from the metadata JSON object somewhere on the page.

4. Deployment
    * Deployed this app to GitHub Pages. &nbsp;Deployment link: (https://angiekl74.github.io/InteractiveVizDashboards/StarterCode/) .

## Technologies
The project is created with:
* Plotly (for javascript)
* Bootstrap===4.3.1

## Setup
1. To link directly to the latest Plotly release for javascript (https://plotly.com/javascript/getting-started/) 

## Methodology

1. Wrote code to create plotly plots (To review code, review app.js file)

2. To visulize plotly plots

   Open index.html.  &nbsp; Below is a snapshot of the final assignment.

    <img src="Images/final_hw_image.png"  width="300" height="250">

## Homework_Status

* (Latest update: April 23, 2020) The creation of the gauge chart was a bonus assignment.  This is my first attempt at creating the gauge chart (work in progess).  Also need to re-write script code for the 160+ test id numbers.  The goal is to have the gauge chart look like the chart below.

    <img src="Images/gauge.png"  width="300" height="250">



