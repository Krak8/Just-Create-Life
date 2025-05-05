ServerEvents.tags('item', jcl => {
    jcl.add('c:foods/cooked_egg', ['createfoodfood:cooked_egg'])
    jcl.add('neoforge:dusts/coal', ['create_ironworks:charcoal_dust'])
    jcl.add('neoforge:dusts/coal', ['create_ironworks:coal_dust'])
    jcl.add('forge:dusts/coal', ['create_ironworks:charcoal_dust'])
    jcl.add('forge:dusts/coal', ['create_ironworks:coal_dust'])

    console.info('JCL: Item Tags have been loaded!')
    
})