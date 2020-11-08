***To run the project. Type 'npm install' and then 'npm start' in the terminal from the current directory (/ai-pallete)***

***The graph is zoomable. Either scroll on the graph, or perform a pinching gesture on the touchpad***

Project directory structure
- src
    - assets (contains dummy json data)
    - components (contains modular components)
        - Graph.jsx (Main graph)
        - GraphFilters.jsx (component which has a bunch of filter options)
        - GraphContainer.jsx (A container component for graph and filter)
        - Header.jsx (Dynamic component which displays title acc to selected filters)
        - Recommendation.jsx (A component which shows recommended products based on the selected product)
    - redux (All redux related logic (Global State management))
    - styledComponents (Global Styled Components)
    - App.js (Container component for graphs, title, and recommended section)
    - constant.js (contains a variable of possible date options)
    - index.css (global styling)
    - index.js (entry point of application)
