module.exports = function (context, stayAliveTimer) {
    var timeStamp = new Date().toISOString();

    if(stayAliveTimer.isPastDue)
    {
        context.log('Timer is past due!');
    }
    context.log('JavaScript timer trigger function ran!', timeStamp);\
    context.done();
};
