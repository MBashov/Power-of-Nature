import Disaster from "../models/Disaster.js";

export default {
    create(eventData, userId) {
        return Disaster.create({ ...eventData, owner: userId });
    }
}