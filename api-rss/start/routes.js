'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')
Route.post('/feed', 'FeedController.create')

//Route.get('/feed', 'FeedController.index')



Route.get('/', 'FeedController.index' )
