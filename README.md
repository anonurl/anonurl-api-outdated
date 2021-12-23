# AnonURL API

[FrontEnd repository](https://github.com/anonurl/anonurl)<br>  
[Discord BOT]() (Upcoming)

## 📖 Summary
[Changelog](https://github.com/anonurl/anonurl-api#changelog)<br>
[Used technologies](https://github.com/anonurl/anonurl-api#usedtech)<br>
[Endpoints](https://github.com/anonurl/anonurl-api#endpoints)<br>
[Setup](https://github.com/anonurl/anonurl-api#setup)<br>

<br><a name="changelog"></a>
## ♻️ Changelog (v1.0.0)
- Initial commit

<br><a name="usedtech"></a>
## ⚙️ Used technologies:
- NodeJS
- Express
- MongoDB

<br><a name="endpoints"></a>
## 🔌 Endpoints
<strong>/api/create (POST):</strong> To create shorted URLs
<strong>/api/track/ID (GET):</strong> To get basic information of a shorten URL
<strong>/api/redirect/ID (GET):</strong> To get information of redirect to shorted URL
<strong>/api/report (POST):</strong> To send a report

<br><a name="setup"></a>
## 🔧 Setup
### Clone this repository:
`git clone https://github.com/anonurl/anonurl-api`

### Move to repository:
`cd anonurl-api`

### Install all dependencies:
`npm install`

### Build:
`npm run build`

### Run (Build):
`npm run start:build`

### Run (Dev):
`npm run start`
