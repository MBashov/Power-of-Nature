export default function getDisasterTypes(disasterType) {

    const disasterTypes = ["Wildfire", "Flood", "Earthquake", "Hurricane", "Drought", "Tsunami", "Other"];

    const types = disasterTypes.map(type => ({
        value: type, 
        label: type, 
        selected: disasterType === type ? 'selected' : ''}));

    return types;
}