ServerEvents.recipes(jcl => {
    jcl.shapeless('createsifter:crushed_netherrack', ['create:cinder_flour'])
    jcl.shapeless('create:cinder_flour', ['createsifter:crushed_netherrack'])
    jcl.shapeless('createfoodfood:cooked_egg', ['farmersdelight:fried_egg'])

    console.log('JCL: Crafting Recipes have been loaded!')
    
})