ServerEvents.recipes(jcl => {
    jcl.shapeless('createsifter:crushed_netherrack', ['create:cinder_flour'])
    jcl.shapeless('create:cinder_flour', ['createsifter:crushed_netherrack'])
    jcl.shapeless('createfoodfood:cooked_egg', ['farmersdelight:fried_egg'])
    jcl.shapeless('create_ironworks:coal_dust', ['create_ironworks:charcoal_dust'])
    jcl.shapeless('create_mf:coal_pin', ['create_ironworks:coal_dust'])
    jcl.shapeless('create_ironworks:coal_dust', ['create_mf:coal_pin'])


    jcl.shaped( Item.of ('create_things_and_misc:empty_ticket', 2), ['A','A'],{ A: 'minecraft:paper' } )
    jcl.shaped( Item.of ('naturescompass:naturescompass', 1), ['ASA','BCB','ABA'],{ A: '#minecraft:saplings', B: '#minecraft:logs', C: 'minecraft:compass', S: 'create:precision_mechanism' } )
    jcl.shaped( Item.of ('explorerscompass:explorerscompass', 1), ['ASA','BCB','ABA'],{ A: 'minecraft:cobweb', B: 'minecraft:cracked_stone_bricks', C: 'minecraft:compass', S: 'create:precision_mechanism' } )

    console.info('JCL: Crafting Recipes have been loaded!')
    
})