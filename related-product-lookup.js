var productRT = FeatureSetByName($datastore, 'table_name');
var key = $feature.prod_used;
//Reference to the parent feature set by name, declares key as the child's globalid

productRT = Filter(productRT, "GlobalID = @key");
//Reassigns parent feature set to the same set filtered such that the parent globalid matches the child's key

var parent = First(productRT);
//Declares parent as the first result from the filter, may not be necessary in a 1-M relationship

return parent.field
//Returns the field from the feature 'parent'