export const nestObjectArrayByKey = (arr, prop='item_name') => {
  const placeHolder = {}

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    
    if (placeHolder[item[prop]]) {
      placeHolder[item[prop]].push(item)
      continue
    }

    placeHolder[item[prop]] = []
    placeHolder[item[prop]].push(item)
  }
  
  return placeHolder
}

export const filterByObjProp = (arr, prop='when_time') => {
  const placeHolder = []

  arr.forEach(item =>
    prop === 'when_time'
      ? placeHolder.unshift(item[prop].slice(-9).replace('-', '/'))
      : placeHolder.unshift(item[prop])
  )

  return placeHolder
}
