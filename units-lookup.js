var parentFS = FeatureSetByName($datastore, 'Pesticide_Table')

var key = $feature.prod_used

var parentFilter = Filter(parentFS, 'prod = @key')
if (parentFilter == null) {
    var parentFilter = "Select product"
}
else {
    var parentFilter = parentFilter
}

var parent = First(parentFilter)

return parent.units