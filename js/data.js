const data = {
    // 首页头部轮播图
    head: {
        pc: [{img: "images/pc/header1.jpg"}],
        phone: [{img: "images/phone/header1.jpg"}]
    },
    // 分类
    category: [
        "Hair Care","Hair Styling","Wig Care","Accessories"
    ],
    // 产品列表
    productList: [
        {
            id: 1,
            title: 'Braid gel',
            category: 'Hair Styling',
            img: ["images/braidGel/braid gel1.jpg", "images/braidGel/braid gel2.jpg"],
            sku:{
                volume:['250ml / 8.7oz']
            },
            number: '0114',
            detail: 'Ingredients:\n' +
                'Aqua,(Water), Alcohol Ethoxylate, Ceteareth-25, ' +
                'Dimethicone, Calodendrum Capense Nut Oil, Squalane,' +
                ' Tocopherol, Maackia Fauriei Stem Extract, ' +
                'Hydrogenated Castor Oil, VP/Dmapa Acrylates Copolymer,' +
                ' Potassium Sorbate, Parfum, Peg-40 Sorbitan Laurate.\n\n' +
                'Directions:\n' +
                'Use on damp or dry hair.\n' +
                'Apply a small amount of gel to hair roots or hairline.\n' +
                'Smooth product in to section braid, twist and style as desired.\n' +
                'Air dry or sit under a hooded dryer to set style.\n' +
                '\n' +
                'Cautions:\n' +
                '1). For external use only.\n' +
                '2). Keep out of reach for children.\n' +
                '3). Avoid contact with eyes.\n' +
                '4). Avoid long term high temperature Storage.\n' +
                'Batch No.: 0114\n' +
                'Made in China'
        }, {
            id: 2,
            title: 'Braid mousse',
            sku:{
                volume:['150ml / 5.07oz']
            },
            number: '0118',
            category: 'Wig Care',
            img: ["images/braidMousse/braid mousse1.jpg", "images/braidMousse/braid mousse2.jpg"],
            detail: 'Ingredients:\n' +
                'Aqua (Water),Acrylates/VP\n' +
                'Copolymer,Cocamidopropy Betaine,\n' +
                'Methyl Benzoate, Propylene Glycol, Peg-40\n' +
                'Hydrogenated Costor Oil,RubusChingii Extract, Diazolidiny Urea\n' +
                '\n' +
                'Directions:\n' +
                'Apply Braid foam to your finished braided\n' +
                'hairstyle.Gently into your hairand\n' +
                'carefully from root to tips, Secure with scarf for 15\n' +
                'minutes.Remove scarf and allow product to air dry.\n\n' +
                'Cautions:\n' +
                'Avoid contact with eyes.Flush with\n' +
                'Seal & Set Braid\n' +
                'Long Last Hold\n' +
                'water if contact occurs,\n' +
                'Keep out of reach for children,\n' +
                'Avoid direct sunlight of high temperature.\n' +
                '\n' +
                '\n' +
                'Batch No.: 0118\n' +
                'Made in China'
        },
        {
            id: 3,
            title: 'Braid sheen spray',
            sku:{
                volume:['120ml / 4.1oz']
            },
            number: '0115',
            category: 'Wig Care',
            img: ["images/braidSheenSpray/braid sheen spray1.jpg", "images/braidSheenSpray/braid sheen spray2.jpg"],
            detail: '\n' +
                'Ingredients: \n' +
                'Aqua (Water), Glycerin, Propylene Glycol, \n' +
                'Lavandula Angustifolia(Lavender)\n' +
                'Flower/Leaf/Stem Extract,PEG-10 \n' +
                'Hydrogenated Castor Oil, Panthenol, Collagen,\n' +
                ' Cocos Nucifera (Coconut) Oil, \n' +
                'Hydrogenated Olive Oil, Menthol,\n' +
                'Sodium Hyaluronate,Acrylates Copolymer,\n' +
                ' Potassium Sorbate, and Aroma.\n\n' +

                'Directions:\n' +
                'Spray on scalp after hair has been braided.\n' +
                'Use daily for best results.\n' +
                'Spray on scalp and braids as needed.\n\n' +
                'Cautions：\n' +
                '1). Avoid contact with eyes. Flush with water if contact occurs.\n' +
                '2). Keep out of reach for children.\n' +
                '3). Avoid direct sunlight or high temperature.\n' +
                '\n' +
                'Batch No.: 0115\n' +
                'Made in China\n'
        },
        {
            id: 4,
            title: 'Curl cream',

            sku:{
                volume:['250ml / 8.8oz']
            },
            number: '0146',
            category: 'Hair Care',
            img: ["images/curlCream/curl cream1.jpg", "images/curlCream/curl cream2.jpg"],
            detail: 'Ingredients:\n' +
                'Aqua( Water), PVP, Glycerin, Cetearech, Propylene Glycol USP Grade, Mineral Oil, Parfum, Methylparaben, Phenoxyethanol.\n' +
                '\n' +
                'Usages:\n' +
                'Scoop required amount of curl cream in hand and rub together.\n' +
                'Apply to wet damp hair from roots to ends.\n' +
                'Apply more and style as desired, do not rinse out.\n' +
                '\n' +
                'Batch No.: 0146\n' +
                'Made in China'
        },
        {
            id: 5,
            title: 'Hair styling mousse',
            sku:{
                volume:['200ml / 5.07oz']
            },
            number: '0119',
            category: 'Hair Styling',
            img: ["images/hairStyleMousse/curl hair mousse1.jpg", "images/hairStyleMousse/curl hair mousse2.jpg"],
            detail: 'Ingredients:\n' +
                'Aqua( Water), Olive Fruit Oil, Hydrogenated Castor oil, Acrylates, Copolymer, Cocamidopropyl Betaine, Peg-20 Diethicone, Disodium edta, Methylchloroisothiazolione, Fragrance.\n' +
                '\n' +
                'Directions:\n' +
                'Apply mousse liberally to towel dried hair from roots to ends for definition. Allow hair to air dry or diffuse.\n' +
                '\n' +
                'Cations:\n' +
                'For external use only.\n' +
                'Do a patch test on skin areas before use.\n' +
                'Avoid contact with eyes.\n' +
                'Keep out of reach for children.\n' +
                '\n' +
                'Batch No.: 0119\n' +
                'Made in China'
        },
        {
            id: 6,
            title: 'Lace glue',
            sku:{
                volume:['38ml / 1.3oz'],
                scented:['Unscented', 'Strawberry scented', 'Watermelon scented'],
            },
            number: '0113',
            category: 'Wig Care',
            img: ["images/extraLaceWigGlue/extra lace wig glue1.jpg", "images/extraLaceWigGlue/extra lace wig glue2.jpg"
            ,"images/extraLaceWigGlue/strawberry scented.jpg", "images/extraLaceWigGlue/watermelon scented.jpg",
                "images/extraLaceWigGlue/top.jpg"],
            detail: 'Ingredients:\n' +
                'Polyacrylate Rubber Copolymer, Filler(Sodium Bicarbonate), Solvent ethanol, Surfactants(Sodium dodecyldiphenyl ether disulfonate.\n' +
                '\n' +
                'Directions:\n' +
                '1).Clean hairline and spray with skin protect.\n' +
                '2).Apply thin clear up to 2-4 layers of glue.\n' +
                '3).Apply your lace and begin the melt down.\n' +
                '4).Allow to cure for 24 hours before getting it wet.\n' +
                '\n' +
                'Cautions:\n' +
                'For external use only.\n' +
                'Please do a patch on skin areas before use.\n' +
                'Avoid contact with eyes.\n' +
                'Keep out of reach for children.\n' +
                '\n' +
                'Batch No.: 0113\n' +
                'Made in China'
        },
        {
            id: 7,
            title: 'Ginger conditioner',
            category: 'Hair Care',
            sku:{
                volume:['500ml / 16.91oz']
            },
            number: '0127',
            img: ["images/gingerConditioner/ginger conditioner1.jpg"],
            detail: 'ingredients :\n' +
                'Water, Cetearyl Alcohol, Steartrimonium Choride Alcohol, Butylene Glycol, Methylparaben,  Dimethicone, Curcuma Longa(turmeric), Root Extract, Guar Hydroxypropyltrimonium Chloride,Cyclopentasiloxane, Fragrance, Zingiber Officinale(ginger) Root Extract, Citric Acid, Phenoxyethsnol, Ci 19140, Maenium Nitrate, Ci 15985, Methylchloroisothiazolinone, Magnesium Chloride, Methylisothiazolinone.\n' +
                '\n' +
                'Batch No.: 0127\n' +
                'Made in China'
        },
        {
            id: 8,
            title: 'Ginger shampoo',
            sku:{
                volume:['500ml / 16.91oz']
            },
            number: '0126',
            category: 'Hair Care',
            img: ["images/gingerShampoo/ginger shampoo1.jpg"],
            detail: 'Ingredients:\n' +
                'Water, Platycladus Orientalis Extract, Dioscorea Opposita Extract, Zingiber Officinale(ginger) Extract, Ligustrum Lucidum Extract, Taxillus Chinensis Extract, Cinnamomum Cassia Extract, Alcohol, Sodium Laureth Sulfate, Disodium Laureth Sulfosuccinate, Lauramidopropyl Betaine, Dimethicone, Glycol Stearate, Cocamide Dea, Stearyl Alcohol,  Phenoxyethanol, Propylparaben, Butylparaben, Methylparaben, Ethylparaben, Polyquaternium-10, Sodium Citrate, Fragrance, Sodium Oxide, Citric Acid.\n' +
                '\n' +
                'Batch No.: 0126\n' +
                'Made in China'
        },
        {
            id: 9,
            title: 'Lace melting spray',
            category: 'Hair Styling',

            sku:{
                volume:['130ml / 4.4oz']
            },
            number: '0125',
            img: ["images/laceMeltingSpray/lace melting spray1.jpg", "images/laceMeltingSpray/lace melting spray2.jpg"],
            detail: 'Lace melting spray is quick and easy wiginstall spray that is glueless and gentle on your hairline for everyday lace wig warers. It can be removed with water and does not leave a heavy residue.\n' +
                '\n' +
                'Ingredients:\n' +
                'Acrylates Copolymer, Rosa Rugosa Leaf Extract, Aloe Yohjyu Matsu, Panthenol, Cithmum Maritimum Extract, Rosmarinus Officinalis (Rosemary) Leaf Extract, Melaleuca Alternifolia( Tea Tree) Leaf Extract, Salvia Officinalis (Sage) Oil, Alcohol Denat, Aroma, Potassium Sorbate.\n\n' +
                'Directions:\n' +
                'Remove all residues and dirt around hairline.\n' +
                'Spray thin layers above hairline.\n' +
                'Wait until melting spray becomes tacky or dry with blow dryer.\n' +
                'Apply lace onto the tacky substance that you created above your hairline.\n' +
                'Spray more layers until lace is completed adhered.\n' +
                'Tie down for 15-20 minutes for best result.\n' +
                '\n' +
                'Batch No. 0125\n' +
                'Made in China'
        },
        {
            id: 10,
            title: 'Skin protection',
            category: 'Hair Care',

            sku:{
                volume:['60ml / 2oz']
            },
            number: '0132',
            img: ["images/skinProtection/skin protection1.jpg", "images/skinProtection/skin protection2.jpg"],
            detail: 'Ingredients: Aqua(Water), Ethanol, Methyl Methacrylate, BOP, Cellulose.\n' +
                '\n' +
                'Directions:\n' +
                '1). Shake bottle well before use.\n' +
                '2). Spray directly to skin where Adhesive will be applied or apply to cloth and dab across area.\n' +
                '3). Let it air dry or use a blow dryer and your ready to apply.\n' +
                '\n' +
                'Cautions:\n' +
                'Patch test on your arm before use. If irritation occurs do not proceed.\n' +
                'For eternal use only. Do not ingest.\n' +
                'Keep away from heat, sparks and flames.\n' +
                'Keep out of reach for children.\n' +
                'Do not store about 120 degrees F/48 degrees C.\n' +
                '\n' +
                'Batch No.:0132\n' +
                'Made in China'
        },
        {
            id: 11,
            title: 'Hair wax stick',
            category: 'Hair Styling',

            sku:{
                volume:['75g / 2.7oz']
            },
            number: '0112',
            img: ["images/hairWaxStick/wax stick1.jpg", "images/hairWaxStick/wax stick2.jpg"],
            detail: 'Ingredients: \n' +
                'Aqua,Petrolatum,Glycerin,Glyceryl,StearateSE,Beeswax,Kaolin,Microcrystalline,wax,Cyclopentasiloxane,Parfum,Methylparaben.\n' +
                '\n' +
                'Cautions：\n' +
                'For external use only.\n' +
                'Please do a patch test on skin areas before use.\n' +
                'Avoid contact with eyes.\n' +
                'Keep our of reach for children.\n' +
                '\n' +
                'Directions:\n' +
                ' Apply the stick directly on the hair to smooth and tame fly away and baby hairs. You can also rub a small amount of wax between finger tips and apply for texture, hold & shine.\n' +
                '\n' +
                'Batch No. 0112\n' +
                'Made in China'
        }, {
            id: 12,
            title: 'Hair glue liquid gel',
            category: 'Wig Care',
            sku:{
                volume:['200ml / 6.8oz']
            },
            number: '0110',
            img: ["images/hairGlueLiquidGel/glue gel1.jpg", "images/hairGlueLiquidGel/glue gel2.jpg"],
            detail: 'Directions:\n' +
                'Clean hairline and use skin protection. Apply glue gel along clean hairline, let sit,and apply 2-3 layers then place on hairline and press in place. \n' +
                '\n' +
                'Ingredients:\n' +
                'Aqua( Water), Acrylates Copolymer, Alcohol, DMDM Hydatoin, Polysorbate 20, Fragrance.\n' +
                '\n' +
                'Batch No.:0110\n' +
                'Made in China'
        }
        , {
            id: 13,
            title: 'Hair edge control',
            category: 'Hair Styling',
            sku:{
                volume:['100ml / 3.5oz']
            },
            number: '0111',
            img: ["images/hairEdgeControl/hair edge control1.jpg", "images/hairEdgeControl/hair edge control2.jpg"],
            detail: 'Ingredients: \n' +
                'Aqua,Glycerol, Vitamin E, Vegetable Amino Acids, Dexpanthenol, Beeswax, VP/VA cOPOLYMER, DMDMHydantion, Fragrance.\n' +
                '\n' +
                'Directions:\n' +
                ' Apply a small amount to clean hair. A little will take you far! Use a comb, edge brush or finger to achieve desired look and style.\n' +
                '\n' +
                'Batch No. 0111\n' +
                'Made in China'
        },
        {
            id: 14,
            title: 'Lace glue remover spray',
            category: 'Wig Care',
            sku:{
                volume:['120ml / 4.06oz']
            },
            number: '0114',
            img: ["images/laceGlueRemover/lace remover spray1.jpg", "images/laceGlueRemover/lace remover spray2.jpg"],
            detail: 'Directions:\n' +
                'Apply to spray of your lace directly on adhesive.\n' +
                'Rub the solution in circular motions and wait 1-5mins.\n' +
                'Gently lift lace from natural hair.\n' +
                'Clean lace and skin to remove any residue.\n' +
                'Repent it if necessary.\n' +
                '\n' +
                'Ingredients:\n' +
                'Hydrocarbons, Organic, Wetting agents, Citus oils.\n' +
                '\n' +
                'Cations:\n' +
                'For external use only.\n' +
                'Do a patch test on skin areas before use.\n' +
                'Avoid contact with eyes.\n' +
                'Keep out of reach for children.\n' +
                '\n' +
                'Batch No.:0114\n' +
                'Made in China'
        },
        {
            id: 15,
            title: 'Leave in conditioner spray',
            category: 'Hair Care',
            sku:{
                volume:['200ml']
            },
            number: '0149',
            img: ["images/leaveInConditionerSpray/leave in conditioner spray1.jpg", "images/leaveInConditionerSpray/leave in conditioner spray2.jpg"],
            detail: 'Ingredients: \n' +
                'Water, cyclopentasilxane, Dimethicone, Mineral oil, Glycerin, Polysorbate-20, Dimethiconeol, Phenoxyethanol, Fragrance, Methylparaben.\n' +
                'Other trace ingredient:\n' +
                'Ethylhexylglycerol.\n' +
                '\n' +
                'Cautions：\n' +
                'For external use only.\n' +
                'Please do a patch test on skin areas before use.\n' +
                'Avoid contact with eyes.\n' +
                'Keep our of reach for children.\n' +
                'Directions: \n' +
                'Shake the product well before use, and spray evenly on the hair at a distance of about 10cm from the hair. Dry and style as needed.\n' +
                '\n' +
                'Batch No. 0149\n' +
                'Made in China'
        },
        {
            id: 16,
            title: 'Lace tint spray',
            category: 'Wig Care',
            sku:{
                volume:['100ml / 3.5oz'],
                color: ['dark', 'lights', 'medium', 'lights warm']
            },
            number: '0126',
            img: ["images/laceTintSpray/lace tint spray1 .jpg",
                "images/laceTintSpray/dark.jpg",
                "images/laceTintSpray/dark1.jpg",
                "images/laceTintSpray/lights.jpg",
                "images/laceTintSpray/lights 1.jpg",
                "images/laceTintSpray/lights warm.jpg",
                "images/laceTintSpray/lights warm 1.jpg",
                "images/laceTintSpray/medium.jpg",
                "images/laceTintSpray/medium 1.jpg",
            ],
            detail: 'Ingredients: Aqua(Water), Propylene Glycol, Sodium Hyaluronate, Polyamino Sugar Condensate, Myrothamnus Flabellifola Leaf/Stem Extract, Panthenol, Jojoba oil Peg-8 Esters, Butylene Glycol, Laurocapram, Hexylene Glycol, Phenoxyethanol,CI 77491, CI77499.\n' +
                '\n' +
                'Diretions:\n' +
                '1). Shake your bottle well before use.\n' +
                '2). Spray generously on your clean lace until the desired. Shade is achieved.\n' +
                '3). Use a brush to evenly apply and spread the tint on your lace.\n' +
                '4)Blow dry/air dry for 1-2 minutes until the tint has dried.\n' +
                '\n' +
                'Cautions:\n' +
                'For external use only.\n' +
                'Keep out of reach for children.\n' +
                'Do not test on animals.\n' +
                'If it gets in to the eyes please rinse eye with cool water.\n' +
                '\n'
        },
        {
            id: 17,
            title: 'Double side brushes',
            number: '0375',
            category: 'Accessories',
            img: ["images/doubleSideBrushes/brushes.jpg",
                "images/doubleSideBrushes/brushes1.jpg","images/doubleSideBrushes/brushes2.jpg"],
            detail: 'empty' }
        ,
        {
            id: 18,
            title: 'Hair edge brushes',
            number: '0376',
            category: 'Accessories',
            img: ["images/hairEdgeBrushes/hair edge brushes.jpg",],
            detail: 'empty' }
        ,
        {
            id: 19,
            title: 'Melting band with muff',
            number: '0377',
            category: 'Accessories',
            img: ["images/meltingBandWithMuff/1.jpg","images/meltingBandWithMuff/2.jpg"],
            detail: 'empty'
        },
        {
            id: 20,
            title: 'Lace adhesive pen',
            number: '0138',
            sku:{
                volume:['5ml'],
            },
            category: 'Wig Care',
            img: ['images/laceAdhesivePen/lace adhesive pen1.jpg',"images/laceAdhesivePen/lace adhesive pen2.jpg"],
            detail: 'Ingredients:\n' +
                'Polyacrylate Rubber Copolymer, Filler(Sodium Bicarbonate), Solvent ethanol, Surfactants(Sodium dodecyldiphenyl ether disulfonate.\n' +
                '\n' +
                'Directions:\n' +
                '1).Clean hairline and spray with skin protect.\n' +
                '2).Apply thin clear up to 2-4 layers of glue.\n' +
                '3).Apply your lace and begin the melt down.\n' +
                '4).Allow to cure for 24 hours before getting it wet.\n' +
                '\n' +
                'Cautions:\n' +
                'For external use only.\n' +
                'Please do a patch on skin areas before use.\n' +
                'Avoid contact with eyes.\n' +
                'Keep out of reach for children.\n' +
                '\n' +
                'Batch No. 0138\n' +
                'Made in China\n'
        },

    ],

    // 首页商品
    homeProductList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    // 反馈
    feedbackList: [
    ],
    // 关于，图片地址
    about: {
        img: "images/about us.jpg",
    },
    contact: {
        Address: 'China',
        Phone: '+86 188 8888 8888',
        email: 'Doralcosmetics@163.com'
    }

}