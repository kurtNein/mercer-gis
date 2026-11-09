// 1. Define the point geometry and search radius (adjust units as needed)
var pointGeom = Geometry($feature);
var searchRadius = 500; // Distance in map units (e.g., meters or feet)
var bufferGeom = Buffer(pointGeom, searchRadius);

// 2. Fetch the line layer and filter by the buffer zone
var lineLayer = FeatureSetByName($datastore, 'Roads_MaintSegments_ExportFeatures', ["*"], true); // Roads_MaintSegments
var nearbyLines = Intersects(lineLayer, bufferGeom);

// 3. Loop through nearby lines to find the absolute closest line feature
var minDistance = Infinity;
var closestLine = null;

for (var lineFeature in nearbyLines) {
    var dist = Distance(pointGeom, lineFeature);
    if (dist < minDistance) {
        minDistance = dist;
        closestLine = lineFeature;
    }
}

// 4. Calculate and adjust the angle if a line is found
if (closestLine != null) {
    var nearestPointOnLine = NearestCoordinate(closestLine, pointGeom).coordinate;
    
    // FIXED: Calculate delta vector from the LINE to the POINT
    var deltaX = pointGeom.x - nearestPointOnLine.x;
    var deltaY = pointGeom.y - nearestPointOnLine.y;
    
    // Calculate arithmetic angle in radians and convert to degrees
    var radAngle = Atan2(deltaY, deltaX);
    var degAngle = radAngle * 180 / pi; 
    
    // Convert to standard Geographic Bearing (0 is North, clockwise)
    var geographicBearing = (450 - degAngle) % 360;
    
    // 5. Adjust bearing based on the "out_direction" attribute
    var direction = Lower($feature.OUT_DIR); 
    var adjustment = 0;
    
    if (direction == "right") {
        adjustment = 90;
    } else if (direction == "street") {
        adjustment = 180;
    } else if (direction == "left") {
        adjustment = 270;
    } 
    
    // Apply adjustment and safely wrap around the 0/360 mark
    var finalBearing = (geographicBearing + adjustment) % 360;
    
    return finalBearing;
}

return null;
