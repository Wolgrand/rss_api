'use strict'

const Feed = use('App/Models/Feed');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with feeds
 */
class FeedController {
  /**
   * Show a list of all feeds.
   * GET feeds
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
  const feeds = Feed.all()

  return feeds
};
  async create ({ request, response, view }) {

    var Feed = require('rss-to-json');

  Feed.load('https://pt.aleteia.org/feed/', function(err, rss){
    console.log(rss);
});

return rss

};






  async show ({ params }) {
  const feeds = await Feed.findOrFail(params.source)


  return feeds
};

  }

export default FeedController
