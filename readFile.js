const fs = require("fs");

const filePath = "./example.txt";

fs.readFile(filePath, "utf8", (err, data) => {
	if (err) {
		console.log("Error file reading: ", err);
		return;
	}
	console.log(`File data\n---------\n${data}`);
});
