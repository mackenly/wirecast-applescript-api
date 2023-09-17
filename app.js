const applescript = require('applescript');
const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT;
const WIRECAST_DOCUMENT = process.env.WIRECAST_DOCUMENT;

const app = express();
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server Listening on PORT: http://localhost:${PORT}`);
});

class WirecastController {
    document;
    baseCommand;

    constructor(document) {
        this.document = document;
        this.baseCommand = `tell application "Wirecast"\n set myDoc to last document\n `;
    }

    execute(command) {
        applescript.execString(this.baseCommand + command);
    }

    startRecording() {
        this.execute("start recording myDoc\nend tell");
    }

    stopRecording() {
        this.execute("stop recording myDoc\nend tell");
    }

    startBroadcasting() {
        this.execute("start broadcasting myDoc\nend tell");
    }

    stopBroadcasting() {
        this.execute("stop broadcasting myDoc\nend tell");
    }
}

let doc = new WirecastController(process.env.WIRECAST_DOCUMENT);

app.get("/", (request, response) => {
    const status = {
        "Status": "Running"
    };

    response.send(status);
})

// Start recording
app.get("/start-recording", (request, response) => {
    try {
        doc.startRecording();
    } catch {
        console.log("Error")
    }
    const status = {
        "Status": "Started"
    };
    response.send(status);
})

// Stop recording
app.get("/stop-recording", (request, response) => {
    try {
        doc.stopRecording();
    } catch {
        console.log("Error")
    }
    const status = {
        "Status": "Stopped"
    };
    response.send(status);
})

// Start broadcasting
app.get("/start-broadcasting", (request, response) => {
    try {
        doc.startBroadcasting();
    } catch {
        console.log("Error")
    }
    const status = {
        "Status": "Started"
    };
    response.send(status);
})

// Stop broadcasting
app.get("/stop-broadcasting", (request, response) => {
    try {
        doc.stopBroadcasting();
    } catch {
        console.log("Error")
    }
    const status = {
        "Status": "Stopped"
    };
    response.send(status);
})
