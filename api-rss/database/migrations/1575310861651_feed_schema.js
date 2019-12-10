'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FeedSchema extends Schema {
  up () {
    this.create('feeds', (table) => {
      table.increments()
      table.string('source').notNullable()
      table.string('title').notNullable()
      table.string('link').notNullable()
      table.string('description').notNullable()
      table.string('thumbnail').notNullable()
      table.date('pubDate').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('feeds')
  }
}

module.exports = FeedSchema
