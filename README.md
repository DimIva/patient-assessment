Installation
Clone the repository:

git clone https://github.com/DimIva/patient-assessment
cd patient-assessment
Install dependencies:
npm install

Сontact me if you want to get the environment variables and run the project locally

Run the application:
npm start


Technologies Used
React: JavaScript library for building user interfaces.
TypeScript: Provides static type checking, ensuring better development experience.
React Query: Powerful asynchronous state management for server-state data fetching.
React router for project routing.
Authentication: Firebase has been integrated into the project for user authentication.

Challenges Faced and How I Overcame Them
Creating and Structuring API Simulation:

Challenge: Developing a mock API to simulate data fetching for the quiz questions was challenging. I needed to ensure that the data structure accurately reflected what a real API would return.
Solution: I designed a series of TypeScript interfaces that represented the various question types, which helped guide the creation of the mock data. By implementing a fetchQuestions function that returns a promise, I was able to simulate an asynchronous API call, making it easier to manage loading states and errors.