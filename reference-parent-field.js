var parentFS = FeatureSetByName($datastore, 'feature set name');
var key = $feature.parentglobalid;
//Reference to the parent feature set by name, declares key as the child's globalid

parentFS = Filter(parentFS, "GlobalID = @key");
//Reassigns parent feature set to the same set filtered such that the parent globalid matches the child's key

var parent = First(parentFS);
//Declares parent as the first result from the filter, may not be necessary in a 1-M relationship

return parent.area
//Returns the field 'area' from the feature 'parent'