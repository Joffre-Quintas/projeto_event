const { Router } = require('express');
const EventController = require('../controllers/EventController')

const route = Router();

route.post('/new_event', EventController.newEvent);
route.get('/all_active_events', EventController.allActiveEvents);
route.delete('/delete_event', EventController.deleteEvent);

module.exports = route;