# wirecast-applescript-api
Express API for sending commands to Wirecast on Mac using AppleScript

This tool is Mac only since it uses AppleScript to send commands to Wirecast. In addition, it requires that you have a Wirecast document open and running and that it is run on the same machine as Wirecast.

## Usage
- Clone this repo
- `npm install`
- Edit `.env.example` to match your Wirecast document name and rename to `.env
- `npm start`
- Send requests

Originally inspired by [jakobo/wirecast-utilities](https://github.com/iamjohnbarker/wirecast-applescript).
