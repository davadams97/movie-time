## Movie-Time

#### How to run the project?

##### Requirements
In order to run the project, you need have `Node <= 14.0.0` and `npm >= 5.6`. <br>
The application by default runs on port 3000. Before you run the application, please
ensure that you have the port available.

You can enter the following command in command prompt to determine whether the port
is in use: `netstat -abo | find "3000"`.

You need to acquire an API key to access the APIs used within the app. Please use 
the [link](https://developers.themoviedb.org/3/getting-started/introduction) to register an 
account and retrieve an API key. 

The application uses a `.env` file. The steps to configure your environment are :

- Create and add a file named `.env` at the root of the project 
- The API is stored under the key `REACT_APP_API_KEY`. Please add the API key here.

##### Running the application

Using the terminal, enter the root level of project. Run `npm run start`.

 


