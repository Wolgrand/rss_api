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
  async index ({ request }) {
	const { page, perPage } = request.get()
  const feeds = await Feed.query()
	  .orderBy("pubDate", "desc")
	  .paginate(page, perPage)

  return feeds
}
  async create ({ request, response, view }) {

    const data = request.only(["source", "title", "link", "thumbnail", "pubDate"])



    const feed = await Feed.create(data)

    return feed

};






  async show ({ params }) {
  const feeds = await Feed.findOrFail(params.source)


  return feeds
};

  }

  module.exports = FeedController
