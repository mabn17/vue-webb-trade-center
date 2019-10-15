/** global localStorage */

const list_name = 'shop_items'

const ShopService = {
  getShopAllItems: () => {
    const items = localStorage.getItem(list_name)

    if (items) {
      return JSON.parse(items).items
        .sort((a, b) => (a.id > b.id) ? 1 : -1)
    }
    return []
  },

  setShopItems: newItems => {
    Array.isArray(newItems)
      ? localStorage.setItem(list_name, JSON.stringify({ items: newItems }))
      :  localStorage.setItem(list_name, JSON.stringify(newItems))
  },

  removeAllShopItems: () =>
    localStorage.removeItem(list_name),

  addOneShopItem: item => {
    const items = ShopService.getShopAllItems()
    
    items.push(item)
    ShopService.setShopItems(items)
  },

  removeOrReturnpesificShopItem: (itemToRemove, shouldReturn=false) => {
    const items = ShopService.getShopAllItems()
    let counter = 0,
      removed = null
    
    for (const item of items) {
      if (itemToRemove.id === item.id) {
        removed = items.splice(counter, 1)
        break
      }

      counter += 1
    }

    if (shouldReturn) {
      return removed
    }

    ShopService.setShopItems(items)
  },
}

export default ShopService
