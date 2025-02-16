import { Router } from "express";
import eventService from "../services/eventService.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import getDisasterTypes from "../utils/getDisasterTypesUtils.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const eventController = Router();

eventController.get('/catalog', async (req, res) => {

    try {
        const events = await eventService.getAll();
        res.render('disaster/catalog', { events });
    } catch (err) {
        //TODO: Error handling
    }
});

eventController.get('/:eventId/details', async (req, res) => {
    const eventId = req.params.eventId;

    try {
        const event = await eventService.getOne(eventId);

        const owner = event.owner.equals(req.user?.id);
        const isInterested = event.interestedList.includes(req.user?.id);

        res.render('disaster/details', { event, owner, isInterested });
    } catch (err) {
        //TODO: Error handling
    }
});

eventController.get('/create', isAuth, (req, res) => {
    const types = getDisasterTypes();
    res.render('disaster/create', { types });
});

eventController.post('/create', isAuth, async (req, res) => {
    const eventData = req.body;

    try {
        await eventService.create(eventData, req.user.id);
        res.redirect('/events/catalog');
    } catch (err) {
        const types = getDisasterTypes(eventData.disasterType);

        res.render('disaster/create', { eventData, types, error: getErrorMessage(err) });
    }
});

eventController.get('/:eventId/delete', isAuth, async (req, res) => {
    const eventId = req.params.eventId;
    const userId = req.user.id;

    try {
        await eventService.delete(eventId, userId);
        res.redirect('/events/catalog');
    } catch (err) {
        res.setError(getErrorMessage(err));
        res.redirect(`/events/${eventId}/details`);
    }
});

eventController.get('/:eventId/edit', isAuth, async (req, res) => {
    const eventId = req.params.eventId;

    try {
        const event = await eventService.getOne(eventId);
        const types = getDisasterTypes(event.disasterType);

        const isOwner = event.owner.equals(req.user.id);
        if (!isOwner) {
            res.setError('You are not authorized for this action!');
            return res.redirect(`/events/${eventId}/details`);
        }

        res.render('disaster/edit', { event, types });
    } catch (err) {
        //TODO Error handling
    }
});

eventController.post('/:eventId/edit', isAuth, async (req, res) => {
    const eventId = req.params.eventId;
    const eventData = req.body;

    try {
        const event = await eventService.getOne(eventId);

        const isOwner = event.owner.equals(req.user.id);
        if (!isOwner) {
            res.setError('You are not authorized for this action!');
            return res.redirect(`/events/${eventId}/details`);
        }

        await eventService.edit(eventId, eventData);
        res.redirect(`/events/${eventId}/details`);
    } catch (err) {
        console.log(err);
        
        const types = getDisasterTypes(eventData.disasterType);
        res.render('disaster/edit', { event: eventData, types, error: getErrorMessage(err) });
    }
});

eventController.get('/:eventId/interest',isAuth, async (req, res) => {
    const eventId = req.params.eventId;

    try {
        await eventService.interest(req.user.id, eventId);
    } catch (err) {
        res.setError(getErrorMessage(err));
    }
    
    res.redirect(`/events/${eventId}/details`);
});

export default eventController;