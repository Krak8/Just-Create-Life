ServerEvents.recipes(jcl => {
    jcl.remove({ output: 'easy_villagers:iron_farm'})
    jcl.remove({ output:'easy_villagers:farmer'})

    console.log('JCL: Crafting Recipes have been disabled!')

})