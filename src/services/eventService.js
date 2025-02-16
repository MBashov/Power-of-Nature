import Disaster from "../models/Disaster.js";

export default {
    create(eventData, userId) {
        return Disaster.create({ ...eventData, owner: userId });
    },

    getAll() {
        return Disaster.find({}).select({ name: true, location: true, disasterType: true, image: true });
    },

    getOne(eventId) {
        return Disaster.findById(eventId);
    },

    edit(eventId, eventData) {
        return Disaster.findByIdAndUpdate(eventId, eventData, { runValidators: true });
    },

    async delete(eventId, userId) {
        const event = await this.getOne(eventId);

        const owner = event.owner.equals(userId);
        if (!owner) {
            throw new Error('You are not authorized for this action!');
        }

        return Disaster.findByIdAndDelete(eventId);
    }, 

    async interest(userId, eventId) {
        const event = await this.getOne(eventId);

        const owner = event.owner.equals(userId);
        if (owner) {
            throw new Error('You are not authorized for this action!');
        }

        const isInterested = event.interestedList.includes(userId);
        if (isInterested) {
            throw new Error('You are already intersted in this event!');
        }

        event.interestedList.push(userId);
        return await event.save();
    }
}