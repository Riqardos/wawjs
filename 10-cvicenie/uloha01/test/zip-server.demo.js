const {spawn} = require('child_process')
const path = require('path')

console.log('DEMO')
const server = spawn('node', [path.join(path.resolve(__dirname), '..', 'src' ,'zip-server.js'),'demo_server_folder'])

server.stdout.on('data', (data) => {
    console.log(`stdout/server: ${data}`)
});

server.stderr.on('data',(data) =>{
    console.log(`stderr/server: ${data}`)
})

const client = spawn('node', [path.join(__dirname, '..', 'src', 'zip-client.js'),'test.txt'])

client.stdout.on('data', (data) => {
    console.log(`stdout/client: ${data}`)
});
client.stderr.on('data', (data) => {
    console.log(`stderr/client: ${data}`)
});

