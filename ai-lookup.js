var parentFS = FeatureSetByName($datastore, 'Pesticide_Table');
var key = $feature.prod_used;
//Reference to the parent feature set by name, declares key as the child's globalid

parentFS = Filter(parentFS, "prod = @key");
//Reassigns parent feature set to the same set filtered such that the parent globalid matches the child's key

var parent = First(parentFS);
//Declares parent as the first result from the filter, may not be necessary in a 1-M relationship

return parent.ai
//Returns the field 'ai' from the feature 'parent'
