# b7a9-career-hub-BFIbrahim


- How I make Big Future career website: 

    * Create a react project


- Header Component: 
    1. I made a components for Navigation section that's name Header. I called the Header component inside the app component because I want to show the navigation at top for all pages. For This I called the Header Component Inside the app component. Because App is the parent component. I loaded three another components from Header component (1. statistics, Applied Job, and Blog)  
        
        * I made a chart inside the statistics component. 
        * I answered some  questions in blog component.

- Banner Component: 
    1. At first I created Home Component for display all content for first page. Then I made Banner component for first page banner and I called the banner component from Home. 

- Job Category:
    1. I made a component for job category. This component have 4 cards. To make that cards I made a json file in public folder that's name "Job-category.json". I loaded Job category data from that json file using useEffect. Then I pass the loaded data to singleJob component and make 4 cards there. 

- Featured Job: 
    1. I made a component for Featured Job section. In this section I have shown available jobs. To load that jobs I made a json file that name "FeaturedJob.json". I load all jobs from there inside the FeturedJob component using loader in main jsx. After load data then I passed the data in SingleFeatureJob component And design Featured Job section.  

    I made a view detail button for each jobs. When click that button I load another page for showa all details about that clicked job. I made It using Id and async wait. 



* At last I can make a website for Big Future Career using React and react router Dom.
This Is the site: https://illustrious-pothos-dfd739.netlify.app/
        
