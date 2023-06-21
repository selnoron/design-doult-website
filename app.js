const lef = document.querySelector('.lef')
const rig = document.querySelector('.rig')
const tex = document.querySelector('.tex-tit')
const price = document.querySelector('#price-img')
const imge = document.querySelector('.img-invis')

let index = 0
let img_list = ['diablo.jpg', 'gta.jpg', 'csgo.jpg', 'stalker.jpg']
let text_list = [
    'Купить Diablo IV и Diablo IV Ultimate Edition', 
    'Купить GTA 5 (Grand Theft Auto V)',
    'Купить CS:GO - дешево аккаунты и ключи (кс го)', 
    'S.T.A.L.K.E.R. 2: Предзаказ и Покупка в Steam'
]
let price_list = ['2499₸', '5499₸', '7000₸', '6790₸']


lef.addEventListener('click', () => {
    if (index == 0) {
        index = 0
    }
    else {
        index -= 1
    }
    imge.style.backgroundImage = `url(${img_list[index]})`
    tex.innerHTML = text_list[index]
    price.innerHTML = price_list[index]
})

rig.addEventListener('click', () => {
    if (index == 3) {
        index = 3
    }
    else {
        index += 1
    }
    imge.style.backgroundImage = `url(${img_list[index]})`
    tex.innerHTML = text_list[index]
    price.innerHTML = price_list[index]
})