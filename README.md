<p align="center">  
  <img 
    src="https://raw.githubusercontent.com/gitpullsh/contacts/master/docs/contacts-logo-small.png" 
    alt="contacts logo small"
  />
  <h1 align="center">Contacts</h1>
  <p align="center">📘 A contacts directory app made with ⚛ React.js and 🐱 💻 .NET Core</p>
</p>
<p align="center">  
  <img
    src="https://raw.githubusercontent.com/gitpullsh/contacts/master/docs/screenshot.png" 
    alt="screenshot"
  />
</p>

## Motivation
Use .NET Core to create a WebAPI.

## Architecture
Contacts app uses a client made with React.js with a server made with .NETCore which connects to a SQLite database.
The client side interacts with the server through HTTP requests and renders the UI based on the received data.

<p align="center">  
  <img
    src="https://raw.githubusercontent.com/gitpullsh/contacts/master/docs/architecture_%20diagram.png" 
    alt="contacts directory architecture"
  />
</p>

## API
API documentation is made with Swagger. You can use it following these steps:
Run:
```bash
dotnet run ./server/ContactsDirectory.API
```
Then open one of the following links in your browser:
- HTTPS: https://localhost:5001/swagger/index.html
- HTTP: http://localhost:5000/swagger/index.html
