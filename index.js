const getToken = require("./get_token").getToken;
const getView = require("./function").getView;
const putTitle = require("./function").putTitle;
var cron = require('node-cron');



async function lamGiDo() {
    const token = await getToken();
    const getDataView = await getView(token.data.access_token);
    const view = getDataView.data.items[0].statistics.viewCount;
    console.log(token.data.access_token);
    console.log(view);
    const resPut = await putTitle(token.data.access_token, view);
    console.log(resPut.data);
}


 
cron.schedule('* * * * *', () => {
  lamGiDo();
  console.log('running a task every minute');
});