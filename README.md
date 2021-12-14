# Create React Application

`npx create-react-app`

## install dependencies

`npm install axios react-router-dom @material-ui/core @material-ui/icons`

# Remove unwanted files

    rm -fr public/logo192.png
    rm -fr public/logo512.png
    rm -fr src/App.test.js
    rm -fr src/logo.svg
    rm -fr src/setupTests.js
    rm -fr src/reportWebVitals.js

# Create folder structure

    mkdir components/header -p
    touch components/Header/Header.js
    touch components/Header/index.js
    touch components/Header/header.css

    mkdir components/navigation -p
    touch components/navigation/Navigation.js
    touch components/navigation/index.js
    touch components/navigation/navigation.css

    mkdir pages
    touch pages/trending.js
    touch pages/movies.js
    touch pages/series.js
    touch pages/search.js

    mkdir config
    touch config/config.js

# Add Google fonts in index.html file
