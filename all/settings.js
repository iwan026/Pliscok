require("./module")

global.owner = "6281392842481"
global.creAtor = "6281392842481@s.whatsapp.net"
global.namabot = "yuibotz"
global.autoJoin = false
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
global.thumb = fs.readFileSync("./thumb.png")
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.packname = ""
global.author = "Sticker By YuiBotz"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})