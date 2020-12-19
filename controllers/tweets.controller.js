// Iteration 3: import tweets data
const { includes } = require('../data/tweets');
const tweetsDB = require('../data/tweets');
const uuid = require('uuid');
// Iteration 3: list tweets from file
module.exports.list = (req, res, next) => {
    // Order tweets desc by date
    const { user } = req.query;
    const tweets = tweetsDB
        .filter(tweet => user ? tweet.user.includes(user) : true)
        .sort((prevTweet, nextTweet) => nextTweet.createdAt - prevTweet.createdAt);

    res.render('tweets/list', {
        tweet: tweets,
        user: user
    });

    // Iteration 4: filter tweets by user checking the query param 'name'
}

// Iteration 5: Create tweet validating body params
module.exports.create = (req, res, next) => {}

// Iteration 6: find tweet by id path param and delete it if exists
module.exports.delete = (req, res, next) => {}