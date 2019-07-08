const sketch = require('sketch')
const { DataSupplier } = sketch
const util = require('util')

export function onStartup () {
  // To register the plugin, uncomment the relevant type:
  DataSupplier.registerDataSupplier('public.text', 'Address', 'SupplyAddress')
  // DataSupplier.registerDataSupplier('public.image', 'hello-data', 'SupplyData')
}

export function onShutdown () {
  DataSupplier.deregisterDataSuppliers()
}

export function onSupplyData (context) {
  let dataKey = context.data.key
  var theData = ('hello data')
  const items = util.toArray(context.data.items).map(sketch.fromNative)
  items.forEach((item, index) => {
    let data = theData.toString()
    DataSupplier.supplyDataAtIndex(dataKey, data, index)
  })
}