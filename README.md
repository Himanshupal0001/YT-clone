![Yt-banner](https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/y/youtube-switch/hero)

# YouTube-Clone
This application is built with REACT.JS and allow users to watch videos. It uses the YouTube API to show videos and provide an experience similar to original YouTube. This application also come with features like  highly optimize search feature using denouncing and network caching, code splitting, optimize component for scalability, API pagination & lazy loading, highly scalable optimized live chat simulation for demonstration, similar comment design to YouTube with emoji picker,  centered state management using react-redux. responsive design.

# 💻 Demo
A live demo of the application is available at: 
👉 https://yt-clone-himanshu-prod.vercel.app/

# ⚙ Tech Stack
- React.js
- Redux Toolkit
- Tailwind CSS

# 🚀 Features

##  YouTube API Integration
This application uses the YouTube API to show videos and provide a user experience similar to YouTube. The integration with the YouTube API ensures that the application has access to a vast library of videos, making it a comprehensive video streaming platform.

## Optimized Search feature with Debouncing and Caching
This application comes with an optimized search feature that uses debouncing and caching to reduce the number of API requests. The search feature is highly responsive and provides quick results to users, making it easier to find specific videos.

## Code Splitting
Live feature is splitted from the main js bundle since it is just a simulation of the feature. Since not all checkout this feature it is wise to keep the code split from main js bundle using lazy() import and <Suspense><Suspense/> features of react. It will reduce the overall size of the js bundle and optimize network performance, thus load time will reduce. 

## Infinite Scroll
This application demonstrate two approaches  infinite scrolling. One is load data on scroll and second is on click load. Lazy loading/Infinite scrolling is an advance feature given in most social media apps for better user experience and to engage user for longer time period. 

## Live chat simulation
This application demonstrate optimized live chatting feature using **API POLLONG** which keep in check DOM does not bloat up which is key point of scalable app. It also allow the current user to comment in the live chat.

# 📷 Screenshot

<a href="https://ibb.co/W6bFbPr"><img src="https://i.ibb.co/vH7m7QN/Capture.png" alt="Capture" border="0"></a>

#  🍕 Getting Started

To get started with the app, follow below steps

1. Clone the repository : git clone git@github.com:Himanshupal0001/YT-clone.git
2. Install the dependencies : npm i or npm install
3. Create .env file in root folder and paste your YouTube API key under same variable name **REACT_APP_YOUTUBE_KEY** . For example                                                                       
```
REACT_APP_YOUTUBE_KEY = YOUR_KEY
```
4. Start the application : npm start

# 🤝 Contribution

Contributions are always welcome!  
If you want to contribute, you can follow these steps:

-   Fork the repository.
-   Create a new branch with a descriptive name for your feature or bug fix.
-   Write your code and commit your changes.
-   Push your changes to your forked repository.
-   Submit a pull request to the original repository
