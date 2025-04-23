ServerEvents.recipes(jcl => {
    jcl.remove({ output: 'easy_villagers:iron_farm'})
    jcl.remove({ output:'easy_villagers:farmer'})
    jcl.remove({ output: 'create_mf:saltpeter', type: 'create:milling' })
    jcl.remove({ output: 'create_mf:sulfur', type: 'create:milling' })
    jcl.remove({ output: 'createsifter:crushed_basalt' })
    jcl.remove({ output: 'garnished:brittle_dust' })

    console.log('JCL: Crafting Recipes have been disabled!')

})