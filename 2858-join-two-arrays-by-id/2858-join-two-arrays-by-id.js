var join = function(arr1, arr2) {
    // Create a map to store the merged objects by their id
    const map = new Map();

    // Process arr1
    arr1.forEach(obj => {
        map.set(obj.id, { ...obj }); // Add a copy of the object to prevent mutation
    });

    // Process arr2
    arr2.forEach(obj => {
        if (map.has(obj.id)) {
            // If the id exists in the map, merge with the existing object
            map.set(obj.id, { ...map.get(obj.id), ...obj });
        } else {
            // If the id doesn't exist, just add the object
            map.set(obj.id, { ...obj });
        }
    });

    // Convert the map values into an array and sort by the id
    const result = Array.from(map.values()).sort((a, b) => a.id - b.id);

    return result;
};
