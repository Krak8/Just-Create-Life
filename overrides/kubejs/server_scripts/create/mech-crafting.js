ServerEvents.recipes(jcl => {

    jcl.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        key: {
            A: { item: 'minecraft:feather'},
            B: { item: 'createcasing:creative_casing'},
            C: { item: 'minecraft:netherite_block'},
            D: { item: 'minecraft:blaze_rod'},
            E: { item: 'minecraft:gold_block'},
            F: { item: 'angelring:diamond_ring'},
            G: { item: 'minecraft:nether_star'},
            H: { item: 'create_things_and_misc:vibration_mechanism'}
        },
        pattern: [
            'A   A',
            'BCDCB',
            ' EFE ',
            ' GHG ',
            '  D  '
        ],
        result: { id: 'angelring:angel_ring', count: 1 }
    })

    
    console.info('JCL: Create Mechanical Crafting Recipes has been loaded.')
})