MovieHub
MovieHub is a simple React application that allows users to search for movies using the OMDb API. Users can enter a movie title in the search bar, and the application will display a list of matching movies. If no movies are found, a message will inform the user.
Features
Search for movies by title.
Display a list of movie cards with relevant information.
User-friendly interface with a search icon.
Alerts the user if no title is entered.
Technologies Used
React: The core library for building the user interface.
SCSS: For styling the application.
Font Awesome: For icons.
OMDb API: To fetch movie data.
Getting Started
Prerequisites
Node.js installed on your machine.
A package manager like npm or yarn.
Installation
Clone the repository:
bash
git clone <repository-url>
cd moviehub

Install the dependencies:
bash
npm install

Start the development server:
bash
npm start

Open your browser and navigate to http://localhost:3000 to view the application.
Environment Variables
You may want to store your API key in an environment variable. Create a .env file in the root of your project and add the following line:
text
REACT_APP_OMDB_API_KEY=e13d9c34

Then, update the API_URL in your App.js to use this environment variable:
javascript
const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

Usage
Enter a movie title in the search input field.
Press Enter or click the search icon to fetch the movie data.
The application will display the search results as movie cards.
If no movies are found, a message will inform you.
Code Overview
Main Components
App Component: The main component that manages the state and handles API calls.
MovieCard Component: Displays individual movie information.
Key Functions
searchMovies(title): Fetches movie data from the OMDb API based on the title provided.
handleKeyPress(e): Listens for the Enter key to trigger the search.
Contribution
Feel free to fork the repository and make improvements. If you have suggestions or issues, please open an issue in the GitHub repository.
License
This project is licensed under the MIT License. See the LICENSE file for details.
Acknowledgments
OMDb API for providing movie data.
Font Awesome for icons.
React for the library used to build the application.
