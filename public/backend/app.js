const GetAllDonor = require("./getAllDonor");
class App extends GetAllDonor {
    constructor() {
        super();
    }
}
const app = new App();
console.log(app.getDonor());
