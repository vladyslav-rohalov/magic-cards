# Magic tweets

## Application review Home page

![review](./assets/animateHome.gif)

## Application review Tweets page

![review1](./assets/animatedTweets1.gif)

##

![review2](./assets/animatedTweets2.gif)

## Project implementation

This application is written in ReactJS using the
[MUI](https://mui.com/material-ui/getting-started/overview/) library and the
[mockapi.io](https://mockapi.io/) backend. I used LocalStorage to store
Followings changes. When you click the Follow button, the number of followers
increases, and the status changes from Follow to Followings. The data is updated
in LocalStorage and on the server via a PUT request. Implemented pagination, the
initial number of cards per page is 9, when you click on LoadMore changes the
page and the next batch is loaded. If the page is last, the LoadMore button is
not rendered. On the main page I have implemented animation from cards and also
added animated SVG. The application is adapted to mobile devices.

## Technology Stack

![JavaScrip](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![MUI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
