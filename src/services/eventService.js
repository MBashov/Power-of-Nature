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

    async delete(eventId, userId) {
        const event = await this.getOne(eventId);

        const owner = event.owner.equals(userId);
        
        if (!owner) {
            throw new Error('You are not authorized for this action!');
        }
        
        return Disaster.findByIdAndDelete(eventId);
    }
}