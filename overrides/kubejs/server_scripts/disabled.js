ServerEvents.recipes(jcl => {
    //jcl.remove({ output:})
    jcl.remove({ output: 'easy_villagers:iron_farm'})
    jcl.remove({ output:'easy_villagers:farmer'})
    //jcl.remove({ output: 'create_mf:saltpeter', type: 'create:milling' })
    //jcl.remove({ output: 'create_mf:sulfur', type: 'create:milling' })
    jcl.remove({ output: 'createsifter:crushed_basalt' })
    jcl.remove({ output: 'garnished:brittle_dust' })
    //jcl.remove({ output: 'create_mf:coal_pin', type: 'create:crushing' })
    jcl.remove({ output: 'garnished:hardened_wrap', type: 'create:sequenced_assembly' })
    jcl.remove({ output: 'create_things_and_misc:empty_ticket', type: 'create:pressing' })
    jcl.remove({ output: 'naturescompass:naturescompass' })
    jcl.remove({ output: 'explorerscompass:explorerscompass' })
    jcl.remove({ id: 'angelring:angel_ring' })
    //  jcl.remove({ mod:'angelring'})
    

    console.info('JCL: Crafting Recipes have been disabled!')

})